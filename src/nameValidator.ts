export const nameValidator = (name: string):boolean =>{
    //if name is greater than 30 characters => return false
    //if name has anything besides letters => return false
    const nameRegex = /^[a-zA-Z]+$/;
    if(name.length > 30 || !nameRegex.test(name)){
        return false;
    }
    return true;
}
