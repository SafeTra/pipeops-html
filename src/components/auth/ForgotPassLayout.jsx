import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';

const ForgotPassLayout = ({ children, title, desc, }) => {
  ForgotPassLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string,
  };
  return (
    <div
      className="bubbles_bg"
    >
      <div className="flex-1 hidden md:block"></div>
      <div className="container">
        <div className="forgotPass">
        <div className="text-center pb-16"><Link to='/' className='_logo'><img src={logo}/></Link></div>
          <div>
            <h2 className="font-[700] text-[rgb(234,88,12)] text-center font-[inter] text-[18px]">
              {title}
            </h2>
            <p className="text-center text-[#000] font-[400] p-8 md:pl-16 md:pr-16 text-[16px] font-[inter]">
              {desc}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};


export default ForgotPassLayout;
