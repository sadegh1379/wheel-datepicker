import React, { useState, useCallback } from "react";
import Notification from "../components/Notification";
import { v4 as uuidv4 } from "uuid";
import {
  NotificationProps,
  PositionType,
  UseNotificationReturn,
} from "../components/types";

const useNotification = (
  position: PositionType = "bottom-right"
): UseNotificationReturn => {
  const [notifications, setNotifications] = useState<
    (NotificationProps & { id: string })[]
  >([]);

  const triggerNotification = useCallback(
    (notificationProps: NotificationProps) => {
      const toastId = uuidv4();
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { id: toastId, ...notificationProps },
      ]);

      setTimeout(() => {
        setNotifications((prevNotifications) =>
          prevNotifications.filter((n) => n.id !== toastId)
        );
      }, notificationProps.duration);
    },
    []
  );

  const handleNotificationClose = (index: number) => {
    setNotifications((prevNotifications) => {
      const updatedNotifications = [...prevNotifications];
      updatedNotifications.splice(index, 1);
      return updatedNotifications;
    });
  };

  const NotificationComponent = (
    <div
      className={`notification-container ${position} ${position.split("-")[0]}`}
    >
      {notifications.map((notification, index) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={() => handleNotificationClose(index)}
        />
      ))}
    </div>
  );

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
