import React, { useState } from "react";
import Button from "../../../ui/button";
import CustomInput from "../../../ui/custom_input";


const ChangeTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!value) {
      setError("Todo is required");
    } else {
      editTodo(value, task.id);
      setError("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[100%] flex items-center space-x-6"
    >
      <CustomInput
        type="text"
        name="todo"
        value={value}
        onChange={handleChange}
        error={error}
        placeholder="Update todo"
        className="border w-5/6 border-[#8758ff] p-2 md:px-6 px-4 md:text-base text-sm rounded-3xl outline-0"
      />
      <Button text="Add Todo" />
    </form>
  );
};

export default ChangeTodo;