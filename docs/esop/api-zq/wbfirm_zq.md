# 查询站群网站信息

## 用途

根据条件（参数）查询站群网站信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/wbfirm_zq

## 请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明       |
| ----- | ------ | ------ | ---- | ---------- |
|wbfirmid|String||否|网站id|
|wbname|String||否|网站名称（模糊查询）|

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
|wbredirectpage|String|wbredirectpage|
|wid|String|技术主键ID|
|by1|String|备用1|
|czlx|String|操作类型|
|wbdbname|String|wbdbname|
|wbpostcode|String|wbpostcode|
|wbemail|String|wbemail|
|wbstate|String|wbstate|
|wbpreviewimage|String|wbpreviewimage|
|wbipruleid|String|wbipruleid|
|wborder|String|wborder|
|wbphone|String|wbphone|
|wbsiteauthorityrule|String|wbsiteauthorityrule|
|wbfowner|String|wbfowner|
|wbownerpath|String|wbownerpath|
|wbdesc|String|wbdesc|
|wbfirmid|String|wbfirmid|
|wbname|String|wbname|
|wberrorpage|String|wberrorpage|
|wbaccount|String|wbaccount|
|wbtypeid|String|wbtypeid|
|wbstartdate|String|wbstartdate|
|wbcountry|String|wbcountry|
|wbcity|String|wbcity|
|wblocale|String|wblocale|
|wblevel|String|wblevel|
|clrq|DateStr|处理日期|
|wbregisterdate|String|wbregisterdate|
|wbenddate|String|wbenddate|
|wbsiteipruleid|String|wbsiteipruleid|
|wbprovince|String|wbprovince|
|sjly|String|数据来源|

## 请求数据示例

```
{
    "wbname": "中国"
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
        "total": *,
        "pages": 1
    },
    "dataSet": [
        {
            "wbsiteauthorityrule": ******,
            "wbaccount": "******",
            "wblevel": "******",
            "wbdesc": ******,
            "wbenddate": "29-******上午",
            "wbphone": null,
            "wbcountry": null,
            "wbname": "中国******",
            "wbredirectpage": null,
            "wbsiteipruleid": null,
            "wbdbname": "******",
            "wbownerpath": null,
            "wbprovince": null,
            "wbpostcode": null,
            "wberrorpage": null,
            "clrq": "20******",
            "wid": null,
            "wbfowner": "******",
            "sjly": "******",
            "wbemail": null,
            "wbipruleid": "******",
            "wborder": "******",
            "wbregisterdate": "10******下午",
            "czlx": "******",
            "wbstartdate": "29******上午",
            "wbstate": "5",
            "wbfirmid": "1******",
            "ROW_ID": 1,
            "by1": null,
            "wbtypeid": "******",
            "wblocale": ******,
            "wbcity": ******,
            "wbpreviewimage": ******
        },
        ...
}
```
