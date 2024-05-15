using Microsoft.AspNetCore.Mvc;
using TFGCardGame.Server.Data;
using TFGCardGame.Server.Innterfaces;
using TFGCardGame.Server.Interfaces;
using TFGCardGame.Server.Models;
using TFGCardGame.Server.Repository;

namespace TFGCardGame.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserRepository userRepository;

        public UserController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<User>))]

        public IActionResult GetUser()
        {
            var users = userRepository.GetUsers();
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            return Ok(users);
        }

    }
}
