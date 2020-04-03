# 查询帐号基本信息

## 用途

根据条件（即请求参数）获得帐号基本信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/zhjbxx_tysfrz

## 请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明                                                                                                                                                                                                                          |
| ----- | ------ | ------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|id|String||否|ID|
|userid|String||否|用户ID|
|cn|String||否|用户名称|
|pwdstrength|String||否|密码强度|
|pwdpolicy|String||否|密码策略|
|inetuserstatus|String||否|inetuserstatus|
|telephonenumber|String||否|手机号码|
|bmyx|String||否|保密邮箱|
|container|String||否|容器|

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
|ID|String|ID|
|USERID|String|用户账户|
|CN|String|CN|
|PWDSTRENGTH|Number|用户名称|
|PWDPOLICY|Number|密码策略|
|CONTAINER|String|容器|
|LIFETIME|DateStr|LIFETIME|
|ADDFROM|String|ADDFROM|
|INETUSERSTATUS|String|INETUSERSTATUS|
|ALIAS|String|别名|
|BMYX|String|保密邮箱|
|TELEPHONENUMBER|String|手机号码|

## 请求数据示例

```
{
	"cn":"高*"
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
        "pages": 1
    },
    "dataSet": [
        {
            "ADDFROM": "******",
            "WID": null,
            "BY1": null,
            "CONTAINER": "******",
            "PWDPOLICY": ******,
            "CZLX": "******",
            "LIFETIME": null,
            "ALIAS": null,
            "PWDSTRENGTH": ******,
            "CLRQ": "******",
            "BMYX": null,
            "ROW_ID": 1,
            "ID": "******",
            "CN": "高*",
            "TELEPHONENUMBER": null,
            "INETUSERSTATUS": "******",
            "SJLY": null,
            "USERID": "******"
        },
        ...
}
```
