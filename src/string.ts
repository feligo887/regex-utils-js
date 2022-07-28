/**
 * ### 常规邮箱格式校验
 * @category 邮箱正则
 * @description  `gaozihang-001@gmail.com` 只允许英文字母、数字、下划线、英文句号、以及中划线组成
 * @param { string } email 邮箱
 * @return boolean
 * **/

export function generalEmailReg ( email: string ): boolean {

    return RegExp ('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\\.[a-zA-Z0-9_-]+)+$').test ( email );
}

/**
 * ### 常规邮箱格式校验（包含中文）
 * @category 邮箱正则
 * @description `张三001Abc@bowbee.com.cn` 名称允许汉字、字母、数字，域名只允许英文域名
 * @return boolean
 * **/

export function generalZHEmailReg ( email: string ): boolean {

    return RegExp ('^[A-Za-z0-9\\u4e00-\\u9fa5]+@[a-zA-Z0-9_-]+(\\\.[a-zA-Z0-9_-]+)+$').test( email );
}

/**
 * ### 宽松手机号校验
 * @category 联系电话正则
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
 * ### 严格手机号校验
 * @category 联系电话正则
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
 * ### 固定电话号码校验 XXX-XXXXXXX XXXX-XXXXXXXX xxxx-xxxxxxx-xxxxx
 * @category 联系电话正则
 * @description 固定电话号码(telephone number)中国, 只要是区号+号码(3+8、4+8)组成即可
 * @param { string } tel 固定电话号码
 * @param { boolean } isExtension 是否需要分机号码
 * @return boolean
 * **/

export function telPhoneReg ( tel: string, isExtension?:boolean ): boolean {

    const reg = !isExtension ? /^(0?\d{2,3})-\d{7,8}$/g : /^(0?\d{2,3})-(\d{7,8})-(\d{1,6})$/g;

    return reg.test ( tel );
}