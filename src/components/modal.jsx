

export const Modal = ({id, header, body, footer, closeModal}) => {
  return (
    <div id={id||"modal"} className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="modal-body">
          {body ? body : "Body"}
        </div>
        <div className="modal-footer">
          {footer ? footer : <h2>Footer</h2>}
        </div>
      </div>
    </div>
  )
}
