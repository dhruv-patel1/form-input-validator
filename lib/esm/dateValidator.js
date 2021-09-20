export const dateValidator = (date) => {
    //regex will test general format of date
    //doesn't handle dates where specific months have less than 31 days
    const dateRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (dateRegex.test(date)) {
        return true;
    }
    return false;
};
