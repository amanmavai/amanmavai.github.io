import FormattedDate from "./FormattedDate.tsx";

export default function BlogCard({post}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-8 flex flex-col justify-between h-full">
        <div>
          <h4 className="title text-xl font-semibold mb-2">{post.data.title}</h4>
          <p className="text-base font-light mb-4 text-gray-500">
            <FormattedDate date={post.data.pubDate} />
          </p>
        </div>
        <a
          href={`/blog/${post.slug}/`}
          className="text-blue-500 hover:text-blue-700 transition-colors duration-200 mt-4 self-start"
        >
          Read More 👉
        </a>
      </div>
    </div>
  );
}
