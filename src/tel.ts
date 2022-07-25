// 包含所有手机号、电话号码相关的正则

/**
 * ### 宽松手机号校验
 * @category 联系电话正则
 * @description 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
 * @param { string } mobile 手机号
 * @param { `${number}-${number}` } scope 'min-max' 可指定手机号第二位的数字范围 默认为 3-9
 * @returns boolean
 * **/
export function loosePhoneReg ( mobile: string, scope?:`${number}-${number}`  ): boolean {

    const reg = `^[1][${ scope || '3-9' }]\\d{9}$`;

    return RegExp ( reg ).test ( mobile );

}

/**
 * ### 严格手机号校验
 * @category 联系电话正则
 * @description 手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段，支持已+86、+086开头的手机号
 * @param { string } mobile 手机号
 * @param { boolean } isArea 是否加上区号验证，默认为true
 * @returns boolean
 * **/

export  function strictPhoneReg ( mobile: string, isArea?: boolean  ): boolean {

    const reg = isArea ? '/^(?:(?:\\+|00)86)?1(?:(?:3[\\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\\d])|(?:9[189]))\\d{8}$/'
        : '^1[3-9]\d{9}$';

    console.log( reg )

   return RegExp ( reg ).test ( mobile );

}
/**
 * ### 宽松座机电话号码校验
 * **/