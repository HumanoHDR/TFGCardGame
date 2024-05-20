using Microsoft.AspNetCore.Mvc;
using OneCardGame.Negocio.Interfaces;
using System.Collections.Generic;
using OneCardGame.Negocio.DTOs;

namespace OneCardGame.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardsController : ControllerBase
    {
        private readonly ICardRepository _cardRepository;

        public CardsController(ICardRepository cardRepository)
        {
            _cardRepository = cardRepository;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<CardDto>))]
        public IActionResult GetCards()
        {
            var cards = _cardRepository.GetCards();
            return Ok(cards);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(CardDto))]
        [ProducesResponseType(404)]
        public IActionResult GetCard(string id)
        {
            var card = _cardRepository.GetCard(id);
            if (card == null)
            {
                return NotFound();
            }
            return Ok(card);
        }

        [HttpPost]
        [ProducesResponseType(201, Type = typeof(CardDto))]
        [ProducesResponseType(400)]
        public IActionResult CreateCard([FromBody] CardDto cardDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdCard = _cardRepository.CreateCard(cardDto);
            return CreatedAtAction(nameof(GetCard), new { id = createdCard.Id }, createdCard);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult UpdateCard(string id, [FromBody] CardDto cardDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!_cardRepository.CardExists(id))
            {
                return NotFound();
            }

            _cardRepository.UpdateCard(id, cardDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteCard(string id)
        {
            if (!_cardRepository.CardExists(id))
            {
                return NotFound();
            }

            _cardRepository.DeleteCard(id);
            return NoContent();
        }
    }
}
