using Microsoft.EntityFrameworkCore;
using TFGCardGame.Server.Data;
using TFGCardGame.Server.Interfaces;
using TFGCardGame.Server.Models;

namespace TFGCardGame.Server.Repository
{
    public class UserRepository : IUserRepository
    {
        private DataContext _context;

        public UserRepository(DataContext context) 
        {
            _context = context;
        }
        public ICollection<User> GetUsers()
        {
            return _context.Users.OrderBy(x=>x.Id).ToList();
        }
        public bool CreateUser(User user)
        {
            throw new NotImplementedException();
        }

        public bool DeleteUser(User user)
        {
            throw new NotImplementedException();
        }

        public ICollection<Deck> GetDeckByUser(int userId)
        {
            throw new NotImplementedException();
        }

        public User GetOwner(int userId)
        {
            return _context.Users.Where(x => x.Id == userId).FirstOrDefault();
        }

        public ICollection<User> GetUserOfADeck(int deckId)
        {
            throw new NotImplementedException();
        }

        public bool OwnerExists(int userId)
        {
            return _context.Users.Any(x => x.Id == userId);
        }

        public bool Save()
        {
            throw new NotImplementedException();
        }

        public bool UpdateUser(User user)
        {
            throw new NotImplementedException();
        }
    }
}
