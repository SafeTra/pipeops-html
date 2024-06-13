import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logo } from '../assets';
import { ToastContainer, toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';

const Login = () => {
  const navigate = useNavigate();
  const checkboxRef = useRef(null);
  const [focusState, setFocusState] = useState({
    email: false,
    password: false,
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFocus = (field) => setFocusState(prevFocusState => ({...prevFocusState, [field]: true}));
  const handleBlur = (field) => setFocusState(prevFocusState => ({...prevFocusState, [field]: false}));

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (password.length >= 8 && isEmail(email)) {
        const response = await fetch(`https://safetra-crz3.onrender.com/api/user/login`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({email, password})
        });

        if (!response.ok) throw new Error();
        const { token } = await response.json();
        localStorage.setItem('token', token);

        toast.success('Login successfully');
        setTimeout(() => navigate('/dashboard'), 2000);
      } else {
        if (!email.trim() || !password.trim()) toast.error('Please fill in all fields correctly.');
        else if (!isEmail(email)) toast.error("Invalid email address");
        else if (password.length < 8) toast.error("Password is not correct");
      }
    } catch (error) {
      toast.error("Password is not correct");
      console.error(`Error during login:`, error);
    }
  };

  return (
    <div className="bubbles_bg">
      <div className="container">
        <div className="login min-h-[95vh] grid items-center">
          <div>
            <div className="text-center pb-4"><Link to='/' className='_logo'><img src={logo}/></Link></div>
            <h2 className="text-center font-bold text-xl lg:text-2xl pb-4">Welcome Back!</h2>
            <form className="form" onSubmit={handleLogin}>
              <div className='input flex gap-1 flex-column align-start'>
                <label style={{ display: focusState.email ? 'block' : 'none'}}>Email</label>
                <input
                  name='email'
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={!focusState.email ? 'Email' : ''}
                  required
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                />
              </div>
              <div className='input flex gap-1 flex-column align-start'>
                <label style={{ display: focusState.password ? 'block' : 'none'}}>Password</label>
                <input
                  name='password'
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder={!focusState.password ? 'Password' : ''}
                  required
                  onFocus={() => handleFocus('password')}
                  onBlur={() => handleBlur('password')}
                />
              </div>
              <div className="d-flex justify-between checkbox">
                <div><input ref={checkboxRef} name='rememberMe' type="checkbox"/> Remember Me</div>
                <Link to='/forgotPassword'>Forgot Your Password?</Link>
              </div>
              <button className="btn btn-form" type="submit">Sign In</button>
              <p className="text-center">Don’t have an account? <Link to='/signup' className="font-bold underline">JOIN FOR FREE</Link></p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Login;