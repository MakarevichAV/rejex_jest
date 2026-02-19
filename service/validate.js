const validateECMAScriptText = text => {
    const pattern = /^ *ecmascript([1-9]|1[0-6])?$/i
    return pattern.test(text)
}

const validateDomainZone = text => {
    // const pattern = /^[a-z0-9_.-]+\.(com|org|il)$/i
    // const pattern = /^(\w|[.-])+\.(com|org|il)$/i //\w = a-z0-9_
    const pattern = /^\w(\w|[.-])*\.(com|org|il)$/i
    return pattern.test(text)
}

const validateEmail = text => {
    const pattern = /^\w(\w|-|\.)*@[a-z0-9](\w|-|\.)*\.[a-z]{2,6}$/i
    return pattern.test(text)
}


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

export {validateECMAScriptText, validateDomainZone, validateEmail, validateCreditCard,
        validateDate1, validateDate2, validatePhoneNumber, validateOctet}