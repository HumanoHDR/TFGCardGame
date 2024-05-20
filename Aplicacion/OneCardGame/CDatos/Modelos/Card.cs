using System.Collections.Generic;

namespace OneCardGame.Data.Modelos
{
    public class Card
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Rarity { get; set; }
        public int Cost { get; set; }
        public int Power { get; set; }
        public string Color { get; set; }
        public string Attribute { get; set; }
        public ICollection<DeckCard> DeckCards { get; set; } // Relación con la tabla intermedia
    }
}
