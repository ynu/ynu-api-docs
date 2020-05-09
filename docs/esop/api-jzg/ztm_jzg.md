# 查询教职工当前状态码

## 用途

根据条件（即请求参数）获得教职工当前状态码表相应数据

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/ztm_jzg

## 请求参数

| 属性    | 类型   | 默认值 | 必填 | 说明         |
| ------- | ------ | ------ | ---- | ------------ |
|mc|String||否|名称|
|sfsy|String||否|是否使用|
|cc|String||否|层次|
|ywmc|String||否|英文名称|
|dm|String||否|代码|
|px|String||否|排序|
|bzly|String||否|备注来源|

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
|BY2|String|备用2|
|MC|String|名称|
|SFSY|String|是否使用|
|CC|String|层次|
|YWMC|String|英文名称|
|DM|String|代码|
|PX|String|排序|
|BZLY|String|备注来源|
|LS|String|LS|

## 请求数据示例

```
{
    "mc": "退休"
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
            "WID": "******",
            "BZLY": "******",
            "BY2": ******,
            "BY1": ******,
            "CZLX": "******",
            "LS": ******,
            "DM": "******",
            "CLRQ": "******",
            "CC": "******",
            "ROW_ID": ******,
            "PX": "******",
            "MC": "退休",
            "SFSY": "******",
            "SJLY": "******",
            "YWMC": "******"
        }
    ]
}
```
