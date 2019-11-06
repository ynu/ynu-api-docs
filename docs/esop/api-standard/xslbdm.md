# 获取学生类别代码

## 用途

获取学生类别代码

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/zxbz_xb

## 返回值

### Object

返回的 JSON 数据包
|属性|类型|说明|
|---|---|---|
|WID|String|唯一标识 ID|
|DM|String|对应的代码|
|CLRQ|DateStr|处理日期|
|MC|String|学生类别名称|
|SFSY|String|是否使用|
|CC|String|层次|

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
        "total": 114,
        "pages": 1
    },
    "dataSet": [
        {
            "DM": "4413",
            "CLRQ": "2015-03-01 00:00:00.0",
            "WID": "443",
            "ROW_ID": 1,
            "CC":"1",
            "MC": "博士学位学生",
            "SFSY": "1"
        },
        ...
    ]
}
```
