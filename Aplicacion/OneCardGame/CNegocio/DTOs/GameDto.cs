﻿
namespace OneCardGame.Negocio.DTOs
{
    public class GameDto
    {
        public int Id { get; set; }

        public string result { get; set; }

        public DateTime date { get; set; }

        public int UserId { get; set; }

        public UserDto User { get; set; }

        public bool favorite { get; set; }
    }
}