# 统计研究生数量

## 用途

根据条件（即请求参数）获得研究生的数量

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/count_yjs

## 请求参数

| 属性   | 类型   | 默认值 | 必填 | 说明       |
| ------ | ------ | ------ | ---- | ---------- |
| lxbz   | String |        | 否   | 在校标识   |
| xbdm   | String |        | 否   | 性别代码   |
| pyccm  | String |        | 否   | 培养层次   |
| xslbdm | String |        | 否   | 学生类别   |
| nj     | String |        | 否   | 年级       |
| dszgh  | String |        | 否   | 导师       |
| sflxs  | String |        | 否   | 是否留学生 |
| xwlx   | String |        | 否   | 学位类型   |
| mzdm   | String |        | 否   | 民族       |
| sfzx   | String |        | 否   | 是否在校   |

## 返回值

### Object

返回的 JSON 数据包
|属性|类型|说明|
|---|---|---|
|RESULT|Number|返回结果|

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
|RESULT|Int|满足条件的研究生数量|
|ROW_ID|Int|行 ID|

## 请求数据示例

```
{
	"nj":"2001"
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
        "total": 1,
        "pages": 1
    },
    "dataSet": [
        {
            "RESULT": 20,
            "ROW_ID": 1
        }
    ]
}
```
