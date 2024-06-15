import { currencies } from '../data/constant';

const CurrencySelect = (selectedCurrency, onCurrencyChange) => {
	return (
		<select
			value={selectedCurrency}
			onChange={onCurrencyChange}
			className="form__input"
		>
			{currencies.map(currency => (
				<option key={currency.code} value={currency.code}>
					{currency.name} ({currency.code})
				</option>
			))}
		</select>
	);
};

export default CurrencySelect;
