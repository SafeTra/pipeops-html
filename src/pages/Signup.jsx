import '../App.css'
import { useState } from "react";
import { Link, useNavigate} from 'react-router-dom';
import { icon_close_regular, logo } from "../assets";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [menu, setMenu] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = e => {
      e.preventDefault();
      const newUser = {email, username, password};
      setIsPending(true);

      fetch('https://safetra-8eek.onrender.com/api/user/register', {
          method: 'POST',
          headers: {"Content-Type": "application/type"},
          body: JSON.stringify(newUser)
      }).then(() => {setIsPending(false); navigate('/authenticate')}
      ).catch(err => {console.log(err.message);setError(err.message); navigate('/signup')})
    }
    
    return (
    <div className="bubbles_bg">
      <div className="container">
        <div className="d-flex justify-between">
          {error && !menu && <div className="d-flex justify-between err-msg w-30">
            <div className="d-flex">
                <img src={error}/>
                <div className="font-bold">{error}</div>
            </div>
            {!menu && <img onClick={() => setMenu(!menu)} src={icon_close_regular} />}
          </div>}
        </div>
        <div className="signup">
          <div className="text-center pb-4"><Link to='/' className='_logo'><img src={logo}/></Link></div>
          <h2 className="text-center font-bold text-xl lg:text-2xl pb-4">Join For Free</h2>
          <form className="form">
            <div className='input d-flex flex-column align-start'>
                <label>Email</label>
                <input name='email' type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email address' required/>
            </div>
            <div className='input d-flex flex-column align-start'>
                <label>Username</label>
                <input name='username' type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter full name' required/>
            </div>
            <div className='input d-flex flex-column align-start'>
                <label>Password</label>
                <input name='password' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password (min. 8 character)' required/>
            </div>

            {/* <Input label="Email" name="email" placeholder="Email address"/>
            <Input label="Username" name="text"  placeholder=""/>
            <Input label="Password" name="password" placeholder="Password (min. 8 character)"/> */}
            <div className="checkbox d-flex fw-500"><input required type="checkbox"/><div>I agree to <a href="#">Terms & Conditions</a></div></div>
            {!isPending && <button className="btn btn-form" type="submit" onClick={handleSubmit}>Sign In</button>}
            {isPending && !menu && <button className="btn btn-form" type="submit" onClick={handleSubmit}>Signing In...</button>}
            {menu && <button className="btn btn-form" type="submit" onClick={handleSubmit}>Sign In</button>}
            <p className=" text-center">Already have an account? <Link to="/login" className="font-bold underline">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
    );
}

export default Signup;