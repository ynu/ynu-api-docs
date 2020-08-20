# 查询指定天数内站群网站更新的文章数量

## 用途

根据条件（即指定天数参数）查询指定天数内站群网站更新的文章数量

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/latestDaysUpdateCounts_wbnews_zq

## 请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明       |
| ----- | ------ | ------ | ---- | ---------- |
|days| String||是|需要查询的天数|

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
|owner|String|网站的id|
|count|Number|在指定的时间内更新的文章数量|

## 请求数据示例

```
{
    "days": "180"
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
        "total": *,
        "pages": 1
    },
    "dataSet": [
        {
            "count": 8,
            "owner": "1***",
            "ROW_ID": 1
        },
        ...
}
```
