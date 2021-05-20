import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.0.163:9000/api/",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const responce = await get(url, params, axiosConfig);

  if (responce.ok) {
    cache.store(url, responce.data);
    return responce;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : responce;
};

export default apiClient;
