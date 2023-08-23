const express = require('express')
const postController = require('../controllers/post')

const router = express.Router();

router.get('/getAll', postController.getAll)
router.get('/getOne/:id', postController.getOne)
router.post('/create', postController.create)
router.put('/update/:id', postController.update)
router.delete('/delete/:id',postController.delete)

module.exports = router