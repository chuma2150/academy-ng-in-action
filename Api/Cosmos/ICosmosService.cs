using Microsoft.Azure.Cosmos;

namespace Api.Cosmos;

public interface ICosmosService
{
    public Container Messages { get; }
    public Container Users { get; }
}