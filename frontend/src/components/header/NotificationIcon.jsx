import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useNotifications from "../../hooks/useNotifications";

const NotificationIcon = () => {
  const navigate = useNavigate();
  const { loading, notifications, errorMsg } =
    useNotifications();
  const unreadCount = notifications.filter((n) => !n.is_read).length;

  const handleClick = () => {
    navigate("/notifications");
  };

  return (
    <div className="flex items-center relative">
      {/* notification icon */}
      <MdNotificationsNone
        className="text-2xl hover:text-pink-600 cursor-pointer transition-colors"
        onClick={handleClick}
      />
      {/* Red dot for unread notifications */}
      {unreadCount > 0 && (
        <span className="absolute top-0 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      )}
    </div>
  );
};

export default NotificationIcon;
