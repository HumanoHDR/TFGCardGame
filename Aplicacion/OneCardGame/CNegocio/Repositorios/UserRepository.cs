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
                Type = createUserDto.Type,
                Decks = new List<Deck>() // Inicializar la lista de decks
            };

            // Agregar el usuario al contexto
            _context.Users.Add(user);
            _context.SaveChanges();

            // Crear un deck por defecto para el nuevo usuario
            var defaultDeck = new Deck
            {
                Name = "Default Deck",
                user_id = user.Id
            };

            // Agregar el deck por defecto al contexto
            _context.Decks.Add(defaultDeck);
            _context.SaveChanges();

            // Devolver el DTO del usuario creado
            return new UserDto
            {
                Id = user.Id,
                Username = user.Username,
                Email = user.Email,
                Type = user.Type,
                Decks = _deckRepository.GetDeckDtos(user.Decks)
            };
        }

        public void UpdateUser(int id, UpdateUserDto updateUserDto)
        {
            var user = _context.Users.Find(id);
            if (user != null)
            {
                user.Username = updateUserDto.Username;
                user.Password = updateUserDto.Password; // En un entorno real, asegúrate de hashear la contraseña
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
            var user = _context.Users.Find(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                _context.SaveChanges();
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
