import Link from "next/link";

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mb-4 pt-6 mt-auto px-8 flex flex-wrap gap-2">
      <span className="text-sky-500">#</span>
      {tags.map((tag) => (
        <Link
          href={"#"}
          key={tag}
          className=" bg-gray-200 hover:bg-gray-300  transition  duration-100 text-gray-900 rounded-xl px-2 py-0.5 text-sm"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
