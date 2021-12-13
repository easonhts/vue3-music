/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const devServerMockUrlMatch = /^\/api/

const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

const isExists = (filePath) => fs.existsSync(filePath)

const getMockData = (filePath) => {
  const JSONFilePath = `${filePath}.json`
  const JSFilePath = `${filePath}.js`

  if (isExists(JSONFilePath)) {
    return fs.readFileSync(JSONFilePath)
  }

  if (isExists(JSFilePath)) {
    // console.log(1)
  }

  return Promise.reject(new Error('没有找到mock文件'))
}

module.exports = (app) => {
  // '/api/test/test1'.replace(devServerMockUrlMatch, `${path.join(process.cwd(), 'mock/data')}$&`).replace(/\?.*$/, '')
  if (process.env.NODE_ENV === 'mock') {
    app.all(devServerMockUrlMatch, async (req, res) => {
      // const { method, originalUrl } = req
      const { originalUrl } = req

      try {
        // 获取mock数据本地绝对路径
        const filePath = originalUrl.replace(devServerMockUrlMatch, `${path.join(process.cwd(), 'mock/data')}`)

        await delay(500)

        let data = await getMockData(filePath)

        res.append('Access-Control-Allow-Origin', true)

        try {
          data = JSON.parse(data)
        } catch (e) {
          const errMsg = `local mock json data parse err, filePath:${filePath}`
          throw new Error(`${errMsg}\n${e}`)
        }

        res.json(data)
      } catch (err) {
        console.error(err)
        res.status(500).send(err.stack)
      }
    })
  }
}
