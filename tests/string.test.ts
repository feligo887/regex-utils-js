import { describe, expect, it } from 'vitest';

import { chineseReg, letterReg, upperLetterReg, lowerLetterReg, letterNumberReg, allStrReg, specialStrReg,
  letterZhNumberReg, customStrReg } from '../src';

describe ( '中文字符正则测试', () => {

  it ( '中文字符测试', () => {

    expect ( chineseReg ( 'zhangsan' ) ).toBeFalsy ();

    expect ( chineseReg ( '123' ) ).toBeFalsy ();

    expect ( chineseReg ( '  ' ) ).toBeFalsy ();

    expect ( chineseReg ( '中文' ) ).toBeTruthy ();

  } );

  it ( '中文字符长度范围测试', () => {

    expect ( chineseReg ( '1234', 2 ) ).toBeFalsy ();

    expect ( chineseReg ( '中文三', 2 ) ).toBeFalsy ();

    expect ( chineseReg ( '张三李', 3 ) ).toBeTruthy ();

  } );

} );

describe ( '字母字符正则测试', () => {

  it ( '字母字符测试', () => {

    expect ( letterReg ( '...@!!!' ) ).toBeFalsy ();

    expect ( letterReg ( '，' ) ).toBeFalsy ();

    expect ( letterReg ( '  ' ) ).toBeFalsy ();

    expect ( letterReg ( '中文' ) ).toBeFalsy ();

    expect ( letterReg ( '123' ) ).toBeFalsy ();

    expect ( letterReg ( 'zhangsan' ) ).toBeTruthy ();

    expect ( letterReg ( 'ADSDS' ) ).toBeTruthy ();

    expect ( letterReg ( 'zhangsanADSDS', 20 ) ).toBeTruthy ();

  } );

  it ( '大写英文字符测试', () => {

    expect ( upperLetterReg ( 'AGJHGJGhhmk' ) ).toBeFalsy ();

    expect ( upperLetterReg ( 'jjj' ) ).toBeFalsy ();

    expect ( upperLetterReg ( 'GJHGJGH', 3 ) ).toBeFalsy ();

    expect ( upperLetterReg ( 'GJHGJGH' ) ).toBeTruthy ();

    expect ( upperLetterReg ( 'HH', 2 ) ).toBeTruthy ();

  } );

  it ( '小写英文字符测试', () => {

    expect ( lowerLetterReg ( 'GJHGJGH' ) ).toBeFalsy ();

    expect ( lowerLetterReg ( 'ggHH' ) ).toBeFalsy ();

    expect ( lowerLetterReg ( 'gggg', 1 ) ).toBeFalsy ();

    expect ( lowerLetterReg ( 'gggg', 4 ) ).toBeTruthy ();

    expect ( lowerLetterReg ( 'gggg', 4 ) ).toBeTruthy ();

  } );

  it ( '英文字符长度范围测试', () => {

    expect ( letterReg ( '', 2 ) ).toBeFalsy ();

    expect ( letterReg ( 'aaa', 2 ) ).toBeFalsy ();

    expect ( letterReg ( 'hh', 2 ) ).toBeTruthy ();

  } );

} );

describe ( '英文数字字符正则测试', () => {

  it ( '英文数字字符测试', () => {

    expect ( letterNumberReg ( '...@!!!' ) ).toBeFalsy ();

    expect ( letterNumberReg ( '，' ) ).toBeFalsy ();

    expect ( letterNumberReg ( '  ' ) ).toBeFalsy ();

    expect ( letterNumberReg ( '中文' ) ).toBeFalsy ();

    expect ( letterNumberReg ( '123' ) ).toBeTruthy ();

    expect ( letterNumberReg ( 'zhangsan' ) ).toBeTruthy ();

    expect ( letterNumberReg ( 'ADSDS123' ) ).toBeTruthy ();

    expect ( letterNumberReg ( 'sanAS123' ) ).toBeTruthy ();

  } );

  it ( '英文数字字符长度范围测试', () => {

    expect ( letterNumberReg ( '' ) ).toBeFalsy ();

    expect ( letterNumberReg ( 'aaa', 3 ) ).toBeTruthy ();

    expect ( letterNumberReg ( '123', 3 ) ).toBeTruthy ();

    expect ( letterNumberReg ( 'aaa123', 6 ) ).toBeTruthy ();

  } );

} );

describe ( '中文、英文、数字正则测试', () => {

  it ( '字符有效性测试', () => {

    expect ( letterZhNumberReg ( '中文' ) ).toBeTruthy ();

    expect ( letterZhNumberReg ( 'abc' ) ).toBeTruthy ();

    expect ( letterZhNumberReg ( 'ABC' ) ).toBeTruthy ();

    expect ( letterZhNumberReg ( 'ABC123' ) ).toBeTruthy ();

    expect ( letterZhNumberReg ( 'ABCaz123' ) ).toBeTruthy ();

    expect ( letterZhNumberReg ( '123' ) ).toBeTruthy ();

    expect ( letterZhNumberReg ( '中文ABCaz123' ) ).toBeTruthy ();

  } );

} );

describe ( '所有格式字符校验正则测试', () => {

  it ( '字符有效性测试', () => {

    expect ( allStrReg ( '...@!!!' ) ).toBeTruthy ();

    expect ( allStrReg ( '，' ) ).toBeTruthy ();

    expect ( allStrReg ( '  ' ) ).toBeTruthy ();

    expect ( allStrReg ( 'bjbj' ) ).toBeTruthy ();

    expect ( allStrReg ( '123s' ) ).toBeTruthy ();

    expect ( allStrReg ( 'zhangsan' ) ).toBeTruthy ();

    expect ( allStrReg ( 'ADSDS123', 2 ) ).toBeFalsy ();

    expect ( allStrReg ( 'AD', 3 ) ).toBeTruthy ();

    expect ( allStrReg ( 'zhangsanADSDS123', 20 ) ).toBeTruthy ();

  } );

} );

describe ( '特殊字符校验正则测试', () => {

  it ( '特殊字符有效性测试', () => {

    expect ( specialStrReg ( '!@#$%^&*()_+-=[]{}|;:",./<>?' ) ).toBeTruthy ();

    expect ( specialStrReg ( '!a', '!@' ) ).toBeFalsy ();

    expect ( specialStrReg ( '!@>', '!@>' ) ).toBeTruthy ();

  } );

} );

describe ( '自定义字符校验正则测试', () => {

  it ( '自定义字符范围', () => {

    expect ( customStrReg ( 'hvhv', 'A-Z' ) ).toBeFalsy ();

    expect ( customStrReg ( 'hvhv', 'A-Z' ) ).toBeFalsy ();

    expect ( customStrReg ( 'hvhv', 'A-Za-z' ) ).toBeTruthy ();

    expect ( customStrReg ( '123', '0-9' ) ).toBeTruthy ();

    expect ( customStrReg ( 'hvhv145', 'A-Za-z0-9' ) ).toBeTruthy ();

  } );

  it ( '自定义字符范围及长度', () => {

    expect ( customStrReg ( 'hvhv', '0-9', [ 1, 2 ] ) ).toBeFalsy ();

    expect ( customStrReg ( 'AZVHHH', 'A-Z', [ 1, 3 ] ) ).toBeFalsy ();

    expect ( customStrReg ( 'hV123', 'A-Za-z0-9', [ 1, 5 ] ) ).toBeTruthy ();

    expect ( customStrReg ( 'hA', 'A-Za-z', [ 1, 2 ] ) ).toBeTruthy ();

  } );

} );