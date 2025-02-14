import { useState, useEffect } from "react";
import api from "../utils/api";
import { useLocation } from "react-router-dom";

export const getNotificationDetails = (type) => {
  const details = {
    match: {
      title: "Congratulations! You matched with you crush.",
      message: "Check the link below to see who is your match.",
      link: "/dashboard",
    },
    submission: {
      title: "Someone just submitted your email as their crush.",
      message:
        "Someone just submitted your email as their crush. Their identity and messages will stay anonymous.",
    },
    rejection: {
      title: "No Match This Time.",
      message:
        "Unfortunately, your crush has submitted another person. Keep your spirits up! We will offer you another chance.",
      link: "/submit",
    },
  };
  return details[type];
};

const useNotifications = (markedAsRead) => {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const location = useLocation();

  const fetchNotifications = async () => {
    setLoading(true);
    setErrorMsg("");

    try {
      const params = {};
      if (markedAsRead !== undefined) {
        params.markedAsRead = markedAsRead;
      }
      const response = await api.get("/notifications", { params });
      setNotifications(response.data);
    } catch (err) {
      setErrorMsg("Failed to fetch notifications from database");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, [location.pathname]);

  return { loading, notifications, fetchNotifications, errorMsg };
};

export default useNotifications;
