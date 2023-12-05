using Microsoft.Azure.Cosmos;

namespace api.Cosmos;

public interface ICosmosClientFactory
{
    CosmosClient Create();
}