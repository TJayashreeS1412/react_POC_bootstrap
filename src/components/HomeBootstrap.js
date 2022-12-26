import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../scss/Home.scss";
import Cards from "./CardsBootstrap";
import CardMaterial from "./CardMaterial";

function Home() {
  const [data, setData] = useState([]);
  const [editObject, setEditObject] = useState(null);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      // console.log(res);
      setData(res.data);
    });
  }, []);

  const deleteRow = (index) => {
    // not deleting from array, to write code to update state.
    setData(
      data.filter((i) => {
        return i !== data[index];
      })
    );
    // setData(data);
    console.log(data[index].userId);
  };

  const editRow = (rowData) => {
    console.log(rowData, "index", editIndex);
    let updatedData = data.map((row, index) => {
      console.log("mapindex", index, "index", editIndex);
      if (index === editIndex) {
        console.log(rowData, "index", editIndex);

        return rowData;
      } else {
        return row;
      }
    });
    setData(updatedData);
    setEditObject(null);
    setEditIndex(-1);
  };

  const updateRows = (rowData) => {
    console.log(rowData);
    // data.push(rowData);
    setData((prevState) => [...prevState, rowData]);
    setEditObject(null);
  };
  return (
    <div className="body">
      <Link to="/profile">Profile</Link>
      <div className="scrolling-tag">
        <p>This is scrolling tag</p>
      </div>
      <h1>home</h1>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addRowModal"
      >
        Add row
      </button>
      {/* {console.log(editObject)} */}

      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((rowData, i) => {
              // console.log(rowData);
              return (
                //jsx format
                <tr key={i}>
                  <td>{rowData?.userId}</td>
                  <td>{rowData?.id}</td>
                  <td>{rowData?.title}</td>
                  <td>{rowData?.body}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#editRowModal"
                      onClick={(e) => {
                        setEditObject(data[i]);
                        setEditIndex(i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={(e) => deleteRow(i, e)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Cards
        updateRows={updateRows}
        object={data[data.length - 1]}
        modalId="addRowModal"
      ></Cards>
      {/* {editObject && ( */}
      {console.log(editObject)}
      <Cards
        editRow={editRow}
        editObject={editObject}
        modalId="editRowModal"
      ></Cards>

      {/* )} */}
    </div>
  );
}

export default Home;
