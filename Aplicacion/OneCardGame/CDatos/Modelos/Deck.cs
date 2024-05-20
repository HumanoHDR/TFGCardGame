using System.Collections.Generic;

namespace OneCardGame.Data.Modelos
{
    public class Deck
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int user_id { get; set; }
        public User User { get; set; }
        public ICollection<DeckCard> DeckCards { get; set; } // Relación con la tabla intermedia
    }
}
