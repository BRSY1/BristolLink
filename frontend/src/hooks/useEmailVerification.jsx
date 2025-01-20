import { useState, useEffect, useContext } from "react";
import api from "../utils/api";
import { AuthContext } from "../context/AuthContext";

const useEmailVerification = (code) => {
  const { login } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      setLoading(true);
      setErrorMsg("");
      setSuccessMsg("");

      try {
        const response = await api.get(`/verify/${code}`);
        login(response.data.token, response.data.user.username);
        setSuccessMsg(response.data.message);
      } catch (err) {
        setErrorMsg(
          err.response?.data?.message || "An error occurred. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [code]);

  return { loading, errorMsg, successMsg };
};

export default useEmailVerification;
