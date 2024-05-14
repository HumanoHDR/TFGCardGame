using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using TFGCardGame.Server.Models;

namespace TFGCardGame.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CardsController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public CardsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public IActionResult GetCards()
        {
            var cards = new List<NewCard>();
            using (var connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                try
                {
                    connection.Open();
                    var command = new MySqlCommand("SELECT * FROM card", connection);
                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            cards.Add(new NewCard
                            {
                                Id = reader["id"].ToString(),
                                Name = reader["name"].ToString(),
                                // asignar todos los campos
                            });
                        }
                    }
                    return Ok(cards);
                }
                catch (Exception ex)
                {
                    return StatusCode(500, "Internal server error: " + ex.Message);
                }
            }
        }
    }

}
