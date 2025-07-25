import React, { useEffect, useState } from "react";
import { deleteData, getData } from "./API/API";

const App = () => {
  const [data, setdata] = useState([]);

  const get_data = async () => {
    try {
      const res = await getData();
      if (res.status == 200) {
        console.log(res.data);
        setdata(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_data();
  }, []);

  const delete_data = async (item) => {
    const id = item.id;
    try {
      const res = await deleteData(id);

      if (res.status == 200) {
        const updated_data = data.filter((ele) => {
          return ele.id !== item.id;
        });
        setdata(updated_data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleClick = (item) => {
    delete_data(item);
  };

  return (
    <div className="api_data container">
      <h2>Card Data</h2>
      <div className="card_area">
        {data.length ?  data.map((ele, index) => {
          return (
            <div key={index} className="card">
              <p className="title">{ele.title}</p>
              <p className="para">{ele.body}</p>
              <div className="btn_area">
                <button onClick={() => HandleClick(ele)} className="btn">
                  Delete
                </button>
              </div>
            </div>
          );
        }) : <div> No Data Found </div>} 
      </div>
    </div>
  );
};

export default App;
