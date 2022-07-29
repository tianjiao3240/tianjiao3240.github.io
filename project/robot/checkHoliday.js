const CONSTANT = {
    "$schema": "https://raw.githubusercontent.com/NateScarlet/holiday-cn/master/schema.json",
    "$id": "https://raw.githubusercontent.com/NateScarlet/holiday-cn/master/2022.json",
    "year": 2022,
    "papers": [
        "http://www.gov.cn/zhengce/content/2021-10/25/content_5644835.htm"
    ],
    "days": [
        {
            "name": "元旦",
            "date": "2022-01-01",
            "isOffDay": true
        },
        {
            "name": "元旦",
            "date": "2022-01-02",
            "isOffDay": true
        },
        {
            "name": "元旦",
            "date": "2022-01-03",
            "isOffDay": true
        },
        {
            "name": "春节",
            "date": "2022-01-29",
            "isOffDay": false
        },
        {
            "name": "春节",
            "date": "2022-01-30",
            "isOffDay": false
        },
        {
            "name": "春节",
            "date": "2022-01-31",
            "isOffDay": true
        },
        {
            "name": "春节",
            "date": "2022-02-01",
            "isOffDay": true
        },
        {
            "name": "春节",
            "date": "2022-02-02",
            "isOffDay": true
        },
        {
            "name": "春节",
            "date": "2022-02-03",
            "isOffDay": true
        },
        {
            "name": "春节",
            "date": "2022-02-04",
            "isOffDay": true
        },
        {
            "name": "春节",
            "date": "2022-02-05",
            "isOffDay": true
        },
        {
            "name": "春节",
            "date": "2022-02-06",
            "isOffDay": true
        },
        {
            "name": "清明节",
            "date": "2022-04-02",
            "isOffDay": false
        },
        {
            "name": "清明节",
            "date": "2022-04-03",
            "isOffDay": true
        },
        {
            "name": "清明节",
            "date": "2022-04-04",
            "isOffDay": true
        },
        {
            "name": "清明节",
            "date": "2022-04-05",
            "isOffDay": true
        },
        {
            "name": "劳动节",
            "date": "2022-04-24",
            "isOffDay": false
        },
        {
            "name": "劳动节",
            "date": "2022-04-30",
            "isOffDay": true
        },
        {
            "name": "劳动节",
            "date": "2022-05-01",
            "isOffDay": true
        },
        {
            "name": "劳动节",
            "date": "2022-05-02",
            "isOffDay": true
        },
        {
            "name": "劳动节",
            "date": "2022-05-03",
            "isOffDay": true
        },
        {
            "name": "劳动节",
            "date": "2022-05-04",
            "isOffDay": true
        },
        {
            "name": "劳动节",
            "date": "2022-05-07",
            "isOffDay": false
        },
        {
            "name": "端午节",
            "date": "2022-06-03",
            "isOffDay": true
        },
        {
            "name": "端午节",
            "date": "2022-06-04",
            "isOffDay": true
        },
        {
            "name": "端午节",
            "date": "2022-06-05",
            "isOffDay": true
        },
        {
            "name": "中秋节",
            "date": "2022-09-10",
            "isOffDay": true
        },
        {
            "name": "中秋节",
            "date": "2022-09-11",
            "isOffDay": true
        },
        {
            "name": "中秋节",
            "date": "2022-09-12",
            "isOffDay": true
        },
        {
            "name": "国庆节",
            "date": "2022-10-01",
            "isOffDay": true
        },
        {
            "name": "国庆节",
            "date": "2022-10-02",
            "isOffDay": true
        },
        {
            "name": "国庆节",
            "date": "2022-10-03",
            "isOffDay": true
        },
        {
            "name": "国庆节",
            "date": "2022-10-04",
            "isOffDay": true
        },
        {
            "name": "国庆节",
            "date": "2022-10-05",
            "isOffDay": true
        },
        {
            "name": "国庆节",
            "date": "2022-10-06",
            "isOffDay": true
        },
        {
            "name": "国庆节",
            "date": "2022-10-07",
            "isOffDay": true
        },
        {
            "name": "国庆节",
            "date": "2022-10-08",
            "isOffDay": false
        },
        {
            "name": "国庆节",
            "date": "2022-10-09",
            "isOffDay": false
        }
    ]
}
// 跨域问题
// axios.get('https://natescarlet.coding.net/p/github/d/holiday-cn/git/raw/master/2022.json')
//     .then(function (res) {
//         console.log(`🍃节假日获取成功，${new Date()}，${JSON.stringify(res)}`)
//     })
//     .catch(function (err) {
//         console.log(`🍃节假日获取失败，${new Date()}，${JSON.stringify(err)}`)
//     })
//     .then(function (res) {
//         console.log(res)
//     });
const checkHoliday = () => {
    const dateList = CONSTANT.days.map(v => (new Date(v.date)).toLocaleString())
    const nowDate = new Date().toLocaleString()
    return dateList.includes(nowDate)
}

module.exports = checkHoliday