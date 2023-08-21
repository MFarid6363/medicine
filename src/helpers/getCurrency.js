export const getCurrency = (id) => {
  if (id == 2) {
    return "€";
  }
  else{
    return "$"
  }
};
export const getCurrencyName = (id) => {
  if (id == 2) {
    return "EUR";
  }
  else{
    return "USD"
  }
};
