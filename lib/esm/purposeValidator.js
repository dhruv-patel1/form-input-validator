export const purposeValidator = (description) => {
    //checks for min characters and max characters in description
    //if within bounds (20 - 500) return true, else false
    if (description.length > 500 || description.length < 20) {
        return false;
    }
    return true;
};
