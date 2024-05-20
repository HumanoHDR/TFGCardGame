
using OneCardGame.Data.Modelos;

namespace OneCardGame.Negocio.DTOs
{
    public class FriendshipDto
    {
        public int Id { get; set; }
        public UserDto User1 { get; set; }
        public UserDto User2 { get; set; }
    }
}
