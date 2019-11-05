# 获取岗位等级代码

## 用途

获取岗位等级代码

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/zxbz_gwdjdm

## 返回值

### Object

返回的 JSON 数据包
|属性|类型|说明|
|---|---|---|
|WID|String|唯一标识 ID|
|DM|String|对应的代码|
|CLRQ|DateStr|处理日期|
|MC|String|岗位等级名称|
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
        "total": 29,
        "pages": 1
    },
    "dataSet": [
        {
            "DM": "11",
            "CLRQ": "2015-03-01 00:00:00.0",
            "WID": "101",
            "ROW_ID": 1,
            "MC": "一级",
            "SFSY": "1"
        },
        ...
    ]
}
```
