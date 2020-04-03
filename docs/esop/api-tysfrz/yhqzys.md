# 查询用户群组影射信息

## 用途

根据条件（即请求参数）获得用户群组影射信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/yhqzys_tysfrz

## 请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明                                                       |
| ----- | ------ | ------ | ---- | ---------------------------------------------------------- |
|groupid|String||否|群组ID|
|userid|String||否|用户ID|

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
|GROUPID|String|群组 ID|
|USERID|String|用户 ID|

## 请求数据示例

```
{
	"groupid":"lx******"
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
        "total": ******,
        "pages": ******
    },
    "dataSet": [
        {
            "CLRQ": "******",
            "WID": null,
            "BY1": null,
            "GROUPID": "lx******",
            "CZLX": "******",
            "ROW_ID": ******,
            "USERID": "******",
            "SJLY": null
        },
        ...
}
```
