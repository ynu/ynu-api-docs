# 查询一卡通商户设备账单

## 用途

查询一卡通商户设备账单

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/shopDeviceBill_ecard

## 无请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明       |
| ----- | ------ | ------ | ---- | ---------- |
|accdate|String||否|日期|
|fshopid|String||否|设备所属的商户父id|
|shopid|String||否|设备所属的商户id|

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
|deviceno|Number|deviceno|
|czlx|String|czlx|
|accdate|String|accdate|
|deviceid|Number|deviceid|
|clrq|DateStr|clrq|
|transcnt|Number|transcnt|
|cramt|Number|cramt|
|devicename|String|devicename|
|accno|String|accno|
|dramt|Number|dramt|
|devphyid|String|devphyid|
|shopname|String|shopname|
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
        "total": 466,
        "pages": 1
    },
    "dataSet": [
        {
            "devphyid": "******",
            "wid": "******",
            "clrq": "2020******",
            "fshopid": ******,
            "accno": "******",
            "shopname": "楠苑清真食堂_大灶",
            "sjly": "******",
            "accdate": "20200824",
            "deviceid": ******,
            "dramt": ******,
            "shopid": ******,
            "czlx": "******",
            "cramt": ******,
            "ROW_ID": ******,
            "deviceno": ******,
            "devicename": "知味食堂2楼清真POS1",
            "by1": ******,
            "transcnt": ******
        },
        ...
}
```
