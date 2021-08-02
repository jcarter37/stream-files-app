const express = require('express');
const router = express.Router();
const streamersCtrl = require('../../controllers/api/streamers')

router.get('/', streamersCtrl.index);
router.post('/', streamersCtrl.create);
router.get('/:id', streamersCtrl.show);
router.put('/:id', streamersCtrl.update);
router.delete('/:id', streamersCtrl.delete);


module.exports = router;