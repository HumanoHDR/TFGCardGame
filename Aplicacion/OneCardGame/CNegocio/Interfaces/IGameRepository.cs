using OneCardGame.Negocio.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNegocio.Interfaces
{
    internal interface IGameRepository
    {
        ICollection<GameDto> GetGamesDto();
        GameDto GetGame (int GameId);
        ICollection<GameDto> GetGameByUser(int userId);

        bool CreateGameDto(GameDto gameDto);
        bool UpdateGameDto(GameDto gameDto);
        bool DeleteGameDto(int GameId);
        bool Save();
    }
}
