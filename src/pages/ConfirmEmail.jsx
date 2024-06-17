import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { logo, success, warning } from '../assets';
import '../App.css';
import { useEffect, useState } from 'react';
import { Loader } from '..';

const ConfirmEmail = () => {
	const [url] = useSearchParams();
	const [btnText, setBtnText] = useState('');
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const token = url.get('token');
	const username = url.get('username');

	const getNewToken = async (username) => {
		await fetch(
			`https://safetra-be.onrender.com/api/v1/auth/send-email-verification`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username }),
			}
		);
	}

	useEffect(() => {
		navigate('/confirm-email');
		const verifyUser = async () => {
			try {
				if (token) {
					const response = await fetch(
						`https://safetra-be.onrender.com/api/v1/auth/verify-email`,
						{
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({ token }),
						}
					);
					console.log(await response.json());

					setLoading(false);

					if (response.status === 200) setBtnText('verified');
					else if (response.status === 400) setBtnText('resend');
					else if (response.status === 403) setBtnText('invalid');
				}
			} catch (error) {
				console.log('Error during email confirmation', error);
			}
		};

		verifyUser();
	}, [token]);

	return !loading ? (
		<div className="bubbles_bg">
			<div className="container">
				<div className="signup min-h-[95vh] grid items-center">
					<div className="text-center">
						<Link to="/" className="_logo pb-6">
							<img src={logo} alt="Logo" />
						</Link>
						{btnText === 'verified' && (
							<>
								<h2 className="font-bold text-xl lg:text-3xl text-[#EA580C]">
									Email Verified
								</h2>
								<img
									className="text-center mx-auto py-8 w-20"
									src={success}
									alt="Success Icon"
								/>
								<p className="lg:text-lg text-base">
									You have successfully verified your email
									address
								</p>
								<Link
									to="/login"
									className="btn btn-form w-3/4 lg:w-1/2 mt-8"
								>
									Login to proceed
								</Link>
							</>
						)}
						{btnText === 'resend' && (
							<>
								<h2 className="font-bold text-xl lg:text-3xl text-[#EA580C]">
									Generate a new Token
								</h2>
								<p className="lg:text-lg text-base py-4">
									The token you provided has expired as it has been more than 10 minutes you got the mail. Please click the link below to generate a new token to get you registered as the token you provided has expired. Thank you.
								</p>
								<button onClick={() => getNewToken(username)}>Click here to </button>
							</>
						)}
						{btnText === 'invalid' && (
							<>
								<h2 className="font-bold text-xl lg:text-3xl text-[#EA580C]">
									Invalid Token
								</h2>
								<img
									className="text-center mx-auto pt-6 w-20"
									src={warning}
									alt="Warning Icon"
								/>
								<p className="lg:text-lg text-base py-6">
									The token you provided is not correct. <br />
									Make sure you have the right token.
								</p>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="grid place-items-center min-h-screen">
			<Loader />
		</div>
	);
};

export default ConfirmEmail;
