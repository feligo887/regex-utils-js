import { describe, expect, it } from 'vitest';

import { chineseReg, englishReg, upperEnglishReg, lowerEnglishReg, englishNumberReg, allStrReg, specialStrReg,
         enZhNumberReg, customStrReg } from '../src';

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

    it ('大写英文字符测试', () => {

        expect ( upperEnglishReg('AGJHGJGhhmk' ) ).toBeFalsy ();
        expect ( upperEnglishReg('jjj' ) ).toBeFalsy ();
        expect ( upperEnglishReg('GJHGJGH', [ 1, 3 ] ) ).toBeFalsy ();
        expect ( upperEnglishReg('GJHGJGH' ) ).toBeTruthy ();
        expect ( upperEnglishReg('HH', [ 1, 2 ] ) ).toBeTruthy ()

    })

    it ('小写英文字符测试', () => {

        expect ( lowerEnglishReg('GJHGJGH' ) ).toBeFalsy ();
        expect ( lowerEnglishReg('ggHH' ) ).toBeFalsy ();
        expect ( lowerEnglishReg('gggg', [ 1, 1 ] ) ).toBeFalsy ();
        expect ( lowerEnglishReg('gggg' ) ).toBeTruthy ();
        expect ( lowerEnglishReg('gggg', [ 4, 4 ] ) ).toBeTruthy ();

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

describe ('中文+英文+数字包括下划线正则测试', () => {
    it ('字符有效性测试', () => {
        expect ( enZhNumberReg ('中文' ) ).toBeTruthy ();
        expect ( enZhNumberReg ('abc' ) ).toBeTruthy ();
        expect ( enZhNumberReg ('ABC' ) ).toBeTruthy ();
        expect ( enZhNumberReg ('ABC123' ) ).toBeTruthy ();
        expect ( enZhNumberReg ('ABCaz123' ) ).toBeTruthy ();
        expect ( enZhNumberReg ('123' ) ).toBeTruthy ();
        expect ( enZhNumberReg ('中文ABCaz123' ) ).toBeTruthy ();
    })
});

describe ('特殊字符校验正则测试', () => {
    it ('特殊字符有效性测试', () => {
        expect ( specialStrReg ('!@#$%^&*()_+-=[]{}|;:",./<>?' ) ).toBeTruthy ();
        expect ( specialStrReg ('!a', '!@' ) ).toBeFalsy ();
        expect ( specialStrReg ('!@>', '!@>' ) ).toBeTruthy ();
    })
});

describe ('自定义字符校验正则测试', () => {
    it ('自定义字符范围', () => {
        expect ( customStrReg ('hvhv', 'A-Z' ) ).toBeFalsy ();
        expect ( customStrReg ('hvhv', 'A-Z' ) ).toBeFalsy ();
        expect ( customStrReg ('hvhv', 'A-Za-z' ) ).toBeTruthy ();
        expect ( customStrReg ('123', '0-9' ) ).toBeTruthy ();
        expect ( customStrReg ('hvhv145', 'A-Za-z0-9' ) ).toBeTruthy ();
    })
    it ('自定义字符范围及长度', () => {
        expect ( customStrReg ('hvhv', '0-9', [1, 2] ) ).toBeFalsy ();
        expect ( customStrReg ('AZVHHH', 'A-Z', [1, 3] ) ).toBeFalsy ();
        expect ( customStrReg ('hV123', 'A-Za-z0-9', [1, 5] ) ).toBeTruthy ();
        expect ( customStrReg ('hA', 'A-Za-z', [1, 2] ) ).toBeTruthy ();
    })
});