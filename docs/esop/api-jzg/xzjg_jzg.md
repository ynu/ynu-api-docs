# 查询行政机构代码表

## 用途

根据条件（即请求参数）获得行政机构代码表相应数据

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/xzjg_jzg

## 请求参数

| 属性    | 类型   | 默认值 | 必填 | 说明         |
| ------- | ------ | ------ | ---- | ------------ |
|sfqy|String||否|是否启用|
|mc|String||否|名称|
|cc|String||否|层次|
|lbdm|String||否|类别代码|
|sfsy|String||否|是否使用|
|dm|String||否|代码|
|jc|String||否|简称|
|ls|String||否|LS|
|px|String||否|排序|


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
|SFQY|String|是否启用|
|MC|String|名称|
|CC|Number|层次|
|LBDM|String|类别代码|
|SFSY|String|是否使用|
|DM|String|代码|
|JC|String|简称|
|LS|String|LS|
|PX|Number|排序|
|BZ|String|备注|

## 请求数据示例

```
{
	"mc": "纪委办公室.监察处"
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
            "BY2": null,
            "BY1": null,
            "CZLX": "******",
            "LS": null,
            "BZ": null,
            "DM": "******",
            "CLRQ": "******",
            "CC": ******,
            "JC": ******,
            "ROW_ID": ******,
            "SFQY": "******",
            "PX": ******,
            "MC": "纪委办公室.监察处",
            "LBDM": "******",
            "SFSY": "******",
            "SJLY": "******"
        }
    ]
}
```
