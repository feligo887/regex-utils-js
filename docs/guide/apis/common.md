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
2. `isArea`是否加上区号验证，默认为`false`

- 示例

```js
import { strictPhoneReg } from 'regex-utils-js';

strictPhoneReg ( '18190678381' ) // true

strictPhoneReg ( '+08613898786754', true ) // true

strictPhoneReg ( '+8615898786754', true ) // true
```