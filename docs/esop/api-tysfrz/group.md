# 查询群组信息

## 用途

获得查询群组信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/qz_tysfrz

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
|ID|String|ID|
|NAME|String|名称|
|PID|String|PID|
|SYSTEM_GROUP|String|系统群组|
|PWDPOLICY|String|密码策略|

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
        "total": 6012,
        "pages": 1
    },
    "dataSet": [
        {
            "CLRQ": "2099-18-36 22:57:35.0",
            "NAME": "管理员",
            "WID": null,
            "SYSTEM_GROUP": "666",
            "PID": null,
            "BY1": null,
            "PWDPOLICY": "3666",
            "CZLX": "IRR",
            "ID": "grrtly",
            "ROW_ID": 322,
            "SJLY": null
        },
        ...
    ]
}
```
