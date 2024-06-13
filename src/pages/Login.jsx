import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    
    const handleLogin = e => {
        e.preventDefault();
        /* const user = {email, password}; */
        setIsPending(true);
        /* fetch(`http://localhost:8000/login/?email=${user.email}&password=${user.password}`)
        .then(data => console.log(data)) */
        fetch('https://safetra-8eek.onrender.com/api/user/all-users').then(res => res.json())
        .then(data => console.log(data));

        /* /login?email=obifth%40gmail.com&password=kalilinux
            find user with same email & password ->
            if found, redirect to dashboard and use user data on dashboard
            else, give a pop-msg and redirect to sign up page after 2s
        */
    }

    return (
    <div className="bubbles_bg">
         <div className="container">
            <div className="login">
          <div className="text-center pb-4"><Link to='/' className='_logo'><img src={logo}/></Link></div>
          <h2 className="text-center font-bold text-xl lg:text-2xl pb-4">Welcome Back!</h2>
                <form className="form">
                <div className='input d-flex flex-column align-start'>
                        <label>Email</label>
                        <input name='email' type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email address' required/>
                    </div>
                    <div className='input d-flex flex-column align-start'>
                        <label>Password</label>
                        <input name='password' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password (min. 8 character)' required/>
                    </div>
                    <div className="d-flex justify-between checkbox">
                        <div><input type="checkbox"/> Remember Me</div>
                        <a>Forgot Your Password?</a>
                    </div>
                    {!isPending && <button className="btn btn-form" type="submit" onClick={handleLogin}>Sign In</button>}
                    {isPending && <button className="btn btn-form" type="submit" onClick={handleLogin}>Signing In...</button>}
                    <p className=" text-center">Don’t have an account? <Link to='/signup' className="font-bold underline">JOIN FOR FREE</Link></p>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Login;