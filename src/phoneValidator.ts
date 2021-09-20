export const phoneValidator = (phoneNum: string):boolean =>{
    const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if(phoneRegex.test(phoneNum) && phoneNum.length < 16){
        return true;
    }
    return false;
}