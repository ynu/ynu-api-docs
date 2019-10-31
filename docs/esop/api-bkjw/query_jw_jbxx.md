# 查询教务信息

## 用途

根据条件（即请求参数）获得教务的信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/query_jw

## 请求参数

| 属性    | 类型   | 默认值 | 必填 | 说明         |
| ------- | ------ | ------ | ---- | ------------ |
| sfzx    | String |        | 否   | 是否在校     |
| xbdm    | String |        | 否   | 性别代码     |
| pyccmdm | String |        | 否   | 培养层次代码 |
| xslbdm  | String |        | 否   | 学生类别代码 |
| xznj    | String |        | 否   | 现在年级     |
| mzdm    | String |        | 否   | 民族代码     |

## 返回值

### Object

返回的 JSON 数据包
|属性|类型|说明|
|---|---|---|
|RESULT|Number|返回结果|

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
|CLRQ|String|处理日期|
|CZLX|String|操作类型|
|SJLY|String|数据来源|
|BY1|String|备用 1|
|XH|String|学号|
|XM|String|姓名|
|XMPY|String|姓名拼音|
|YXDM|String|院系代码|
|SFZX|String|是否在校|
|SFZJ|String|是否在籍|
|DSDM|String|博士入学时间|
|CYM|String|曾用名|
|BSKSH|String|博士考生号|
|YYSJB|String|肄业时间(本)|
|JYSJB|String|结业时间(本)|
|BYSJSB|String|毕业时间(硕,博)|
|XWSYSJSB|String|学位授予时间(硕,博)|
|YYZSHB|String|肄业证书号(本)|
|BYZSHSB|String|毕业证书号(硕,博)|
|XWZSHSB|String|学位证书号(硕,博)|
|SYXWDMSB|String|授予学位类别(硕,博)|
|SXSLBDM|String|双学士类别代码|
|SXWZSH|String|双学位证书号|
|SXWBYSH|String|双学位毕业时间|
|SXWZY|String|双学位专业|
|FXZYDM|String|辅修专业代码|
|FXBYSJ|String|辅修毕业时间|
|FXZSH|String|辅修证书号|
|YJBYSJSB|String|预计毕业时间(硕,博)|
|CCQD|String|乘车起点|
|CCZD|String|乘车终点|
|FJ|String|附件|
|BSRXSJ|String|博士入学时间|
|BSXZDM|String|博士学制代码|
|FSZTDM|String|辅双状态代码|
|BYZYDM|String|BYZYDM|
|ZXM|String|ZXM|
|XZM|String|XZM|
|JHXZDM|String|JHXZDM|
|XIDM|String|XIDM|
|FXXYDM|String|FXXYDM|
|FXBLSJ|String|FXBLSJ|
|KSLXDM|String|KSLXDM|
|XDMSDM|String|XDMSDM|
|SJR|String|SJR|
|YH|String|YH|
|BJYJLSB|String|BJYJLSB|
|SFSYXWSB|String|SFSYXWSB|
|BQDM|String|标签代码|
|BQMC|String|标签名称|
|XZ|String|学制|
|XKMLDM|String|学科门类代码|
|RXNJ|String|入学年级|
|WYYZDM|String|外国语语种代码|
|XXXSDM|String|学习形式代码|
|TSXSLXDM|String|特殊学生类型代码|
|ZSND|String|招生年度|
|GKCJ|String|高考成绩|
|XXXQDM|String|学校校区代码|
|ZSZXMC|String|招生中学名称|
|ZP|String|照片|
|YHH|String|用户名|
|XSBH|String|学生编号|
|KSH|String|考生号|
|TZSH|String|通知书号|
|XBDM|String|性别代码|
|CSRQ|String|出生日期|
|XXDM|String|血型代码|
|MZDM|String|民族代码|
|SFZJLXDM|String|身份证件类型代码|
|SFZJH|String|身份证件号|
|CSDDM|String|出生地代码|
|GJDQDM|String|国家地区代码|
|GATQDM|String|港澳台侨代码|
|ZZMMDM|String|政治面貌代码|
|XYZJDM|String|信仰宗教代码|
|HYZKDM|String|婚姻状况代码|
|HKSZD|String|户口所在地|
|YHZH|String|银行账户|
|YKTKH|String|一卡通卡号|
|JKZKDM|String|健康状况|
|TZ|String|体重（kg）|
|SG|String|身高（cm）|
|TC|String|特长|
|SYDDM|String|生源地代码|
|HKXZDM|String|入学前户口性质|
|PYFSDM|String|培养方式代码|
|TGYXDM|String|托管院系代码|
|ZYDM|String|专业代码|
|BJDM|String|班级代码|
|XZNJ|String|现在年级|
|YJBYRQ|String|预计毕业日期|
|XSLBDM|String|学生类别代码|
|PYCCDM|String|培养层次代码|
|RXNY|String|入学年月|
|SJBYRQ|String|实际毕业日期|
|XJZTDM|String|学籍状态代码|
|ZSDZ|String|住宿地址|
|RXQDW|String|入学前单位|
|KSLBDM|String|考生类别代码|
|RXFSDM|String|入学方式代码|
|SJH|String|手机号|
|DZXX|String|电子邮箱|
|LXDH|String|联系电话|
|QQH|String|QQ 号|
|WXH|String|微信号|
|ZXTXDZ|String|在校通讯地址|
|ZXYZBM|String|在校邮政编码|
|JTDZQH|String|家庭地址区别|
|JTDZ|String|家庭地址|
|JTYB|String|家庭邮编|
|JTDH|String|家庭电话|
|ZYFXDM|String|专业方向代码|
|JG|String|籍贯|
|ZSJDDM|String|招生季度代码|
|KSTZ|String|考生特征|
|BJYJLDM|String|毕结业结论代码|
|BYZSH|String|毕业证书号|
|JYZSH|String|结业证书号|
|SFSYXW|String|是否授予学位|
|SYXWDM|String|授予学位代码|
|XWZH|String|学位证号|
|XWSYSJ|String|学位授予时间|
|SS|String|宿舍|
|SSDH|String|宿舍电话|
|SSSYDM|String|所述书院代码|
|CZR|String|操作人|
|CZRXM|String|操作人姓名|
|CZIP|String|操作 IP|
|CZSJ|DateStr|操作时间|
|JJLXR|String|紧急联系人|
|JJLXFS|String|紧急联系方式|
|TBRQ|DateStr|同步日期|
|RXZY|String|入学专业|
|RXBJ|String|入学班级|
|XSLB2|String|学生类别 2|
|BZ|String|备注|

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
        "total": 91674,
        "pages": 92
    },
    "dataSet": [
        {
            "XIDM": null,
            "XYZJDM": null,
            "ZYDM": "30112017701-lxs",
            "SXSLBDM": null,
            "CZLX": "I",
            "BYSJSB": null,
            "FSZTDM": null,
            "TBRQ": null,
            "WYYZDM": null,
            "BQDM": null,
            "BYZSHSB": null,
            "HKSZD": null,
            "BQMC": null,
            "XWSYSJ": null,
            "XKMLDM": null,
            "KSLXDM": null,
            "BSXZDM": null,
            "FXXYDM": null,
            "XXXSDM": null,
            "WXH": null,
            "GKCJ": null,
            "CCZD": null,
            "FXZYDM": null,
            "YHZH": null,
            "TGYXDM": null,
            "BJYJLSB": null,
            "ROW_ID": 1,
            "BYZYDM": null,
            "JYSJB": null,
            "TZ": null,
            "SFZJLXDM": "A",
            "SFSYXW": null,
            "HKXZDM": null,
            "SJR": null,
            "XBDM": "1",
            "JYZSH": null,
            "RXNY": "2019-9-1",
            "XXXQDM": "05",
            "LXDH": null,
            "SJH": null,
            "KSLBDM": null,
            "XH": "2010581",
            "CSRQ": "1999-04-10",
            "XM": "RANA,MD MASUD",
            "HYZKDM": null,
            "PYCCDM": "05",
            "XWZH": null,
            "RXNJ": null,
            "FJ": null,
            "CZSJ": "2019-09-04 13:21:52.0",
            "CZIP": null,
            "SYXWDM": null,
            "BJYJLDM": null,
            "PYFSDM": null,
            "XJZTDM": "0",
            "SXWZY": null,
            "XZM": null,
            "ZSJDDM": "1",
            "CLRQ": "2019-09-30 12:26:30.0",
            "YYSJB": null,
            "ZYFXDM": null,
            "TSXSLXDM": null,
            "YJBYRQ": null,
            "JTDZQH": null,
            "SJLY": "JW",
            "JKZKDM": null,
            "SXWBYSH": null,
            "XDMSDM": null,
            "BY1": null,
            "GATQDM": null,
            "ZXYZBM": null,
            "KSH": null,
            "MZDM": null,
            "SFZJH": "EB59038",
            "BYZSH": null,
            "ZP": null,
            "FXBLSJ": null,
            "JTYB": null,
            "SFSYXWSB": null,
            "SYXWDMSB": null,
            "YJBYSJSB": null,
            "XWZSHSB": null,
            "TZSH": null,
            "XZ": 4,
            "YH": null,
            "YXDM": "3011",
            "RXQDW": null,
            "XXDM": null,
            "ZXM": null,
            "YKTKH": null,
            "XSBH": "20981",
            "XWSYSJSB": null,
            "RXZY": null,
            "ZSZXMC": null,
            "CZRXM": "刘",
            "BSRXSJ": null,
            "DSDM": null,
            "JG": null,
            "SSSYDM": null,
            "JHXZDM": null,
            "YYZSHB": null,
            "ZZMMDM": null,
            "WID": "0012aa98c1c3d131d4310e",
            "RXFSDM": null,
            "SXWZSH": null,
            "XSLB2": null,
            "SFZX": "1",
            "CCQD": null,
            "ZSDZ": null,
            "CZR": "20060",
            "BZ": null,
            "GJDQDM": "050",
            "JJLXFS": null,
            "SS": null,
            "JTDZ": null,
            "YHH": "201932981",
            "KSTZ": null,
            "FXZSH": null,
            "DZXX": null,
            "SFZJ": "1",
            "SJBYRQ": null,
            "TC": null,
            "ZXTXDZ": null,
            "ZSND": null,
            "CYM": null,
            "RXBJ": null,
            "FXBYSJ": null,
            "SG": null,
            "CSDDM": null,
            "BSKSH": null,
            "QQH": null,
            "BJDM": "201931780701-lxs",
            "XMPY": null,
            "SSDH": null,
            "JJLXR": null,
            "SYDDM": null,
            "XSLBDM": null,
            "JTDH": null,
            "XZNJ": "2019"
        },
        ...
}
```
