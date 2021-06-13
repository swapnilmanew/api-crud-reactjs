import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addData = () => {
    let data = { title, author };
    fetch('http://localhost:3000/posts/', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
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
                  onChange={e => setTitle(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Author"
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
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
