const axios = require('axios')
const schedule = require('node-schedule')
const request = require('superagent')
const getRandomWeiboImgUrl = require('./getRandomWeiboImgUrl')
const sendWeixinRobotMessage = require('./sendWeixinRobotMessage')
const checkHoliday = require('./checkHoliday')

const buildEatRobot = () => {
    // * 每天11:25:00和17:25:00提醒
    schedule.scheduleJob('00 25 11,17 * * *', () => {
        console.log('🤖1、定时触发');
        if (!checkHoliday()) {
            console.log('🤖2、非节假日');
            getRandomWeiboImgUrl().then(imgUrl => {
                console.log(`🤖3、图片地址${imgUrl}`);
                sendWeixinRobotMessage(imgUrl)
            }).catch(() => {
                console.log(`🤖3、图片地址获取失败`);
            })
        }
    })
}

const buildTest = () => {
    /**
     * 6个*分别代表：
     * second (0 - 59, OPTIONAL)
     * minute (0 - 59)
     * hour (0 - 23)
     * day of month (1 - 31)
     * month (1 - 12)
     * day of week (0 - 7) (0 or 7 is Sun)
     */
    // 每分钟的第30秒触发
    schedule.scheduleJob('30 * * * * *', () => {
        console.log('每分钟的第30秒触发', new Date())
    })
    // 每小时的1分30秒触发
    schedule.scheduleJob('30 1 * * * *', () => {
        console.log('每小时的1分30秒触发', new Date())
    })
    // 每天的凌晨1点1分30秒触发
    schedule.scheduleJob('30 1 1 * * *', () => {
        console.log('每天的凌晨1点1分30秒触发', new Date())
    })
    // 每月的1日1点1分30秒触发
    schedule.scheduleJob('30 1 1 1 * *', () => {
        console.log('每月的1日1点1分30秒触发', new Date())
    })
    // 每年的1月1日1点1分30秒触发
    schedule.scheduleJob('30 1 1 1 1 *', () => {
        console.log('每年的1月1日1点1分30秒触发', new Date())
    })
    // 每周1的1点1分30秒触发
    schedule.scheduleJob('30 1 1 * * 1', () => {
        console.log('每周1的1点1分30秒触发', new Date())
    })
    // 每分钟的1-10秒进行调用
    schedule.scheduleJob('1-10 * * * * *', () => {
        console.log('每分钟的1-10秒进行调用', new Date())
    })
    // 每分钟的 0，10，20，30，40，50秒都会执行一次
    schedule.scheduleJob('0,10,20,30,40,50 * * * * *', () => {
        console.log('每分钟的 0，10，20，30，40，50秒都会执行一次', new Date())
    })
}

buildEatRobot() // 吃饭机器人
// buildTest() // 传参说明