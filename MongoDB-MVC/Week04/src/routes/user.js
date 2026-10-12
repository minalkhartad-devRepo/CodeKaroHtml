
const express = require('express');
const router = express.Router();
// const app = express();

const {getUser , createUser , editUser , deleteUser} = require('../controllers/user');

router.route('/').get(getUser).post(createUser);
router.route('/:id').patch(editUser).delete(deleteUser);

module.exports = router;