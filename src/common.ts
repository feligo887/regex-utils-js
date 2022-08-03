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
 * 国内固定电话号码校验 0511-4405222、021-87888822
 * @description 固定电话号码(telephone number)中国, 只要是区号+号码(3+8、4+8)组成即可
 * @param { string } tel 固定电话号码
 * @param { boolean } isExtension 是否需要分机号码
 * @return boolean
 * **/

export function chinaTelPhoneReg ( tel: string, isExtension?:boolean ): boolean {

    const reg = !isExtension ? /^(0?\d{3})-\d{7,8}$/g : /^(0?\d{3})-(\d{7,8})-(\d{1,6})$/g;

    return reg.test ( tel );
}

/**
 * 固定电话号码校验 "XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX
 * @description 固定电话号码(telephone number)中国, 只要是区号+号码(3+8、4+8)组成即可
 * @param { string } tel 固定电话号码
 * @return boolean
 * **/

export function telPhoneReg ( tel: string ): boolean {

    const reg = '^(\\+|00)[1-9][0-9 \\-\\(\\)\\.]{7,32}$';

    return RegExp( reg, 'g').test ( tel );
}

/**
 *  域名正则校验
 * @description  url validate www.baidu.com https://www.baidu.com
 * @param  { string } str 需要校验的字符串
 * @return boolean
 */

export function domainUrlReg ( str:string ):boolean {

    return /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/gi.test ( str )
}

/**
 *  网络地址正则校验
 * @description http or https 开头的链接
 * @param  { string } str 需要校验的字符串
 * @param  { https | http } agreement 可指定http或https
 * @return boolean
 */

export function netWorkUrlReg ( str:string, agreement?: 'https' | 'http' ):boolean {

    const agreementStr = agreement ? `^${ agreement }:` : 'http[s]{0,1}:';

    const reg = `${agreementStr}\\/\\/([\\w.]+\\/?)\\S*`;

    return RegExp(reg ).test ( str );
}

/**
 * 身份证号码正则宽松校验
 * @description 身份证号码(identity card number)中国, 只要是18位（支持末尾x|X）、15位数字即可
 * @param  { string } str 需要校验的字符串
 * @return boolean
 * **/
export  function looseIdCardReg ( str:string ):boolean {

    const reg = str.length === 15 ? '^\\d{15}$' : '^\\d{17}[0-9Xx]$';

    return  RegExp( reg ).test ( str );
}

/**
 * 身份证号码正则严格校验
 * @description 身份证号码(identity card number)中国, 严格校验
 * @param  { string } str 需要校验的字符串
 * @return boolean
 * **/
export  function strictIdCardReg ( str:string ):boolean {

    const reg = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/;

    return  RegExp( reg ).test ( str );
}