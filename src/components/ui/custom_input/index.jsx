import React from "react";

const CustomInput = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      <span>{label}</span>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="border  w-full focus:outline-none py-2 border-[#8758ff] p-2 md:px-6 px-4 md:text-base text-sm rounded-3xl outline-0"
        placeholder={placeholder}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default CustomInput;
