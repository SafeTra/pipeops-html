
import PropTypes from 'prop-types';

const AuthInput = ({
  id,
  label,
  value,
  name,
  onChange,
  type,
  placeholder,
  error,
}) => {
  
AuthInput.propTypes = {
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

  return (
    <div>
      <p className="text-[#757575] text-[12px] font-[inter] ">{label}</p>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="border-b p-4 bg-transparent outline-none w-full lg:w-[380px] text-sm text-[#212121]"
        // className={error ? 'error' : ''}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};



export default AuthInput;
