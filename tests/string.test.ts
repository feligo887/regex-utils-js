import { describe, expect, it } from 'vitest';

import { generalEmailReg,  loosePhoneReg, strictPhoneReg, telPhoneReg, chineseReg, englishReg, englishNumberReg,
allStrReg, specialStrReg, } from '../src';

describe ('邮箱正则测试',  () => {

it ('常规邮箱格式校验', () => {

    expect ( generalEmailReg('14e4e.com') ).toBeFalsy ();
    expect ( generalEmailReg('14e4e@com') ).toBeFalsy ();
    expect ( generalEmailReg('18888.com') ).toBeFalsy ();
    expect ( generalEmailReg('zhangsan张三@qq.cn.com') ).toBeFalsy ();
    expect ( generalEmailReg('zhangsan@qq.com') ).toBeTruthy ();
    expect ( generalEmailReg('zhangsang_455hgfjgj@163.com') ).toBeTruthy ();
    expect ( generalEmailReg('zhangs_76an@yang.com') ).toBeTruthy ();
    expect ( generalEmailReg('888zhangsan123@yang.com') ).toBeTruthy ();
    expect ( generalEmailReg('zhangsan_123@yang.com') ).toBeTruthy ();
    expect ( generalEmailReg('zhangsan-123@yang.com') ).toBeTruthy ();
    expect ( generalEmailReg('zhangsan@qq.cn.com') ).toBeTruthy ();


} );

it ('常规邮箱格式校验(包含中文)', () => {

    expect ( generalEmailReg('zhangsan张三@qq.com', true ) ).toBeTruthy ();
    expect ( generalEmailReg('zhangsan张三@qq.cn.com', true) ).toBeTruthy ();
    expect ( generalEmailReg('zhangsan_张三@qq.com', true) ).toBeTruthy ();
    expect (  generalEmailReg('zhangsan_张三@qq.cn.com', true ) ).toBeTruthy ();

} );


} );


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

describe ('中文字符正则测试', () => {
    it ('中文字符测试', () => {
        expect ( chineseReg ('zhangsan' ) ).toBeFalsy ();
        expect ( chineseReg ('123' ) ).toBeFalsy ();
        expect ( chineseReg ('...@!!!' ) ).toBeFalsy ();
        expect ( chineseReg ('，' ) ).toBeFalsy ();
        expect ( chineseReg ('  ' ) ).toBeFalsy ();
        expect ( chineseReg ('中文' ) ).toBeTruthy ();

    })
    it ('中文字符长度范围测试', () => {
        expect ( chineseReg ('1234', [1, 2] ) ).toBeFalsy ();
        expect ( chineseReg ('中文三', [2, 2] ) ).toBeFalsy ();
        expect ( chineseReg ('', [0, 2] ) ).toBeTruthy ();
    });
});

describe ('英文字符正则测试', () => {
    it ('英文字符测试', () => {
        expect ( englishReg ('...@!!!' ) ).toBeFalsy ();
        expect ( englishReg ('，' ) ).toBeFalsy ();
        expect ( englishReg ('  ' ) ).toBeFalsy ();
        expect ( englishReg ('中文' ) ).toBeFalsy ();
        expect ( englishReg ('123' ) ).toBeFalsy ();
        expect ( englishReg ('zhangsan' ) ).toBeTruthy ();
        expect ( englishReg ('ADSDS' ) ).toBeTruthy ();
        expect ( englishReg ('zhangsanADSDS' ) ).toBeTruthy ();

    })
    it ('英文字符长度范围测试', () => {
        expect ( englishReg ('', [1, 2] ) ).toBeFalsy ();
        expect ( englishReg ('aaa', [2, 2] ) ).toBeFalsy ();
        expect ( englishReg ('', [0, 2] ) ).toBeTruthy ();
    });
});

describe ('英文数字字符正则测试', () => {
    it ('英文数字字符测试', () => {
        expect ( englishNumberReg ('...@!!!' ) ).toBeFalsy ();
        expect ( englishNumberReg ('，' ) ).toBeFalsy ();
        expect ( englishNumberReg ('  ' ) ).toBeFalsy ();
        expect ( englishNumberReg ('中文' ) ).toBeFalsy ();
        expect ( englishNumberReg ('123' ) ).toBeTruthy ();
        expect ( englishNumberReg ('zhangsan' ) ).toBeTruthy ();
        expect ( englishNumberReg ('ADSDS123' ) ).toBeTruthy ();
        expect ( englishNumberReg ('zhangsanADSDS123' ) ).toBeTruthy ();

    })
    it ('英文数字字符长度范围测试', () => {
        expect ( englishNumberReg ('', [1, 2] ) ).toBeFalsy ();
        expect ( englishNumberReg ('aaa', [2, 3] ) ).toBeTruthy ();
        expect ( englishNumberReg ('123', [2, 3] ) ).toBeTruthy ();
        expect ( englishNumberReg ('aaa123', [2, 6] ) ).toBeTruthy ();
        expect ( englishNumberReg ('', [0, 2] ) ).toBeTruthy ();
    });
});

describe ('所有格式字符校验正则测试', () => {
    it ('字符有效性测试', () => {
        expect ( allStrReg ('...@!!!' ) ).toBeTruthy ();
        expect ( allStrReg ('，' ) ).toBeTruthy ();
        expect ( allStrReg ('  ' ) ).toBeTruthy ();
        expect ( allStrReg ('bjbj' ) ).toBeTruthy ();
        expect ( allStrReg ('123s' ) ).toBeTruthy ();
        expect ( allStrReg ('zhangsan' ) ).toBeTruthy ();
        expect ( allStrReg ('ADSDS123', [ 1, 2] ) ).toBeFalsy ();
        expect ( allStrReg ('AD', [ 1, 2] ) ).toBeTruthy ();
        expect ( allStrReg ('zhangsanADSDS123' ) ).toBeTruthy ();

    })
});

describe ('特殊字符校验正则测试', () => {
    it ('特殊字符有效性测试', () => {
        expect ( specialStrReg ('!@#$%^&*()_+-=[]{}|;:",./<>?' ) ).toBeTruthy ();
        expect ( specialStrReg ('!a', '!@' ) ).toBeFalsy ();
        expect ( specialStrReg ('!@>', '!@>' ) ).toBeTruthy ();
    })
});