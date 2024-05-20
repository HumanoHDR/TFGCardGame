using Microsoft.AspNetCore.Mvc;
using OneCardGame.Negocio.Interfaces;
using System.Collections.Generic;
using OneCardGame.Negocio.DTOs;

namespace OneCardGame.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<UserDto>))]
        [ProducesResponseType(400)]
        public IActionResult GetUsers()
        {
            var userDtos = _userRepository.GetUsersDto();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(userDtos);
        }

        [HttpPost]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        public IActionResult CreateUser([FromBody] CreateUserDto createUserDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (_userRepository.EmailExists(createUserDto.Email))
                return BadRequest("Email already exists.");

            if (_userRepository.UsernameExists(createUserDto.Username))
                return BadRequest("Username already exists.");

            var userDto = _userRepository.CreateUser(createUserDto);

            return CreatedAtAction(nameof(GetUsers), new { id = userDto.Id }, userDto);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult UpdateUser(int id, [FromBody] UpdateUserDto updateUserDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = _userRepository.GetUsersDto().FirstOrDefault(u => u.Id == id);
            if (user == null)
                return NotFound();

            _userRepository.UpdateUser(id, updateUserDto);

            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult DeleteUser(int id)
        {
            var user = _userRepository.GetUsersDto().FirstOrDefault(u => u.Id == id);
            if (user == null)
                return NotFound();

            _userRepository.DeleteUser(id);

            return NoContent();
        }

        [HttpPost("login")]
        [ProducesResponseType(200, Type = typeof(UserDto))]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public IActionResult Login([FromBody] LoginUserDto loginUserDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var userDto = _userRepository.Login(loginUserDto);
            if (userDto == null)
                return NotFound("Invalid username or password.");

            return Ok(userDto);
        }

        [HttpGet("emailexists/{email}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public IActionResult EmailExists(string email)
        {
            var exists = _userRepository.EmailExists(email);
            return Ok(exists);
        }

        [HttpGet("usernameexists/{username}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public IActionResult UsernameExists(string username)
        {
            var exists = _userRepository.UsernameExists(username);
            return Ok(exists);
        }
    }
}
