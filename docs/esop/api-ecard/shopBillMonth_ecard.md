# 查询一卡通商户月账单

## 用途

查询一卡通商户月账单

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/shopBillMonth_ecard

## 无请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明       |
| ----- | ------ | ------ | ---- | ---------- |
|accdate|String||否|日期|
|fshopid|String||否|商户父id|
|shopid|String||否|商户id|

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
|fshopid|Number|fshopid|
|wid|String|wid|
|by1|String|by1|
|czlx|String|czlx|
|accdate|String|accdate|
|clrq|DateStr|clrq|
|transcnt|Number|transcnt|
|cramt|Number|cramt|
|dramt|Number|dramt|
|shopname|String|shopname|
|shopfullname|String|shopfullname|
|level1|Number|level1|
|shopid|Number|shopid|
|sjly|String|sjly|

## 请求数据示例

```
{ 
    "accdate": "20200824"
}
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
        "total": 141,
        "pages": 1
    },
    "dataSet": [
        {
            "shopfullname": "云南大学",
            "wid": "******",
            "clrq": "2020-******",
            "fshopid": ******,
            "shopname": "云南大学",
            "sjly": "******",
            "accdate": "202008",
            "dramt": ******,
            "shopid": ******,
            "level1": ******,
            "czlx": "******",
            "cramt": ******.79,
            "ROW_ID": ******,
            "by1": ******,
            "transcnt": ******
        },
        ...
}
```
