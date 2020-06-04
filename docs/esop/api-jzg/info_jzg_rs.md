# 查询人事教职工信息

## 用途

根据条件（即请求参数）获得人事教职工的信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/info_jzg_rs

## 请求参数

| 属性   | 类型   | 默认值 | 必填 | 说明         |
| ------ | ------ | ------ | ---- | ------------ |
| zgh   | String |        | 否   | 职工号     |
|xm|String||否|姓名|

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
|JGDM|String|籍贯代码|
|ZGH|String|职工号|
|XMPY|String|姓名拼音|
|XBDM|String|性别代码|
|NL|Number|年龄|
|JZGBH|String|教职工编号|
|XM|String|姓名|
|CYM|String|曾用名|
|CSRQ|String|出生日期|
|CSDDM|String|出生地代码|
|GJDQDM|String|国家地区代码|
|MZDM|String|民族代码|
|SFZJLXDM|String|身份证件类型代码|
|SFZJH|String|身份证件号|
|GATQDM|String|港澳台侨代码|
|JKZKDM|String|健康状况代码|
|HYZKDM|String|婚姻状况代码|
|CJGZRQ|String|参加工作日期|
|CJRQ|String|从教日期|
|HKSZD|String|户口所在地|
|ZZMMDM|String|政治面貌代码|
|CJDPRQ|String|参加党派日期|
|DEDPDM|String|第二党派代码|
|DEDPRQ|String|第二党派日期|
|LXRQ|String|来校日期|
|SZDWDM|String|所在单位代码|
|BZLBDM|String|编制类别代码|
|JZGLYDM|String|教职工来源代码|
|JZGLBDM|String|教职工类别代码|
|BYRQ|String|毕业日期|
|YRFSDM|String|用人方式代码|
|DSLBDM|String|导师类别代码|
|GZKH|String|GZKH|
|ZTBHRQ|String|状态变化日期|
|PRLBDM|String|聘任类别代码|
|GRSFDM|String|工人身份代码|
|DSPRRQ|String|导师聘任日期|
|DQZTDM|String|当前状态代码|
|ZGXLDM|String|最高学历代码|
|BYXX|String|毕业学校|
|ZGXWDM|String|最高学位代码|
|SYXWDW|String|授予学位单位|
|SXWRQ|String|授学位日期|
|JSZGZH|String|教师资格证号|
|ZYJSZWJBDM|String|专业技术职务级别代码|
|XKLBDM|String|学科类别代码|
|EJXKDM|String|二级学科代码|
|DZZW|String|党政职务|
|DZZWRZRQ|String|党政职务任职日期|
|JSZGHDRQ|String|教师资格获得日期|
|YJXKDM|String|一级学科代码|
|YJFX|String|研究方向|
|DZZWJBDM|String|党政职务级别代码|
|ZYJSZWDM|String|专业技术职务代码|
|ZYJSZWPDRQ|String|专业技术职务评定日期|
|GLGWDJDM|String|管理岗位等级代码|
|PRZYJSZWJBDM|String|聘任专业技术职务级别代码|
|GRJSGZDM|String|工人技术工种代码|
|GRJSDJPDRQ|String|工人技术等级评定日期|
|ZYJSGWLBDJDM|String|专业技术岗位类别等级代码|
|PRZYJSZWDM|String|聘任专业技术职务代码|
|PRZYJSZWRQ|String|聘任专业技术职务日期|
|GRJSDJDM|String|工人技术等级代码|
|ZYJSGWLBDM|String|专业技术岗位类别代码|
|ZYJSGWPRRQ|String|专业技术岗位聘任日期|
|GLGWPRRQ|String|管理岗位聘任日期|
|GQGWDJDM|String|工勤岗位等级代码|
|XPGWDM|String|校聘岗位代码|
|ZYGWDM|String|专业岗位代码|
|GQGWPRRQ|String|工勤岗位聘任日期|
|SFSJT|String|是否双肩挑|
|YXTXDZ|String|YXTXDZ|
|SJ|String|手机|
|DZXX|String|电子信箱|
|JJLXRXM|String|急联系人姓名|
|SJTSZDWDM|String|双肩挑所在单位代码|
|YXYZBM|String|YXYZBM|
|BGLXDH|String|办公联系电话|
|JTDH|String|家庭电话|
|JJLXRDH|String|紧急联系人电话|
|TBRQ|DateStr|TBRQ|
|BZ|String|备注|
|TBLX|String|TBLX|
|CZZ|String|操作者|
|GRJJ|String|GRJJ|
|CZRQ|DateStr|操作日期|
|CZZXM|String|操作者姓名|
|ZYJSGW|String|专业技术岗位|
|JHSJ|String|JHSJ|
|SJBS|String|SJBS|
|LKGB|String|LKGB|
|GLGW|String|管理岗位|
|GQGW|String|工勤岗位|
|HKXZ|String|HKXZ|
|SFCYLK|String|SFCYLK|
|SG|String|SG|
|XXDM|String|XXDM|
|SFDYY|String|SFDYY|
|GYDJ|String|GYDJ|
|SFCYRY|String|SFCYRY|
|QYGZSC|String|QYGZSC|
|YJLTXRQ|String|YJLTXRQ|
|FDYLBDM|String|FDYLBDM|
|HWJL|String|HWJL|
|SFCYXLZXZGZS|String|SFCYXLZXZGZS|
|SXZY|String|SXZY|
|SFBXBY|String|SFBXBY|
|SFWBKSSK|String|SFWBKSSK|
|SFZZCSXLZXGZ|String|SFZZCSXLZXGZ|
|SFSSXJS|String|SFSSXJS|
|JSLX|String|JSLX|
|GWMC|String|岗位名称|
|ZYJSGWMC|String|专业技术岗位名称|

## 请求数据示例

```
{"xm": "许**"}
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
            "ZYJSZWJBDM": null,
            "SFWBKSSK": null,
            "BYRQ": null,
            "DSLBDM": null,
            "GRJSDJPDRQ": null,
            "SFCYLK": null,
            "CZLX": "*",
            "YJFX": null,
            "XPGWDM": null,
            "TBRQ": null,
            "SXZY": null,
            "HKSZD": null,
            "LXRQ": null,
            "SFSSXJS": null,
            "JSLX": null,
            "HWJL": null,
            "SJTSZDWDM": null,
            "GYDJ": null,
            "LKGB": null,
            "YJLTXRQ": null,
            "HKXZ": null,
            "NL": *,
            "SFDYY": null,
            "ROW_ID": 1,
            "PRZYJSZWJBDM": null,
            "DSPRRQ": null,
            "JJLXRXM": null,
            "SFZJLXDM": null,
            "PRLBDM": null,
            "XBDM": "*",
            "JSZGHDRQ": null,
            "CJGZRQ": "******",
            "FDYLBDM": null,
            "CSRQ": "******",
            "XM": "许**",
            "HYZKDM": null,
            "TBLX": null,
            "ZGXWDM": null,
            "JZGLBDM": null,
            "BZLBDM": null,
            "BYXX": null,
            "ZYJSGW": null,
            "QYGZSC": null,
            "DEDPDM": null,
            "GQGW": null,
            "SFCYXLZXZGZS": null,
            "GRJSGZDM": null,
            "GRJJ": null,
            "CJRQ": null,
            "ZYJSGWLBDJDM": null,
            "GLGWPRRQ": null,
            "SFCYRY": null,
            "CLRQ": "******",
            "SYXWDW": null,
            "SZDWDM": "******",
            "SXWRQ": null,
            "ZYJSZWPDRQ": null,
            "GRJSDJDM": null,
            "ZTBHRQ": null,
            "CJDPRQ": null,
            "SJLY": "******",
            "JKZKDM": null,
            "BY2": null,
            "XKLBDM": null,
            "BY1": null,
            "YJXKDM": null,
            "GATQDM": null,
            "MZDM": "******",
            "SFZJH": "******",
            "JGDM": null,
            "SFSJT": null,
            "DZZW": null,
            "SJBS": null,
            "DEDPRQ": null,
            "YRFSDM": "******",
            "DZZWJBDM": null,
            "JHSJ": null,
            "ZGXLDM": null,
            "SFZZCSXLZXGZ": null,
            "BGLXDH": null,
            "XXDM": null,
            "JZGLYDM": null,
            "YXYZBM": null,
            "ZYJSGWPRRQ": null,
            "ZGH": "******",
            "JJLXRDH": null,
            "CZZ": "******",
            "GLGW": null,
            "JZGBH": "******",
            "SFBXBY": null,
            "DQZTDM": "******",
            "CZRQ": "******",
            "GQGWDJDM": null,
            "PRZYJSZWRQ": null,
            "YXTXDZ": null,
            "ZZMMDM": null,
            "WID": "******",
            "EJXKDM": null,
            "ZYJSGWLBDM": null,
            "PRZYJSZWDM": null,
            "BZ": null,
            "GJDQDM": null,
            "JSZGZH": null,
            "ZYJSZWDM": null,
            "CZZXM": "******",
            "DZXX": null,
            "CYM": null,
            "SG": null,
            "CSDDM": null,
            "SJ": null,
            "ZYGWDM": null,
            "XMPY": "X**",
            "GRSFDM": null,
            "DZZWRZRQ": null,
            "ZYJSGWMC": null,
            "GZKH": null,
            "GLGWDJDM": null,
            "GQGWPRRQ": null,
            "GWMC": null,
            "JTDH": null
        }
    ]
}
```
