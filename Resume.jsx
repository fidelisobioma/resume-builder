import { useState } from "react";
import "./resume.css";
import Form from "./Form";
function Resume() {
  const [file, setFile] = useState();
  const [details, setDetails] = useState({
    image: null,
    firstname: "",
    lastname: "",
    profession: "",
    bio: "",
    course: "",
    enrolldate: "",
    institution: "",
    enrollend: "",
    skill1: "",
    skill2: "",
    skill3: "",
    position: "",
    company: "",
    yearstart: "",
    yearend: "",
    role: "",
    phone: "",
    email: "",
    address: "",
  });
  const handleClick = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };
  const addImage = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <Form handleClick={handleClick} handleImage={addImage} />;
      <div className="resume">
        <div className="header">
          <div className="image">
            <img src={file} alt="" />
          </div>
          <div>
            <h1>{`${details.firstname} ${details.lastname}`}</h1>
            <i>{details.profession}</i>
          </div>
        </div>
        <div className="wrapper">
          <div className="sidebar">
            <div className="contact">
              <h2>Contact</h2>
              <p>{details.phone}</p>
              <p>{details.email}</p>
              <p>{details.address}</p>
            </div>
            <div className="education">
              <h2>Education</h2>
              <p>{details.institution}</p>
              <p>{details.course}</p>
              <p>{`${details.enrolldate} - ${details.enrollend}`}</p>
            </div>
            <div className="skills">
              <h2>Skills</h2>
              <ul>
                <li>{details.skill1}</li>
                <li>{details.skill2}</li>
                <li>{details.skill3}</li>
              </ul>
            </div>
          </div>
          <div className="main">
            <div className="profile">
              <h2>ABOUT</h2>
              <p>{details.bio}</p>
            </div>
            <div className="work-experience">
              <h2>WORKING EXPERIENCE</h2>
              <h3>{details.position}</h3>
              <p>{`${details.company} | ${details.yearstart} - ${details.yearend}`}</p>
              <p>{details.role}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Resume;
