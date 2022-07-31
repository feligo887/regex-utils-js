/**
 *  常规邮箱格式校验
 * @description  `gaozihang-001@gmail.com` 只允许英文字母、数字、下划线、英文句号、以及中划线组成
 * @param { string } email 邮箱
 * @param { boolean }  isHaveChinese 是否允许中文 ( 名称允许汉字, 域名只允许英文域名 )
 * @return boolean
 * **/

export function generalEmailReg ( email: string, isHaveChinese?: boolean ): boolean {

    const reg = `[${ isHaveChinese ? '\\u4e00-\\u9fa5' :''}a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$`;

    return RegExp ( reg, 'g') .test ( email );
}

/**
 * 宽松手机号校验
 * @description 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
 * @param { string } mobile 手机号
 * @param { `${number}-${number}` } scope 'min-max' 可指定手机号第二位的数字范围 默认为 3-9
 * @returns boolean
 * **/
export function loosePhoneReg ( mobile: string, scope?:`${number}-${number}`  ): boolean {

    const reg = `^[1][${ scope || '0-9' }]\\d{9}$`;

    return RegExp ( reg ).test ( mobile );

}

/**
 * 严格手机号校验
 * @description 手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段，支持已+86、+086开头的手机号
 * @param { string } mobile 手机号
 * @param { boolean } isArea 是否加上区号验证，默认为true
 * @returns boolean
 * **/

export  function strictPhoneReg ( mobile: string, isArea?: boolean  ): boolean {

    const reg = isArea ? /^(?:\+086|\+86)1([3456789])\d{9}$/ : /^1([3456789])\d{9}$/;

   return reg.test ( mobile );

}
/**
 * 固定电话号码校验 XXX-XXXXXXX XXXX-XXXXXXXX xxxx-xxxxxxx-xxxxx
 * @description 固定电话号码(telephone number)中国, 只要是区号+号码(3+8、4+8)组成即可
 * @param { string } tel 固定电话号码
 * @param { boolean } isExtension 是否需要分机号码
 * @return boolean
 * **/

export function telPhoneReg ( tel: string, isExtension?:boolean ): boolean {

    const reg = !isExtension ? /^(0?\d{2,3})-\d{7,8}$/g : /^(0?\d{2,3})-(\d{7,8})-(\d{1,6})$/g;

    return reg.test ( tel );
}

/**
 * 中文字符校验
 * @description 中文字符, 只要是汉字即可(只能有中文)，默认最少1个， 常用于真实姓名校验
 * @param { string } str 中文字符
 * @param { [ number, number ] } scope 可指定中文字符的长度范围
 * @return boolean
 * **/
export function chineseReg ( str: string, scope?: [ number, number ] ): boolean {

    const reg = `^[\\u4e00-\\u9fa5]{${ scope ? scope.join(','): '1,' }}$`;

    return RegExp(reg, 'g').test ( str );
}

/**
 * 英文字符校验
 * @description 英文字符, 只要是字母即可(只能有大小写字母)，默认最少1个，可能用到英文名字校验
 * @param { string } str 英文字符
 * @param { [ number, number ] } scope 可指定英文字符的长度范围
 * @return boolean
 * **/
 export function englishReg ( str: string, scope?: [ number, number ] ): boolean {

    const reg = `^[a-zA-Z]{${ scope ? scope.join(','): '1,' }}$`;

    return RegExp(reg, 'g').test ( str );
}
/**
 * 英文数字字符校验
 * @description 英文数字字符, 只要是字母和数字即可(只能有大小写字母和数字)，默认最少1个
 * @param { string } str 英文数字字符
* @param { [ number, number ] } scope 可指定英文数字字符的长度范围
 * **/

export function englishNumberReg ( str: string, scope?: [ number, number ] ): boolean {

    const reg = `^[A-Za-z0-9]{${ scope ? scope.join(','): '1,'}}$`;

    return RegExp(reg, 'g').test ( str );

}

/**
 * 所有格式字符校验
 * @description 所有格式字符，包含空白字符 默认最少1个，暂时不知道用于什么场景
 * @param { string } str 需要校验的字符串
 * @param { string } scope 可指定所有格式字符的长度范围，默认 1,
 * 
 * **/

export function allStrReg ( str: string, scope?: [ number, number ] ): boolean {

    const reg = `^.{${ scope ? scope.join(','): '1,' }}$`;

    return RegExp(reg, 'gmi').test ( str );

}

/**
 * 特殊字符校验
 * @description 特殊字符，包含空白字符 默认最少1个，暂时不知道用于什么场景
 * @param { string } str 需要校验的字符串
 * @param { string } scope 可指定特殊字符，默认 !@#$%^&*()_+-=[]{}|;':",./<>?  
 * 
 * **/

export function specialStrReg ( str: string, scope?: string ): boolean {

    const defaultScope = `!@#$%^&*()_+-=[\\]{}|;':",\\./<>?`;

    const reg = `^[${ scope || defaultScope }]+$`;

    return RegExp(reg, 'gmi').test ( str );

}