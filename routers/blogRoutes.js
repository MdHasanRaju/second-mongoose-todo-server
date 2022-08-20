const router = require('express').Router();
const {createNewBlog, getAllBlogs, getABlogById, updateABlogById, deleteABlogById} = require('../controllers/blogController'); 

router.post('/addNewBlog', createNewBlog);
router.get('/', getAllBlogs);
router.get('/:id', getABlogById);
router.put('/:id', updateABlogById);
router.delete('/:id', deleteABlogById);

module.exports = router;