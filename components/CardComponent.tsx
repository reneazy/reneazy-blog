import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, slug }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden m-4 max-w-sm mx-auto">
      <div className="relative h-48">
        <Image
          src={urlFor(imageUrl).url()}
          alt="Title Image"
          width={500}
          height={500}
          className="object-cover rounded-lg h-[200px]"
        />
      </div>
      <div className="p-4">
        <Link href={`/blog/${slug}`}>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3 text-sm">
          {description}
        </p>
        <Button asChild className="w-full mt-7">
          <Link href={`/blog/${slug}`}>Read More</Link>
        </Button>
      </div>
    </div>
  );
};

export default Card;
