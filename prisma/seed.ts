import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Database...");

  await prisma.book.deleteMany();
  await prisma.post.deleteMany();

  // Books
  await prisma.book.create({
    data: {
      title: "The Tyranny of the Ordinary",
      description: "Break free from average. Step into your extraordinary. You weren't born to blend in. You were born to shift atmospheres, rewrite generational stories, and live with intention, not inertia.",
      imageUrl: "/assets/book-tyranny.jpg",
      purchaseLink: "https://www.amazon.com/TYRANNY-ORDINARY-Breaking-Mediocrity-Extraordinary-ebook/dp/B0FJPS82BB",
      published: true,
    }
  });
  
  await prisma.book.create({
    data: {
      title: "CONQUERING",
      description: "Overcome what's holding you back. Become who you were born to be. This is not just about winning battles—it's about becoming the kind of person who never bows to fear again.",
      imageUrl: "/assets/book-tyranny.jpg", // The original site reused the image
      purchaseLink: "https://www.amazon.com/TYRANNY-ORDINARY-Breaking-Mediocrity-Extraordinary-ebook/dp/B0FJPS82BB",
      published: true,
    }
  });
  console.log("Seeded Books!");

  // Blogs
  await prisma.post.createMany({
    data: [
      {
        title: "Rise Up Youth",
        content: "Nzuri Uhai Foundation inaugurates Rise Up Youth Summit",
        slug: "https://www.myjoyonline.com/nzuri-uhai-foundation-inaugurates-rise-up-youth-summit/?myjo-1",
        imageUrl: "/assets/blog-rise-up.jpg",
        published: true,
      },
      {
        title: "Project Report: RYSE Up Youth Empowerment Summit",
        content: "At the Nzuri Uhai Foundation, we are pleased to present the overview and key achievements of our recent RYSE Up Summit, where we invested in the next generation of leaders in the Ashanti Region.",
        slug: "https://www.myjoyonline.com/nzuri-uhai-foundation-inaugurates-rise-up-youth-summit/?myjo-2", 
        imageUrl: "/assets/blog-ryse.jpg",
        published: true,
      },
      {
        title: "World Mental Health Day 2025",
        content: "At Nzuri Uhai Foundation, we believe that mental health is not a side conversation.",
        slug: "https://www.myjoyonline.com/nzuri-uhai-foundation-inaugurates-rise-up-youth-summit/?myjo-3", 
        imageUrl: "/assets/blog-mental-health.jpg",
        published: true,
      }
    ]
  });
  console.log("Seeded Blogs!");

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
