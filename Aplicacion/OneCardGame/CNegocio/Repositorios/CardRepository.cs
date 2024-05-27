using OneCardGame.Data;
using OneCardGame.Data.Modelos;
using OneCardGame.Negocio.DTOs;
using OneCardGame.Negocio.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace OneCardGame.Negocio.Repositorio
{
    public class CardRepository : ICardRepository
    {
        private readonly DataContext _context;

        public CardRepository(DataContext context)
        {
            _context = context;
        }

        public ICollection<CardDto> GetCards()
        {
            return _context.Card.Select(card => new CardDto
            {
                Id = card.Id,
                Name = card.Name,
                Type = card.Type,
                Rarity = card.Rarity,
                Cost = card.Cost,
                Power = card.Power,
                Color = card.Color,
                Attribute = card.Attribute
            }).ToList();
        }

        public CardDto GetCard(string id)
        {
            var card = _context.Card.Find(id);
            if (card == null)
            {
                return null;
            }

            return new CardDto
            {
                Id = card.Id,
                Name = card.Name,
                Type = card.Type,
                Rarity = card.Rarity,
                Cost = card.Cost,
                Power = card.Power,
                Color = card.Color,
                Attribute = card.Attribute
            };
        }

        public CardDto CreateCard(CardDto cardDto)
        {
            var card = new Card
            {
                Id = cardDto.Id,
                Name = cardDto.Name,
                Type = cardDto.Type,
                Rarity = cardDto.Rarity,
                Cost = cardDto.Cost,
                Power = cardDto.Power,
                Color = cardDto.Color,
                Attribute = cardDto.Attribute
            };

            _context.Card.Add(card);
            _context.SaveChanges();

            cardDto.Id = card.Id;
            return cardDto;
        }

        public void UpdateCard(string id, CardDto cardDto)
        {
            var card = _context.Card.Find(id);
            if (card != null)
            {
                card.Name = cardDto.Name;
                card.Type = cardDto.Type;
                card.Rarity = cardDto.Rarity;
                card.Cost = cardDto.Cost;
                card.Power = cardDto.Power;
                card.Color = cardDto.Color;
                card.Attribute = cardDto.Attribute;

                _context.SaveChanges();
            }
        }

        public void DeleteCard(string id)
        {
            var card = _context.Card.Find(id);
            if (card != null)
            {
                _context.Card.Remove(card);
                _context.SaveChanges();
            }
        }

        public bool CardExists(string id)
        {
            return _context.Card.Any(card => card.Id == id);
        }
    }
}
