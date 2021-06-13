import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  let history = useHistory();

  const [user, setUser] = useState({
    title: '',
    author: ''
  });
  const { title, author } = user;
  const onInputChange = e => {
    setUser({ ...bookData, [e.target.name]: [e.target.value] });
  };

  const addData = async () => {
    await axios.post('http://localhost:3000/posts', user);
    history.push('/data');
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-4">
            <div className="card">
              <h1 className="fw-bold text-center mt-3">Add Book</h1>
              <div className="card-body">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Book Title"
                  value={title}
                  onChange={e => onInputChange(e)}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author"
                  value={author}
                  onChange={e => onInputChange(e)}
                />
                <br />
                <button className="btn btn-primary" onClick={addData}>
                  Add Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
