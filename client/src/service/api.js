import axios from "axios";

const URL = "http://localhost:8000";

export const getNews = async (page, size = 5) => {
  try {
    const data = await axios.get(`${URL}/news?page=${page}&size=${size}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log("error while calling getNews API");
  }
};
