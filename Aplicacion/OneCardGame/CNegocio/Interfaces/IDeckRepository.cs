using OneCardGame.Data.Modelos;
using OneCardGame.Negocio.DTOs;


namespace OneCardGame.Negocio.Interfaces
{
    public interface IDeckRepository
    {
        ICollection<DeckDto> GetDeckDtos(IEnumerable<Deck> decks);
        ICollection<DeckDto> GetDecks();
        DeckDto GetDeck(int id);
        DeckDto CreateDeck(DeckDto deckDto);
        void UpdateDeck(int id, DeckDto deckDto);
        void DeleteDeck(int id);
        bool DeckExists(int id);
    }
}
