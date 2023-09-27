export const formatCurrency  = (price: number):string => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
    minimumFractionDigits: 0,
	}).format(price);
};
