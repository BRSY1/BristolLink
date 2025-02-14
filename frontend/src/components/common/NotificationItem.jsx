import React from "react";
import { PiConfetti, PiBell } from "react-icons/pi";
import { LuSendHorizontal } from "react-icons/lu";
import { FaRegSadTear } from "react-icons/fa";

const getNotificationIcon = (type) => {
  const icons = {
    match: PiConfetti,
    submission: LuSendHorizontal,
    rejection: FaRegSadTear,
    default: PiBell,
  };
  const IconComponent = icons[type] || icons.default;
  return <IconComponent className="h-5 w-5 text-pink-500" />;
};

const formatTimeAgo = (timestamp) => {
  const now = new Date();
  const past = new Date(timestamp);
  const diff = Math.floor((now - past) / 1000); // difference in sec

  // Less than a minute
  if (diff < 60) {
    return "Just now";
  }
  // Less than an hour
  else if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }
  // Less than a day
  else if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }
  // Less than a week
  else if (diff < 604800) {
    const days = Math.floor(diff / 86400);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }

  return past.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const NotificationItem = ({ notification, index }) => {
  return (
    <div
      className={`
        group w-full p-4 mb-4 rounded-lg shadow-sm
        ${notification.is_read ? "bg-white/60" : "bg-pink-50/60"}
        border-l-4 border-l-pink-500
        hover: shadow-md transition-all duration-300
        motion-preset-blur-up-md motion-duration-[1s] 
      `}
      style={{ animationDelay: `${index * 250}ms` }}
    >
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-pink-100 rounded-full group-hover:bg-pink-200 transition-colors">
          {getNotificationIcon(notification.notification_type)}
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h3 className="font-medium text-gray-900">{notification.title}</h3>
            <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
              {formatTimeAgo(notification.created_at)}
            </span>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            {notification.message}
          </p>

          {notification.link && (
            <a
              href={notification.link}
              className="font-semibold inline-block mt-2 text-pink-600 hover:text-pink-700 transition-colors"
            >
              {notification.notification_type === "match" ? "View Details →" : "Try Again →"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
