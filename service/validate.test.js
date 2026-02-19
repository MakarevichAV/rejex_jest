import {validateECMAScriptText, validateDomainZone, validateEmail, validateOctet,
        validateCreditCard, validateDate1, validateDate2, validatePhoneNumber} from './validate'
import {describe, test, expect} from '@jest/globals'

describe('validateECMAScriptText', () => {
    test('should return true if Ecmascript is provided', () => {
        expect(validateECMAScriptText('   ecmascript')).toBe(true)
        expect(validateECMAScriptText('ecmascript')).toBe(true)
        expect(validateECMAScriptText('  ecmascript6')).toBe(true)
        expect(validateECMAScriptText('  ecmascript16')).toBe(true)
        expect(validateECMAScriptText('  ECMAScript')).toBe(true)
    })
    test('should return false if Ecmascript is not provided', () => {
        expect(validateECMAScriptText('   ecmascrip')).toBe(false)
        expect(validateECMAScriptText('ecmascript0')).toBe(false)
        expect(validateECMAScriptText('  ecmascript19')).toBe(false)
        expect(validateECMAScriptText('10  ecmascript16')).toBe(false)
    })
})

describe('validateDomainZone', () => {
    test('domain zone should be valid', () => {
        expect(validateDomainZone('abracadabra.il')).toBeTruthy()
        expect(validateDomainZone('abracadabra.com')).toBeTruthy()
        expect(validateDomainZone('abracadabra.org')).toBeTruthy()
        expect(validateDomainZone('abra-cadabra.il')).toBeTruthy()
        expect(validateDomainZone('abra-cadabra2026.il')).toBeTruthy()
        expect(validateDomainZone('abra_cadabra2026.il')).toBeTruthy()
    })
    test('domain zone should not be valid', () => {
        expect(validateDomainZone('abracadabra.ru')).toBeFalsy()
        expect(validateDomainZone('.com')).toBeFalsy()
        expect(validateDomainZone('abracadabraorg')).toBeFalsy()
        expect(validateDomainZone('abra$cadabra.il')).toBeFalsy()
    })
})


describe('validateEmail', () => {
    test('Email should be valid', () => {
        expect(validateEmail('john-smith1990@gmail.com')).toBeTruthy()
        expect(validateEmail('0@g.uk')).toBeTruthy()
        expect(validateEmail('john-smith@walla.co.il')).toBeTruthy()
    })
    test('Email should not be valid', () => {
        expect(validateEmail('john-smith1990-gmail.com')).toBeFalsy()
        expect(validateEmail('john@smith1990@gmail.com')).toBeFalsy()
        expect(validateEmail('@gmail.com')).toBeFalsy()
        expect(validateEmail('john-smith1990@gmail.m')).toBeFalsy()
        expect(validateEmail('john$smith1990@gmail.com')).toBeFalsy()
        expect(validateEmail('john-smith1990@gmail.commerce')).toBeFalsy()
        expect(validateEmail('john-smith1990@gmail')).toBeFalsy()
    })
})



//HW

// Validate credit cards (8-16 numbers)
describe('validateCreditCard', () => {
    test('Card number should be valid', () => {
        expect(validateCreditCard('12543678')).toBeTruthy()
        expect(validateCreditCard('6606667778')).toBeTruthy()
        expect(validateCreditCard('1234567891011127')).toBeTruthy()
    })
    test('Card number should not be valid', () => {
        expect(validateCreditCard('1234567')).toBeFalsy()
        expect(validateCreditCard('123456789123456789')).toBeFalsy()
        expect(validateCreditCard('12345a6789')).toBeFalsy()
    })
})

//  Validate date DD.MM.YYYY
describe('validateDate1', () => {
    test('Date should be valid', () => {
        expect(validateDate1('01.01.1990')).toBeTruthy()
        expect(validateDate1('31.12.2026')).toBeTruthy()
    })
    test('Date should not be valid', () => {
        expect(validateDate1('32.09.1999')).toBeFalsy()
        expect(validateDate1('01.13.2000')).toBeFalsy()
        expect(validateDate1('02.e3.2222')).toBeFalsy()
        expect(validateDate1('02/11/2222')).toBeFalsy()
        expect(validateDate1('02-04-2222')).toBeFalsy()
    })
})

//  Validate date YYYY-MM-DD
describe('validateDate2', () => {
    test('Date should be valid', () => {
        expect(validateDate2('1990-01-01')).toBeTruthy()
        expect(validateDate2('2026-12-31')).toBeTruthy()
    })
    test('Date should not be valid', () => {
        expect(validateDate2('1999-09-32')).toBeFalsy()
        expect(validateDate2('2000-13-01')).toBeFalsy()
        expect(validateDate2('2222-e3-02')).toBeFalsy()
        expect(validateDate2('2222/11/02')).toBeFalsy()
        expect(validateDate2('2222.04.02')).toBeFalsy()
    })
})

//Phone Number (Format: +99(99)9999-9999)
describe('validatePhoneNumber', () => {
    test('Phone number should be valid', () => {
        expect(validatePhoneNumber('+99(99)9999-9999')).toBeTruthy()
    })
    test('Phone number should not be valid', () => {
        expect(validatePhoneNumber('+99(99)9999_9999')).toBeFalsy()
        expect(validatePhoneNumber('99(99)9999-9999')).toBeFalsy()
        expect(validatePhoneNumber('+99999999-9999')).toBeFalsy()
        expect(validatePhoneNumber('+99(99)999f-9999')).toBeFalsy()
        expect(validatePhoneNumber('+99(99)99999999')).toBeFalsy()
    })
})

//Number less and equals 255 (positive)
describe('validateOctet', () => {
    test('Octet should be valid', () => {
        expect(validateOctet('192')).toBeTruthy()
        expect(validateOctet('0')).toBeTruthy()
        expect(validateOctet('255')).toBeTruthy()
    })
    test('Octet should not be valid', () => {
        expect(validateOctet('-1')).toBeFalsy()
        expect(validateOctet('256')).toBeFalsy()
        expect(validateOctet('ff')).toBeFalsy()
    })
})






