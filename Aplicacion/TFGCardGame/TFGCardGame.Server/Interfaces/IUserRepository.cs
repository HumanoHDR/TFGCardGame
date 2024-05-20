using Mysqlx.Crud;
using TFGCardGame.Server.Models;

namespace TFGCardGame.Server.Interfaces
{
    public interface IUserRepository
    {
        ICollection<User> GetUsers();
        User GetOwner(int userId);
        ICollection<User> GetUserOfADeck(int deckId);
        ICollection<Deck> GetDeckByUser(int userId);
        bool OwnerExists(int userId);
        bool CreateUser(User user);
        bool UpdateUser(User user);
        bool DeleteUser(User user);
        bool Save();
        bool LoginUser(string username, string passwd);
    }
}
