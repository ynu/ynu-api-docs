# 查询操作员账单

## 用途

查询操作员账单

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/operatorBill_ecard

## 无请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明       |
| ----- | ------ | ------ | ---- | ---------- |
|accdate|String||否|日期|
|accdate|String||否|accdate|
|opercode|String||否|opercode|

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
|summary|String|summary|
|wid|String|wid|
|by1|String|by1|
|accdate|String|accdate|
|czlx|String|czlx|
|subjname|String|subjname|
|opercode|String|opercode|
|outamt|Number|outamt|
|inamt|Number|inamt|
|clrq|DateStr|clrq|
|transcnt|Number|transcnt|
|transtype|Number|transtype|
|primarykey|Number|primarykey|
|subjno|String|subjno|
|opername|String|opername|
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
        "total": 9,
        "pages": 1
    },
    "dataSet": [
        {
            "transtype": ******,
            "summary": "现金充值",
            "wid": "******",
            "clrq": "2020******",
            "sjly": "******",
            "accdate": "20200824",
            "subjno": "******",
            "opercode": "******",
            "czlx": "******",
            "primarykey": ******,
            "ROW_ID": ******,
            "inamt": 174******50,
            "by1": ******,
            "subjname": "******",
            "outamt": ******,
            "opername": "郭******",
            "transcnt": ******
        },
        ...
}
```
