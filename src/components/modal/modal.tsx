import React, { useEffect } from 'react';
import './modal.css';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  placement?: 'top' | 'bottom' | 'center';
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  placement = 'center',
  children,
  className = ''
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalClasses = `wd-modal wd-modal-${placement} ${className}`;

  return (
    <div className="wd-modal-overlay" onClick={onClose}>
      <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="wd-modal-header">
            <h3 className="wd-modal-title">{title}</h3>
            <button className="wd-modal-close" onClick={onClose}>
              ×
            </button>
          </div>
        )}
        <div className="wd-modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
