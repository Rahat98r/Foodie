import React, { useEffect, useState } from "react";
import axios from "axios";
const fetchApi = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s";
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setDatas(res.data.meals);
    } catch (error) {
      setError("There was error fetching apis:" + error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {datas,loading,error};
};

export default fetchApi;
