import express from 'express'

const router = express.Router()

router.get('/getall', (req, res) => {
  res.json({
    code: 200,
    msg: '获取成功',
    data: [{ id: 1 }]
  })
})

export default router
