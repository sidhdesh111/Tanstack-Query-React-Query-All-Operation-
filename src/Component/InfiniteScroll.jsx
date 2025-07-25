import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { infiniteData } from "../API/API";

const InfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["user"],
    queryFn: infiniteData,
    getNextPageParam: (last, all) => {
      console.log(last, all);
      return last.length == 12 ? all.length + 1 : undefined;
    },
  });

  useEffect(() => {
    const HandleScroll = () => {
      const Height = document.documentElement.scrollHeight;
      const Top = window.scrollY;
      const window_height = window.innerHeight;

      const bottom =
        Height - 134 <= Math.floor(Top + window_height) ? true : false;
      if (bottom && hasNextPage) {
        console.log(`next page Loading start`);
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", HandleScroll);

    return () => window.removeEventListener("scroll", HandleScroll);
  }, [hasNextPage, fetchNextPage]);

  // console.log("data:", data);

  // if (isLoading) return <p>is Loading</p>;

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
      </div>
    </div>
  );
};

export default InfiniteScroll;
