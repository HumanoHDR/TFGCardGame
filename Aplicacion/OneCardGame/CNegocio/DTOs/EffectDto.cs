﻿
namespace OneCardGame.Negocio.DTOs
{
    public class EffectDto
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }

        public int Doncost { get; set; }

        public int Deaddon { get; set; }

        public string EffectCode { get; set; }
        public ICollection<CardDto> Cards { get; set; }
    }
}
