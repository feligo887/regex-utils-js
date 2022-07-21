// 包含所有手机号、电话号码相关的正则

/**
 * 宽松手机号校验
 * @description 只要是宽松的手机号，就可以通过，比如：13333333333、15988888888
 * @param { string } mobile 手机号
 * @param { [ number, number ] } scope [ min, max ] 可指定手机号第二位的数字范围 默认为 [ 3, 9 ]
 * @returns boolean
 * **/
export function loosePhoneReg ( mobile: string, scope?: [ number, number ] ): boolean {

    const reg = ( scope && scope.length === 2 ) ? `^[1]${ scope }\d{9}$` : `^[1][3-9]\d{9}$`;

    console.log( scope );

    return RegExp ( reg ).test ( mobile );

}

/**
 * 严格手机号校验
 * @description 严格手机号码校验，必须时中国大陆手机号，支持区号开头的手机号, 比如：13312345678、+8613312345678
 * @param { string } mobile 手机号
 * @param { boolean } isArea 是否加上区号验证，默认为true
 * @returns boolean
 * **/

export  function strictPhoneReg ( mobile: string, isArea?: boolean  ): boolean {

    const reg = isArea ? '^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$'
        : '^[1](?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$'

   return RegExp ( reg ).test ( mobile );

}