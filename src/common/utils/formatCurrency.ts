export const formatCurrency = (
  incomingValue: number,
  locale = 'pt-BR',
  currency = 'BRL',
): string => {
  const formattedCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(incomingValue);

  return formattedCurrency;
};
