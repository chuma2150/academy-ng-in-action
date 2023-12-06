using Newtonsoft.Json;

namespace Api.Messages;

public class MessageDto
{
    [JsonProperty("id")]
    public string Id { get; set; } = Guid.NewGuid().ToString();
    
    [JsonProperty("sender")]
    public string Sender { get; set; } = string.Empty;
    
    [JsonProperty("receiver")]
    public string? Receiver { get; set; }
    
    public string Text { get; set; } = string.Empty;
    public DateTime Date { get; set; } = DateTime.Now;
}