const express = require('express');
const router = express.Router();
const streamersCtrl = require('../../controllers/api/streamers')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', streamersCtrl.index);
router.post('/', ensureLoggedIn, streamersCtrl.create);
router.get('/:id', streamersCtrl.show);
router.put('/:id', ensureLoggedIn, streamersCtrl.update);
router.delete('/:id', ensureLoggedIn, streamersCtrl.delete);


module.exports = router;