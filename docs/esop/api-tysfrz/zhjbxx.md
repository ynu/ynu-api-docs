# 查询帐号基本信息

## 用途

根据条件（即请求参数）获得帐号基本信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/zhjbxx_tysfrz

## 请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明                                                                                                                                                                                                                          |
| ----- | ------ | ------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| param | String |        | 否   | id（ID），userid（用户账户），cn，pwdstrength（用户名称），pwdpolicy（密码强度），pwdpolicy（密码策略），container（容器），inetuserstatus（inetuserstatus），telephonenumber（手机号码），bmyx（保密邮箱）字段的模糊查询参数 |

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
	"param":"物理"
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
        "total": ***,
        "pages": 1
    },
    "dataSet": [
        {
            "ADDFROM": "2",
            "WID": null,
            "BY1": null,
            "CONTAINER": "o***",
            "PWDPOLICY": 1,
            "CZLX": "***",
            "LIFETIME": "20***",
            "ALIAS": null,
            "PWDSTRENGTH": ***3,
            "CLRQ": "201***",
            "BMYX": ***ll,
            "ROW_ID": 1,
            "ID": "***",
            "CN": "物理与天文学院",
            "TELEPHONENUMBER": ***l,
            "INETUSERSTATUS": "***",
            "SJLY": null,
            "USERID": "***5"
        },
        ...
}
```
