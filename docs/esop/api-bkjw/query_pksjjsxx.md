# 查询排课时间教师信息

## 用途

根据条件（即请求参数）获得排课时间教师信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/pksjjs_bks

## 请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明                                                                                |
| ----- | ------ | ------ | ---- | ----------------------------------------------------------------------------------- |
|jsh|String||否|教师号|
|kch|String||否|课程号|
|xnxqdm|String||否|学年学期代码|

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
|BY2|String|备用 2|
|JSH|String|教师号|
|XNXQDM|String|学年学期代码|
|KXH|String|课序号|
|SKZC|String|上课周次|
|KSJC|Number|开始节次|
|KBID|String|课表 ID|
|KCH|String|课程号|
|JXBID|String|教学班 ID|
|SKXQ|Number|上课星期|
|JSJC|Number|结束节次|
|CZR|String|操作人|
|CZSJ|DateStr|操作时间|
|CZIP|String|操作 IP|
|BZ|String|备注|
|SJSM|String|时间说明|
|ZYID|String|占用 ID|
|CZRXM|String|操作人姓名|
|XSLXDM|String|学时类型代码|

## 请求数据示例

```
{
	"xnxqdm":"2018-2019-1"
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
            "WID": "******",
            "JSJC": ******,
            "BY2": null,
            "BY1": null,
            "SJSM": null,
            "CZLX": "I",
            "KXH": "******",
            "KSJC": 1,
            "SKZC": "******",
            "CZR": null,
            "BZ": null,
            "JSH": "******",
            "XSLXDM": null,
            "CLRQ": "2020-04-03 02:32:01",
            "SKXQ": ******,
            "ROW_ID": 1,
            "CZRXM": null,
            "XNXQDM": "2018-2019-1",
            "ZYID": "******",
            "CZSJ": null,
            "KBID": "******",
            "CZIP": null,
            "JXBID": "******",
            "KCH": "******",
            "SJLY": "******"
        },
        ...
}
```
