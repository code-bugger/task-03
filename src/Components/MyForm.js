import React, { useState } from "react";
import "../App.css";

function MyForm() {
    const [student, setStudent] = useState({
        Name: "",
        Email: "",
        Website: "",
        Image: "",
        Gender: "",
      });
    
      const [records, setRecords] = useState([]);
      const [checkValues, setValue] = useState([]);
    
      const handleInputs = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (type === "checkbox") {
          if (checked) {
            setValue((prev) => [...prev, value]);
          } else {
            setValue((prev) => prev.filter((skill) => skill !== value));
          }
        } else {
          setStudent({ ...student, [name]: value });
        }
      };
    
      const submitForm = (e) => {
        e.preventDefault();
    
        const newRecord = {
          ...student,
          Skills: checkValues,
          id: new Date().getTime().toString(),
        };
    
        setRecords((prevRecords) => [...prevRecords, newRecord]);
        clearForm();
      };
    
      const clearForm = () => {
        setStudent({
          Name: "",
          Email: "",
          Website: "",
          Image: "",
          Gender: "",
        });
        setValue([]);
      };
    
  return (
    <>
    <div className="container">
        <div className="first">
          <form onSubmit={submitForm}>
            <label>Name:</label>
            <input
              type="text"
              required
              className="custom-input"
              autoComplete="off"
              name="Name"
              value={student.Name}
              onChange={handleInputs}
            />

            <label>Email:</label>
            <input
              type="email"
              required
              className="custom-input"
              autoComplete="off"
              name="Email"
              value={student.Email}
              onChange={handleInputs}
            />

            <label>Website:</label>
            <input
              type="url"
              autoComplete="off"
              required
              className="custom-input"
              name="Website"
              value={student.Website}
              onChange={handleInputs}
            />

            <label>Image Link:</label>
            <input
              type="url"
              autoComplete="off"
              required
              className="custom-input"
              name="Image"
              value={student.Image}
              onChange={handleInputs}
            />
            <br />
            <div className="gender">
              <label>Gender:</label>
              <input
                type="radio"
                id="male"
                name="Gender"
                value="male"
                checked={student.Gender === "male"}
                onChange={handleInputs}
                required
              />
              <label>Male</label>
              <input
                type="radio"
                id="female"
                name="Gender"
                value="female"
                checked={student.Gender === "female"}
                onChange={handleInputs}
                required
              />
              <label>Female</label>
            </div>
            <br />
            <label>Skills:</label>
            <div className="skills">
              <input
                type="checkbox"
                value="HTML"
                onChange={handleInputs}
                checked={checkValues.includes("HTML")}
              />
              <label>HTML</label>
              <input
                type="checkbox"
                value="CSS"
                onChange={handleInputs}
                checked={checkValues.includes("CSS")}
              />
              <label>CSS</label>
              <input
                type="checkbox"
                value="Js"
                onChange={handleInputs}
                checked={checkValues.includes("Js")}
              />
              <label>Java Script</label>
            </div>
            <br />
            <button type="submit" id="Submit">
              Submit
            </button>
            <button type="button" id="Clear" onClick={clearForm}>
              Clear
            </button>
          </form>
        </div>

        <div className="second">
          <h2>Enrolled Students</h2>
          <div>
            {records.length === 0 ? (
              <h3>No students enrolled yet.</h3>
            ) : (
              records.map((currentEle) => (
                <table className="card" key={currentEle.id}>
                  <tr>
                    <td>
                      <div className="text-container">
                        <h4>
                          <b>{currentEle.Name}</b>
                        </h4>
                        <p>Email: {currentEle.Email}</p>
                        <p>Gender: {currentEle.Gender}</p>
                        <p>
                          Website:{" "}
                          <a href={currentEle.Website}>{currentEle.Website}</a>
                        </p>
                        <p>Skills: {currentEle.Skills.join(", ")}</p>
                      </div>
                    </td>
                    <td className="img-container">
                      <img src={currentEle.Image} alt="Avatar" />
                    </td>
                  </tr>
                </table>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default MyForm