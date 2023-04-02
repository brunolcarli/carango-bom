import axios from "axios";
import type { Indicator } from "@/model/dashboard";

export default function getIndicators(): Promise<Indicator[]> {
  return axios.get("http://localhost:3000/api/dashboard").then((resp) => {
    return resp.data.dados;
  });
}
