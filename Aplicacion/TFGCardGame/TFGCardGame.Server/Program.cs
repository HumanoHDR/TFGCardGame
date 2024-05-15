using Microsoft.EntityFrameworkCore;
using TFGCardGame.Server.Data;
using TFGCardGame.Server.Innterfaces;
using TFGCardGame.Server.Interfaces;
using TFGCardGame.Server.Repository;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        policyBuilder =>
            policyBuilder.WithOrigins("https://localhost:5173")  // Cambia aquí a HTTPS si es necesario
                         .AllowAnyHeader()
                         .AllowAnyMethod());
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ICardRepository, CardRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseMySQL("server=localhost;user=root;database=tfg;password=");
});

var app = builder.Build();

app.UseCors("AllowSpecificOrigin");
app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); 
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}


app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
