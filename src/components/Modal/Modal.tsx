import * as React from 'react';

interface Props {
  show: boolean,
  onClose: () => void,
}


const Modal: React.FC<Props> = ({show, onClose}) => {

  if (!show) return null;

  return (
    <>
      <div
        className="modal-backdrop show"
        style={{display: 'block'}}
      />
      <div className="modal show" style={{display: 'block'}}>
        <div className="modal-dialog">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Modal title</h1>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            Modal Content
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;