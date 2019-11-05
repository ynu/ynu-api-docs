# 获取语种名称代码

## 用途

获取语种名称代码

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/zxbz_yzmcdm

## 返回值

### Object

返回的 JSON 数据包
|属性|类型|说明|
|---|---|---|
|WID|String|唯一标识 ID|
|DM|String|对应的代码|
|CLRQ|DateStr|处理日期|
|MC|String|语种名称名称|
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
        "total": 139,
        "pages": 1
    },
    "dataSet": [
        {
            "DM": "oc",
            "CLRQ": "2015-03-01 00:00:00.0",
            "WID": "oc",
            "ROW_ID": 1,
            "MC": "奥克西唐语",
            "SFSY": "1"
        },
        ...
    ]
}
```
