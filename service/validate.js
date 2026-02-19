//HW

// Validate credit cards (8-16 numbers)
const validateCreditCard = text => {
    const pattern = /^[0-9]{8,16}$/
    return pattern.test(text)
}

//  Validate date DD.MM.YYYY
const validateDate1 = text => {
    const pattern = /^([0-2][0-9]|3[0-1])\.(0[0-9]|1[0-2])\.[0-9]{4}$/
    return pattern.test(text)
}

//  Validate date YYYY-MM-DD
const validateDate2 = text => {
    const pattern = /^[0-9]{4}-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1])$/
    return pattern.test(text)
}

//Phone Number (Format: +99(99)9999-9999)
const validatePhoneNumber = text => {
    const pattern = /^\+[0-9]{2}\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/
    return pattern.test(text)
}

//Number less and equals 255 (positive)
const validateOctet = text => {
    const pattern = /^(\d{1,2}|[0-1][0-9][0-9]|2[0-5]{2})$/
    return pattern.test(text)
}

export {validateCreditCard, validateDate1, validateDate2, validatePhoneNumber, validateOctet}