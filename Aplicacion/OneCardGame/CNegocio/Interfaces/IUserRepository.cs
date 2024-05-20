using OneCardGame.Data.Modelos;
using OneCardGame.Negocio.DTOs;

namespace OneCardGame.Negocio.Interfaces
{
    public interface IUserRepository
    {
        ICollection<UserDto> GetUsersDto();
        UserDto GetUsersDto(int userId);
        void DeleteUser(int id);
        bool Save();
        UserDto CreateUser(CreateUserDto createUserDto);
        bool EmailExists(string email);
        bool UsernameExists(string username);
        void UpdateUser(int id, UpdateUserDto updateUserDto);
        UserDto Login(LoginUserDto loginUserDto); // Añadir el método de inicio de sesión

    }
}
