import axios from "axios";

import { Common } from "@/utility";
import store from "@/store";

const BASE_URL = "//";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Authorization": `asdasd`
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    //updateLoader(true);
    console.log("asdasd");
    return config;
  },
  (error) => {
    //Common.showAlertMessage(networkErrorMessage, "error");
    console.error(error);
    return false;
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    //updateLoader(false);
    const responseData = response.data ? response.data : {};
    return responseData;
  },
  (error) => {
    //updateLoader(false);
    //Common.showAlertMessage(networkErrorMessage, "error");
    console.error(error);
    return false;
  }
);

function updateLoader(flag) {
  store.commit("updateLoader", flag);
}
