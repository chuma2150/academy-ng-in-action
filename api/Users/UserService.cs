using api.Cosmos;
using Microsoft.Azure.Cosmos.Linq;

namespace api.Users;

public class UserService(ICosmosService service) : IUserService
{
    public async Task<IReadOnlyCollection<UserDto>> GetAsync()
    {
        using var iterator = service.Users
           .GetItemLinqQueryable<UserDto>()
           .ToFeedIterator();

        return (await iterator.ReadNextAsync()).ToList();
    }

    public async Task AddAsync(UserDto user)
    {
        var userFromCosmos = await GetUserAsync(service, user);

        if (userFromCosmos != null)
        {
            throw new InvalidOperationException($"User with name '{user.Name}' already exists. Id: {user.Id}");
        }
        
        await service.Users.CreateItemAsync(user);
    }

    public async Task UpdateAsync(UserDto user)
    {
        var userFromCosmos = await GetUserAsync(service, user);

        if (userFromCosmos == null)
        {
            throw new InvalidOperationException($"User with name '{user.Name}' does not exist.");
        }
        
        await service.Users.CreateItemAsync(user);
    }

    private static async Task<UserDto?> GetUserAsync(ICosmosService service, UserDto user)
    {
        using var iterator = service.Users
           .GetItemLinqQueryable<UserDto>()
           .Where(u => u.Name == user.Name)
           .ToFeedIterator();

        return iterator.HasMoreResults
            ? (await iterator.ReadNextAsync()).FirstOrDefault()
            : null;
    }
}