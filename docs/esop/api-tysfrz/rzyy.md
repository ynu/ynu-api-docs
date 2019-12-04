# 查询认证应用信息

## 用途

获得查询认证应用信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/rzyy_tysfrz

## 返回的 JSON 数据说明

| 属性         | 类型   | 说明               |
| ------------ | ------ | ------------------ |
| returnStatus | String | 返回的状态         |
| returnId     | String | 返回的 Id          |
| errorCode    | String | 错误代码           |
| errorMsg     | String | 错误信息           |
| pageInfo     | Object | 返回数据的页面信息 |
| dataSet      | Object | 返回的数据信息     |

pageInfo：
|属性|类型|说明|
|---|---|---|
|pageNum|Int|当前页码|
|pageSize|Int|每页页面大小|
|startRow|Int|开始行|
|endRow|Int|结束行|
|total|Int|信息总数|
|pages|Int|总的页数|
dataSet：
|属性|类型|说明|
|---|---|---|
|WID|String|技术主键 ID|
|CLRQ|DateStr|处理日期|
|CZLX|String|操作类型|
|SJLY|String|数据来源|
|BY1|String|备用 1|
|ID|Number|ID|
|APPNAME|String|应用名称|
|APPURL|String|应用网址|
|ALLOWEDATTRIBUTES|String|允许属性|
|ALLOWEDPROXY|Number|允许代理|
|ENABLED|Number|是否启用|
|SSOENABLED|Number|SSOENABLED|
|ANONYMOUSACCESS|Number|匿名访问|
|IGNOREATTRIBUTES|Number|忽略属性|
|SAMLVERSION|String|采样版本|
|SAMLPROFILE|String|SAML 剖面|
|SAMLACSURL|String|SAMLACSURL|
|LOCALAUTHENABLED|Number|启用本地身份验证|
|DESCRIPTION|String|描述|
|ORDERNO|Number|秩序号|
|LOGOUTTYPE|String|LOGOUTTYPE|
|COMPANY|String|公司|
|CLIENTLANGUAGE|String|客户端语言|
|LANGUAGEVERSION|String|语言版本|
|UPDATETIME|DateStr|更新时间|
|SECRETKEY|String|密钥|
|APPIP|String|APPIP|
|USERVALIDATEURL|String|用户验证程序|
|APPTYPE|Number|APPTYPE|
|LANGENABLED|Number|LANGENABLED|
|VPNTYPE|String|VPN 类型|
|USERNAMEATTRIBUTE|String|用户名属性|
|ALLOWED_PROXYAPPIDS|String|允许代理|
|APP_ACCESS_MODE|Number|APP_ACCESS_MODE|
|PRIMARYATTR|String|主参数|
|PARAMTICKET|String|PARAMTICKET|
|CREATETIME|DateStr|创建时间|

## 请求数据示例

```
{}
```

## 返回数据示例

```
{
    "returnStatus": "1",
    "returnId": "",
    "errorCode": "",
    "errorMsg": "",
    "pageInfo": {
        "pageNum": 1,
        "pageSize": 1000,
        "startRow": 0,
        "endRow": 1000,
        "total": 7,
        "pages": 1
    },
    "dataSet": [
        {
            "SAMLACSURL": null,
            "LANGENABLED": null,
            "WID": null,
            "BY1": null,
            "APPURL": "http://****/**/**",
            "CZLX": "I",
            "USERVALIDATEURL": null,
            "CREATETIME": null,
            "SAMLPROFILE": null,
            "PARAMTICKET": null,
            "ALLOWEDATTRIBUTES": null,
            "APP_ACCESS_MODE": 120,
            "ID": 033,
            "APPTYPE": 011,
            "COMPANY": null,
            "CLIENTLANGUAGE": null,
            "ALLOWEDPROXY": 012,
            "ALLOWED_PROXYAPPIDS": null,
            "VPNTYPE": null,
            "DESCRIPTION": "自助服务",
            "PRIMARYATTR": null,
            "SAMLVERSION": null,
            "ORDERNO": 01,
            "LOCALAUTHENABLED": 10,
            "SSOENABLED": 12,
            "LOGOUTTYPE": null,
            "IGNOREATTRIBUTES": 03,
            "ENABLED": 14,
            "CLRQ": "2019-22-04 00:22:01.0",
            "USERNAMEATTRIBUTE": null,
            "LANGUAGEVERSION": null,
            "SECRETKEY": null,
            "ROW_ID": 1,
            "APPNAME": "单点登录服务",
            "APPIP": null,
            "UPDATETIME": null,
            "SJLY": null,
            "ANONYMOUSACCESS": 5
        },
        ...
    ]
}
```
