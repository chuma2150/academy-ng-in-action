using Microsoft.Azure.Cosmos;

namespace api.Cosmos;

public class CosmosService : ICosmosService
{
    public Container Messages { get; }
    public Container Users { get; }

    public CosmosService(ICosmosClientFactory factory)
    {
        var client = factory.Create();

        var database = client.GetDatabase("academyNgInActionDB");
        
        Messages = database.GetContainer("messagesCollection");
        Users = database.GetContainer("usersCollection");
    }
}