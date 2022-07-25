import { describe, expect, it } from 'vitest';

import { loosePhoneReg, strictPhoneReg } from '../src';

describe ('宽松手机号码校验测试', () => {
    it ('普通手机号码测试:', () => {
        expect( loosePhoneReg ( '1222222222' ) ).toBeFalsy ();
    })
    it ('手机号码格式格式', () => {
        expect( loosePhoneReg ( '12343kjkjk' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '12345678999' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '123数字' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '11111111111' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '12913567890' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '13313567890' ) ).toBeTruthy ();
        expect( loosePhoneReg ( '13913567890' ) ).toBeTruthy ();
    })
    it ('手机号码长度测试', () => {
        expect( loosePhoneReg ( '159980989769' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '1598698709' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '16898786754' ) ).toBeTruthy ();
    })
    it ('号段参数测试', () => {
        expect( loosePhoneReg ( '12898786754' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '12898786754', '1-9' ) ).toBeTruthy ();
    })
});

describe ('严格手机号码校验测试', () => {
    it ('普通手机号码测试:', () => {
        expect( strictPhoneReg ( '1222222222' ) ).toBeFalsy ();
    })
    it ('手机号码格式格式', () => {
        expect( strictPhoneReg ( '12343kjkjk' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '12345678999' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '123数字' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '11111111111' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '12913567890' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '13313567890' ) ).toBeTruthy ();
        expect( strictPhoneReg ( '13913567890' ) ).toBeTruthy ();
    })
    it ('手机号码长度测试', () => {
        expect( strictPhoneReg ( '159980989769' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '1598698709' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '16898786754' ) ).toBeTruthy ();
    })
    it ('区号参数测试', () => {
        expect( strictPhoneReg ( '+08612898786754' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '+008613898786754', true ) ).toBeFalsy ();
        expect( strictPhoneReg ( '+08613898786754', true ) ).toBeTruthy ();
        expect( strictPhoneReg ( '+8615898786754', true ) ).toBeTruthy ();
    })
});