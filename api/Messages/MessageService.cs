using Api.Cosmos;
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.Linq;

namespace Api.Messages;

public class MessageService(ICosmosService service) : IMessageService
{
    public async Task<IReadOnlyCollection<MessageDto>> GetAsync()
    {
        using var iterator = service.Messages
           .GetItemLinqQueryable<MessageDto>()
           .ToFeedIterator();

        return (await ReadMessagesAsync(iterator))
           .ToList();
    }

    public async Task<string> AddAsync(MessageDto message)
       => (await service.Messages.CreateItemAsync(message)).Resource.Id;

    public async Task<IReadOnlyCollection<MessageDto>> GetForUserAsync(string userName)
    {
        using var senderIterator = service.Messages
           .GetItemLinqQueryable<MessageDto>()
           .Where(m => m.Sender == userName)
           .ToFeedIterator();

        using var receiverIterator = service.Messages
           .GetItemLinqQueryable<MessageDto>()
           .Where(m => m.Receiver == userName)
           .ToFeedIterator();

        using var publicIterator = service.Messages
           .GetItemLinqQueryable<MessageDto>()
           .Where(m => m.Receiver == null && m.Sender != userName)
           .ToFeedIterator();


        return (await ReadMessagesAsync(senderIterator))
          .Union(await ReadMessagesAsync(receiverIterator))
          .Union(await ReadMessagesAsync(publicIterator))
          .ToList();
    }

    private static async Task<IEnumerable<MessageDto>> ReadMessagesAsync(FeedIterator<MessageDto> iterator) =>
        iterator.HasMoreResults
            ? (await iterator.ReadNextAsync()).AsEnumerable()
            : Enumerable.Empty<MessageDto>();
}