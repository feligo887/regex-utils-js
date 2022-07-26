// 所有邮箱格式校验

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