using Microsoft.Azure.Cosmos;

namespace api.Cosmos;

public interface ICosmosService
{
    public Container Messages { get; }
    public Container Users { get; }
}