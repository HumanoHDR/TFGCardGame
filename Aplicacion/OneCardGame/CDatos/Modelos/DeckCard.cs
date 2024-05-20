namespace OneCardGame.Data.Modelos
{
    public class DeckCard
    {
        public int Id { get; set; }
        public int DeckId { get; set; }
        public Deck Deck { get; set; }
        public string CardId { get; set; }
        public Card Card { get; set; }
    }
}
