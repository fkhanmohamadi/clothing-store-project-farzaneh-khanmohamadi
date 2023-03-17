import { instance } from "../../constants";

export const fetchProductService = async () => {
  const res = await instance.get("/products");
  console.log(res.data)
  return res;
};
