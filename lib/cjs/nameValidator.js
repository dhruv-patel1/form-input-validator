"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameValidator = void 0;
const nameValidator = (name) => {
    //if name is greater than 30 characters => return false
    //if name has anything besides letters => return false
    const nameRegex = /^[a-zA-Z]+$/;
    if (name.length > 30 || !nameRegex.test(name)) {
        return false;
    }
    return true;
};
exports.nameValidator = nameValidator;
