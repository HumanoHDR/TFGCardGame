namespace OneCardGame.Data.Modelos
{
    public class Game
    {
        public int Id { get; set; }

        public string result { get; set; }

        public DateTime date { get; set; }

        public int user_id { get; set; }

        public User User { get; set; }

        


        public bool favorite { get; set; }

    }
}
