import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getAllPosts } from "../../posts/data-api";
import { Post } from "../../posts/types/types";
import dayjs from "dayjs";

const InteractionsChart: React.FC = () => {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await getAllPosts();
        setAllPosts(fetchedPosts || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error when fetching posts:", error);
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);
  const sortedPosts = allPosts.sort((postA, postB) => {
    const dateA = dayjs(postA.timestamp);
    const dateB = dayjs(postB.timestamp);
    return dateA.diff(dateB);
  });

  const data = sortedPosts.map((post) => ({
    timestamp: new Date(post.timestamp).toLocaleDateString(),
    likes: post.likes,
    comments: post.comments,
  }));

  return (
    <div className="hight-container">
      {isLoading ? (
        <div className="text-center mt-5">
          <p>Loading data, please wait...</p>
        </div>
      ) : (
        <>
          <div className="text-center">
            <div className="justify-content-center d-flex border mt-5">
              <LineChart
                width={700}
                height={400}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="timestamp"
                  tickFormatter={(timestamp) => {
                    const date = new Date(timestamp);
                    return `${date.getMonth() + 1}/${date.getFullYear()}`;
                  }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="likes" stroke="#6d3dda" />
                <Line type="monotone" dataKey="comments" stroke="#007bff9d" />
              </LineChart>
            </div>
            <h6 className="mt-3">Users Interactions Statistics</h6>
          </div>
        </>
      )}
    </div>
  );
};

export default InteractionsChart;
