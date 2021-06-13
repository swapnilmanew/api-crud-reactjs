import React, { useState, useEffect } from 'react';

const Add = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);

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
    getData();
  };

  const getData = async () => {
    const response = await fetch('http://localhost:3000/posts');
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    getData();
  }, []);

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

          <div className="col-10 mx-auto mt-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book => {
                  return (
                    <>
                      <tr key={book.id}>
                        <th scope="row">{book.id}</th>
                        <td> {book.title} </td>
                        <td> {book.author} </td>
                        <td>
                          <a href="#" className="btn btn-primary">
                            Edit
                          </a>
                          <a href="#" className="btn btn-danger">
                            Delete
                          </a>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
