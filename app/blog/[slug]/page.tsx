export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <main>
      <h1>{slug}</h1>
    </main>
  )
}
