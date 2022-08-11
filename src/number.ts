/**
 * 检查数字精度，整数大于0，小数点最高可达8位19.8n精度
 *@param { string } str 需要检查的字符串
 * **/

export function numberOrFloatReg ( str: string ): boolean {

    const reg = /^[1-9]+([.]{1}[0-9]{1,8})?$/;

   return reg.test ( str );

}

/**
 * 严格小数正则校验, 支持负数
 * @param { string } str 需要检查的字符串
 * @param { Object } options 配置项
 * @param { number } options.decimals 支持的小数位数，默认两位小数
 * @param { boolean } options.minus 是否支持负数，默认false
 * **/

export function strictDecimalsReg ( str: string, options?: { decimals?: number, minus?: false } ): boolean {

    const reg = `^(-)?(0+(.[1-9]){1})|([1-9]+(.[0-9]{1,2})$)`;

    console.log( reg );

    return RegExp ( reg, 'g' ).test ( str );

}