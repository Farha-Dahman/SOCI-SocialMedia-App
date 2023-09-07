import React, { useEffect, useState } from "react";
import PieChart from "react-apexcharts";
import { getAllPosts } from "../../posts/data-api";
import { Post } from "../../posts/types/types";

const VerificationChart: React.FC = () => {
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

  const verifiedPercentage =
    (allPosts.filter((post) => post.is_verified).length / allPosts.length) *
    100;
  const notVerifiedPercentage = 100 - verifiedPercentage;
  const chartData = {
    series: [verifiedPercentage, notVerifiedPercentage],
    options: {
      labels: ["Verified Users", "Not Verified Users"],
      colors: ["#6d3dda", "#b8abd4"],
    },
  };

  return (
    <div className="hight-container">
      {isLoading ? (
        <div className="text-center mt-5">
          <p>Loading data, please wait...</p>
        </div>
      ) : (
        <>
          <div className="text-center">
            <div className="border mt-5">
              <PieChart
                options={chartData.options}
                series={chartData.series}
                type="pie"
                width="100%"
                height={"400px"}
              />
            </div>
            <h6 className="mt-3">Verified Users Statistics</h6>
          </div>
          <div className="mt-5">
            <h5 className="mb-4">The Result:</h5>
            <div className="d-flex mb-2">
              <h6 className="me-2">
                The percentage of verified users is:{" "}
                {`${verifiedPercentage.toFixed(2)}`} %
              </h6>
            </div>
            <div className="d-flex mb-2">
              <h6 className="me-2">
                The percentage of not verified users is:{" "}
                {`${notVerifiedPercentage.toFixed(2)}`} %
              </h6>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VerificationChart;
