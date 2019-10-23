# 获取离校标志代码

## 用途

获取离校标志代码

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/zxbz_lxbzdm

## 返回值

### Object

返回的 JSON 数据包
|属性|类型|说明|
|---|---|---|
|WID|String|唯一标识 ID|
|DM|String|对应的代码|
|CLRQ|DateStr|处理日期|
|MC|String|离校标志名称|
|SFSY|String|是否使用|

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
            "DM": "211",
            "CLRQ": "2018-02-12 15:01:23.0",
            "WID": "90001366",
            "ROW_ID": 1,
            "MC": "不在校",
            "SFSY": "1"
        },
        ...
    ]
}
```
