export const formatCurrency = (amount, locale = 'en-US', currency = 'USD') => amount.toLocaleString(locale, {
  style: 'currency',
  currency
});
