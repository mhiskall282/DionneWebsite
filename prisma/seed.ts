import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Check if we already have books to prevent duplicating
  const count = await prisma.book.count();
  if (count > 0) {
    console.log("Database already seeded");
    return;
  }

  // Seed "The Tyranny of the Ordinary"
  await prisma.book.create({
    data: {
      title: "The Tyranny of the Ordinary",
      description: "Break free from average. Step into your extraordinary. You weren't born to blend in. You were born to shift atmospheres, rewrite generational stories, and live with intention, not inertia.",
      imageUrl: "/assets/book-tyranny.jpg", // We use the Vite served asset path since it's hardcoded for now, or just the URL. Wait, the frontend uses imported assets.
      purchaseLink: "https://www.amazon.com/TYRANNY-ORDINARY-Breaking-Mediocrity-Extraordinary-ebook/dp/B0FJPS82BB",
      published: true,
    }
  });

  console.log("Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
