// Script to fix blog post images and remove duplicates
// Run with: node fix-blogs.mjs

const BASE = 'http://localhost:8080/api';

async function run() {
  // 1. Get admin token
  console.log('Logging in...');
  const loginRes = await fetch(`${BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'hello@dionnetweneboah.com', password: 'Millionaireby35$' })
  });
  const loginData = await loginRes.json();
  const token = loginData.token;
  if (!token) {
    console.error('Login failed:', loginData);
    process.exit(1);
  }
  console.log('Logged in OK, token:', token.slice(0, 20) + '...');

  // 2. Get all posts
  const postsRes = await fetch(`${BASE}/blogs?all=true`);
  const posts = await postsRes.json();
  console.log('\nAll posts:');
  posts.forEach(p => console.log(`  [${p.id}] "${p.title}" slug="${p.slug}" img="${p.imageUrl}"`));

  // 3. Delete old duplicate posts (those with external slugs / broken images)
  const toDelete = posts.filter(p => p.slug.startsWith('http') || p.imageUrl?.startsWith('/assets/'));
  console.log(`\nDeleting ${toDelete.length} old/duplicate posts...`);
  for (const post of toDelete) {
    const r = await fetch(`${BASE}/blogs/${post.id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(`  Deleted [${post.id}] "${post.title}": ${r.status}`);
  }

  // 4. Update remaining posts to use local assets
  const remaining = posts.filter(p => !p.slug.startsWith('http') && !p.imageUrl?.startsWith('/assets/'));
  
  const imageMap = {
    'rise-up-youth': '/assets/blog-rise-up.jpg',
    'project-report-ryse-up': '/assets/blog-ryse.jpg',
    'world-mental-health-day-2025': '/assets/blog-mental-health.jpg',
  };

  console.log(`\nUpdating ${remaining.length} posts with correct local images...`);
  for (const post of remaining) {
    const correctImage = imageMap[post.slug];
    if (correctImage && post.imageUrl !== correctImage) {
      const r = await fetch(`${BASE}/blogs/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...post, imageUrl: correctImage })
      });
      const updated = await r.json();
      console.log(`  Updated "${post.title}" image to ${correctImage}: ${r.status}`);
    } else {
      console.log(`  Skipped "${post.title}" (image already correct or unknown slug)`);
    }
  }

  // 5. Verify final state
  const finalRes = await fetch(`${BASE}/blogs`);
  const finalPosts = await finalRes.json();
  console.log(`\nFinal published posts (${finalPosts.length}):`);
  finalPosts.forEach(p => console.log(`  "${p.title}" | slug="${p.slug}" | img="${p.imageUrl}"`));
  console.log('\nDone!');
}

run().catch(console.error);
