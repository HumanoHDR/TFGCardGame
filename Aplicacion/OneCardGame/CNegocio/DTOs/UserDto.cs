
namespace OneCardGame.Negocio.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Type { get; set; }

        public ICollection<DeckDto> Decks { get; set; }
        public ICollection<GameDto> Games { get; set; }
    }
}
