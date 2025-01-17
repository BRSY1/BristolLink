import { useState, useEffect } from "react";
import api from "../utils/api";

export const getNotificationDetails = (type) => {
  const details = {
    match: {
      title: "Congratulations! You matched with you crush.",
      message: "Check the link below to see who is your match.",
      link: "",
    },
    submission: {
      title: "Someone just submitted your email as their crush.",
      message:
        "Someone just submitted your email as their crush. Their identity and messages will stay anonymous.",
    },
  };
  return details[type];
};

const useNotifications = () => {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      setErrorMsg("");

      try {
        const response = await api.get("/notifications");
        setNotifications(response.data);
      } catch (err) {
        setErrorMsg("Failed to fetch notifications from database");
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return { loading, notifications, errorMsg };
};

export default useNotifications;
