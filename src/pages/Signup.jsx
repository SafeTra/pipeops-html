import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { logo } from "../assets";
import isEmail from 'validator/lib/isEmail';
import SuccessModal from '../components/modals/SuccessModal';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isStrongPass, setIsStrongPass] = useState(false);
  const [focusState, setFocusState] = useState({
    email: false,
    username: false,
    password: false,
  });
  const checkboxRef = useRef(null);
  const [isEightChars, setIsEightChars] = useState(false);
  const [isCapitalise, setIsCapitalise] = useState(false);
  const [isNumAndSpecial, setIsNumAndSpecial] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const handleFocus = (field) => setFocusState(prevFocusState => ({ ...prevFocusState, [field]: true }));
  const handleBlur = (field) => setFocusState(prevFocusState => ({ ...prevFocusState, [field]: false }));

  useEffect(() => {
    setIsEightChars(password.length >= 8);
    setIsCapitalise(/[a-z]/.test(password) && /[A-Z]/.test(password));
    setIsNumAndSpecial(/[!@#$%^&*(),.?":{}|<>]/.test(password) && /[0-9]/.test(password));

    setIsStrongPass(isEightChars && isCapitalise && isNumAndSpecial);
  }, [password, isEightChars, isCapitalise, isNumAndSpecial]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isStrongPass && checkboxRef.current.checked) {
        const response = await fetch(`https://safetra-be.onrender.com/api/user/register`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, username, password })
        });

        if (response.status === 409) {
          toast.error("User already exists");
          return;
        }

        if (!response.ok) {
          throw new Error(`Failed to register: ${response.statusText}`);
        }

        toast.success('Signup successfully');
        setOpenSuccessModal(true);
      }
      else {
        if (!email.trim() || !username.trim() || !password.trim()) toast.error('Please fill in all fields correctly.');
        else if (!isEmail(email)) toast.error("Invalid email address");
        else if (!isEightChars) toast.error("Password must be at least 8 characters");
        else if (!isCapitalise) toast.error("Password must contain at least one UPPERCASE and one LOWERCASE character");
        else if (!isNumAndSpecial) toast.error("Password must contain at least one number or special character");
        else if (!checkboxRef.current.checked) toast.error("Please agree to the Terms and Conditions");
      }
    } catch (error) {
      console.error(`Error during registration:`, error);
    }
  }

  return (
    <div className="bubbles_bg">
      <div className="container">
        <div className="signup min-h-[95vh] grid items-center">
          <div>
            <div className="text-center flex justify-center items-center gap-4 pb-6">
              <Link to='/' className='_logo'><img src={logo} alt="Logo" /></Link>
              <h2 className="text-center font-bold text-xl lg:text-2xl">Join safeTra</h2>
            </div>
            <form className="form">
              <div className='input flex gap-1 flex-column align-start'>
                <label style={{ display: focusState.email ? 'block' : 'none' }}>Email</label>
                <input name='email' type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={!focusState.email ? 'Email' : ''} required onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')} />
              </div>
              <div className='input flex gap-1 flex-column align-start'>
                <label style={{ display: focusState.username ? 'block' : 'none' }}>Username</label>
                <input name='username' type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder={!focusState.username ? 'Username' : ''} required onFocus={() => handleFocus('username')} onBlur={() => handleBlur('username')} />
              </div>
              <div className='input flex gap-1 flex-column align-start'>
                <label style={{ display: focusState.password ? 'block' : 'none' }}>Password</label>
                <input name='password' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder={!focusState.password ? 'Password' : ''} required onFocus={() => handleFocus('password')} onBlur={() => handleBlur('password')} />
              </div>
              {password && <div className="pt-3 text-gray-500">
                <p className={`lg:pl-8 md:pl-4 ${isStrongPass ? 'text-[#1da466] font-medium' : ''}`}>Strong password must have:</p>
                <ul className='*:list-disc grid justify-center '>
                  <li className={isEightChars ? 'text-[#1da466] font-medium' : ''}>At least 8 characters </li>
                  <li className={isCapitalise ? 'text-[#1da466] font-medium' : ''}>At least one UPPERCASE and one LOWERCASE character</li>
                  <li className={isNumAndSpecial ? 'text-[#1da466] font-medium' : ''}>At least one number and special character</li>
                </ul>
              </div>}
              <div className="checkbox d-flex fw-500"><input ref={checkboxRef} className='mr-2' required type="checkbox" />I agree to <Link to="">Terms & Conditions</Link></div>
              <button className="btn btn-form" type="submit" onClick={handleSubmit}>Sign Up</button>
              <ToastContainer />
              <p className=" text-center">Already have an account? <Link to="/login" className="font-bold underline text-[#FB923C]">LOGIN</Link></p>
            </form>
          </div>
        </div>
      </div>
      <SuccessModal open={openSuccessModal} onClose={() => setOpenSuccessModal(false)}>
        <div className="text-center text-base pt-4">
          <p>A verification email has been sent to {email} </p>
          <p>Please verify your email to have access to our platform</p>
        </div>
        <button className="btn btn-form w-3/4 lg:w-1/2" onClick={() => { setOpenSuccessModal(false); window.location.href = 'mailto:' + email; }}>
          Go to Email
        </button>
      </SuccessModal>
    </div>
  );
}

export default Signup;