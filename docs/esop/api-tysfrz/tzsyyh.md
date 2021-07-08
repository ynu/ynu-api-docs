# 查询同组所有用户信息

## 用途

通过传入用户id，从而获得与此用户id相同分组id的所有用户

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/tzsyyh_tysfrz

## 请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明                                                                                                                                                                                                                          |
| ----- | ------ | ------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|userid|String||是|用户id|

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
|WID|String|技术主键ID|
|CLRQ|DateStr|处理日期|
|CZLX|String|操作类型|
|SJLY|String|数据来源|
|BY1|String|备用1|
|GID|String|分组id|
|USERID|String|用户ID|
|ISDEFAULT|Number|ISDEFAULT|
|CREATETIME|DateStr|CREATETIME|

## 请求数据示例

```
{
    "userid": "12******"
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
        "total": 2,
        "pages": 1
    },
    "dataSet": [
        {
            "CLRQ": "******",
            "ISDEFAULT": ******,
            "WID": "12******",
            "BY1": null,
            "CZLX": "******",
            "ROW_ID": ******,
            "CREATETIME": "******3",
            "USERID": "12******",
            "GID": "******",
            "SJLY": "******"
        },
        {
            "CLRQ": "******",
            "ISDEFAULT": ******,
            "WID": "22******",
            "BY1": null,
            "CZLX": "******",
            "ROW_ID": ******,
            "CREATETIME": "******3",
            "USERID": "22******",
            "GID": "******",
            "SJLY": "******"
        }
    ]
}
```
