using OneCardGame.Data;
using OneCardGame.Data.Modelos;
using OneCardGame.Negocio.Interfaces;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using OneCardGame.Negocio.DTOs;

namespace OneCardGame.Negocio.Repositorio
{
    public class DeckRepository : IDeckRepository
    {
        private readonly DataContext _context;

        public DeckRepository(DataContext context)
        {
            _context = context;
        }

        public ICollection<DeckDto> GetDecks()
        {
             return _context.Decks
                .Include(d => d.DeckCards)
                .ThenInclude(dc => dc.Card)
                .Select(deck => new DeckDto
                {
                    Id = deck.Id,
                    Name = deck.Name,
                    user_id = deck.user_id,
                    Cards = deck.DeckCards.Select(dc => new CardDto
                    {
                        Id = dc.Card.Id,
                        Name = dc.Card.Name,
                        Type = dc.Card.Type,
                        Rarity = dc.Card.Rarity,
                        Cost = dc.Card.Cost,
                        Power = dc.Card.Power,
                        Color = dc.Card.Color,
                        Attribute = dc.Card.Attribute
                    }).ToList()
                }).ToList();
        }

        public DeckDto GetDeck(int id)
        {
            var deck = _context.Decks
                .Include(d => d.DeckCards)
                .ThenInclude(dc => dc.Card)
                .FirstOrDefault(d => d.Id == id);

            if (deck == null)
            {
                return null;
            }

            return new DeckDto
            {
                Id = deck.Id,
                Name = deck.Name,
                user_id = deck.user_id, // Asegúrate de usar el nombre correcto
                Cards = deck.DeckCards.Select(dc => new CardDto
                {
                    Id = dc.Card.Id,
                    Name = dc.Card.Name,
                    Type = dc.Card.Type,
                    Rarity = dc.Card.Rarity,
                    Cost = dc.Card.Cost,
                    Power = dc.Card.Power,
                    Color = dc.Card.Color,
                    Attribute = dc.Card.Attribute
                }).ToList()
            };
        }

        public ICollection<DeckDto> GetDecksByUserId(int userId)
        {
            return _context.Decks
                .Where(d => d.user_id == userId) // Filtrar por userId
                .Include(d => d.DeckCards)
                .ThenInclude(dc => dc.Card)
                .Select(deck => new DeckDto
                {
                    Id = deck.Id,
                    Name = deck.Name,
                    user_id = deck.user_id,
                    Cards = deck.DeckCards.Select(dc => new CardDto
                    {
                        Id = dc.Card.Id,
                        Name = dc.Card.Name,
                        Type = dc.Card.Type,
                        Rarity = dc.Card.Rarity,
                        Cost = dc.Card.Cost,
                        Power = dc.Card.Power,
                        Color = dc.Card.Color,
                        Attribute = dc.Card.Attribute
                    }).ToList()
                }).ToList();
        }

        public DeckDto CreateDeck(DeckDto deckDto)
        {
            var deck = new Deck
            {
                Name = deckDto.Name,
                user_id = deckDto.user_id
            };

            _context.Decks.Add(deck);
            _context.SaveChanges();

            deckDto.Id = deck.Id;
            return deckDto;
        }

        public void UpdateDeck(int id, DeckDto deckDto)
        {
            var deck = _context.Decks.Find(id);
            if (deck != null)
            {
                deck.Name = deckDto.Name;
                deck.user_id = deckDto.user_id;

                _context.SaveChanges();
            }
        }

        public void DeleteDeck(int id)
        {
            var deck = _context.Decks.Find(id);
            if (deck != null)
            {
                _context.Decks.Remove(deck);
                _context.SaveChanges();
            }
        }

        public bool DeckExists(int id)
        {
            return _context.Decks.Any(deck => deck.Id == id);
        }

        public ICollection<DeckDto> GetDeckDtos(IEnumerable<Deck> decks)
        {
            return decks.Select(deck => new DeckDto
            {
                Id = deck.Id,
                Name = deck.Name,
            }).ToList();
        }
    }
}
