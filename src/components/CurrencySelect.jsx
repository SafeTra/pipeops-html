const currencies = [
  { code: 'USD', name: 'United States Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'SEK', name: 'Swedish Krona' },
  { code: 'NZD', name: 'New Zealand Dollar' },
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