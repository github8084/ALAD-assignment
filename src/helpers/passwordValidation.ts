export function validatePassword(password: string): boolean {
    // Regular expressions for validation
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Optional if you want to include special characters
    const isValidLength = password.length >= 8 && password.length <= 16;

    return (
        hasLowerCase &&
        hasUpperCase &&
        hasNumber &&
        isValidLength
    );
}

