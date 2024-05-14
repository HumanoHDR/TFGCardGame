using Microsoft.EntityFrameworkCore;
using TFGCardGame.Server.Models;

namespace TFGCardGame.Server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        // Define las propiedades DbSet para cada una de tus entidades
        public DbSet<Card> Card { get; set; }
        public DbSet<Deck> Decks { get; set; }
        public DbSet<Effect> Effects { get; set; }
        public DbSet<Friendship> Friendships { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configurar la relación muchos a muchos entre Deck y Card
            modelBuilder.Entity<Deck>()
                .HasMany(d => d.Cards)
                .WithMany()
                .UsingEntity(j => j.ToTable("DeckCard"));

            // Configurar la relación uno a muchos entre User y Deck
            modelBuilder.Entity<Deck>()
                .HasOne(d => d.User)
                .WithMany(u => u.Decks)
                .HasForeignKey(d => d.UserId);

            // Configurar la propiedad Id como clave primaria en User
            modelBuilder.Entity<User>()
                .HasKey(u => u.Id);

            // Configurar la propiedad Username como única en User
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique();

            // Configurar la propiedad Email como única en User
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            // Configurar la relación muchos a uno entre Game y User
            modelBuilder.Entity<Game>()
                .HasOne(g => g.User)
                .WithMany(u => u.Games)
                .HasForeignKey(g => g.UserId);

            // Configurar la propiedad Id como clave primaria en Game
            modelBuilder.Entity<Game>()
                .HasKey(g => g.Id);

            // Configurar la relación muchos a muchos entre Card y Effect
            modelBuilder.Entity<Card>()
                .HasMany(c => c.Effects)
                .WithMany(e => e.Cards)
                .UsingEntity(j => j.ToTable("CardEffect"));

            // Configurar la propiedad Id como clave primaria en Card
            modelBuilder.Entity<Card>()
                .HasKey(c => c.Id);
        }
    }
}
