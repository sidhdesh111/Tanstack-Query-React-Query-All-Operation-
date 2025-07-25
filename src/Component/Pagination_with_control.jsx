import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { get_Pag_Data } from "../API/API";
import Card from "./Card";

const Pagination_with_control = () => {
  const get_data_page = async (pagenumber, item) => {
    const res = await get_Pag_Data(pagenumber, item);
    if (res.status == 200) {
      return res.data;
    }
  };

  const [page, setpage] = useState(1);

  const Max_item = 8;

  const start = (page - 1) * Max_item;

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["post", page],
    queryFn: () => get_data_page(start, Max_item),
    placeholderData:keepPreviousData,
    refetchOnMount:true,
    
  
  });

  if (isLoading) return <p>Loading...</p>;
  //   console.log(data);

  return (
    <div className="api_data container">
      <h2>Card Data</h2>
      <div className="card_area">
        {data.map((ele, index) => {
          return <Card key={index} data={ele} />;
        })}
      </div>
      <div className="pagination_details">
        <button
          type="button"
          onClick={() => {
            if (page > 1) {
              setpage((prev) => prev - 1);
            }
          }}
          className="btn"
        >
          Next
        </button>

        <button type="button" className="btn btn_rounded">
          {page}
        </button>

        <button
          type="button"
          onClick={() => {

            setpage((prev) => prev + 1);
          }}
          className="btn"
        >
          Prev
        </button>
      </div>
    </div>
  );
};

export default Pagination_with_control;
