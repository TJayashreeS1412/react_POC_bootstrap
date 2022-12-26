import { useState, useEffect } from "react";

function Cards({ updateRows, object, editRow, editObject, modalId }) {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    console.log(formData, editObject);
    editObject ? editRow(formData) : updateRows(formData);
  };

  //   useEffect(() => {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       id: object?.id + 1,
  //       userId: object?.userId + 1,
  //     }));
  //   }, [object]);

  useEffect(() => {
    if (editObject !== null) setFormData(editObject);
  }, [editObject]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="body">
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add row
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                {console.log(formData)}
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row p-3">
                  <input
                    type="text"
                    key = {formData?.userId}
                    className="form-control"
                    placeholder="User Id"
                    aria-label="User Id"
                    name="userId"
                    defaultValue={formData?.userId}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div className="row p-3">
                  <input
                    type="text"
                    key = {formData?.id}
                    className="form-control"
                    placeholder="Id"
                    aria-label="Id"
                    defaultValue={formData?.id}
                    onChange={handleChange}
                    name="id"
                    disabled
                  />
                </div>
                <div className="row p-3">
                  <input
                    type="text"
                    key = {formData?.title}
                    className="form-control"
                    placeholder="Title"
                    aria-label="Title"
                    defaultValue={formData?.title}
                    onChange={handleChange}
                    name="title"
                  />
                </div>
                <div className="row p-3">
                  <input
                    type="text"
                    key = {formData?.body} //key value updates in DOM
                    className="form-control"
                    placeholder="Body"
                    aria-label="Body"
                    defaultValue={formData?.body} // defaultValue will not be rerendered, so even if state is updating, the DOM didn't update
                    onChange={handleChange}
                    name="body"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
