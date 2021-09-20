"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneValidator = void 0;
const phoneValidator = (phoneNum) => {
    const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if (phoneRegex.test(phoneNum) && phoneNum.length < 16) {
        return true;
    }
    return false;
};
exports.phoneValidator = phoneValidator;
