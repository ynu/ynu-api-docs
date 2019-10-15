# 统计研究生数量

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
"xslbdm":"全日制学术型硕士研究生"
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
            "RESULT": 0,
            "ROW_ID": 1
        }
    ]
}
```

## 作用

根据条件（即请求参数）获得研究生的数量

## 使用方法

使用此 api 需要 appId、token、Content-Type、请求参数，缺一不可，其中 appid、token 在申请此 api 的使用权成功之后即可获得，Content-Type 默认为 application/json，请求参数至少得有一个，发送请求即可获得正确的结果。
