import { describe, expect, it } from "vitest";

import { numberOrFloatReg, integerReg, strictDecimalsReg, looseDecimalsReg } from '../src';

describe ('金额正则测试', () => {
    it ('19.8n正数金额测试', () => {
        expect( numberOrFloatReg ('0.' ) ).toBeFalsy ();
        expect( numberOrFloatReg ('12.' ) ).toBeFalsy ();
        expect( numberOrFloatReg ('0.8' ) ).toBeFalsy ();
        expect( numberOrFloatReg ('0..8' ) ).toBeFalsy ();
        expect( numberOrFloatReg ('111.888888888' ) ).toBeFalsy ();
        expect( numberOrFloatReg ('111.88888888' ) ).toBeTruthy ();
        expect( numberOrFloatReg ('19.8' ) ).toBeTruthy ();
    })
})

describe ('整数正则测试', () => {

    it ('合法整数测试', () => {
        expect(  integerReg ('0.' ) ).toBeFalsy ();
        expect(  integerReg ('12.88' ) ).toBeFalsy ();
        expect(  integerReg ('-12.88' ) ).toBeFalsy ();
        expect(  integerReg ('012' ) ).toBeFalsy ();
        expect(  integerReg ('0012' ) ).toBeFalsy ();
        expect(  integerReg ('-12' ) ).toBeFalsy ();
        expect(  integerReg ('12' ) ).toBeTruthy ();
        expect(  integerReg ('102' ) ).toBeTruthy ();
        expect(  integerReg ('-102', true ) ).toBeTruthy ();
    })
})

describe ('小数正则测试', () => {

    it ('弱校验小数测试', () => {
        expect( looseDecimalsReg ('0.' ) ).toBeFalsy ();
        expect(  looseDecimalsReg ('12.' ) ).toBeFalsy ();
        expect( looseDecimalsReg ('12.21' ) ).toBeTruthy ();
        expect( looseDecimalsReg ('00.0123' ) ).toBeTruthy ();
        expect( looseDecimalsReg ('00.0123' ) ).toBeTruthy ();
        expect( looseDecimalsReg ('11.22' ) ).toBeTruthy ();
        expect( looseDecimalsReg ('-11.22' ) ).toBeTruthy ();
        expect( looseDecimalsReg ('-0.22' ) ).toBeTruthy ();
    })

    it ('合法性测试', () => {
        expect( strictDecimalsReg ('0.' ) ).toBeFalsy ();
        expect( strictDecimalsReg ('12.' ) ).toBeFalsy ();
        expect( strictDecimalsReg ('0.0123' ) ).toBeFalsy ();
        expect( strictDecimalsReg ('00.0123' ) ).toBeFalsy ();
        expect( strictDecimalsReg ('013.88' ) ).toBeFalsy ();
        expect( strictDecimalsReg ('-0.0123' ) ).toBeFalsy ();

        // 需要处理此问题 TODO
        // expect( strictDecimalsReg ('-0.01', { minus: true } ) ).toBeTruthy ();
        expect( strictDecimalsReg ('12.21' ) ).toBeTruthy ();
    })
})