# 查询一卡通所有商户信息

## 用途

查询一卡通所有商户信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/shops_ecard

## 无请求参数

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
|shoptype|Number|shoptype|
|status|String|status|
|clrq|DateStr|clrq|
|accno|String|accno|
|shopname|String|shopname|
|shopid|Number|shopid|
|accflag|String|accflag|
|areacode|String|areacode|
|sjly|String|sjly|

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
        "total": ******,
        "pages": ******
    },
    "dataSet": [
        {
            "shopid": ******,
            "czlx": "******",
            "accflag": "******",
            "clrq": "******",
            "status": "******",
            "shoptype": ******,
            "wid": "******",
            "fshopid": ******,
            "accno": null,
            "ROW_ID": ******,
            "areacode": "******",
            "by1": ******,
            "shopname": "******",
            "sjly": "******"
        },
        ...
}
```
