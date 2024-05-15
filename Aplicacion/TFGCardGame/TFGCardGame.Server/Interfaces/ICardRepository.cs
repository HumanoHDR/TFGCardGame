using TFGCardGame.Server.Models;
namespace TFGCardGame.Server.Innterfaces
{
    public interface ICardRepository
    {
        ICollection<Card> GetCards();

        Card GetCard(string id);

        decimal GetCardRating(string cardId);

        bool CardExists(string cardId);
    }
}
