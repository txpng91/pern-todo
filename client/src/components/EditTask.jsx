import React, { Fragment, useState } from 'react';

function EditTask({ todo }) {
  const [description, setDescription] = useState(todo.description);

  //   Edit description in todo
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const res = await fetch(`/todos/${todo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      // window.location = '/';
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <button
        type='button'
        class='btn btn-warning'
        data-toggle='modal'
        data-target={`#id${todo.id}`} // Make edit button unique by setting data target with id
      >
        Edit
      </button>
      {/* Make modal unique by also setting the modal id to the todo id */}
      <div class='modal' id={`id${todo.id}`}>
        <div class='modal-dialog'>
          <div class='modal-content'>
            {/* Top */}
            <div class='modal-header'>
              <h4 class='modal-title'>Edit Todo</h4>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>
            {/* Input */}
            <div class='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {/* Footer */}
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-warning'
                data-dismiss='modal'
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button type='button' class='btn btn-danger' data-dismiss='modal'>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditTask;
