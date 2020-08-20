# 查询一卡通卡户信息

## 用途

查询一卡通所有商户信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/info_ecard

## 无请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明       |
| ----- | ------ | ------ | ---- | ---------- |
|stuempno|String||否|stuempno|
|custname|String||否|custname（模糊查询）|

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
|areaname|String|areaname|
|showcardno|String|showcardno|
|specialtyname|String|specialtyname|
|wid|String|wid|
|by1|String|by1|
|feename|String|feename|
|czlx|String|czlx|
|deptname|String|deptname|
|opendate|String|opendate|
|feetype|Number|feetype|
|cardno|Number|cardno|
|tel|String|tel|
|sex|String|sex|
|cardtypename|String|cardtypename|
|deptcode|String|deptcode|
|cardupdtime|String|cardupdtime|
|email|String|email|
|classcode|String|classcode|
|cardtype|Number|cardtype|
|balance|Number|balance|
|nationcode|String|nationcode|
|country|String|country|
|cardstatus|Number|cardstatus|
|cardverno|String|cardverno|
|idtypename|String|idtypename|
|custid|Number|custid|
|idno|String|idno|
|expiredate|String|expiredate|
|cardphyid|String|cardphyid|
|zipcode|String|zipcode|
|countrycode|String|countrycode|
|custupdtime|String|custupdtime|
|clrq|DateStr|clrq|
|custname|String|custname|
|mobile|String|mobile|
|specialtycode|String|specialtycode|
|nation|String|nation|
|idtype|String|idtype|
|areacode|String|areacode|
|stuempno|String|stuempno|
|sjly|String|sjly|
|custtype|Number|custtype|
|custtypename|String|custtypename|



## 请求数据示例

```
{
    "custname": "郭"
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
            "cardtype": 1,
            "cardphyid": "******",
            "sex": null,
            "countrycode": ****** ,
            "classcode": null,
            "areaname": "******",
            "nationcode": ******,
            "idtype": "******",
            "tel": null,
            "areacode": "******1",
            "cardstatus": 1,
            "expiredate": "******",
            "stuempno": "******",
            "balance": 0,
            "custtypename": "******",
            "feename": "******",
            "deptcode": "******",
            "cardupdtime": "******",
            "specialtycode": ******,
            "deptname": "******",
            "custname": "郭******",
            "custid": ******,
            "custtype": ******,
            "showcardno": "******",
            "clrq": "2020-******:52",
            "wid": "******",
            "zipcode": ******,
            "custupdtime": "******",
            "sjly": "******",
            "nation": "******",
            "specialtyname": ******,
            "country": ******,
            "czlx": "******",
            "cardverno": "******",
            "email": ******,
            "opendate": "******",
            "ROW_ID": ******,
            "cardno": ******,
            "by1": ******,
            "feetype": ******,
            "idno": "******",
            "idtypename": "******",
            "mobile": ******,
            "cardtypename": "******"
        },
        ...
}
```
