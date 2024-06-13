
import {security_shield} from "../assets"
import { Input } from "..";

const Authenticate = () => {
    return (
      <div className="bubbles_bg">
        <div className="container">
          <div className="authenticate min-h-[95vh] grid items-center">
            <div>
              <h2 className="font-bold text-center text-2xl lg:text-3xl pb-3">Set up two-step verification</h2>
              <p>Please check your email adrress. A verification code have been sent to you when you registered.</p>
              <form>
                <div className="d-flex">
                  <Input name="text" label="Country code" placeholder="+234" width="w-30"/>
                  <Input name="number" label="Phone number" placeholder="000 000 0000" width="w-70"/>
                </div>
                <div className="d-flex security">
                  <img src={security_shield}/>
                  <p className="m-0">Your security is very important to us at safe tra, hence we should send you a verification code each time you log into your device.</p>
                </div>
                <button className="btn btn-form" type="submit">Send Code</button>
              </form>
              <div className="text-center font-bold"><a href="#">Sign out</a></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Authenticate;
