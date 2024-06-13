import { Link } from 'react-router-dom';
import { footer_logo, socialIcons } from '../assets';
import '../App.css'

const Footer = () => {
	return (
		<footer className="pink_overlay">
			<div className="container">
				<div className="d-flex justify-between align-start">					
					<Link className="footer_logo slider-btn-sm" to="/">
						<img src={footer_logo} alt='logo'/>
					</Link>
					<div>
						<h3>Useful Links</h3>
						<ul>
							<li className="nav_item"><Link to='' className="nav_link">About Us</Link></li>
							<li className="nav_item"><Link to='' className="nav_link">Services</Link></li>
							<li className="nav_item"><Link to='' className="nav_link">How It Works</Link></li>
						</ul>
					</div>
					<div>
						<h3>Legal</h3>
						<ul>
							<li className="nav_item"><Link to='' className="nav_link">Terms of service</Link></li>
							<li className="nav_item"><Link to='' className="nav_link">Privacy policy</Link></li>
							<li className="nav_item"><Link to='' className="nav_link">Return policy</Link></li>
						</ul>
					</div>
					<div>
						<h3>Address</h3>
						<p>234 Somewhere avenue, Ikeja, Lagos, <br /> Nigeria.</p>
						<div className="socials d-flex">{socialIcons.map(icon => <img key={icon.alt} src={icon.img} alt={icon.alt} />)}</div>
					</div>
				</div>
				<p className="copyright text-center fw-700">&copy; 2024 safeTra Nigeria &nbsp; All rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
