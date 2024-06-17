// import styles from "./ItemCategory.module.css";

const ItemCategory = () => {
	return (
		<div>
			<hr />
			<div>
				<fieldset className="border border-solid border-grey-300 p-3 mt-7">
					<legend className="text-sm text-gray-400 ">
						Item Category
					</legend>
					<input type="text" value="Selling a Mansion" />
				</fieldset>
			</div>
			<div className="profile lg: ">
				<div className="buyer my-5">
					<fieldset className="border border-solid border-grey-300 p-3">
						<legend className="text-gray-400 text-sm">
							Profile
						</legend>
						<select name="selectedProfile" defaultValue="Buyer">
							<option value="buyer">Buyer</option>
							<option value="seller">Seller</option>
						</select>
					</fieldset>
				</div>
				<div className="currency">
					<fieldset className="border border-solid border-grey-300 p-3">
						<legend className="text-gray-400 text-sm">
							Currency
						</legend>
						<select name="selectedFruit" defaultValue="NGN">
							<option value="ngn">NGN</option>
							<option value="usd">USD</option>
						</select>
					</fieldset>
				</div>
				<div className="InspectionPeriod my-5">
					<fieldset className="border border-solid border-grey-300 p-3">
						<legend className="text-gray-400 text-sm">
							Inspection Period (days)
						</legend>
						<p>2</p>
					</fieldset>
				</div>
				<div className="InspectionPeriod"></div>
			</div>
		</div>
	);
};

export default ItemCategory;
