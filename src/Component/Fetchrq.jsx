import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { getData, deleteData, updateData } from "../API/API";
import { Link } from "react-router-dom";

const Fetchrq = () => {
  const [update, setupdate] = useState({});

  const queryClient = useQueryClient();

  const get_data = async () => {
    try {
      const res = await getData();
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: get_data,
    gcTime: 1000,
    // staleTime: 500,
    // refetchInterval: 500
  });

  const deletemutation = useMutation({
    mutationFn: (id) => deleteData(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["data"], (data) => {
        return data?.filter((post) => post.id !== id);
      });
    },
  });

  const updatemutation = useMutation({
    mutationFn: (id) => updateData(id),

    onSuccess: (_, id) => {
      queryClient.setQueryData(["data"], (data) => {
        return data?.map((post) => (post.id === id ? update : post));
      });
    },
    onSettled: ()=>{
      setupdate({})
    } ,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  console.log(update);

  return (
    <div className="api_data container">
      <h2>Card Data</h2>

      {Object.keys(update).length > 0 && (
        <div className="form_area">
          <form className="form">
            <textarea
              name="title"
              value={update.title}
              id=""
              onChange={(e) => {
                setupdate((prev) => ({
                  ...prev,
                  title: e.target.value,
                }));
              }}
              className="form-control"
            ></textarea>
            <textarea
              name="body"
              value={update.body}
              onChange={(e) => {
                setupdate((prev) => ({
                  ...prev,
                  body: e.target.value,
                }));
              }}
              id=""
              className="form-control"
            ></textarea>
            <button
              type="button"
              onClick={() => updatemutation.mutate(update.id)}
              className="btn"
            >
              update
            </button>
          </form>
        </div>
      )}

      <div className="card_area"  style={{marginBottom:"22rem"}}>
        {data.map((ele, index) => {
          return (
            <div key={index} className="card" >
              <p className="title">{ele.title}</p>
              <p className="para">{ele.body}</p>
              <div className="btn_area">
                <button
                  onClick={() => deletemutation.mutate(ele.id)}
                  className="btn"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setupdate({
                      id: ele.id,
                      title: ele.title,
                      body: ele.body,
                    });
                  }}
                  className="btn"
                  style={{ background: "Blue", marginLeft: "12px" }}
                >
                  Edit
                </button>
                <button type="button" className="btn view">
                  <Link to={`/fetchrq/${ele.id}`}>View</Link>
                </button>
              </div>
            </div>
          );
        }) ?? <p>No Data is Found</p>}
      </div>
    </div>
  );
};

export default Fetchrq;

// const Obj = {
//   key : "sidhdesh",
//   name: "sidhdesh"
// }

// const func = (val) => {

//    {val}

//    val.key="ssdfdsf";

//    return val
// } ;

// func(Obj)
