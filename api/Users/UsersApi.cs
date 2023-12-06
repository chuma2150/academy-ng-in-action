namespace Api.Users;

public static class UsersApi
{
    public static void MapUsersApi(this RouteGroupBuilder group, IUserService service)
    {
        group.MapGet("/", service.GetAsync);
        group.MapPost("/", service.AddAsync);
        group.MapPut("/", service.UpdateAsync);
    }
}