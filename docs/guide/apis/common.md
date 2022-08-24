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