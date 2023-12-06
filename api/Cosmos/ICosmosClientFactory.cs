using Microsoft.Azure.Cosmos;

namespace Api.Cosmos;

public interface ICosmosClientFactory
{
    CosmosClient Create();
}