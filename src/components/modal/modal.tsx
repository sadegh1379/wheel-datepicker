import React, { useEffect } from "react";
import "./modal.css";
import { ModalProps } from "../types";
import Button from "../button/button";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  placement = "bottom",
  children,
  className = "",
  rtl = false,
  closeIcon,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalClasses = `wd-modal wd-modal-${placement} ${
    rtl ? "wd-modal-rtl" : ""
  } ${className}`;

  return (
    <div className="wd-modal-overlay" onClick={onClose}>
      <div
        className={modalClasses}
        onClick={(e) => e.stopPropagation()}
        dir={rtl ? "rtl" : "ltr"}
      >
        {title && (
          <div className="wd-modal-header">
            <h3 className="wd-modal-title">{title}</h3>
            <button className="wd-modal-close" onClick={onClose}>
              {closeIcon || "×"}
            </button>
          </div>
        )}
        <div className="wd-modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
