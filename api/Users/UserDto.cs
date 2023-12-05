using Newtonsoft.Json;

namespace api.Users;

public class UserDto
{
    [JsonProperty("id")]
    public string Id { get; set; } = Guid.NewGuid().ToString();
    
    [JsonProperty("name")]
    public string Name { get; set; } = string.Empty;
    
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public DateTime? BirthDate { get; set; }
    public string? HairColor { get; set; } = string.Empty;
}