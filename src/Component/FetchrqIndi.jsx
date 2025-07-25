import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getIndiData } from "../API/API";

const FetchrqIndi = () => {
  const { id } = useParams();

  const navigation = useNavigate();

  const get_indival_data = useCallback(async () => {
    const res = await getIndiData(id);

    if (res.status === 200) {
      console.log(res.data);

      return res.data;
    }
  }, [id]);

  const { data, isLoading, error, isPending } = useQuery({
    queryKey: ["posts", id],
    queryFn: get_indival_data,
    placeholderData:keepPreviousData
  });

  if (isLoading && isPending) return <p>loading....</p>;

  return (
    <div className="api_data container">
      <h2>Card Data</h2>
      <div className="card_indi">
        <div className="card">
          <p className="title">{data.title}</p>
          <p className="para">{data.body}</p>
        </div>
        <button
          onClick={() => {
            navigation(-1);
          }}
          className="btn"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default React.memo(FetchrqIndi);
