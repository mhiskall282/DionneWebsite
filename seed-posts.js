import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding existing posts to production database...");

  const posts = [
    {
      title: "Rise Up Youth",
      slug: "rise-up-youth",
      content: "Nzuri Uhai Foundation inaugurates Rise Up Youth Summit. Stay tuned for more details and photos from the event.",
      published: true,
      imageUrl: "https://images.unsplash.com/photo-1543269664-56d59c1b41f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Project Report: RYSE Up Youth Empowerment Summit (Ashanti Region)",
      slug: "project-report-ryse-up",
      content: "At the Nzuri Uhai Foundation, we are pleased to present the overview and key achievements of our recent RYSE Up Summit, where we invested in the next generation of leaders in the Ashanti Region. I have learnt to face my fears.. it's part of the growth.",
      published: true,
      imageUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "World Mental Health Day 2025",
      slug: "world-mental-health-day-2025",
      content: "At Nzuri Uhai Foundation, we believe that mental health is not a side conversation. A healthy mind is just as important as a healthy body. This World Mental Health Day, let's break the silence, support one another, and choose self-care every day.",
      published: true,
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  for (const post of posts) {
    const exists = await prisma.post.findUnique({
      where: { slug: post.slug }
    });
    if (!exists) {
      await prisma.post.create({ data: post });
      console.log(`Inserted post: ${post.title}`);
    } else {
      console.log(`Post already exists: ${post.title}`);
    }
  }

  console.log("Seeding complete!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
