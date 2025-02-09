import { useState } from "react";
import "./form.css";
function Form({ handleClick, handleImage }) {
  return (
    <div className="form">
      <form>
        <div className="personalinfo">
          <p>Personal details</p>
          <label htmlFor="img">Add profile image</label>
          <input
            type="file"
            accept="image"
            name="image"
            onChange={handleImage}
          />
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            // id="firstname"
            onChange={handleClick}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={handleClick}
          />
          <label htmlFor="profession">Profession</label>
          <input
            type="text"
            name="profession"
            id="profession"
            onChange={handleClick}
          />
          <label htmlFor="bio">About</label>
          <textarea
            rows={5}
            name="bio"
            id="bio"
            onChange={handleClick}
          ></textarea>
        </div>
        <div className="education">
          <p>Education</p>
          <label htmlFor="inst">Institution</label>
          <input
            type="text"
            name="institution"
            id="inst"
            onChange={handleClick}
          />
          <label htmlFor="course">Course</label>
          <input type="text" name="course" id="course" onChange={handleClick} />
          <label htmlFor="enrolldate">Year Erolled</label>
          <input
            type="text"
            name="enrolldate"
            id="enrolldate"
            onChange={handleClick}
          />
          <label htmlFor="enrollend">Year End</label>
          <input
            type="text"
            name="enrollend"
            id="enrollend"
            onChange={handleClick}
          />
        </div>
        <div className="skillswrapper">
          <p>Skills</p>
          <div className="skills">
            <label htmlFor="skill1">skill 1</label>
            <input
              type="text"
              name="skill1"
              id="skill1"
              onChange={handleClick}
            />
          </div>
          <div className="skills">
            <label htmlFor="skill2">skill 2</label>
            <input
              type="text"
              name="skill2"
              id="skill2"
              onChange={handleClick}
            />
          </div>
          <div className="skills">
            <label htmlFor="skill3">skill 3</label>
            <input
              type="text"
              name="skill3"
              id="skill3"
              onChange={handleClick}
            />
          </div>
        </div>
        <div className="experience">
          <p>Work Experience</p>
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id="position"
            onChange={handleClick}
          />
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            onChange={handleClick}
          />
          <label htmlFor="yearstart">Year start</label>
          <input
            type="text"
            name="yearstart"
            id="yearstart"
            onChange={handleClick}
          />
          <label htmlFor="yearend">Year End</label>
          <input
            type="text"
            name="yearend"
            id="yearend"
            onChange={handleClick}
          />
          <label htmlFor="role">Role</label>
          <textarea
            rows={5}
            name="role"
            id="role"
            onChange={handleClick}
          ></textarea>
        </div>
        <div className="contact">
          <p>Contact</p>
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" onChange={handleClick} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleClick} />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={handleClick}
          />
        </div>
      </form>
    </div>
  );
}
export default Form;
