export const emailValidator = (email:string):boolean =>{
    //test email input against regex to match valid email pattern
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(emailRegex.test(email)){
        return true;
    }
    return false;
}