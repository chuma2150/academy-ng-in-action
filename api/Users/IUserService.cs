namespace api.Users;

public interface IUserService
{
    Task<IReadOnlyCollection<UserDto>> GetAsync();
    
    Task AddAsync(UserDto user);
    
    Task UpdateAsync(UserDto user);
}