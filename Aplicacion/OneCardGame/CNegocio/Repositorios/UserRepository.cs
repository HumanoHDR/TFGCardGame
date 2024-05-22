using Microsoft.EntityFrameworkCore;
using OneCardGame.Data;
using OneCardGame.Data.Modelos;
using OneCardGame.Negocio.DTOs;
using OneCardGame.Negocio.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace OneCardGame.Negocio.Repositorio
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        private readonly IDeckRepository _deckRepository;

        public UserRepository(DataContext context, IDeckRepository deckRepository)
        {
            _context = context;
            _deckRepository = deckRepository;
        }
         
        public ICollection<UserDto> GetUsersDto()
        {
            return _context.Users
                .Select(user => new UserDto
                {
                    Id = user.Id,
                    Username = user.Username,
                    Email = user.Email,
                    Type = user.Type,
                    Decks = _deckRepository.GetDeckDtos(user.Decks)
                })
                .ToList();
        }

        public UserDto CreateUser(CreateUserDto createUserDto)
        {
            var user = new User
            {
                Username = createUserDto.Username,
                Password = createUserDto.Password, // En un entorno real, asegúrate de hashear la contraseña
                Email = createUserDto.Email,
                Type = "user" // Asignar el tipo "user" automáticamente
            };

            // Agregar el usuario al contexto
            _context.Users.Add(user);
            _context.SaveChanges();

            // Crear un deck por defecto copiando el deck con ID 1
            var defaultDeckTemplate = _context.Decks
                .Include(d => d.DeckCards)
                .ThenInclude(dc => dc.Card)
                .FirstOrDefault(d => d.Id == 1);

            if (defaultDeckTemplate != null)
            {
                var defaultDeck = new Deck
                {
                    Name = "Zoro Red Deck",
                    user_id = user.Id,
                    DeckCards = defaultDeckTemplate.DeckCards
                        .Select(dc => new DeckCard
                        {
                            CardId = dc.CardId
                        })
                        .ToList()
                };

                _context.Decks.Add(defaultDeck);
                _context.SaveChanges();
            }
            return new UserDto
            {
                Id = user.Id,
                Username = user.Username,
                Email = user.Email,
                Type = user.Type,
                Decks = _deckRepository.GetDecksByUserId(user.Id)
            };
        }

        public void UpdateUser(int id, UpdateUserDto updateUserDto)
        {
            var user = _context.Users.Find(id);
            if (user != null)
            {
                user.Username = updateUserDto.Username;
                user.Email = updateUserDto.Email;
                user.Type = updateUserDto.Type;

                _context.SaveChanges();
            }
        }

        public bool EmailExists(string email)
        {
            return _context.Users.Any(u => u.Email == email);
        }

        public bool UsernameExists(string username)
        {
            return _context.Users.Any(u => u.Username == username);
        }

        public void DeleteUser(int id)
        {
            using var transaction = _context.Database.BeginTransaction();

            try
            {
                var user = _context.Users.Include(u => u.Decks).FirstOrDefault(u => u.Id == id);
                if (user != null)
                {
                    // Eliminar todas las relaciones de deckcard
                    var deckIds = user.Decks.Select(d => d.Id).ToList();
                    var deckCards = _context.Deckcard.Where(dc => deckIds.Contains(dc.DeckId));
                    _context.Deckcard.RemoveRange(deckCards);

                    // Eliminar todos los decks del usuario
                    _context.Decks.RemoveRange(user.Decks);

                    // Eliminar el usuario
                    _context.Users.Remove(user);

                    // Guardar los cambios
                    _context.SaveChanges();

                    // Confirmar la transacción
                    transaction.Commit();
                }
            }
            catch
            {
                // Revertir la transacción en caso de error
                transaction.Rollback();
                throw;
            }
        }

        public bool Save()
        {
            throw new NotImplementedException();
        }

        public UserDto Login(LoginUserDto loginUserDto)
        {
            var user = _context.Users.FirstOrDefault(u => u.Username == loginUserDto.Username && u.Password == loginUserDto.Password);
            if (user == null)
            {
                return null;
            }

            return new UserDto
            {
                Id = user.Id,
                Username = user.Username,
                Email = user.Email,
                Type = user.Type,
            };
        }

        public UserDto GetUsersDto(int userId)
        {
            throw new NotImplementedException();
        }

        // Otros métodos del repositorio...
    }
}
