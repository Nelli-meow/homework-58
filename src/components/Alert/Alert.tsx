import * as React from 'react';

interface Props {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
  children: React.ReactNode;
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {

  const alertClasses = {
    primary: 'alert-primary',
    success: 'alert-success',
    danger: 'alert-danger',
    warning: 'alert-warning',
  }

  return (
    <div className={`alert ${alertClasses[type]} d-flex justify-content-between`} role="alert">
      <span>{children}</span>
      {onDismiss && (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onDismiss}
        ></button>
      )}
    </div>
  );
};

export default Alert;