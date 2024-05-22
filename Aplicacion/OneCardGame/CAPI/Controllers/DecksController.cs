using Microsoft.AspNetCore.Mvc;
using OneCardGame.Negocio.Interfaces;
using System.Collections.Generic;
using OneCardGame.Negocio.DTOs;

namespace TFGCardGame.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DecksController : ControllerBase
    {
        private readonly IDeckRepository _deckRepository;

        public DecksController(IDeckRepository deckRepository)
        {
            _deckRepository = deckRepository;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<DeckDto>))]
        public IActionResult GetDecks()
        {
            var decks = _deckRepository.GetDecks();
            return Ok(decks);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(200, Type = typeof(DeckDto))]
        [ProducesResponseType(404)]
        public IActionResult GetDeck(int id)
        {
            var deck = _deckRepository.GetDeck(id);
            if (deck == null)
            {
                return NotFound();
            }
            return Ok(deck);
        }
        [HttpGet("user/{userId}")]
        [ProducesResponseType(200, Type = typeof(IEnumerable<DeckDto>))]
        [ProducesResponseType(404)]
        public IActionResult GetDecksByUserId(int userId)
        {
            var decks = _deckRepository.GetDecksByUserId(userId);
            if (decks == null || !decks.Any())
            {
                return NotFound();
            }
            return Ok(decks);
        }
        [HttpPost]
        [ProducesResponseType(201, Type = typeof(DeckDto))]
        [ProducesResponseType(400)]
        public IActionResult CreateDeck([FromBody] DeckDto deckDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdDeck = _deckRepository.CreateDeck(deckDto);
            return CreatedAtAction(nameof(GetDeck), new { id = createdDeck.Id }, createdDeck);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult UpdateDeck(int id, [FromBody] DeckDto deckDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!_deckRepository.DeckExists(id))
            {
                return NotFound();
            }

            _deckRepository.UpdateDeck(id, deckDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteDeck(int id)
        {
            if (!_deckRepository.DeckExists(id))
            {
                return NotFound();
            }

            _deckRepository.DeleteDeck(id);
            return NoContent();
        }
    }
}
