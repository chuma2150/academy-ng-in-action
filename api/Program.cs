using Api.Cosmos;
using Api.Messages;
using Api.Users;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ICosmosClientFactory, CosmosClientFactory>();
builder.Services.AddScoped<ICosmosService, CosmosService>();
builder.Services.AddScoped<IMessageService, MessageService>();
builder.Services.AddScoped<IUserService, UserService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

using (var scope = app.Services.CreateScope())
{
    app.MapGroup("/messages").MapMessagesApi(scope.ServiceProvider.GetRequiredService<IMessageService>());
    app.MapGroup("/users").MapUsersApi(scope.ServiceProvider.GetRequiredService<IUserService>());
}

app.Run();
