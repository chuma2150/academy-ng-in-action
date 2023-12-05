using api.Users;

namespace api.Messages;

public interface IMessageService
{
    Task<IReadOnlyCollection<MessageDto>> GetAsync();

    Task AddAsync(MessageDto message);
    

    Task<IReadOnlyCollection<MessageDto>> GetForUserAsync(string userName);
}