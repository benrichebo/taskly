import { useEffect, useState } from "react";
import { GET } from "../functions/GET";
import { POST } from "../functions/POST";
import { PUT } from "../functions/PUT";
import { useStorage } from "./useStorage";

export const useOrder = (type) => {
  const { sessionStorage } = useStorage("session");

  const [orderData, setOrderData] = useState(null);
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  const order = {
    getOrderItem() {
      setLoading(true);

      //get item in session storage
      const data = sessionStorage.getItem("order");
      setOrderData(data);
      setLoading(false);
    },

    async getOrders() {
      try {
        setLoading(true);
        const data = await GET({}, url);
        if (data.msg) {
          setError(data.msg);
        } else {
          sessionStorage.setItem("orders", data);
          setOrders(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async placeOrder(credentials, url) {
      try {
        const placedOrder = sessionStorage.getItem("placed-order");

        const placeOrderAgain = async (count, error) => {
          //when order fails
          //send order again if order has been placed not more than 2 times
          count = sessionStorage.getItem("order-count");
          if (count < 3) {
            //if place order contains payment details
            await this.placeOrder();
          } else {
            setError(error);
            sessionStorage.clearItem("order-count");
          }
        };

        //for order failures
        //keep track of order placing
        let count = 0;
        sessionStorage.setItem("order-count", count++);

        setError("");
        setLoading(true);
        //if Momo pay goes through, then use placed-order
        const data = await POST(placedOrder ? placedOrder : credentials, url);
        if (data.msg.includes("successfully")) {
          setMessage();
          sessionStorage.clearItem("placed-order");
          sessionStorage.clearItem("order-count");
        } else {
          const error = data.msg;
          await placeOrderAgain(count, error);
        }
      } catch (error) {
        const err = error.message;
        await placeOrderAgain(count, err);
      } finally {
        setLoading(false);
      }
    },

    async sendPayStackInfo(credentials, url) {
      try {
        setLoading(true);
        const data = await POST(credentials, url);

        if (data.msg.includes("successfully")) {
          setMessage();
        } else {
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async cancelOrder() {
      try {
        setLoading(true);
        const data = await PUT(body, url);
        if (data.msg.includes("successfully")) {
          setMessage();
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
  };

  useEffect(() => {
    if (type == "order") {
      const data = sessionStorage.getItem("order");
      if (!data) {
        order.getOrderItem();
      } else {
        setOrderData(data);
      }
    }

    if (type == "orders") {
      const data = sessionStorage.getItem("orders");
      if (!data) {
        order.getOrders();
      } else {
        setOrders(data);
      }
    }
  }, []);

  return { order, orders, loading, data: orderData, error, message };
};
