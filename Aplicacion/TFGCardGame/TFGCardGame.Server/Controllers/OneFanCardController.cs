using Microsoft.AspNetCore.Mvc;
using TFGCardGame.Server.Data;
using TFGCardGame.Server.Innterfaces;
using TFGCardGame.Server.Models;

namespace TFGCardGame.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OneFanCardController : Controller
    {
        private readonly ICardRepository cardRepository;

        public OneFanCardController(ICardRepository cardRepository)
        {
            this.cardRepository = cardRepository;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Card>))]

        public IActionResult GetCards()
        {
            var cards = cardRepository.GetCards();

            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(cards);
        }
    }
}
