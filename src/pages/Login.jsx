import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo } from '../assets';
import { ToastContainer, toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';

const Login = () => {
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const checkboxRef = useRef(null)
    const [focusState, setFocusState] = useState({
      email: false,
      password: false,
    })
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hanldeFocus = (field) => setFocusState(prevFocusState => ({...prevFocusState, [field]: true}));
    const hanldeBlur = (field) => setFocusState(prevFocusState => ({...prevFocusState, [field]: false}));

    const handleLogin = async e => {
        e.preventDefault();

        try {
          setLoading(true);
          if (password.length >= 8 && isEmail(email)) {
            const response = await fetch(`https://safetra-be.onrender.com/api/v1/auth/login`, {
              method: 'POST', headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({email, password})
            })

            if (response.status === 403) {
              setLoading(false);
              toast.error("Invalid credentials")
            } else if (response.status === 404) {
              setLoading(false);
              toast.error("User not found.")
            }

            if (!response.ok) {
              setLoading(false);
              throw new Error
            }

            const {token} = await response.json()

            localStorage.setItem('token', token)
            toast.success('Login successfully')
            setLoading(false);
            setTimeout(() => navigate('/user'), 2000);
          }
          else{
            setLoading(false);
            if (!email.trim() || !password.trim()) toast.error('Please fill in all fields correctly.')
            else if (!isEmail(email)) toast.error("Invalid email address")
            else if (password.length < 8) toast.error("Password is not correct")
          }
        } catch (error) {
          setLoading(false);
          console.error(`Error during login:`, error)
        }
    }

    return (
    <div className="bubbles_bg">
      <div className="container">
        <div className="login min-h-[95vh] grid items-center">
          <div>
            <div className="text-center pb-4"><Link to='/' className='_logo'><img src={logo}/></Link></div>
            <h2 className="text-center font-bold text-xl lg:text-2xl pb-4">Welcome Back!</h2>
            <form className="form">
              <div className='input flex gap-1 flex-column align-start'>
                  <label style={{ display: focusState.email ? 'block' : 'none'}}>Email</label>
                  <input name='email' type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={!focusState.email ? 'Email' : ''} required onFocus={() => hanldeFocus('email')} onBlur={() => hanldeBlur('email')}/>
              </div>
              <div className='input flex gap-1 flex-column align-start'>
                  <label style={{ display: focusState.password ? 'block' : 'none'}}>Password</label>
                  <input name='password' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder={!focusState.password ? 'Password' : ''} required onFocus={() => hanldeFocus('password')} onBlur={() => hanldeBlur('password')}/>
              </div>
              <div className="d-flex justify-between checkbox">
                <div><input ref={checkboxRef} name='rememberMe' type="checkbox"/> Remember Me</div>
                <Link to='/forgotPassword' className='hover:text-[#e54e0c] hover:underline'>Forgot Your Password?</Link>
              </div>
              <button className="btn btn-form" type="submit" onClick={handleLogin}>{loading ? "Signing you In.." : "Sign In"}</button>
              <ToastContainer />
              <p className=" text-center">Don’t have an account? <Link to='/signup' className="font-bold underline text-[#e54e0c]">JOIN SAFETRA</Link></p>
          </form>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Login;