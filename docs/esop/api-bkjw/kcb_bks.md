# 查询本科生课程表信息

## 用途

根据条件（即请求参数）获得本科生课程表信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/kcb_bks

## 请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明                                                                |
| ----- | ------ | ------ | ---- | ------------------------------------------------------------------- |
| param | String |        | 否   | wid（技术主键 ID），kcm （课程名），kch（课程号）字段的模糊查询参数 |

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
|KCH|String|课程号|
|KCCCDM|String|课程层次|
|KCJBDM|String|课程级别|
|KCFLDM|String|课程分类 DM|
|JXFSDM|String|教学方式|
|SKYZDM|String|授课语种|
|KCZTDM|String|课程状态|
|SYFWDM|String|适用范围|
|KCM|String|课程名|
|YWKCM|String|英文课程名|
|KCPY|String|课程拼音|
|KKDWDM|String|开课单位|
|JYSDM|String|教研室|
|JXMD|String|教学目的|
|XS|Number|学时|
|XF|Number|学分|
|KNZXS|Number|课内周学时|
|KTJSXS|Number|课堂讲授学识|
|SYXS|Number|试验学时|
|SJIXS|Number|设计学时|
|SJXS|Number|上机学时|
|TLXS|Number|讨论学时|
|QTXS1|Number|其他学时 1|
|QTXS2|Number|其他学时 2|
|QTXS3|Number|其他学时 3|
|QTXS4|Number|其他学时 4|
|QTXS5|Number|其他学时 5|
|QTXS6|Number|其他学时 6|
|QTXS7|Number|其他学时 7|
|QTXS8|Number|其他学时 8|
|JZSJZ|String|集中实践周|
|KCSJXS|Number|课程实践学时|
|KSLXDM|String|考试类型|
|ZWJC|String|中文教材|
|ZWCKS|String|中文参考书|
|WWJC|String|外文教材|
|WWCKS|String|外文参考书|
|KCFZR|String|课程负责人|
|SZDW|String|师资队伍|
|SYYX|String|适用院系或专业|
|KCSM|String|课程说明|
|ZWNRJJ|String|中文内容简介|
|YWNRJJ|String|英文内容简介|
|KSRQ|DateStr|开始日期|
|ZTSJ|DateStr|暂停时间|
|YBZS|String|预备知识|
|XXKC|String|先修课程|
|TKYY|String|停开原因|
|HFYY|String|恢复原因|
|XGXKLBDM|String|校公选课类别|
|BQDM|String|标签代码|
|BQMC|String|标签名称|
|XXKDM|String|先修课代码|
|XXKMC|String|先修课名称|
|KSXQ|String|开课学期|
|SFXGXK|String|是否校公选课|
|TYKCBS|String|同一课程标识|
|XIDM|String|系代码|
|KCSPDM|String|课程水平代码|
|KCBBDM|String|课程版本代码|
|KCSJZXS|Number|课程实践周学是|
|KCZH|String|课程总号|
|XFLBDM|String|学分类别代码|
|KCFL1|String|课程分类|
|SFSYSK|String|是否双语授课|
|SFQYWSK|String|是否全英文授课|
|CJKHFS|String|成绩考核方式|
|SFMGCKC|String|是否马工程课程|
|KCMB|String|课程目标|
|YWKCMB|String|英文课程目标|
|JXDGFJ|String|教学大纲附件|
|KCMSFJ|String|课程描述附件|
|SFJZSJHJ|String|是否集中实践环节|
|XXKDM2|String|先修课代码 2|
|XXKMC2|String|先修课名称 2|
|XXKSFQY|String|先修课是否启用|
|XXKBXTG|String|先修课必须通过|

## 请求数据示例

```
{
	"param":"中国古代文学(中)"
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
        "total": 3,
        "pages": 1
    },
    "dataSet": [
        {
            "XIDM": null,
            "BY1": null,
            "KCSPDM": null,
            "CZLX": "******",
            "TYKCBS": "01******42",
            "KCFLDM": null,
            "KCMB": null,
            "XXKC": null,
            "JZSJZ": null,
            "SZDW": null,
            "BQDM": null,
            "YWKCM": null,
            "YWKCMB": null,
            "TKYY": null,
            "KCPY": null,
            "ZWNRJJ": null,
            "SFSYSK": null,
            "BQMC": null,
            "KSRQ": null,
            "KKDWDM": "3******7",
            "KSLXDM": "******",
            "KCSJZXS": null,
            "KCCCDM": null,
            "SYXS": ******,
            "XGXKLBDM": null,
            "JXFSDM": null,
            "SJIXS": null,
            "ZTSJ": null,
            "SFJZSJHJ": null,
            "SFXGXK": null,
            "XXKMC": null,
            "KCSJXS": null,
            "ROW_ID": ******,
            "KCM": "中国古代文学(中)",
            "XXKSFQY": null,
            "SYYX": null,
            "SFMGCKC": null,
            "KCH": "01******2",
            "QTXS1": null,
            "XS": ******,
            "WWJC": null,
            "WID": "01******2",
            "QTXS5": null,
            "QTXS4": ******,
            "QTXS3": null,
            "KCSM": null,
            "KCZH": null,
            "SKYZDM": null,
            "QTXS2": null,
            "QTXS8": null,
            "ZWCKS": null,
            "XFLBDM": null,
            "KCBBDM": null,
            "QTXS7": null,
            "YBZS": null,
            "QTXS6": null,
            "XXKMC2": null,
            "XXKDM2": null,
            "SJXS": null,
            "XF": ******,
            "SYFWDM": null,
            "XXKBXTG": null,
            "ZWJC": null,
            "CJKHFS": null,
            "JYSDM": null,
            "KCFZR": null,
            "KSXQ": null,
            "KNZXS": ******,
            "SFQYWSK": null,
            "XXKDM": null,
            "KCFL1": null,
            "KTJSXS": ******,
            "CLRQ": "******",
            "YWNRJJ": null,
            "HFYY": null,
            "JXDGFJ": null,
            "JXMD": null,
            "KCJBDM": null,
            "WWCKS": null,
            "KCZTDM": "******",
            "KCMSFJ": null,
            "TLXS": null,
            "SJLY": null
        },
        ...
}
```
