import React, { useEffect, useState } from "react";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/students/")
      .then((res) => {
        if (!res.ok) {
          throw Error("There is an error on database");
        }
        return res.json();
      })
      .then((data) => {
        setStudents(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);
  return (
    <div style={{ margin: "0px 10rem" }}>
      <h3>Student List</h3>
      {students.map((std) => (
        <div key={std.id}>
          <h4>Name: {std.name}</h4>
          <p>Phone: {std.phone}</p>
        </div>
      ))}
    </div>
  );
}
