const express = require('express');
const router = express.Router();
const {createUser, getUsers} = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const { userValidationRules, validate } = require('../middlewares/userValidator');

router.get('/', authMiddleware, getUsers);
router.post('/', userValidationRules, validate, createUser);

module.exports = router;