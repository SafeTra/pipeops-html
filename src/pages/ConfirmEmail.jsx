import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { logo, success, warning } from '../assets';
import '../App.css';
import { useEffect, useState } from 'react';
import { Loader } from '..';

const ConfirmEmail = () => {
	const [url, setUrl] = useSearchParams();
	const [btnText, setBtnText] = useState('');
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const token = url.get('token');
	const username = url.get('username');

	useEffect(() => {
		navigate('/confirm-email');
		const verifyUser = async () => {
			try {
				if (token) {
					const response = await fetch(
						`https://safetra-be.onrender.com/api/user/verify-email`,
						{
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({ token }),
						}
					);

					if (response.status === 200) {
						setLoading(false);
						setBtnText('verified');
					} else if (response.status === 400) {
						await fetch(
							`https://safetra-be.onrender.com/api/user/send-email-verification`,
							{
								method: 'POST',
								headers: { 'Content-Type': 'application/json' },
								body: JSON.stringify({ username }),
							}
						);
						setLoading(false);
						setBtnText('resend');
					} else {
						setLoading(false);
						setBtnText('invalid');
					}
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
									Generated Token
								</h2>
								<p className="lg:text-lg text-base py-4">
									The token you provided has expired and a new
									token has been generated. Please check your
									mail to verify your email. Thank you.
								</p>
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
									The token you provided isn't correct. <br />{' '}
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
