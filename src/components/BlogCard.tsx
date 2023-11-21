import FormattedDate from "./FormattedDate.tsx";
type BlogCardProps = {
  post: {
    slug: string;
    data: {
      title: string;
      description: string;
      pubDate: Date;
    };
  };
};

export default function BlogCard({post}: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-8 flex flex-col justify-between h-full">
        <div>
          <h4 className="title text-xl font-semibold mb-2">{post.data.title}</h4>
          <p className="text-base font-light mb-4 text-gray-500">
            <FormattedDate date={post.data.pubDate} />
          </p>
        </div>
        <div className="text-base sm:text-lg text-gray-500 mb-2">{post.data.description}</div>
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
