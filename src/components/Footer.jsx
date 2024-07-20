import React from 'react';
import { Link } from 'react-router-dom';
import { socialIcons } from '../assets';
import { logo } from '../assets';

import '../App.css';

const Footer = () => {
	return (
		<footer className="bg-footer-bg h-[300px] footer-con bg-cover bg-center">
			<div className="container">
				<div className="d-flex justify-between align-start">
					{/* First Column */}
					<div>
						<Link className="footer_logo slider-btn-sm" to="/">
							<img src={logo} alt="" />
						</Link>
						<p className='address'>234 Somewhere Avenue, Ikeja, Lagos, Nigeria.</p>
						<div className="socials d-flex">
							{socialIcons.map((icon) => (
								<img key={icon.alt} src={icon.img} alt={icon.alt} />
							))}
						</div>
					</div>

					{/* Second Column */}
					<div>
						<h3 className='text-lg font-semibold'> Useful Links</h3>
						<ul>
							<li className="nav_item">
								<Link to="" className="nav_link">
									About Us
								</Link>
							</li>
							<li className="nav_item">
								<Link to="" className="nav_link">
									Services
								</Link>
							</li>
							<li className="nav_item">
								<Link to="" className="nav_link">
									How It Works
								</Link>
							</li>
						</ul>
					</div>

					{/* Third Column */}
					<div>
						<h3 className='text-lg font-semibold'>Legal</h3>
						<ul className='links-con'>
							<li className="nav_item">
								<Link to="" className="nav_link">
									Terms of Service
								</Link>
							</li>
							<li className="nav_item">
								<Link to="" className="nav_link">
									Privacy Policy
								</Link>
							</li>
							<li className="nav_item">
								<Link to="" className="nav_link">
									Return Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<p className="copyright text-center mt-20 mb-0">
					© 2024 safeTra Nigeria   All rights reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
