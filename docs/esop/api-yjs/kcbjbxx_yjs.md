# 查询研究生课程基本信息

## 用途

根据条件（即请求参数）获得研究生课程基本信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/kcjbxx_yjs

## 请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明                                                                                       |
| ----- | ------ | ------ | ---- | ------------------------------------------------------------------------------------------ |
| param | String |        | 否   | wid（技术主键 ID），kcmc（课程名称），kcdm（课程代码），kkdw（开课单位）字段的模糊查询参数 |

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
|DYYJXKDM|String|对应一级学科|
|KCMC|String|课程名称|
|KCJC|String|课程简称|
|SFKXQ|Number|是否跨学期|
|KKDW|String|开课单位|
|KCDM|String|课程代码|
|KCMCYW|String|课程名称英文|
|KCJCYW|String|课程简称英文|
|KKXQS|Number|开课学期数|
|MLDM|String|门类 DM|
|XF|Number|学分|
|ZXS|Number|总学时|
|SKYYDM|String|授课语言|
|KCXZDM|String|课程性质|
|SKFSDM|String|上课方式|
|KCFZR|String|课程负责人|
|KKZTDM|String|开课状态|
|KSLXDM|String|考试类型|
|KCCCDM|String|课程层次|
|KCFLDM|String|课程分类 DM|
|CJJLFSDM|String|成绩记录方式|
|CJLXSFKXG|Number|记录方式可修改|
|KCJJ|String|课程简介|
|KCJJYW|String|课程简介英文|
|SYZY|String|适用专业|
|SYZYYW|String|适用专业英文|
|KCYQ|String|课程要求|
|KCYQYW|String|课程要求英文|
|CKWX|String|参考文献|
|CKWXYW|String|参考文献英文|
|XGKC|String|相关课程|
|XGKCYW|String|相关课程英文|
|JXDG|String|教学大纲|
|JXDGYW|String|教学大纲英文|
|KCZY|String|课程资源|
|KCZYYW|String|课程资源英文|
|CDDW|String|承担单位|
|KKJJ|String|开课季节|
|SFKB|String|是否开班|
|XKXXXQ|Number|选课限选学期|
|KCLBDM|String|课程类别代码|
|ZHXS|Number|周学时|
|SJSYXS|Number|实践/实验学时|
|SKXS|String|授课形式|
|SYXWLX|String|适用学位类型|
|SFSYK|String|是否实验课|
|SFXWK|String|是否学位课|
|SYXSLBDM|String|适用学生类别|

## 请求数据示例

```
{
	"param":"对外汉语课型教学"
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
            "BY2": null,
            "BY1": null,
            "CZLX": "******",
            "KKDW": "******",
            "ZHXS": null,
            "CKWX": null,
            "KCFLDM": "******",
            "KCMC": "对外汉语课型教学",
            "SKFSDM": null,
            "KCJJYW": null,
            "SYZYYW": null,
            "CKWXYW": null,
            "CJLXSFKXG": ******,
            "SYXWLX": null,
            "KCYQYW": null,
            "XKXXXQ": null,
            "SFKB": null,
            "SJSYXS": null,
            "SYZY": null,
            "MLDM": null,
            "KSLXDM": null,
            "KCCCDM": "******",
            "DYYJXKDM": null,
            "SYXSLBDM": null,
            "KKZTDM": "******",
            "ZXS": 3******,
            "ROW_ID": ******,
            "KKXQS": null,
            "KCYQ": null,
            "WID": "201******05",
            "JXDGYW": null,
            "CJJLFSDM": "******",
            "JXDG": null,
            "SKXS": null,
            "XF": ******,
            "KCZY": null,
            "XGKC": null,
            "KCXZDM": "******",
            "KCFZR": null,
            "SFSYK": null,
            "KCZYYW": null,
            "KKJJ": null,
            "SFXWK": null,
            "KCJCYW": null,
            "SFKXQ": ******,
            "CDDW": null,
            "KCMCYW": "Teaching Chinese as a foreign language",
            "CLRQ": "******",
            "KCLBDM": "******",
            "XGKCYW": null,
            "KCJC": null,
            "SKYYDM": null,
            "KCDM": "******5",
            "KCJJ": null,
            "SJLY": "******33"
        },
        ...
}
```
