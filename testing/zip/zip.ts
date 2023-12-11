export const validateZip = (zip: string): boolean => {
    const regex = /^[0-9]{5}$/;
    return regex.test(zip);
}
