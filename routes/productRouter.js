// Import Controllers review, products
const productController = require('../controllers/productController.js');
const reviewController = require("../controllers/reviewController.js");

// Router 
const router = require('express').Router();


// Use Routers
router.post('/addProduct', productController.addProduct)

router.get('/allProducts', productController.getAllProducts)

router.get('/published', productController.getPublishedProduct)


// Review URL and Controllers
router.post('/addReview', reviewController.addReview)
router.get('/allReviews', reviewController.getAllReviews)

// Get Product Reviews
router.get('/getProducetReview', productController.getProductReviews)


router.get('/:id', productController.getOneProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router;