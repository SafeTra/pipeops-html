import buyerSeller from '../assets/images/buyerSeller.svg';
import HowItWork from '../components/HowItWork';
import FeedBack from '../components/FeedBack';
import CoreValues from '../components/CoreValues';
import LogoSection from '../components/LogoSection.jsx';
import l1 from '../assets/images/l1.png';
import l2 from '../assets/images/l2.png';
import l3 from '../assets/images/l3.png';
import l4 from '../assets/images/l4.png';
import l5 from '../assets/images/l5.png';
import l6 from '../assets/images/l6.png';
import { Link } from 'react-router-dom';


const logos = [
	l1, l2, l3, l4, l5, l6
	];

const Home = () => {
	return <div>

	<div class="bg-hero-bg h-[85vh] bg-cover bg-center">
		<div class="container mx-auto px-4 py-16 flex items-center">
			
			<div class="w-1/2 p-16">
			<h1 class="text-4xl md:text-6xl font-bold leading-loose">Your Trusted Escrow Partner:</h1>
			<p class="mt-9 text-lg text-opacity-80 md:text-xl leading-snug">SaftTra Ensures Safe Online Transactions</p>
			
			<Link to="/services">
                <button className="bg-customBlue text-white mt-10 font-bold py-4 px-12 rounded myBtn">
                    Get Started with SafeTra
                </button>
            </Link>

			</div>
			
			<div class="w-1/2">
				<img src={buyerSeller} alt="Hero Image" class="custom-image" />
			</div>

		</div>
	</div>
	<HowItWork />
	<FeedBack />
	<CoreValues />
	<LogoSection logos={logos} />
	



</div>

};

export default Home;
