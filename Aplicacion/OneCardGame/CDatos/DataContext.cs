using Microsoft.EntityFrameworkCore;
using OneCardGame.Data.Modelos;

namespace OneCardGame.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        // Define las propiedades DbSet para cada una de tus entidades
        public DbSet<Card> Card { get; set; }
        public DbSet<Deck> Deck { get; set; }
        public DbSet<Friendship> Friendships { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Deck> Decks { get; set; }
        public DbSet<DeckCard> Deckcard { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configurar la relación muchos a muchos entre Deck y Card
            modelBuilder.Entity<DeckCard>()
                .HasKey(dc => dc.Id);

            modelBuilder.Entity<DeckCard>()
                .HasOne(dc => dc.Deck)
                .WithMany(d => d.DeckCards)
                .HasForeignKey(dc => dc.DeckId);

            modelBuilder.Entity<DeckCard>()
                .HasOne(dc => dc.Card)
                .WithMany(c => c.DeckCards)
                .HasForeignKey(dc => dc.CardId);

            modelBuilder.Entity<Deck>()
                .HasOne(d => d.User)
                .WithMany(u => u.Decks)
                .HasForeignKey(d => d.user_id)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Deck>()
                .HasMany(d => d.DeckCards)
                .WithOne(dc => dc.Deck)
                .HasForeignKey(dc => dc.DeckId);

            modelBuilder.Entity<Card>()
                .HasMany(c => c.DeckCards)
                .WithOne(dc => dc.Card)
                .HasForeignKey(dc => dc.CardId);
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
                .HasForeignKey(g => g.user_id)
                .OnDelete(DeleteBehavior.Cascade);

            // Configurar la propiedad Id como clave primaria en Game
            modelBuilder.Entity<Game>()
                .HasKey(g => g.Id);

            // Configurar la propiedad Id como clave primaria en Card
            modelBuilder.Entity<Card>()
                .HasKey(c => c.Id);
        }
    }
}
