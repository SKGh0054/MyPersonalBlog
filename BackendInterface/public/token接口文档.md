## token接口文档

### 获取Token

获取Token，根据用户名和密码生成Token。

- 请求方式：POST

- 请求路径：/token

#### 请求参数

| 参数名   | 类型   | 是否必须 | 说明   |
| ---- | ---- | ---- | ---- |
| username | String | 是   | 用户名 |
| password | String | 是   | 密码   |

#### 响应参数

| 参数名   | 类型   | 是否必须 | 说明                        |
| ---- | ---- | ---- | ------------------------- |
| errCode | Number | 否   | 错误码，0为成功，10001为用户名或密码不正确 |
| msg  | String | 否   | 错误消息                      |
| request | String | 否   | 请求路径                      |
| data | Object | 是   | 用户信息                      |
| token | String | 是   | Token                     |

#### 响应实例

成功：

```
{
    "data": {
        "id": "1",
        "username": "admin",
        "password": "admin",
        "status": "1"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOiIxIiwiaWQiOiIxIiwiaWF0IjoxNjMvMDQxNjQxMzY5LCJleHAiOjE2MzEzMzgyOTl9.Xi3jKzbeVDZgRSY01CGo-FpxfKLfnMGKQIyRU91FttQ"
}
```

失败：

```
{
    "errCode": 10001,
    "msg": "用户名或密码不正确",
    "request": "POST/token"
}
```

### 验证Token

验证Token是否有效。

- 请求方式：POST

- 请求路径：/token/verify

#### 请求参数

| 参数名  | 类型   | 是否必须 | 说明    |
| ----- | ---- | ---- | ----- |
| token | String | 是   | Token |

#### 响应参数

| 参数名   | 类型    | 是否必须 | 说明                |
| ---- | ----- | ---- | ----------------- |
| isValid | Boolean | 是   | Token是否有效，true为有效，false为无效 |

#### 响应实例

有效：

```
{
    "isValid": true
}
```

无效：

```
{
    "isValid": false
}
```