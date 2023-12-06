using Azure.Identity;
using Microsoft.Azure.Cosmos;

namespace Api.Cosmos;

public class CosmosClientFactory : ICosmosClientFactory
{
    public CosmosClient Create() => new(
        Environment.GetEnvironmentVariable("COSMOS_ENDPOINT"),
        Environment.GetEnvironmentVariable("COSMOS_KEY"));
}