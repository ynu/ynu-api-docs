# 查询教职工信息

## 用途

根据条件（即请求参数）获得教职工的信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/query_jzg

## 请求参数

| 属性   | 类型   | 默认值 | 必填 | 说明         |
| ------ | ------ | ------ | ---- | ------------ |
| xbdm   | String |        | 否   | 性别代码     |
| zzmmdm | String |        | 否   | 政治面貌代码 |
| dqztdm | String |        | 否   | 当前状态代码 |
| zgh    | String |        | 否   | 职工号       |
| xm     | String |        | 否   | 姓名         |
| xmpy   | String |        | 否   | 姓名拼音     |
| sfzjh  | String |        | 否   | 身份证件号   |
| lxrq   | String |        | 否   | 来校日期     |
| byxx   | String |        | 否   | 毕业学校     |
|szdwdm|String||否|所在单位代码|

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
|ZGH|String|职工号|
|XM|String|姓名|
|XMPY|String|姓名拼音|
|CYM|String|曾用名|
|XBDM|String|性别代码|
|CSRQ|String|出生日期|
|CSDDM|String|出生地代码|
|JGDM|String|籍贯代码|
|GJDQDM|String|国家地区代码|
|MZDM|String|民族代码|
|SFZJLXDM|String|身份证件类型代码|
|SFZJH|String|身份证件号|
|GATQDM|String|港澳台侨代码|
|JKZKDM|String|健康状况代码|
|HYZKDM|String|婚姻状况代码|
|CJGZRQ|String|参加工作日期|
|LXRQ|String|来校日期|
|CJRQ|String|从教日期|
|ZZMMDM|String|政治面貌代码|
|CJDPRQ|String|参加党派日期|
|DEDPDM|String|第二党派代码|
|CJDEDPRQ|String|参加第二党派日期|
|HKSZD|String|户口所在地|
|JZGRYLBDM|String|教职工人员类别代码|
|SZDWDM|String|所在院系（单位）代码|
|SZKSDM|String|所在科室（系）代码|
|BZLBDM|String|编制类别代码|
|JZGLY|String|教职工来源|
|JZGLBDM|String|教职工类别代码|
|PRLBDM|String|聘任类别代码|
|YRFSDM|String|用人方式代码|
|DQZTDM|String|当前状态代码|
|ZTBHRQ|String|状态变化日期|
|ZGXLDM|String|最高学历代码|
|BYRQ|String|毕业日期|
|BYXX|String|毕业学校|
|XWDM|String|学位代码|
|SXWRQ|String|授学位日期|
|SYXWDW|String|授予学位单位|
|JSZGZH|String|教师资格证号|
|JSZGHDRQ|String|教师资格或得日期|
|DSLBDM|String|导师类别代码|
|DSPRRQ|String|导师聘任地区|
|XKLBDM|String|学科类别代码|
|YJXKDM|String|一级学科代码|
|EJXKDM|String|二级学科代码|
|YJFX|String|研究方向|
|ZYJSZWDM|String|专业技术职务代码|
|ZYJSZWJBDM|String|专业技术职务级别代码|
|ZYJSZWPDRQ|String|专业技术朱武评定日期|
|PRZYJSZWDM|String|聘任专业技术职务代码|
|PRZYJSZWJBDM|String|聘任专业技术职务级别代码|
|PRZYJSZWRQ|String|聘任专业技术职务日期|
|GRJSGZDM|String|工人技术工种代码|
|GRJSDJDM|String|工人技术等级代码|
|GRJSDJPDRQ|String|工人技术等级评定日期|
|ZYJSGWLBDM|String|专业技术岗位类别代码|
|ZYJSGWDJDM|String|专业技术岗位等级代码|
|ZYJSGWPRRQ|String|专业技术岗位聘任日期|
|GLGWDJDM|String|管理岗位等级代码|
|GLGWPRRQ|String|管理岗位聘任日期|
|GQGWDJDM|String|工勤岗位等级代码|
|GQGWPRRQ|String|工勤岗位聘任日期|
|DZZW|String|党政职务|
|DZZWLBDM|String|党政职务类别代码|
|DZZWJBDM|String|党政职务级别代码|
|DZZWRZRQ|String|党政职务任职日期|
|XPGWDM|String|校聘岗位代码|
|SFSJT|String|是否双肩挑|
|SJTSZDWDM|String|双肩挑所在院系（单位）代码|
|CLRQ|String|处理日期|
|CZLX|String|操作类型|
|SJLY|String|数据来源|
|BY1|String|人事单位代码|
|BY2|String|认识代为名称|
|DEWYYZDM|String|原部门代码|
|DEWYSPDM|String|原部门名称|
|ZGYZDM|String||
|ZGYZSLCDDM|String||
|PTHSPDJDM|String||
|XJGZJBDM|String||
|GLQSRQ|String||
|JDGLYS|String||
|GL|String||
|TC|String||
|HZDSXM|String||
|JXYS|String||
|JXLXDM|String||
|FJH|String||
|DABH|String||
|XXDM|String||
|SFYHWGZJL|String||
|SFYHWXXJL|String||
|ZBQKDM|String||
|SFZJYXQ|String||
|PRZTDM|String||
|PRXZDM|String||
|DYWYYZDM|String||
|DYWYSPDM|String||
|YBMDM|String||
|YBMMC|String||
|YZC|String||

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
        "total": 55,
        "pages": 6
    },
    "dataSet": [
        {
            "ZYJSZWJBDM": "4",
            "BYRQ": null,
            "DSLBDM": null,
            "GRJSDJPDRQ": null,
            "CZLX": "U",
            "YJFX": null,
            "DZZWLBDM": null,
            "XPGWDM": null,
            "ZGYZDM": null,
            "XWDM": null,
            "HKSZD": null,
            "LXRQ": "19-07-01",
            "PRZTDM": null,
            "SJTSZDWDM": null,
            "SFZJYXQ": null,
            "DYWYSPDM": null,
            "FJH": null,
            "ROW_ID": 1,
            "PRZYJSZWJBDM": null,
            "DSPRRQ": null,
            "SFZJLXDM": null,
            "PRLBDM": null,
            "JZGRYLBDM": null,
            "XBDM": "2",
            "JSZGHDRQ": null,
            "CJDEDPRQ": null,
            "HZDSXM": null,
            "CJGZRQ": "1-07-01",
            "CSRQ": "1-02-12",
            "XM": "王",
            "HYZKDM": null,
            "JZGLBDM": "13",
            "BZLBDM": null,
            "ZYJSGWDJDM": null,
            "DEWYYZDM": null,
            "BYXX": "云南大学",
            "DEDPDM": null,
            "XJGZJBDM": null,
            "GRJSGZDM": null,
            "CJRQ": null,
            "GLGWPRRQ": null,
            "SFYHWXXJL": null,
            "YZC": "副",
            "SYXWDW": null,
            "CLRQ": "2-06-15 01:21:20.0",
            "JDGLYS": null,
            "SXWRQ": null,
            "SZDWDM": "101",
            "GL": null,
            "ZYJSZWPDRQ": "2015-11-14",
            "GRJSDJDM": null,
            "ZTBHRQ": "2-09-18",
            "CJDPRQ": "1-12-16",
            "SJLY": null,
            "JKZKDM": null,
            "GLQSRQ": null,
            "XKLBDM": null,
            "BY2": "党委办公室",
            "BY1": "101",
            "YJXKDM": null,
            "GATQDM": null,
            "MZDM": "07",
            "SFZJH": "5301*****0322",
            "JGDM": null,
            "SFSJT": null,
            "DZZW": "副主任",
            "JXYS": null,
            "YBMMC": "党委办公室",
            "YRFSDM": "01",
            "DZZWJBDM": "11",
            "ZGXLDM": "11",
            "PTHSPDJDM": null,
            "XXDM": null,
            "ZYJSGWPRRQ": null,
            "ZGH": "122",
            "PRXZDM": null,
            "SFYHWGZJL": null,
            "DQZTDM": "2",
            "GQGWDJDM": null,
            "PRZYJSZWRQ": null,
            "YBMDM": "1",
            "SZKSDM": null,
            "ZZMMDM": "01",
            "WID": "899****1EACE",
            "EJXKDM": null,
            "ZBQKDM": null,
            "ZYJSGWLBDM": null,
            "PRZYJSZWDM": null,
            "JSZGZH": null,
            "GJDQDM": null,
            "ZYJSZWDM": "23",
            "TC": null,
            "CYM": null,
            "DYWYYZDM": null,
            "CSDDM": null,
            "JZGLY": null,
            "DEWYSPDM": null,
            "XMPY": "ZY",
            "ZGYZSLCDDM": null,
            "JXLXDM": null,
            "DABH": null,
            "DZZWRZRQ": null,
            "GLGWDJDM": "05",
            "GQGWPRRQ": null
        },
        ...
}
```
