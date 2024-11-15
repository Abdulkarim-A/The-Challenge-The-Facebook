const Feed = require('../models/Feed');

// Create a new post
exports.createPost = async (req, res) => {
    const { name, message } = req.body;

    try {
        const newPost = new Feed({ name, message });
        await newPost.save();
        res.redirect('/feed');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Get all posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Feed.find().sort({ date: -1 });
        res.render('feed', { posts });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Get a specific post
exports.getPost = async (req, res) => {
    try {
        const post = await Feed.findById(req.params.id);
        res.render('postDetails', { post });
    } catch (err) {
        console.error(err);
        res.status(404).send('Post Not Found');
    }
};

// Update a post
exports.updatePost = async (req, res) => {
    const { name, message } = req.body;

    try {
        const post = await Feed.findByIdAndUpdate(req.params.id, { name, message }, { new: true });
        res.redirect(`/post/${post._id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Delete a post
exports.deletePost = async (req, res) => {
    try {
        await Feed.findByIdAndDelete(req.params.id);
        res.redirect('/feed');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};