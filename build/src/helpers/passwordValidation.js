export function validatePassword(password) {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password.length >= 8 && password.length <= 16;
    return (hasLowerCase &&
        hasUpperCase &&
        hasNumber &&
        isValidLength);
}
//# sourceMappingURL=passwordValidation.js.map