export const isEmailValid = (email: string): boolean => {
    return email.indexOf("@") > -1;
}
