import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div>
      <div className="alert alert-primary alert-dismissible">
        {children}
        <button
          type="button"
          data-bs-dismiss="alert"
          className="btn-close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default Alert;
