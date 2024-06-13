import '../App.css'
import { logo } from "../assets";
import { ApiHandler } from "..";
import isEmail from 'validator/lib/isEmail';
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [userExist, setUserExist] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isStrongPass, setIsStrongPass] = useState(false);
    const [focusState, setFocusState] = useState({
      email: false,
      username: false,
      password: false,
    })
    const checkboxRef = useRef(null)
    const { fetchData } = ApiHandler();
    const [isEightChars, setIsEightChars] = useState(false);
    const [isCapitalise, setIsCapitalise] = useState(false);
    const [isNumOrSpecial, setIsNumOrSpecial] = useState(false);

    const hanldeFocus = (field) => setFocusState(prevFocusState => ({...prevFocusState, [field]: true}));
    const hanldeBlur = (field) => setFocusState(prevFocusState => ({...prevFocusState, [field]: false}));

    useEffect(() => {
      const getUsers = async () => {
        try {
          const all_users = await fetchData('all-users');
          setUserExist(all_users.some(user => email === user.email))
        } catch (error) {
          console.error('Error fetching all users:', error);
        }
      };

      if (email) getUsers();
    }, [email])

    useEffect(() => {
      setIsEightChars(password.length >= 8)
      setIsCapitalise(/[a-z]/.test(password) && /[A-Z]/.test(password));
      setIsNumOrSpecial(/[!@#$%^&*(),.?":{}|<>0-9]/.test(password))

      setIsStrongPass(isEightChars && isCapitalise && isNumOrSpecial)
    }, [password, isEightChars, isCapitalise, isNumOrSpecial])

    const handleSubmit = async e => {
      e.preventDefault();

      if (userExist){
        toast.error("User already exists")
        return
      }

      try {
        if (isStrongPass && checkboxRef.current.checked){
          const response = await fetch(`https://safetra-crz3.onrender.com/api/user/register`, {
            method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, username, password})
          })

          if (!response.ok) throw new Error

          toast.success('Signup successfully')
          setTimeout(() => navigate('/authenticate'), 2000);
        }
        else{
          if (!email.trim() || !username.trim() || !password.trim()) toast.error('Please fill in all fields correctly.')
          else if (!isEmail(email)) toast.error("Invalid email address")
          else if (!isEightChars) toast.error("Password must be at least 8 characters")
          else if (!isCapitalise) toast.error("Password must contain at least one UPPERCASE and one LOWERCASE character")
          else if (!isNumOrSpecial) toast.error("Password must contain at least one number or special character")
          else if (!checkboxRef.current.checked) toast.error("Please agree to the Terms and Conditions")
        }
      } catch (error) {
        console.error(`Error during registration:`, error)
      }
    }

    return (
    <div className="bubbles_bg">
      <div className="container">
        <div className="signup min-h-[95vh] grid items-center">
          <div>
            <div className="text-center flex justify-center items-center gap-4 pb-6">
              <Link to='/' className='_logo'><img src={logo}/></Link>
              <h2 className="text-center font-bold text-xl lg:text-2xl">Join safeTra</h2>
            </div>
            <form className="form">
              <div className='input flex gap-1 flex-column align-start'>
                  <label style={{ display: focusState.email ? 'block' : 'none'}}>Email</label>
                  <input name='email' type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={!focusState.email ? 'Email' : ''} required onFocus={() => hanldeFocus('email')} onBlur={() => hanldeBlur('email')}/>
              </div>
              <div className='input flex gap-1 flex-column align-start'>
                  <label style={{ display: focusState.username ? 'block' : 'none'}}>Username</label>
                  <input name='username' type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder={!focusState.username ? 'Username' : ''} required onFocus={() => hanldeFocus('username')} onBlur={() => hanldeBlur('username')}/>
              </div>
              <div className='input flex gap-1 flex-column align-start'>
                  <label style={{ display: focusState.password ? 'block' : 'none'}}>Password</label>
                  <input name='password' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder={!focusState.password ? 'Password' : ''} required onFocus={() => hanldeFocus('password')} onBlur={() => hanldeBlur('password')}/>
              </div>
              {password && <div className="pt-3 text-gray-500">
                <p className={`lg:pl-8 md:pl-4 ${isStrongPass ? 'text-[#1da466] font-medium' : 'text-[#f00]'}`}>Strong password must have:</p>
                <ul className='*:list-disc grid justify-center '>
                  <li className={isEightChars ? 'text-[#1da466] font-medium' : 'text-[#f00]'}>At least 8 characters </li>
                  <li className={isCapitalise ? 'text-[#1da466] font-medium' : 'text-[#f00]'}>At least one UPPERCASE and one LOWERCASE character</li>
                  <li className={isNumOrSpecial ? 'text-[#1da466] font-medium' : 'text-[#f00]'}>At least one number or special character {'(!@#$%^&*(),.?":{}|<>0-9)'}</li>
                </ul>
              </div>}
              <div className="checkbox d-flex fw-500"><input ref={checkboxRef} className='mr-2' required type="checkbox"/>I agree to <Link to="">Terms & Conditions</Link></div>
              <button className="btn btn-form" type="submit" onClick={handleSubmit}>Sign Up</button>
              <ToastContainer />
              <p className=" text-center">Already have an account? <Link to="/login" className="font-bold underline">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Signup;