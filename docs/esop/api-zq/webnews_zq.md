# 查询站群网站的文章信息

## 用途

根据条件（参数）查询站群网站的文章信息

## 请求地址

POST http://apis.ynu.edu.cn/do/api/call/wbnews_zq

## 请求参数

| 属性  | 类型   | 默认值 | 必填 | 说明       |
| ----- | ------ | ------ | ---- | ---------- |
|wbnewsid|String||否|文章id|
|owner|String||否|网站id|
|wbtitle|String||否|文章标题（模糊查询）|

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
|WID|String|WID|
|CLRQ|DateStr|CLRQ|
|CZLX|String|CZLX|
|SJLY|String|SJLY|
|BY1|String|BY1|
|WBNEWSID|String|WBNEWSID|
|OWNER|String|OWNER|
|WBSYSUSERID|String|WBSYSUSERID|
|WBTREEID|String|WBTREEID|
|WBCONTENTID|String|WBCONTENTID|
|WBTITLE|String|WBTITLE|
|WBTITLESTYLE|String|WBTITLESTYLE|
|WBLINKURL|String|WBLINKURL|
|WBPICURL|String|WBPICURL|
|WBVIDEOURL|String|WBVIDEOURL|
|WBAUTHOR|String|WBAUTHOR|
|WBLANGUAGE|String|WBLANGUAGE|
|WBKEYWORD|String|WBKEYWORD|
|WBSHOWTIMES|String|WBSHOWTIMES|
|WBINFOSIZE|String|WBINFOSIZE|
|WBDATE|DateStr|WBDATE|
|WBVERSION|String|WBVERSION|
|WBAUDITING|String|WBAUDITING|
|WBHASUSE|String|WBHASUSE|
|WBMIMETYPE|String|WBMIMETYPE|
|WBREPLYTIMES|String|WBREPLYTIMES|
|WBFORMAT|String|WBFORMAT|
|WBMOBILEFORMAT|String|WBMOBILEFORMAT|
|WBSOURCEID|String|WBSOURCEID|
|WBSOURCENAME|String|WBSOURCENAME|
|WBSUBTITLE|String|WBSUBTITLE|
|WBWEIGHT|String|WBWEIGHT|
|WBVIEWID|String|WBVIEWID|
|WBPAGES|String|WBPAGES|
|WBUPDATEDATE|DateStr|WBUPDATEDATE|
|WBRELATIVEPATH|String|WBRELATIVEPATH|
|WBTOP|String|WBTOP|
|WBGOTOPDATE|String|WBGOTOPDATE|
|WBTOPDATE|String|WBTOPDATE|
|WBFORWARDTITLE|String|WBFORWARDTITLE|
|WBEDITOR|String|WBEDITOR|
|WBUSERNAME|String|WBUSERNAME|
|WBSHOWPIC|String|WBSHOWPIC|
|WBPAGETITLE|String|WBPAGETITLE|
|WBUUID|String|WBUUID|
|WBENDDATE|String|WBENDDATE|
|WBEXTABLE|String|WBEXTABLE|
|WBFIRST|String|WBFIRST|
|WBFIRSTPLAN|String|WBFIRSTPLAN|
|WBFIRSTSTARTDATE|String|WBFIRSTSTARTDATE|
|WBFIRSTENDDATE|String|WBFIRSTENDDATE|
|WBTOPFIRSTDATE|String|WBTOPFIRSTDATE|
|WBRECOMMEND|String|WBRECOMMEND|
|WBREFNEWSID|String|WBREFNEWSID|
|WBREFNUM|String|WBREFNUM|
|WBSHORTTITLE|String|WBSHORTTITLE
|WBPICTITLE|String|WBPICTITLE|
|WBISCOMMENT|String|WBISCOMMENT|
|WBISHAVEIMG|String|WBISHAVEIMG|
|WBISHAVEVIDEO|String|WBISHAVEVIDEO|
|WBHASTITLEPIC|String|WBHASTITLEPIC|
|WBHASTITLEVIDEO|String|WBHASTITLEVIDEO|
|WBHASATTACH|String|WBHASATTACH|
|WBISDIAGRAMS|String|WBISDIAGRAMS|
|WBLIMIT|String|WBLIMIT|
|WBSECURITY|String|WBSECURITY|
|WBEXT1|String|WBEXT1|
|WBEXT2|String|WBEXT2|
|WBEXT3|String|WBEXT3|
|WBPAGEPICURL|String|WBPAGEPICURL|
|WBREFERURL|String|WBREFERURL|
|WBAUTOKEYWORD|String|WBAUTOKEYWORD|
|WBAUTOSUMMARY|String|WBAUTOSUMMARY|
|WBIPRULEID|String|WBIPRULEID|
|WBCOPYENABLE|String|WBCOPYENABLE|
|WBAUDIT|String|WBAUDIT|
|WBAUTOMOBILECONTENT|String|WBAUTOMOBILECONTENT|
|WBHASMOBILECONTENT|String|WBHASMOBILECONTENT|
|WBORDERFIELD|String|WBORDERFIELD|

## 请求数据示例

```
{
    "wbtitle": "中国"
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
            "WBHASUSE": "******",
            "BY1": null,
            "WBKEYWORD": "中国******",
            "WBREPLYTIMES": "******",
            "CZLX": "******",
            "WBTOPDATE": ******,
            "WBAUTOMOBILECONTENT": "******",
            "WBHASMOBILECONTENT": "******",
            "WBAUTOSUMMARY": "******",
            "OWNER": "1******",
            "WBTOP": "******",
            "WBEXTABLE": null,
            "WBHASTITLEVIDEO": "******",
            "WBREFNEWSID": "******",
            "WBWEIGHT": "******",
            "WBPICTITLE": null,
            "WBVERSION": "******",
            "WBSOURCENAME": null,
            "WBCOPYENABLE": "******",
            "WBMOBILEFORMAT": "1",
            "WBAUDITING": "10",
            "WBPAGETITLE": null,
            "WBTITLE": "中国******",
            "WBVIEWID": "******",
            "WBVIDEOURL": null,
            "WBENDDATE": null,
            "WBHASTITLEPIC": "******",
            "WBPAGEPICURL": null,
            "WBSECURITY": "******",
            "WBCONTENTID": "******",
            "ROW_ID": 1,
            "WBTREEID": "******",
            "WBMIMETYPE": "******",
            "WBFIRST": "******",
            "WBPAGES": "******",
            "WBGOTOPDATE": null,
            "WID": null,
            "WBISDIAGRAMS": "******",
            "WBRECOMMEND": "******",
            "WBRELATIVEPATH": "******",
            "WBAUDIT": null,
            "WBREFERURL": "******",
            "WBFIRSTSTARTDATE": null,
            "WBPICURL": null,
            "WBSHOWPIC": "******",
            "WBISHAVEIMG": "******",
            "WBFORWARDTITLE": null,
            "WBSUBTITLE": null,
            "WBIPRULEID": "******",
            "WBISHAVEVIDEO": "******",
            "WBINFOSIZE": "******9",
            "WBSHOWTIMES": "******4",
            "WBSOURCEID": "******",
            "WBTITLESTYLE": null,
            "WBNEWSID": "1******",
            "WBLINKURL": null,
            "WBISCOMMENT": "******",
            "WBDATE": "******",
            "WBAUTHOR": "******",
            "WBREFNUM": "******",
            "WBHASATTACH": "******",
            "WBEDITOR": null,
            "WBUSERNAME": "******",
            "WBEXT2": null,
            "WBEXT3": null,
            "WBFIRSTENDDATE": null,
            "WBFORMAT": "******",
            "WBSYSUSERID": "1******",
            "WBUUID": "8******1",
            "WBEXT1": null,
            "WBFIRSTPLAN": "0",
            "WBAUTOKEYWORD": "0",
            "CLRQ": "******",
            "WBLANGUAGE": null,
            "WBSHORTTITLE": null,
            "WBORDERFIELD": "******",
            "WBLIMIT": "0",
            "WBUPDATEDATE": "201******",
            "WBTOPFIRSTDATE": ******,
            "SJLY": "******"
        },
        ...
}
```
