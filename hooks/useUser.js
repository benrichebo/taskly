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
      try {
        const data = await GET(url);
        if (data.msg) {
          setError(data.msg);
        } else {
          sessionStorage.setItem("user", data);
          setUserData(data);
          setMessage("success");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    getUserInSession() {
      const data = sessionStorage.getItem("user");
      if (data) {
        userLocation
          ? setUserData({ ...data, ...location })
          : setUserData(data);
      }
    },

    async signUpWithCredentials(credentials) {
      setLoading(true);
      try {
        const data = await REGISTER(credentials, "/api/accounts/signup");
        if (data?.id) {
          sessionStorage.setItem("user", data);
          this.getUserInSession();
          setMessage("success");
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async loginWithEmailAndPassword(credentials) {
      setLoading(true);
      try {
        const data = await LOGIN(credentials, "/api/account/login");
        if (data?.id) {
          sessionStorage.setItem("user", data);
          this.getUserInSession();
          setMessage("success");
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    signOut() {
      sessionStorage.clearItem("user");
    },

    async updateUser(credentials) {
      setLoading(true);
      try {
        const data = await PUT(credentials, "/api/account");
        if (data?.id) {
          sessionStorage.setItem("user", data);
          this.getUserInSession();
          setMessage("success");
        } else {
          setError(data.msg);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },

    async resetUserPassword(credentials) {
      setLoading(true);
      try {
        const data = await PUT(credentials, "/api/account/reset-password");
        if (!data?.id) {
          setError(data.msg);
          return;
        } else {
          setMessage("success");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
  };

   const clear = () => {
     setLoading(false);
     setError("");
     setMessage("");
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

  return { user, userData, message, loading, error, clear };
};
