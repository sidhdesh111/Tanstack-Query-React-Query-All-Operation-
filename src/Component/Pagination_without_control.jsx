import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../API/API";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";

const Pagination_without_control = () => {
  const [page, setpage] = useState(1);

  const Max_item_size = 8;

  const get_data_fun = async () => {
    const res = await getAllData();
    if (res.status === 200) {
      return res.data;
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: get_data_fun,
  });

  if (isLoading) return <p>Loading....</p>;

  const current_item = (page - 1) * Max_item_size;
  const end_data = current_item + Max_item_size;

  const show_data = data.slice(current_item, end_data);

  //   const dataaa = [Array(data.length/Max_item_size)]
  const data_len = data.length;
  const Pagging = Math.round(data_len / Max_item_size);

  return (
    <div className="api_data container">
      <h2>Card Data</h2>
      <div className="card_area">
        {show_data.map((ele, index) => {
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

        {Array(Pagging)
          .fill(null)
          .map((_, index) => {
            return (
              <button
                style={page === index + 1 ? { background: "red" } : {}}
                key={index}
                onClick={() => {
                  setpage(index + 1);
                }}
                type="button"
                className="btn btn_rounded"
              >
                {index + 1}
              </button>
            );
          })}

        <button
          type="button"
          onClick={() => {
            if (page < Pagging) {
              setpage((prev) => prev + 1);
            }
          }}
          className="btn"
        >
          Prev
        </button>
      </div>
    </div>
  );
};

export default Pagination_without_control;
