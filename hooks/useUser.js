import { useEffect, useState } from "react";
import { GET } from "../functions/GET";
import { LOGIN } from "../functions/LOGIN";
import { PUT } from "../functions/PUT";
import { REGISTER } from "../functions/REGISTER";
import { useStorage } from "./useStorage";

export const useUser = (type) => {
  const { sessionStorage } = useStorage();

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  let user = {
    async getCurrentUser(url) {
      setLoading(true);
      const data = await GET(url);
      if (data.msg) {
        setError(data.msg);
      } else {
        sessionStorage.setItem("user", data);
        setUserData(data);
        setMessage("success");
      }
      setLoading(false);
    },

    getUserInSession() {
      const data = sessionStorage.getItem("user");
      if (data) {
        userLocation
          ? setUserData({ ...data, ...location })
          : setUserData(data);
      }
    },

    async signUpWithCredentials(credentials, url) {
      setLoading(true);
      const data = await REGISTER(credentials, url);
      if (data?.id) {
        sessionStorage.setItem("user", data);
        this.getUserInSession();
        setMessage("success");
      } else {
        setError(data.msg);
      }
      setLoading(false);
    },

    async loginWithEmailAndPassword(credentials, url) {
      setLoading(true);
      const data = await LOGIN(credentials, url);
      if (data?.id) {
        sessionStorage.setItem("user", data);
        this.getUserInSession();
        setMessage("success");
      } else {
        setError(data.msg);
      }
      setLoading(false);
    },

    signOut() {
      sessionStorage.clearItem("user");
    },

    async updateUser(credentials, url) {
      setLoading(true);
      const data = await PUT(credentials, url);
      if (data?.id) {
        sessionStorage.setItem("user", data);
        this.getUserInSession();
        setMessage("success");
      } else {
        setError(data.msg);
      }
      setLoading(false);
    },

    async resetUserPassword(credentials, url) {
      setLoading(true);
      const data = await PUT(credentials, url);
      if (!data?.id) {
        setError(data.msg);
        return;
      } else {
        setMessage("success");
      }
      setLoading(false);
    },
  };

  useEffect(() => {
    if (type == "user") {
      const data = sessionStorage.getItem("user");
      if (!data) {
        user.getUserInSession();
      } else {
        setUserData(data);
      }
    }
  }, [userData]);

  return { user, userData, message, loading, error };
};
