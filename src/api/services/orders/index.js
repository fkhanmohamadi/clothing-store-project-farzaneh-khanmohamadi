import { instance } from "../../constants";

export const fetchOrderService = () => instance.get("/orders");
