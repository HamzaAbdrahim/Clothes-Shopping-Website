export const nameRegex:RegExp = /^[\p{L} .'-]+$/u;
export const phoneRegex:RegExp = /^\d{10}$/;
export const emailRegex:RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordRegex:RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const arabicNameRegex:RegExp  =  /^[\u0600-\u06FFA-Za-z\s]+$/;
export const dinarPriceRegex = /^\d+(?:\.\d{1,2})?$/;
