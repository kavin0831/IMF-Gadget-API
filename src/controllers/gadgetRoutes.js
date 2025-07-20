const express = require('express');
const router = express.Router();
const gadgetController = require('../controllers/gadgetController');

router.get('/', gadgetController.getGadgets);
router.post('/', gadgetController.createGadget);
router.patch('/:id', gadgetController.updateGadget);
router.delete('/:id', gadgetController.deleteGadget);
router.post('/:id/self-destruct', gadgetController.selfDestruct);

module.exports = router;
