---
layout: doc
---
# 常用正则校验

## 邮箱校验

- 描述

`generalEmailReg` 邮箱校验方法， 支持中文名称邮箱校验

- Type

```ts
 type generalEmailReg = ( email: string, isHaveChinese?: boolean ) => boolean
```

- 参数说明

1. `email` 需要校验邮箱地址
2. `isHaveChinese` 是否含有有中文名称, 默认`false`

- 示例

```js
import { generalEmailReg } from 'regex-utils-js';

 generalEmailReg ( 'zhangsan-123@yang.com' ) // true

 generalEmailReg ( 'zhangsan_123@yang.com' ) // true

 generalEmailReg ( 'zhangsang_455hgfjgj@163.com' ) // true

 generalEmailReg ( 'zhangsang_455hgfjgj@qq.com' ) // true

 generalEmailReg ( 'zhangsan张三@qq.com', true ) // true
```

## 宽松手机号格式校验

- 描述

手机号,中国(宽松), 只要是`13,14,15,16,17,18,19`开头即可

- Type

```ts
  type  loosePhoneReg = ( mobile: string, scope?:`${number}-${number}` ) => boolean
```

- 参数说明

1. `mobile`需要校验的手机号
2. `scope` `'min-max'` 可指定手机号第二位的数字范围 默认为 `0-9`

- 示例

```js
import { loosePhoneReg } from 'regex-utils-js';

loosePhoneReg ( '11111111111', '2-9' ) // false

loosePhoneReg ( '13313567890' ) // true
```

## 严格手机号校验

- 描述

手机号,中国(严谨) 根据工信部2019年最新公布的手机号段，支持已`+86`、`+086`开头的手机号

- Type

```ts
  type  loosePhoneReg = ( mobile: string, isArea?: boolean ) => boolean
```

- 参数说明

1. `mobile`需要校验的手机号
2. `isArea`是否支持区号验证，默认为`false`

- 示例

```js
import { strictPhoneReg } from 'regex-utils-js';

strictPhoneReg ( '18190678381' ) // true

strictPhoneReg ( '+08613898786754', true ) // true

strictPhoneReg ( '+8615898786754', true ) // true
```

## 电话号码校验（中国）

- 描述

国内固定电话号码校验，如： `028-4405222`、`0816-87888822`

- Type

```ts
  type  chinaTelPhoneReg = ( tel: string, isExtension?: boolean ) => boolean
```

- 参数说明

1. `tel`需要校验的电话号码
2. `isExtension`是否加上分机号校验，默认为`false`, 设置为`true`仅代表支持分机号校验，不代表分机号必填

- 示例

```js
import { chinaTelPhoneReg } from 'regex-utils-js';

chinaTelPhoneReg ( '028-98678766' ) // true

chinaTelPhoneReg ( '4000-98678766' ) // true

chinaTelPhoneReg ( '028-9987-898800', true ) // true

chinaTelPhoneReg ( '0816-78989779-5687', true ) // true
```

## 电话号码校验（国际）

- 描述

国际固定电话号码校验，如：`XXX-XXXXXXX`、`XXXX-XXXXXXXX`、`XXX-XXXXXXX`、`XXX-XXXXXXXX`、`XXXXXXX`、`XXXXXXXX`

- Type

```ts
  type  telPhoneReg = ( tel: string ) => boolean
```

- 参数说明

1. `tel`需要校验的电话号码

- 示例

```js
import { telPhoneReg } from 'regex-utils-js';

telPhoneReg ( '+442912345678' ) // true

telPhoneReg ( '+14255550100' ) // true

telPhoneReg ( '+14255550100' ) // true

telPhoneReg ( '0019898777' ) // true

telPhoneReg ( '+186-22212148' ) // true
```

## 域名正则校验

- 描述

一级或二级域名校验，`www.baidu.com`、 `test.baidu.com`, 不能以http[s]开头

- Type

```ts
  type  domainUrlReg = ( str: string ) => boolean
```

- 参数说明

1. `str`需要校验的域名地址



- 示例

```js
import { domainUrlReg } from 'regex-utils-js';

domainUrlReg ( 'www.baidu.com' ) // true

domainUrlReg ( 'a.com.cn' ) // true

```

## 网路地址校验

- 描述

http or https 开头的网路链接

- Type

```ts
  type  netWorkUrlReg = ( str:string, agreement?: 'https' | 'http' ) => boolean
```

- 参数说明

1. `str`需要校验的链接
2. `agreement` 网络协议，默认两种都支持


- 示例

```js
import { netWorkUrlReg } from 'regex-utils-js';

domainUrlReg ( 'http://www.baidu.com' ) // true

domainUrlReg ( 'https://www.baidu.com' ) // true

domainUrlReg ( 'https://www.baidu.com', 'http' ) // false

```

## 身份证号码校验(宽松)

- 描述

校验身份证号码，15或18位即可，支持最后一个字符为`x`

- Type

```ts
  type  looseIdCardReg = ( str:string ) => boolean
```

- 参数说明

1. `str`需要校验的身份证号码

- 示例

```js
import { looseIdCardReg } from 'regex-utils-js';

looseIdCardReg ( '123456789012345' ) // true

looseIdCardReg ( '51072519970228741X' ) // true

looseIdCardReg ( '51072519970228741x' ) // true

```

## 身份证号码校验(严格)

- 描述

校验身份证号码，15或18位都支持，不过是严格校验的版本

- Type

```ts
  type  strictIdCardReg = ( str:string ) => boolean
```

- 参数说明

1. `str`需要校验的身份证号码

- 示例

```js
import { strictIdCardReg } from 'regex-utils-js';

strictIdCardReg ( '123456789012345' ) // false

strictIdCardReg ( '110225196403026127' ) // true

strictIdCardReg ( '51072519970224741X' ) // true

```

 ## 弱密码格式正则校验

- 描述

密码规则:密码长度为m ~ n个字符，只能包含数字、大写字母、小写字母和下划线组成(有其一即可)

- Type

```ts
  type  loosePasswordReg = ( str:string, len?: [ number, number ] ) => boolean
```

- 参数说明

1. `str`需要校验的密码
2. `len` `[ min, max ]` 密码长度范围, 默认 `6-15`

- 示例

```js
import { loosePasswordReg } from 'regex-utils-js';

loosePasswordReg ( '123456' ) // true

loosePasswordReg ( '7ggHJJH_FHF_' ) // true

loosePasswordReg ( '12aaAB', [ 6, 6 ] ) // true

```

## 简单密码格式正则校验

- 描述

密码规则:密码规则:密码长度为m ~ n个字符，必须包含数字和字母（大小写均可），允许除空格外的特殊符号(可选)

- Type

```ts
  type  simplePasswordReg = ( str:string, len?: [ number, number ] ) => boolean
```

- 参数说明

1. `str`需要校验的密码
2. `len` `[ min, max ]` 密码长度范围, 默认 `6-15`

- 示例

```js
import { simplePasswordReg } from 'regex-utils-js';

loosePasswordReg ( '123456' ) // false

loosePasswordReg ( '12345!@' ) // false

simplePasswordReg ( '123xzfhgf' ) // true

loosePasswordReg ( '7ggHJJH_FHF_' ) // true

loosePasswordReg ( '7ggHJJH_FHF@~####' ) // true

```

## 强密码格式正则校验

- 描述

密码规则:密码规则:密码长度为8 ~ 20个字符，由数字、大写字母、小写字母和特殊字符组成, 默认`8-20`位字符

> 特殊符号： !@#$&*( 、) _、-+=、[、]:;?,.

- Type

```ts
  type  strictPasswordReg = ( str:string, len?: [ number, number ] ) => boolean
```

- 参数说明

1. `str`需要校验的密码
2. `len` `[ min, max ]` 密码长度范围, 默认 `8-20`

- 示例

```js
import { strictPasswordReg } from 'regex-utils-js';

strictPasswordReg ( '190808098456' ) // false

strictPasswordReg ( '123jhjhx' ) // false

strictPasswordReg ( '123vhvhx!@' ) // true

strictPasswordReg ( '123x!Z@12' ) // true

```
