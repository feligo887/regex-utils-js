import { describe, expect, it } from 'vitest';

import { generalEmailReg, loosePhoneReg, strictPhoneReg, chinaTelPhoneReg, telPhoneReg, domainUrlReg, netWorkUrlReg,
  looseIdCardReg, strictIdCardReg, passwordReg, fieldNameReg, hexColorReg, moneyReg, thousandsMoneyReg,
  ipReg } from '../src';

describe ( '邮箱正则测试', () => {

  it ( '常规邮箱格式校验', () => {

    expect ( generalEmailReg ( '14e4e.com' ) ).toBeFalsy ();

    expect ( generalEmailReg ( '14e4e@com' ) ).toBeFalsy ();

    expect ( generalEmailReg ( '18888.com' ) ).toBeFalsy ();

    expect ( generalEmailReg ( 'zhangsan张三@qq.cn.com' ) ).toBeFalsy ();

    expect ( generalEmailReg ( 'zhangsan@qq.com' ) ).toBeTruthy ();

    expect ( generalEmailReg ( 'zhangsang_455hgfjgj@163.com' ) ).toBeTruthy ();

    expect ( generalEmailReg ( 'zhangs_76an@yang.com' ) ).toBeTruthy ();

    expect ( generalEmailReg ( '888zhangsan123@yang.com' ) ).toBeTruthy ();

    expect ( generalEmailReg ( 'zhangsan_123@yang.com' ) ).toBeTruthy ();

    expect ( generalEmailReg ( 'zhangsan-123@yang.com' ) ).toBeTruthy ();

    expect ( generalEmailReg ( 'zhangsan@qq.cn.com' ) ).toBeTruthy ();

  } );

  it ( '常规邮箱格式校验(包含中文)', () => {

    expect ( generalEmailReg ( 'zhangsan张三@qq.com', true ) ).toBeTruthy ();

    expect ( generalEmailReg ( 'zhangsan张三@qq.cn.com', true ) ).toBeTruthy ();

    expect ( generalEmailReg ( 'zhangsan_张三@qq.com', true ) ).toBeTruthy ();

    expect ( generalEmailReg ( 'zhangsan_张三@qq.cn.com', true ) ).toBeTruthy ();

  } );

} );

describe ( '宽松手机号码校验测试', () => {

  it ( '普通手机号码测试:', () => {

    expect ( loosePhoneReg ( '1222222222' ) ).toBeFalsy ();

  } );

  it ( '手机号码格式格式', () => {

    expect ( loosePhoneReg ( '12343kjkjk' ) ).toBeFalsy ();

    expect ( loosePhoneReg ( '12345678999', '3-9' ) ).toBeFalsy ();

    expect ( loosePhoneReg ( '123数字' ) ).toBeFalsy ();

    expect ( loosePhoneReg ( '11111111111', '2-9' ) ).toBeFalsy ();

    expect ( loosePhoneReg ( '12913567890' ) ).toBeTruthy ();

    expect ( loosePhoneReg ( '13313567890' ) ).toBeTruthy ();

    expect ( loosePhoneReg ( '13913567890' ) ).toBeTruthy ();

  } );

  it ( '手机号码长度测试', () => {

    expect ( loosePhoneReg ( '159980989769' ) ).toBeFalsy ();

    expect ( loosePhoneReg ( '1598698709' ) ).toBeFalsy ();

    expect ( loosePhoneReg ( '16898786754' ) ).toBeTruthy ();

  } );

  it ( '号段参数测试', () => {

    expect ( loosePhoneReg ( '12898786754', '3-9' ) ).toBeFalsy ();

    expect ( loosePhoneReg ( '12898786754', '1-9' ) ).toBeTruthy ();

  } );

} );

describe ( '严格手机号码校验测试', () => {

  it ( '严格普通手机号码测试:', () => {

    expect ( strictPhoneReg ( '1222222222' ) ).toBeFalsy ();

  } );

  it ( '严格手机号码格式格式', () => {

    expect ( strictPhoneReg ( '12343kjkjk' ) ).toBeFalsy ();

    expect ( strictPhoneReg ( '12345678999' ) ).toBeFalsy ();

    expect ( strictPhoneReg ( '123数字' ) ).toBeFalsy ();

    expect ( strictPhoneReg ( '11111111111' ) ).toBeFalsy ();

    expect ( strictPhoneReg ( '12913567890' ) ).toBeFalsy ();

    expect ( strictPhoneReg ( '18190678380' ) ).toBeTruthy ();

    expect ( strictPhoneReg ( '13913567890' ) ).toBeTruthy ();

  } );

  it ( '严格手机号码长度测试', () => {

    expect ( strictPhoneReg ( '159980989769' ) ).toBeFalsy ();

    expect ( strictPhoneReg ( '1598698709' ) ).toBeFalsy ();

    expect ( strictPhoneReg ( '18190678381' ) ).toBeTruthy ();

  } );

  it ( '区号参数测试', () => {

    expect ( strictPhoneReg ( '+08612898786754' ) ).toBeFalsy ();

    expect ( strictPhoneReg ( '+008613898786754', true ) ).toBeFalsy ();

    expect ( strictPhoneReg ( '+08613898786754', true ) ).toBeTruthy ();

    expect ( strictPhoneReg ( '+8615898786754', true ) ).toBeTruthy ();

  } );

} );

describe ( '国内固定电话号码测试', () => {

  it ( '固定电话号码格式测试:', () => {

    expect ( chinaTelPhoneReg ( '04098786544' ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '+442912345678' ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '+14255550100' ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '040-276-87789877' ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( 'abc-028-1234' ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '400-7898' ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '400-789897799' ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '4000-jhjh' ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '4000-jhjh1237' ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '04000-78989779' ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '0400-78989779' ) ).toBeTruthy ();

    expect ( chinaTelPhoneReg ( '0280-78989779' ) ).toBeTruthy ();

    expect ( chinaTelPhoneReg ( '028-98678766' ) ).toBeTruthy ();

  } );

  it ( '固定电话号码-分机号码格式测试:', () => {

    expect ( chinaTelPhoneReg ( '040-276-87789877', true ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( 'abc-028-1234', true ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '400-7898', true ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '400-789897799', true ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '4000-jhjh', true ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '4000-jhjh1237', true ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '04000-78989779', true ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '028-98678766-8988900', true ) ).toBeFalsy ();

    expect ( chinaTelPhoneReg ( '028-78989779-123', true ) ).toBeTruthy ();

    expect ( chinaTelPhoneReg ( '0280-78989779-5687', true ) ).toBeTruthy ();

    expect ( chinaTelPhoneReg ( '028-9867876-898800', true ) ).toBeTruthy ();

  } );

} );

describe ( '国际固定电话号码测试', () => {

  it ( '国际固定电话号码格式测试:', () => {

    expect ( telPhoneReg ( '+442912345678' ) ).toBeTruthy ();

    expect ( telPhoneReg ( '+14255550100' ) ).toBeTruthy ();

    expect ( telPhoneReg ( '+14255550100' ) ).toBeTruthy ();

    expect ( telPhoneReg ( '0019898777' ) ).toBeTruthy ();

    expect ( telPhoneReg ( '+186-22212148' ) ).toBeTruthy ();

  } );

} );



describe ( '域名校验正则测试', () => {

  it ( '域名合法性测试', () => {

    expect ( domainUrlReg ( 'hvhv' ) ).toBeFalsy ();

    expect ( domainUrlReg ( '!aas' ) ).toBeFalsy ();

    expect ( domainUrlReg ( 'http://www.baidu.com' ) ).toBeFalsy ();

    expect ( domainUrlReg ( 'https://www.baidu.com' ) ).toBeFalsy ();

    expect ( domainUrlReg ( 'a.com' ) ).toBeTruthy ();

    expect ( domainUrlReg ( 'www.baidu.com.cn' ) ).toBeTruthy ();

    expect ( domainUrlReg ( 'www.baidu99.com' ) ).toBeTruthy ();

    expect ( domainUrlReg ( 'www.baidu.com' ) ).toBeTruthy ();

    expect ( domainUrlReg ( 'a.com.cn' ) ).toBeTruthy ();

  } );

} );

describe ( '网络链接校验正则测试', () => {

  it ( '域名合法性测试', () => {

    expect ( netWorkUrlReg ( 'www.baidu.com' ) ).toBeFalsy ();

    expect ( netWorkUrlReg ( 'a.baidu.com' ) ).toBeFalsy ();

    expect ( netWorkUrlReg ( 'http://www.baidu.com' ) ).toBeTruthy ();

    expect ( netWorkUrlReg ( 'http://www.baidu.com.cn' ) ).toBeTruthy ();

    expect ( netWorkUrlReg ( 'http://www.baidu.com' ) ).toBeTruthy ();

    expect ( netWorkUrlReg ( 'https://www.baidu.com' ) ).toBeTruthy ();

    expect ( netWorkUrlReg ( 'https://www.baidu.com', 'http' ) ).toBeFalsy ();

    expect ( netWorkUrlReg ( 'https://www.baidu.com', 'https' ) ).toBeTruthy ();

  } );

} );

describe ( '身份证号码校验正则测试', () => {

  it ( '宽松校验测试', () => {

    expect ( looseIdCardReg ( 'x510725' ) ).toBeFalsy ();

    expect ( looseIdCardReg ( '510725' ) ).toBeFalsy ();

    expect ( looseIdCardReg ( '51072519970227741a' ) ).toBeFalsy ();

    expect ( looseIdCardReg ( '110225196403026127' ) ).toBeTruthy ();

    expect ( looseIdCardReg ( '110223790813697' ) ).toBeTruthy ();

    expect ( looseIdCardReg ( '123456789012345' ) ).toBeTruthy ();

    expect ( looseIdCardReg ( '510711199102318970' ) ).toBeTruthy ();

    expect ( looseIdCardReg ( '51072519970228741x' ) ).toBeTruthy ();

    expect ( looseIdCardReg ( '51072519970228741X' ) ).toBeTruthy ();

    expect ( looseIdCardReg ( '510725199702277419' ) ).toBeTruthy ();

  } );

  it ( '严格校验测试', () => {

    expect ( strictIdCardReg ( '123456789012345' ) ).toBeFalsy ();

    expect ( strictIdCardReg ( '12345678901234512x' ) ).toBeFalsy ();

    expect ( strictIdCardReg ( '510711199102318970' ) ).toBeFalsy ();

    expect ( strictIdCardReg ( '110223790813697' ) ).toBeTruthy ();

    expect ( strictIdCardReg ( '110225196403026127' ) ).toBeTruthy ();

  } );

} );

describe ( '密码正则测试', () => {

  it ( '密码长度测试', () => {

    expect ( passwordReg ( 'x123X@' ) ).toBeFalsy ();

    expect ( passwordReg ( 'x123X@x123X@x123X@x123X@x123X@x123X@x123X@' ) ).toBeFalsy ();

    expect ( passwordReg ( '123@a!A', [ 7, 20 ] ) ).toBeTruthy ();

  } );

  it ( '密码强度测试', () => {

    expect ( passwordReg ( '123456' ) ).toBeFalsy ();

    expect ( passwordReg ( '123x' ) ).toBeFalsy ();

    expect ( passwordReg ( '123x!' ) ).toBeFalsy ();

    expect ( passwordReg ( '123x!Z@12' ) ).toBeTruthy ();

  } );

} );

describe ( '昵称正则测试', () => {

  it ( '昵称合法性正则测试', () => {

    expect ( fieldNameReg ( '@12' ) ).toBeTruthy ();

    expect ( fieldNameReg ( '123aaa123aaa123aaa123aaa' ) ).toBeTruthy ();

    expect ( fieldNameReg ( '!@2+-gg' ) ).toBeTruthy ();

  } );

} );

describe ( '颜色正则测试', () => {

  it ( '十六进制颜色', () => {

    expect ( hexColorReg ( '#ff' ) ).toBeFalsy ();

    expect ( hexColorReg ( '@ff12bg' ) ).toBeFalsy ();

    expect ( hexColorReg ( '#fff' ) ).toBeTruthy ();

    expect ( hexColorReg ( '#123' ) ).toBeTruthy ();

    expect ( hexColorReg ( '#ffffff' ) ).toBeTruthy ();

  } );

} );

describe ( '金额测试', () => {

  it ( '数字金额合法性测试', () => {

    expect ( moneyReg ( '0' ) ).toBeTruthy ();

    expect ( moneyReg ( '0.00' ) ).toBeTruthy ();

    expect ( moneyReg ( '0.1' ) ).toBeTruthy ();

    expect ( moneyReg ( '11.100' ) ).toBeTruthy ();

    expect ( moneyReg ( '100.00' ) ).toBeTruthy ();

    expect ( moneyReg ( '101.1' ) ).toBeTruthy ();

    expect ( moneyReg ( '9999.0001' ) ).toBeTruthy ();

    expect ( moneyReg ( '-11', { minus: true } ) ).toBeTruthy ();

    expect ( moneyReg ( '-0.111', { minus: true } ) ).toBeTruthy ();

    expect ( moneyReg ( '12.11', { decimalsMax: 2 } ) ).toBeTruthy ();

    expect ( moneyReg ( '-12.11', { minus: true, decimalsMax: 2 } ) ).toBeTruthy ();

  } );

  it ( '千分位金额测试', () => {

    expect ( thousandsMoneyReg ( '10,000.00' ) ).toBeTruthy ();

    expect ( thousandsMoneyReg ( '100,000,000' ) ).toBeTruthy ();

    expect ( thousandsMoneyReg ( '199999' ) ).toBeTruthy ();

  } );

} );

describe ( 'ip地址测试', () => {

  it ( 'ip地址合法性测试', () => {

    expect ( ipReg ( '127.0.0.1' ) ).toBeTruthy ();

    expect ( ipReg ( '192.168.10.1' ) ).toBeTruthy ();

  } );

} );