import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { infiniteData } from "../API/API";

const Intersection_Observer = () => {
  const { ref, inView } = useInView({
    threshold:1
  });

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["user"],
    queryFn: infiniteData,
    getNextPageParam: (last, allPage) => {
      return last.length === 10 ? allPage.length + 1 : undefined;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage,inView, fetchNextPage]);
   
  return (
    <div style={{ marginBottom: "422px" }} className="api_data container">
      <h2>Card Data</h2>
      <div className="card_area">
        {data?.pages?.length ? (
          data.pages.map((page) => {
            {
              return page.map((user, index) => {
                return (
                  <div key={index} className="card">
                    <img
                      src={user.avatar_url}
                      style={{ height: "70px" }}
                      alt=""
                    />
                    <p className="title">{user.login}</p>
                    <p className="para">{user.type}</p>
                    <div className="btn_area"></div>
                  </div>
                );
              });
            }
          })
        ) : (
          <div> No Data Found </div>
        )}
        <div ref={ref}>{isFetchingNextPage && <h2>Loading More Data ....</h2>}</div>;
      </div>
      
    </div>
  );
};

export default Intersection_Observer;
