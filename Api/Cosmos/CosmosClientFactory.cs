using Azure.Identity;
using Microsoft.Azure.Cosmos;

namespace Api.Cosmos;

public class CosmosClientFactory : ICosmosClientFactory
{
    public CosmosClient Create() => new(
        "https://academynginaction.documents.azure.com",
        "OwS7XILmZR7XTqOZpi0mASBLhLOBEWCxWcECId85P3hG3apUIeKgQKAIaKknwROb1F562KcipRwYACDbVkdLbA==");
}