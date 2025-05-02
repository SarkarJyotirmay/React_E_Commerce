import React from "react";
import { useProfile } from "../contexts/ProfileProvider";

function Profile() {
  const { form, handleSubmit, handleChange, isUpdating } = useProfile();
  return (
    <>
      <div className="profile-container py-12 bg-slate-700">
        <form
          action=""
          className="w-full max-w-sm m-auto p-4 rounded-lg bg-gray-100 flex flex-col gap-4 shadow-sm shadow-white"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex flex-col">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="eg: Jyotirmay Sarkar"
              className="w-full bg-amber-50 p-2 rounded-md "
            />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="age">Enter Your age</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              placeholder="Eg: 22"
              className="w-full bg-amber-50 p-2 rounded-md "
            />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="gender">Select Your Gender</label>
            <div className="flex gap-4 bg-amber-50 p-2 w-full rounded-md">
              <input
                type="radio"
                name="gender"
                id="gender"
                value="Male"
                onChange={handleChange}
                checked={form.gender === "Male"}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                id="gender"
                value="Female"
                onChange={handleChange}
                checked={form.gender === "Female"}
              />{" "}
              Female
              <input
                type="radio"
                name="gender"
                id="gender"
                value="Other"
                onChange={handleChange}
                checked={form.gender === "Other"}
              />{" "}
              Other
            </div>
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="address">Enter Your Address</label>
            <textarea
              name="address"
              id="address"
              value={form.address}
              onChange={handleChange}
              placeholder="eg: Vill: abc, P.O.: abc, State: Abc,..."
              className="w-full bg-amber-50 p-2 rounded-md "
            ></textarea>
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="about">Tell Us About Yourself</label>
            <textarea
              name="about"
              id="about"
              value={form.about}
              onChange={handleChange}
              placeholder="eg: I am a coder who loves to create new things :)"
              className="w-full bg-amber-50 p-2 rounded-md "
            ></textarea>
          </div>

          <button className="bg-blue-500 text-white font-semibold px-2 py-1.5 rounded-md cursor-pointer hover:bg-green-400 ">{isUpdating ? "Edit" : "Add"}</button>
        </form>
      </div>
    </>
  );
}

export default Profile;
