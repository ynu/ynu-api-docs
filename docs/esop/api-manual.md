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
| mzdm   | String |        | 否   | 名族       |

## 返回值

### Object

返回的 JSON 数据包
|属性|类型|说明|
|---|---|---|
|RESULT|Number|返回结果|

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
