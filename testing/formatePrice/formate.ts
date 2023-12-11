export function roundPrice(price: number, format: string = '%PRICE% SEK'): string {
    const roundedPrice = Math.ceil(price * 100) / 100;
    const formattedPrice = roundedPrice.toFixed(2);
    const currency = format.replace('%PRICE%', '').trim();
    const isCurrencyStart = format.startsWith(currency);
    return isCurrencyStart ? `${currency} ${formattedPrice}` : `${formattedPrice} ${currency}`;
}
