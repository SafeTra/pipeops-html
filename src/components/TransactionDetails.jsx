// import styles from "./TransactionDetails.module.css";

function TransactionDetails() {
	return (
		<div>
			<div className="TransactionDetails1">
				<h4 className="font-medium">Transaction Details</h4>
				<div className="border flex mt-6 mb-6 py-4 px-5">
					<div className="item">
						<h5 className="font-medium">Selling a Mansion</h5>
						<ul>
							<li>Buildings/Landed Properties</li>
							<li>This house is along sea side estate.</li>
							<li>Inspection Period: 2 days</li>
						</ul>
					</div>
					<div className="item">
						<h5 className="font-medium">NGN78,000,000.00</h5>
					</div>
				</div>
				<button className="AddItem py-2 px-3 rounded-md">Add Item</button>
			</div>

			<div className="TransactionDetails2 flex mt-20 mb-6">
				<div className="order-first">
					<h4 className="font-medium">Transaction Details</h4>
					<ul>
						<li>Sub total:</li>
						<li>Shipping fee:</li>
						<li>
							Escrow fee paid by: <span>Buyer & Seller 50/50</span>
						</li>
					</ul>
				</div>
				<div className="order-last">
					<h4 className="font-medium text-purple-700">
						How the totals are calculated
					</h4>
					<ul>
						<li>NGN78,000,000.00</li>
						<li>NGN2,000.00</li>
						<li>NGN4,000.00</li>
					</ul>
				</div>
			</div>
			<hr />
			<div className="TransactionTotal flex mt-6">
				<ul className="narrations order-first">
					<li>Buying Price:</li>
					<li>Seller Earnings:</li>
				</ul>
				<ul className="amount order-last">
					<li>NGN184,000,000.00</li>
					<li>NGN190,000.00</li>
				</ul>
			</div>
			<p className="customer-notice py-6 text-center text-gray-500">
				All prices are in NGN, Taxes applies
			</p>
			<div className="BuyerContainer">
				<h3>Buyer Details</h3>
				<div className="BuyerDetails pt-6 pb-5">
					<div>
						<fieldset className="Email border border-solid border-grey-300 p-2 text-sm">
							<legend>Email</legend>
							<input
								className="pr-20 py-0 focus:outline-none"
								type="email"
								placeholder="fidelis@yopmail.com"
							/>
						</fieldset>
					</div>
					<div className="CountryMobile border border-solid border-grey-300 py-1 px-5">
						<input
							className="focus:outline-none py-1"
							type="number"
							value="🏁 +234"
						/>
					</div>
				</div>
			</div>
			<footer>
				<div>
					<input type="checkbox" id="agree_to_terms" />
					<label for="agree_to_terms">
						I have read and agree to the{" "}
						<a href="terms_and_conditions.html">
							safeTra Terms & Conditions <span>and</span>Privacy Policy
						</a>
						.
					</label>
				</div>
				<button className="ActionBtn">Start Transaction</button>
			</footer>
		</div>
	);
}

export default TransactionDetails;