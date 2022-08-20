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
 * 大写英文字符校验
 * @description 大写英文字符，只要是大写字母即可(只能有大写字母)
 * @param { string } str 需要验证的字符串
 * @param { [ number, number ] } scope 可指定英文字符的长度范围
 * **/

export function upperEnglishReg ( str: string, scope?: [ number, number ] ): boolean {

    const reg = `^[A-Z]{${ scope ? scope.join(','): '1,' }}$`;

    return  RegExp(reg, 'g').test ( str );
}

/**
 * 小写英文字符校验
 * @description 大写英文字符，只要是大写字母即可(只能有大写字母)
 * @param { string } str 需要验证的字符串
 * @param { [ number, number ] } scope 可指定英文字符的长度范围
 * **/

export function lowerEnglishReg ( str: string, scope?: [ number, number ] ): boolean {

    const reg = `^[a-z]{${ scope ? scope.join(','): '1,' }}$`;

    return  RegExp(reg, 'g').test ( str );
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
 * 中文、英文、数字字符,包括下划线校验
 * @description 中文、英文、数字字符, 只要是中文、英文、数字、下划线即可
 * @param { string } str 字符串
 * **/

export function enZhNumberReg ( str: string ): boolean {

    const reg = `^[\\u4E00-\\u9FA5A-Za-z0-9_]+$`;

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
/**
 * 自定义字符范围校验
 * @description 自定义字符范围校验，可以指定自定义字符范围及长度
 * @param { string } str 需要校验的字符串
 * @param { string } reg 自定义字符范围
 * @param { [ number, number ] } scope 可指定自定义字符范围的长度范围
 * **/

export function customStrReg ( str: string, reg: string, scope?: [ number, number ] ): boolean {

    const regStr = `^[${ reg }]{${ scope ? scope.join(','): '1,' }}$`;

    return RegExp ( regStr, 'g').test ( str );

}