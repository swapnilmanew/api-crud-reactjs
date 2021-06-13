import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Data = () => {
  const [books, setBooks] = useState([]);

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
          <div className="col-12 mx-auto my-4">
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
                            <NavLink
                              to="/edit/{book.id}"
                              className="btn btn-primary"
                            >
                              Edit
                            </NavLink>
                          </td>

                          <td>
                            <NavLink
                              to="/delete/{book.id}"
                              className="btn btn-danger"
                            >
                              Delete
                            </NavLink>
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
      </div>
    </>
  );
};

export default Data;
