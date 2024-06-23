import axios from "axios";
import { useEffect, useState } from "react";

export const GetData:any = (path:any) => {
    const access_token = localStorage.getItem("access_token");
    const [data, setData] = useState();
    useEffect(() => {
        axios.post(path, {
            access_token: access_token
          })
          .then((response) => {
            if (!response.data.error) {
              setData(response.data);
            } else {
              setData(undefined);
            }
          })
          .catch((error) => {
              setData(undefined);
          });
    }, []);
    return data;
}