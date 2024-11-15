const express = require('express');
const router = express.Router();

const feedController = require('../controllers/feedController');

// Define   
 routes
router.get('/', feedController.getPosts);
router.get('/post/:id', feedController.getPost);
router.get('/create', feedController.createPostForm); // Form to create a new post
router.post('/create', feedController.createPost);
router.get('/edit/:id', feedController.editPostForm); // Form to edit an existing post
router.post('/edit/:id', feedController.updatePost);
router.delete('/delete/:id', feedController.deletePost);

module.exports = router;