import { simpleBlogCard } from "./lib/interface";
import { client } from "./lib/sanity";

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc){
  title, smallDescription,
    "currentSlug":slug.current 
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
      {/* {data.map((post)=>(
      
    ))} */}
    </div>
  );
}
