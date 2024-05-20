using OneCardGame.Negocio.DTOs;
using System.Collections.Generic;

namespace OneCardGame.Negocio.DTOs
{
    public class DeckDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int user_id { get; set; }
        public ICollection<CardDto> Cards { get; set; } // Incluir las cartas
    }
}
