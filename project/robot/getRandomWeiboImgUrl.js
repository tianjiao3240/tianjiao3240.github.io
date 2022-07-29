const axios = require('axios')

/**
 * 获取微博-美女-随机图片
 * @returns 微博-美女-第一张图片
 */
const getRandomWeiboImgUrl = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://weibo.com/ajax/feed/hottimeline?since_id=0&refresh=1&group_id=1028032288&containerid=102803_ctg1_2288_-_ctg1_2288&extparam=discover%7Cnew_feed&max_id=0&count=10')
            .then(function (res) {
                const { statuses } = res.data
                let firstImgId = ''
                let index = 0
                statuses.every((v, i) => {
                    if (v.pic_ids.length) {
                        firstImgId = v.pic_ids[0]
                        index = i
                        return false
                    }
                    return true
                })
                if (!firstImgId) {
                    reject()
                } else {
                    const imgUrl = statuses[index].pic_infos[firstImgId].mw2000.url
                    resolve(imgUrl)
                }
            })
    })
}

module.exports = getRandomWeiboImgUrl;