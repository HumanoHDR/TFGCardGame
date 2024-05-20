using Microsoft.EntityFrameworkCore;
using OneCardGame.Data;
using OneCardGame.Negocio.Interfaces;
using OneCardGame.Negocio.Repositorio;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Configurar la cadena de conexión a MySQL
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<DataContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// Registrar repositorios en el contenedor de dependencias
builder.Services.AddScoped<ICardRepository, CardRepository>();
builder.Services.AddScoped<IDeckRepository, DeckRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();

// Añadir servicios de controladores
builder.Services.AddControllers();

// Configurar Swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "OneCardGame API", Version = "v1" });
});

// Configurar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod());
});

var app = builder.Build();

// Configurar la canalización HTTP
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "OneCardGame API v1");
    });
}

// Habilitar CORS
app.UseCors("AllowSpecificOrigin");

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
