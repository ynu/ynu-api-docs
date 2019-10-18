# 获取院系代码

## 用途

获取院系代码

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/zxbz_yxdm

## 返回值

### Object

返回的 JSON 数据包
|属性|类型|说明|
|---|---|---|
|WID|String|唯一标识 ID|
|DM|String|对应的代码|
|CLRQ|DateStr|处理日期|
|MC|String|院系名称|
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
        "total": 111,
        "pages": 1
    },
    "dataSet": [
        {
            "DM": "332",
            "CLRQ": "2017-06-15 14:36:32.0",
            "WID": "90001298",
            "ROW_ID": 1,
            "MC": "学院",
            "SFSY": "1"
        },
        ...
    ]
}
```
