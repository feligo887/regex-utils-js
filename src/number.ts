import {loosePhoneReg} from "./common";

/**
 * 检查数字精度，整数大于0，小数点最高可达8位19.8n精度
 *@param { string } str 需要检查的字符串
 * **/

export function numberOrFloatReg ( str: string ): boolean {

    const reg = /^[1-9]+([.]{1}[0-9]{1,8})?$/;

   return reg.test ( str );

}

/**
 * 整数正则校验
 * @description
 * @param { string } str 需要检查的字符串
 * @param { boolean } minus 是否支持负数
 * @return { boolean } 是否匹配
 * **/

export function  integerReg ( str: string, minus?: boolean ): boolean {

    const reg = `^${ minus ? '(?:-)' : '' }[1-9]+[0-9]*$`;

    return RegExp( reg ).test ( str );

}

/**
 * 弱小数正则校验, 支持负数
 * @description 只要是 xxx.xxx、-xxx.xxx 格式均可通过
 * @param { string } str 需要检查的字符串
 * @param { number } decimalsMax 最大小数位. 默认为8
 * @return { boolean } 是否匹配
 * **/

export function looseDecimalsReg ( str: string, decimalsMax?: number ): boolean {

    const reg = `^(-)?\\d+\.{0,1}\\d{1,${ decimalsMax || 8 }}$`;

    return RegExp ( reg, 'g' ).test ( str );

}

/**
 * 严格小数正则校验, 支持负数
 * @description 01.xxx 00.xxx 不可通过
 * @param { string } str 需要检查的字符串
 * @param { Object } options 配置项
 * @param { number } options.decimals 支持的小数位数，默认两位小数
 * @param { boolean } options.minus 是否支持负数，默认false
 * **/

export function strictDecimalsReg ( str: string, options?: { decimals?: number, minus?: boolean } ): boolean {

    const reg = `^${ ( options && options.minus === true ) ? '(-)?' : '' }(\\0{0,1}|[1-9])+\\.{0,1}\\d{1,${ options?.decimals || 2 }}$`;

    return RegExp ( reg, 'g' ).test ( str );

}