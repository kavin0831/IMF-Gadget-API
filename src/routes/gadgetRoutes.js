const express = require('express');
const router = express.Router();
const gadgetController = require('../controllers/gadgetController');
const authenticateToken = require('../middlewares/authMiddleware');

router.use(authenticateToken);

/**
 * Get all gadgets, optionally filter by status
 * 
 * @swagger
 * /gadgets:
 *   get:
 *     summary: Retrieve all gadgets
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         description: Filter gadgets by status (e.g. Available)
 *     responses:
 *       200:
 *         description: A list of gadgets
 */
router.get('/', gadgetController.getGadgets);

/**
 * Create a new gadget with random codename
 * 
 * @swagger
 * /gadgets:
 *   post:
 *     summary: Create a new gadget
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Invisibility Cloak
 *               status:
 *                 type: string
 *                 example: Available
 *     responses:
 *       201:
 *         description: Gadget created successfully
 */
router.post('/', gadgetController.createGadget);

/**
 * Update gadget details by ID
 * 
 * @swagger
 * /gadgets/{id}:
 *   patch:
 *     summary: Update an existing gadget
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Gadget ID to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Gadget Name
 *               status:
 *                 type: string
 *                 example: Deployed
 *     responses:
 *       200:
 *         description: Gadget updated successfully
 */
router.patch('/:id', gadgetController.updateGadget);

/**
 * Decommission a gadget by ID
 * 
 * @swagger
 * /gadgets/{id}:
 *   delete:
 *     summary: Decommission a gadget
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Gadget ID to decommission
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Gadget decommissioned successfully
 */
router.delete('/:id', gadgetController.deleteGadget);

/**
 * Trigger self-destruct for a gadget by ID
 * 
 * @swagger
 * /gadgets/{id}/self-destruct:
 *   post:
 *     summary: Initiate self-destruct sequence for a gadget
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Gadget ID to self-destruct
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Self-destruct initiated with confirmation code
 */
router.post('/:id/self-destruct', gadgetController.selfDestruct);

module.exports = router;
