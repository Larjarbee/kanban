export default async function getAllBoards() {
  const res = await fetch('http://localhost:3000/api/boards', {
    next: { revalidate: 1000 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
