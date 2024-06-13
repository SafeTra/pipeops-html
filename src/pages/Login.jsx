import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo } from '../assets';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
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
          const response = await fetch(`https://safetra-crz3.onrender.com/api/user/login`, {
            method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
          })

          if (!response.ok) throw new Error

          const {token} = await response.json()

          /* data: {_id: '666a027f0228c05d4c7424d0', name: 'Obi Faith', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N…jU1fQ.aDV9VaBMbrbDiT02rrBNc7FRHPFWMq3e4C7AvUKIhKk'} */

          toast.success('Login successfully')
          setTimeout(() => navigate('/dashboard'), 2000);
        } catch (error) {
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
                <Link to='/forgotPassword'>Forgot Your Password?</Link>
              </div>
              <button className="btn btn-form" type="submit" onClick={handleLogin}>Sign In</button>
              <ToastContainer />
              <p className=" text-center">Don’t have an account? <Link to='/signup' className="font-bold underline">JOIN FOR FREE</Link></p>
          </form>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Login;