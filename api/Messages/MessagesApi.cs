namespace Api.Messages;

public static class MessagesApi
{
    public static void MapMessagesApi(this RouteGroupBuilder group, IMessageService service)
    {
        group.MapGet("/", service.GetAsync);
        group.MapPost("/", service.AddAsync);
        
        group.MapGet("/user/{userName}", service.GetForUserAsync);
    }
}