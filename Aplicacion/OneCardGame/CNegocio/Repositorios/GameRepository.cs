using CNegocio.Interfaces;
using OneCardGame.Data;
using OneCardGame.Negocio.DTOs;

namespace CNegocio.Repositorios
{
    internal class GameRepository : IGameRepository
    {
        private readonly IGameRepository _gameRepository;
        private readonly DataContext dataContext;

        public GameRepository(DataContext dataContext, GameRepository gameRepository) 
        {
            
        }
        public bool CreateGameDto(GameDto gameDto)
        {
            throw new NotImplementedException();
        }

        public bool DeleteGameDto(int GameId)
        {
            throw new NotImplementedException();
        }

        public GameDto GetGame(int GameId)
        {
            throw new NotImplementedException();
        }

        public ICollection<GameDto> GetGameByUser(int userId)
        {
            throw new NotImplementedException();
        }

        public ICollection<GameDto> GetGamesDto()
        {
            throw new NotImplementedException();
        }

        public bool Save()
        {
            throw new NotImplementedException();
        }

        public bool UpdateGameDto(GameDto gameDto)
        {
            throw new NotImplementedException();
        }
    }
}
