import { useState, useEffect, useRef } from 'react';
import { Link} from 'react-router-dom';
import { icon_close, icon_menu, logo } from '../assets';
import '../App.css'

const Header = () => {
    const [menu, setMenu] = useState(true);
    const handleMenu = () => setMenu(menu => !menu);

    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);

    const handleScroll = () => {
        const heroHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
        const scrollPosition = window.scrollY;
        setIsSticky(scrollPosition > heroHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
      <header className= {`${isSticky ? 'sticky' : ''}`} ref={headerRef}>
        <div className='container'>
          <nav className='d-flex justify-between'>
            <div className='d-flex justify-between'>
              <Link to="/"><img class="w-3/4 h-auto" src={logo}/></Link>   
              <img className='menu' onClick={handleMenu} src={menu ? icon_menu : icon_close}/> 
            </div>                
            <ul className={`nav_list d-flex ${menu ? 'disable' : ''}`}>
              <li className='nav_item'> <Link to="/" className='nav_link'>Home</Link></li>
              <li className='nav_item'> <Link to="/about" className='nav_link'>About Us</Link></li>
              <li className='nav_item'> <Link to="/services" className='nav_link'>Our Services</Link></li>
              <li className='nav_item'> <Link to="/support" className='nav_link'>Support</Link></li>
            </ul>
            <ul className={`nav_list d-flex ${menu ? 'disable' : ''}`}>                            
              {/* <li className='nav_item'><Link to='/login' className='btn btn-outline'>Sign In</Link></li>
              <li className='nav_item'><Link to='/signup' className='btn btn-primary'>Join SafeTra</Link></li> */}
              <div class="flex">
              <li className='nav_item'><Link to='/login'  class="flex-1 border border-customBlue text-[#48C5D5] font-bold py-3 px-6 rounded-l myBtnOutline">
                  Sign In
                </Link></li>
                <li className='nav_item'><Link to='/signup' class="flex-1 bg-customBlue text-white font-bold py-3 px-4 rounded-r myBtn">
                  Join SafeTra
                </Link></li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Header;