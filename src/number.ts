
/**
 * 检查数字精度，整数大于0，小数点最高可达8位19.8n精度
 *@param { string } str 需要检查的数字
 * **/

export function numberOrFloatReg ( str: string ): boolean {

    const reg = /^[1-9]+([.]{1}[0-9]{1,8})?$/;

   return reg.test ( str );

}