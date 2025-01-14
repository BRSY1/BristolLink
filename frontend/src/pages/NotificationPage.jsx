import React from "react";
import { PiBell } from "react-icons/pi";
import NotificationItem from "../components/common/NotificationItem";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useNotifications, {
  getNotificationDetails,
} from "../hooks/useNotifications";
import ErrorMessage from "../components/messages/ErrorMessage";
import { ClipLoader } from "react-spinners";
import Header from "../components/header/Header";

function NotificationPage() {
  useDocumentTitle("Notifications");

  const { loading, notifications, errorMsg } = useNotifications();
  const unreadCount = notifications.filter((n) => !n.is_read).length;

  return (
    <>
      {/* <Header /> */}
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-pink-800">Notifications</h1>
          <p className="text-sm text-gray-600 mt-1">
            You have {unreadCount} unread notification
            {unreadCount === 1 ? "" : "s"}
          </p>
        </div>

        {loading && <ClipLoader color="#fff" size={30} className="mx-auto" />}
        {errorMsg && <ErrorMessage message={errorMsg} />}

        <div className="space-y-5">
          {notifications.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-2xl">
              <PiBell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No notifications to display</p>
            </div>
          ) : (
            notifications.map((notification, index) => {
              const details = getNotificationDetails(
                notification.notification_type
              );
              return (
                <NotificationItem
                  key={index}
                  notification={{ ...notification, ...details }}
                  index={index}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default NotificationPage;
