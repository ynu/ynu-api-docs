# 查询本科生信息

## 用途

根据条件（即请求参数）获得本科生的信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/query_bks

## 请求参数

| 属性    | 类型   | 默认值 | 必填 | 说明 |
| ------- | ------ | ------ | ---- | ---- |
| sfzx    | String |        | 否   |      |
| xbdm    | String |        | 否   |      |
| pyccmdm | String |        | 否   |      |
| xslbdm  | String |        | 否   |      |
| xznj    | String |        | 否   |      |
| mzdm    | String |        | 否   |      |

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
|WID|String||
|CLRQ|String||
|CZLX|String||
|SJLY|String||
|BY1|String||
|XH|String||
|XM|String||
|XMPY|String||
|YXDM|String||
|SFZX|String||
|SFZJ|String||
|DSDM|String||
|CYM|String||
|BSKSH|String||
|YYSJB|String||
|JYSJB|String||
|BYSJSB|String||
|XWSYSJSB|String||
|YYZSHB|String||
|BYZSHSB|String||
|XWZSHSB|String||
|SYXWDMSB|String||
|SXSLBDM|String||
|SXWZSH|String||
|SXWBYSH|String||
|SXWZY|String||
|FXZYDM|String||
|FXBYSJ|String||
|FXZSH|String||
|YJBYSJSB|String||
|CCQD|String||
|CCZD|String||
|FJ|String||
|BSRXSJ|String||
|BSXZDM|String||
|FSZTDM|String||
|BYZYDM|String||
|ZXM|String||
|XZM|String||
|JHXZDM|String||
|XIDM|String||
|FXXYDM|String||
|FXBLSJ|String||
|KSLXDM|String||
|XDMSDM|String||
|SJR|String||
|YH|String||
|BJYJLSB|String||
|SFSYXWSB|String||
|BQDM|String||
|BQMC|String||
|XZ|String||
|XKMLDM|String||
|RXNJ|String||
|WYYZDM|String||
|XXXSDM|String||
|TSXSLXDM|String||
|ZSND|String||
|GKCJ|String||
|XXXQDM|String||
|ZSZXMC|String||
|ZP|String||
|YHH|String||
|XSBH|String||
|KSH|String||
|TZSH|String||
|XBDM|String||
|CSRQ|String||
|XXDM|String||
|MZDM|String||
|SFZJLXDM|String||
|SFZJH|String||
|CSDDM|String||
|GJDQDM|String||
|GATQDM|String||
|ZZMMDM|String||
|XYZJDM|String||
|HYZKDM|String||
|HKSZD|String||
|YHZH|String||
|YKTKH|String||
|JKZKDM|String||
|TZ|String||
|SG|String||
|TC|String||
|SYDDM|String||
|HKXZDM|String||
|PYFSDM|String||
|TGYXDM|String||
|ZYDM|String||
|BJDM|String||
|XZNJ|String||
|YJBYRQ|String||
|XSLBDM|String||
|PYCCDM|String||
|RXNY|String||
|SJBYRQ|String||
|XJZTDM|String||
|ZSDZ|String||
|RXQDW|String||
|KSLBDM|String||
|RXFSDM|String||
|SJH|String||
|DZXX|String||
|LXDH|String||
|QQH|String||
|WXH|String||
|ZXTXDZ|String||
|ZXYZBM|String||
|JTDZQH|String||
|JTDZ|String||
|JTYB|String||
|JTDH|String||
|ZYFXDM|String||
|JG|String||
|ZSJDDM|String||
|KSTZ|String||
|BJYJLDM|String||
|BYZSH|String||
|JYZSH|String||
|SFSYXW|String||
|SYXWDM|String||
|XWZH|String||
|XWSYSJ|String||
|SS|String||
|SSDH|String||
|SSSYDM|String||
|CZR|String||
|CZRXM|String||
|CZIP|String||
|CZSJ|DateStr||
|JJLXR|String||
|JJLXFS|String||
|TBRQ|DateStr||
|RXZY|String||
|RXBJ|String||
|XSLB2|String||
|BZ|String||

## 请求数据示例

```
{
	"nj":"2001"
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
        "total": 26,
        "pages": 1
    },
    "dataSet": [
        {
            "JKZKDM": null,
            "ZYDM": "03021201",
            "BYZH": null,
            "SSXWZYMC": null,
            "BY1": null,
            "CZLX": "I",
            "DSZGH2": null,
            "RXFSM": null,
            "DAQXYNR": null,
            "YJFX": null,
            "SFBXDX": null,
            "ZJXY": null,
            "MZDM": "01",
            "CSD": null,
            "ML": null,
            "QQ": null,
            "RXJJDM": null,
            "GJDQM": null,
            "XZ": "3",
            "DSZGH": null,
            "JXXZ": null,
            "SYD": null,
            "TSXSLX": null,
            "GATQM": null,
            "ZJHM": "5301103710504331",
            "ZJLX": "01",
            "YXDM": "3031",
            "LXBZ": null,
            "PYCCM": null,
            "SJBYSJ": null,
            "NJ": "2001",
            "ROW_ID": 1,
            "ZZMMM": "01",
            "XXFSDM": null,
            "JCXX": null,
            "JG": null,
            "HKSZDM": null,
            "DAZT": null,
            "WID": "1200101146",
            "XBDM": "1",
            "BS": null,
            "RXNY": "2001-09-01 00:00:00.0",
            "ZXJH": null,
            "SFZX": "0",
            "XJZT": null,
            "YHKH": null,
            "XH": "1200110146",
            "BZ": null,
            "CSRQ": "1971-05-04 00:00:00.0",
            "HYZKDM": null,
            "XM": "何",
            "XWZH": null,
            "DBSJ": null,
            "DZXX": null,
            "XWLX": null,
            "SFZZS": null,
            "CYM": null,
            "YJBYSJ": null,
            "JDFSDM": null,
            "PYFSDM": "22",
            "QRZT": null,
            "SFPG": null,
            "XQSM": null,
            "KSBH": null,
            "RDSJ": null,
            "BJDM": null,
            "XMPY": null,
            "ZCZT": "0",
            "CLRQ": "2019-09-30 14:12:04.0",
            "JTZZ": null,
            "SFLXS": null,
            "XSFLDM": null,
            "SFKXK": null,
            "SJHM": null,
            "KSFSM": null,
            "XSLBDM": "01",
            "JTDH": null,
            "SJLY": "yjs"
        },
        ...
}
```
