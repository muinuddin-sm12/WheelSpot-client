import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
type TNews = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
};
const News = () => {
  const [newsData, setNewsData] = useState<TNews[] | []>([]);
  const fetchNews = async () => {
    try {
      const res = await axios.get(
        "https://wheel-spot-server.vercel.app/api/v1/news"
      );
      setNewsData(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  // console.log(newsData);
  return (
    <div className="px-6 md:px-12 lg:px-20 pb-16">
      <div className="flex items-center justify-between mb-4 w-full ">
        <h1 className="text-3xl font-medium mb-6">Latest News</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsData.map((news) => (
          <Link
            target="_blank"
            to={news.url}
            className="relative h-[330px] w-full"
          >
            <img
              className="h-full w-full object-cover bg-center"
              src={news.urlToImage}
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4 ">
              <p className=" text-white leading-5 text-lg font-semibold mb-1">
                {news.title}
              </p>
              <span className="text-white text-sm">
                Published at:{" "}
                {new Date(news.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;
