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

export {validateECMAScriptText, validateDomainZone, validateEmail}