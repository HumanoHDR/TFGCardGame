namespace TFGCardGame.Server.Models
{
    public class NewCard
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Rarity { get; set; }
        public int? Cost { get; set; }
        public int? Power { get; set; }
        public string Attribute { get; set; }
        public int? Counter { get; set; }
        public string Color { get; set; }
        public string Arc1 { get; set; }
        public string Arc2 { get; set; }
        public string Arc3 { get; set; }
        public int? Effect1 { get; set; }
        public int? Effect2 { get; set; }
    }

}
