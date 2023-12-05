namespace api.Users;

public interface IUserService
{
    Task<IReadOnlyCollection<UserDto>> GetAsync();
    
    Task<string> AddAsync(UserDto user);
    
    Task UpdateAsync(UserDto user);
}