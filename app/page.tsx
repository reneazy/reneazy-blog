import Card from "@/components/CardComponent";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";

export const revalidate = 30;

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc){
  title, smallDescription,
    "currentSlug":slug.current,
    titleImage 
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card
          key={idx}
          title={post.title}
          description={post.smallDescription}
          imageUrl={post.titleImage}
          slug={post.currentSlug}
        ></Card>
      ))}
    </div>
  );
}
