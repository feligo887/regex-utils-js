import { describe, expect, it } from 'vitest';

import {  loosePhoneReg, strictPhoneReg, telPhoneReg } from '../src';

describe ('宽松手机号码校验测试', () => {
    it ('普通手机号码测试:', () => {
        expect( loosePhoneReg ( '1222222222' ) ).toBeFalsy ();
    })
    it ('手机号码格式格式', () => {
        expect( loosePhoneReg ( '12343kjkjk' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '12345678999', '3-9' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '123数字' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '11111111111', '2-9' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '12913567890' ) ).toBeTruthy ();
        expect( loosePhoneReg ( '13313567890' ) ).toBeTruthy ();
        expect( loosePhoneReg ( '13913567890' ) ).toBeTruthy ();
    })
    it ('手机号码长度测试', () => {
        expect( loosePhoneReg ( '159980989769' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '1598698709' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '16898786754' ) ).toBeTruthy ();
    })
    it ('号段参数测试', () => {
        expect( loosePhoneReg ( '12898786754', '3-9' ) ).toBeFalsy ();
        expect( loosePhoneReg ( '12898786754', '1-9' ) ).toBeTruthy ();
    })
});

describe ('严格手机号码校验测试', () => {
    it ('严格普通手机号码测试:', () => {
        expect( strictPhoneReg ( '1222222222' ) ).toBeFalsy ();
    })
    it ('严格手机号码格式格式', () => {
        expect( strictPhoneReg ( '12343kjkjk' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '12345678999' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '123数字' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '11111111111' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '12913567890' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '18190678380' ) ).toBeTruthy ();
        expect( strictPhoneReg ( '13913567890' ) ).toBeTruthy ();
    })
    it ('严格手机号码长度测试', () => {
        expect( strictPhoneReg ( '159980989769' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '1598698709' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '18190678380' ) ).toBeTruthy();
    })
    it ('区号参数测试', () => {
        expect( strictPhoneReg ( '+08612898786754' ) ).toBeFalsy ();
        expect( strictPhoneReg ( '+008613898786754', true ) ).toBeFalsy ();
        expect( strictPhoneReg ( '+08613898786754', true ) ).toBeTruthy ();
        expect( strictPhoneReg ( '+8615898786754', true ) ).toBeTruthy ();
    })
});

describe ('国内固定电话号码测试', () => {
    it ('固定电话号码格式测试:', () => {
        expect( telPhoneReg ( '04098786544' ) ).toBeFalsy ();
        expect( telPhoneReg ( '040-276-87789877' ) ).toBeFalsy ();
        expect( telPhoneReg ( 'abc-028-1234' ) ).toBeFalsy ();
        expect( telPhoneReg ( '400-7898' ) ).toBeFalsy ();
        expect( telPhoneReg ( '400-789897799' ) ).toBeFalsy ();
        expect( telPhoneReg ( '4000-jhjh' ) ).toBeFalsy ();
        expect( telPhoneReg ( '4000-jhjh1237' ) ).toBeFalsy ();
        expect( telPhoneReg ( '04000-78989779' ) ).toBeFalsy ();
        expect( telPhoneReg ( '0400-78989779' ) ).toBeTruthy ();
        expect( telPhoneReg ( '0280-78989779' ) ).toBeTruthy ();
        expect( telPhoneReg ( '028-98678766' ) ).toBeTruthy ();
    })

    it ('固定电话号码-分机号码格式测试:', () => {
        expect( telPhoneReg ( '040-276-87789877', true ) ).toBeFalsy ();
        expect( telPhoneReg ( 'abc-028-1234', true  ) ).toBeFalsy ();
        expect( telPhoneReg ( '400-7898' , true ) ).toBeFalsy ();
        expect( telPhoneReg ( '400-789897799', true  ) ).toBeFalsy ();
        expect( telPhoneReg ( '4000-jhjh' , true)  ).toBeFalsy ();
        expect( telPhoneReg ( '4000-jhjh1237', true  ) ).toBeFalsy ();
        expect( telPhoneReg ( '04000-78989779', true ) ).toBeFalsy ();
        expect( telPhoneReg ( '028-98678766-8988900', true ) ).toBeFalsy ();
        expect( telPhoneReg ( '028-78989779-123', true ) ).toBeTruthy ();
        expect( telPhoneReg ( '0280-78989779-5687', true ) ).toBeTruthy ();
        expect( telPhoneReg ( '028-9867876-898800', true ) ).toBeTruthy ();
    })

});