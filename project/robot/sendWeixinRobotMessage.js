const axios = require('axios')

const sendWeixinRobotMessage = (imgUrl) => {
    const nowDate = new Date().toLocaleString()
    return new Promise(() => {
        axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=a092d83f-432f-4fac-9492-55e1e991349d', {
            msgtype: 'news',
            news: {
                articles: [{
                    title: nowDate,
                    description: '干饭！🍚🍚🍚🍚🍚🥢🥢🥢🥢🥢',
                    url: imgUrl,
                    picurl: imgUrl
                }]
            }
        }).then(res => {
            console.log(`🤖4、发送成功，${new Date()}，${res}`)
        }).catch(err => {
            console.log(`🤖4、发送失败，${new Date()}，${err}`)
        })
    })
}

module.exports = sendWeixinRobotMessage