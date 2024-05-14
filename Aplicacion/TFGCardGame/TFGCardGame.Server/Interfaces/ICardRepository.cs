using TFGCardGame.Server.Models;
namespace TFGCardGame.Server.Innterfaces
{
    public interface ICardRepository
    {
        ICollection<Card> GetCards();
    }
}
