const currencies = [
  { code: 'NGN', name: 'Nigerian Naira' },
  { code: 'USD', name: 'United States Dollar' },
];

const CurrencySelect = ({ selectedCurrency, onCurrencyChange }) => {
	return (
    <select
      value={selectedCurrency}
      onChange={onCurrencyChange}
      className="form__input"
    >
			<option value="">Select</option>
      {currencies.map(currency => (
        <option key={currency.code} value={currency.code}>
          {currency.name} ({currency.code})
        </option>
      ))}
    </select>
  );
};

export default CurrencySelect;