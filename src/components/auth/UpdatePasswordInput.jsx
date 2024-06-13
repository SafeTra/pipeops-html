import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import PropTypes from 'prop-types';

const UpdatePasswordInput = ({
  id,
  label,
  value,
  name,
  onChange,
  placeholder,
  error,
}) => {
  
UpdatePasswordInput.propTypes = {
  id: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

};
  const handleInputChange = (event) => {
    onChange(name, event.target.value);
  };
  const [view, setView] = useState(false);
  return (
    <div>
      <p className="text-[#757575] text-[12px] font-[inter] ">{label}</p>
      <div className="w-full lg:w-[380px]">
        <input
          type={!view ? "password" : "text"}
          id={id}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="border-b p-4 bg-[#E0E4EC] outline-none text-sm text-[#212121] w-[90%] rounded-md"
          // className={error ? 'error' : ''}
        />
        <button
          type="button"
          className="ml-[-2rem] w-[5%] "
          onClick={() => setView(!view)}
        >
          {!view ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </button>
      </div>

      {error && <div className="error-message text-red">{error}</div>}
    </div>
  );
};



export default UpdatePasswordInput;
