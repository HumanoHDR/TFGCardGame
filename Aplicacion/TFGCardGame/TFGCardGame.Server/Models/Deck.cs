namespace TFGCardGame.Server.Models
{
    public class Deck
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Card> Cards { get; set; }

        public User User { get; set; }
        public int UserId { get; set; }

    }
}
