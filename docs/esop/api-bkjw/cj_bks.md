# 获取本科生考试成绩

## 用途

获取本科生考试成绩

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/cj_bks

## 请求参数

返回的 JSON 数据包
|属性|类型|说明|
|---|---|---|
|xnxqdm|String|学生学期代码|
|jxbid|String|教学班 ID|
|kch|String|课程号|
|xh|String|学号|

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
|JDF|Number|积点分|
|XNXQDM|String|学年学期代码|
|JXBID|String|教学班 ID|
|KXH|String|课序号|
|KCH|String|课程号|
|XH|String|学号|
|KSSJ|String|考试时间|
|XDFSDM|String|修读方式代码|
|CXCKDM|String|重修重考代码|
|CJLRZTDM|String|成绩录入状态代码|
|DJCJLXDM|String|等级成绩类型代码|
|PYFADM|String|培养方案代码|
|KCLBDM|String|课程类别代码|
|XGXKLBDM|String|校公选课类别代码|
|KCXZDM|String|课程性质代码|
|KSLXDM|String|考试类型代码|
|TDKCH|String|替代课程号|
|TSYYDM|String|特殊原因代码|
|PSCJ|Number|平时成绩|
|QZCJ|Number|期中成绩|
|QMCJ|Number|期末成绩|
|SYCJ|Number|实验成绩|
|DJCJ|String|等级成绩|
|ZCJ|Number|总成绩|
|SFCYXFJJS|String|是否参与学分成绩计算|
|SFYX|String|是否有效|
|SFJG|String|是否及格|
|CZR|String|操作人|
|CZSJ|DateStr|操作时间|
|CZIP|String|操作 IP|
|BZ|String|备注|
|SFZRLSB|String|是否转入历史表|
|SJCJ|Number|实践成绩|
|CZRXM|String|操作人姓名|
|JD|Number|绩点|
|SFCJDXS|String|是否成绩单显示|
|SFZX|String|是否主修|
|YCJSFHK|String|原成绩是否缓考|
|YZCJ|Number|愿总成绩|
|YCJWID|String|原成绩 WID|
|CJRDFSDM|String|成绩认定方式|
|QKSJLY|String|缺考数据来源|
|CXCKLX|String|重修重考类型|
|YXNXQDM|String|补考成绩原始学年学期代码|
|JF|Number|加分|
|FJ|String|附件|
|ZSZCJ|Number|折算总成绩|
|ZSDJCJ|String|折算等级成绩|
|ZSGS|String|折算公式|
|JASDM|String|教室代码|
|KSAPBH|Number|考试安排编号|
|ZWH|String|座位号|
|TJSJ|DateStr|提交时间|
|SJKSRQ|String|实际考试日期|
|SFDR|String|是否导入|
|SFYZS|String|是否已折算|

## 请求数据示例

```
{}
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
        "total": 5****5,
        "pages": 50
    },
    "dataSet": [
        {
            "TDKCH": null,
            "XDFSDM": "01",
            "JDF": null,
            "BY1": null,
            "ZSZCJ": null,
            "KSSJ": "2********0",
            "CZLX": "I",
            "KSAPBH": null,
            "SJCJ": null,
            "QZCJ": 0,
            "YZCJ": null,
            "XNXQDM": "2*****-1",
            "SFCYXFJJS": null,
            "SFCJDXS": null,
            "YCJWID": null,
            "KSLXDM": null,
            "SFJG": "1",
            "ZSGS": null,
            "SYCJ": null,
            "SFYX": "1",
            "XGXKLBDM": null,
            "QMCJ": 0,
            "PSCJ": 0,
            "DJCJ": null,
            "ROW_ID": 1,
            "CZRXM": null,
            "JASDM": null,
            "JD": 1.5,
            "JF": null,
            "KCH": "96********923",
            "PYFADM": null,
            "SJKSRQ": null,
            "WID": "59F************F9",
            "ZCJ": 65,
            "SFZX": "1",
            "XH": "9906134",
            "CJRDFSDM": null,
            "CJLRZTDM": "99",
            "ZWH": null,
            "CZR": null,
            "BZ": "25-9月 -17-insert",
            "TSYYDM": null,
            "FJ": null,
            "KCXZDM": "01",
            "SFDR": null,
            "CZSJ": null,
            "JXBID": "000******6",
            "CZIP": null,
            "ZSDJCJ": null,
            "QKSJLY": null,
            "CXCKLX": null,
            "KXH": "1",
            "YCJSFHK": null,
            "SFYZS": null,
            "TJSJ": null,
            "KCLBDM": "03",
            "CLRQ": "2019-11-27 00:24:13.0",
            "YXNXQDM": null,
            "SFZRLSB": null,
            "DJCJLXDM": "100",
            "CXCKDM": null,
            "SJLY": null
        },
        ...
}
```
