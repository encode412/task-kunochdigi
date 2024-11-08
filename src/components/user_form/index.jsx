import React, { useState } from "react";
import Button from "../ui/button";
import CustomInput from "../ui/custom_input";

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    age: "",
  });

  const [submittedUsers, setSubmittedUsers] = useState([]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!userData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!userData.age || userData.age < 10) {
      newErrors.age = "Age must be at least 10";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmittedUsers((prevUsers) => [...prevUsers, userData]);
      setUserData({
        name: "",
        age: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="flex flex-col pt-10 md:pt-20 pb-8 mx-10 md:my-20 gap-12 items-center bg-white px-[1.3rem] md:px-20 w-5/6 md:w-1/2 overflow-hidden my-auto md:mx-auto rounded-2xl">
      <h1 className="uppercase lg:text-2xl xl:text-3xl text-xl text-center font-medium">
        User Form Task
        <br />
      </h1>
      <form className="flex flex-col w-full gap-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-1 w-full">
          <CustomInput
          label="Name"
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          error={errors.name}
        />
        </div>
        <div className="flex flex-col gap-y-1 w-full">
          <CustomInput
          label="Age"
          type="number"
          min={10}
          name="age"
          value={userData.age}
          onChange={handleChange}
          error={errors.age}
        />
        </div>
        <Button text="Submit" />
      </form>

      <div className="w-full">
        <h2 className="text-lg lg:text-xl text-[#2f2f2f] font-semibold">
          Submitted Users:
        </h2>
        <div className="overflow-y-auto h-[300px] lg:h-[150px] py-3 px-4 space-y-2">
        {submittedUsers.map((user, index) => (
          <div key={index} className="flex flex-col gap-y-2 w-full mt-2 px-4 h-1/2 lg:py-2">
            <div className="flex justify-between w-full">
              <span className="text-base lg:text-lg text-[#2f2f2f] font-semibold">
                Name:
              </span>
              <span className="text-sm lg:text-base text-[#2f2f2f] font-medium">
                {user.name}
              </span>
            </div>

            <div className="flex justify-between w-full">
              <span className="text-base lg:text-lg text-[#2f2f2f] font-semibold">Age:</span>
              <span className="text-sm lg:text-base text-[#2f2f2f] font-medium">
                {user.age}
              </span>
            </div>
            <hr />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default UserForm;
