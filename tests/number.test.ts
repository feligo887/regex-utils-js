import { describe, expect, it } from "vitest";

import { numberOrFloatReg, strictDecimalsReg } from '../src';

describe ('金额正则测试', () => {
    it ('19.8n正数金额测试', () => {
        expect( numberOrFloatReg ('0.' ) ).toBeFalsy ();
        expect( numberOrFloatReg ('12.' ) ).toBeFalsy ();
        expect( numberOrFloatReg ('0.8' ) ).toBeFalsy ();
        expect( numberOrFloatReg ('111.888888888' ) ).toBeFalsy ();
        expect( numberOrFloatReg ('111.88888888' ) ).toBeTruthy ();
        expect( numberOrFloatReg ('19.8' ) ).toBeTruthy ();
    })
})

describe ('小数严格正则测试', () => {
    it ('合法性测试', () => {
        expect( strictDecimalsReg ('0.' ) ).toBeFalsy ();
        expect( strictDecimalsReg ('12.' ) ).toBeFalsy ();
        expect( strictDecimalsReg ('0.01' ) ).toBeTruthy ();
        expect( strictDecimalsReg ('00.0123' ) ).toBeTruthy ();
        expect( strictDecimalsReg ('00.0123' ) ).toBeTruthy ();
        expect( strictDecimalsReg ('11.22' ) ).toBeTruthy ();
    })
})