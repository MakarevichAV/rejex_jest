import {validateECMAScriptText, validateDomainZone, validateEmail} from './validate'
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










