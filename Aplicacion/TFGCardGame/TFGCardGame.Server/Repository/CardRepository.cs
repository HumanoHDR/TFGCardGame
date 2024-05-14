using TFGCardGame.Server.Data;
using TFGCardGame.Server.Innterfaces;
using TFGCardGame.Server.Models;

namespace TFGCardGame.Server.Repository
{
    public class CardRepository : ICardRepository
    {
        private readonly DataContext _context;

        public CardRepository(DataContext context)
        {
            _context = context;
        }

        public ICollection<Card> GetCards()
        {
            return _context.Card.OrderBy(x => x.Id).ToList();
        }
    }
}
