using System.Collections.Generic;
using OneCardGame.Negocio.DTOs;

namespace OneCardGame.Negocio.Interfaces
{
    public interface ICardRepository
    {
        ICollection<CardDto> GetCards();
        CardDto GetCard(string id);
        CardDto CreateCard(CardDto cardDto);
        void UpdateCard(string id, CardDto cardDto);
        void DeleteCard(string id);
        bool CardExists(string id);
    }
}
