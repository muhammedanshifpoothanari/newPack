const express = require('express');
const router = express();
const { getAllUsers, getUserById, blockUser, setAdmin } = require('../../controller/admin/user');
const { getAllBanners, createBanners, updateBanners, blockBanners } = require('../../controller/admin/banners');

const { getAllPersonas, createPersonas, updatePersonas, blockPersonas } = require('../../controller/admin/personas');
const { getAllCourses, getCourseById, createCourses, updateCourses, blockCourses } = require('../../controller/admin/courses');
const { getAllJobs, getJobsById, createJobs, updateJobs, blockJobs } = require('../../controller/admin/jobs');
const { getAllQuerys, getqueryById, countTotalQuerysPerMonth, countTotalQuerysPerYear, getAllRecentQuerys, deliveredquery } = require('../../controller/admin/query');
const { getAllTestimonials, getTestimonialsById, createTestimonials, updateTestimonials, blockTestimonials } = require('../../controller/admin/testimonials');
const { getAllTopProducts, getTopProductsById, createTopProducts,  updateTopProducts, blockTopProducts } = require('../../controller/admin/topProducts');


router.use(express.json());

router.get('/users', getAllUsers);
router.get('/users/:userId', getUserById);
router.patch('/users/block/:userId', blockUser);
router.patch('/users/setAdmin/:userId', setAdmin);



router.get('/personas', getAllPersonas);
router.post('/personas', createPersonas);
router.patch('/personas/:PersonaId', updatePersonas);
router.patch('/personas/:PersonaId/block', blockPersonas);

router.get('/banners', getAllBanners);
router.post('/banners', createBanners);
router.patch('/banners/:BannerId', updateBanners);
router.patch('/banners/:BannerId/block', blockBanners);


router.get('/courses', getAllCourses);
router.get('/courses/:coursesId', getCourseById);
router.post('/courses', createCourses);
router.patch('courses/:coursesId', updateCourses);
router.patch('/courses/:coursesId/block', blockCourses);

router.get('/jobs', getAllJobs);
router.get('/jobs/:jobsId', getJobsById);
router.post('/jobs', createJobs);
router.patch('/jobs/:jobsId', updateJobs);
router.patch('/jobs/:jobsId/block', blockJobs);

router.get('/querys', getAllQuerys);
router.get('/querys/:queryId', getqueryById);
router.get('/querys/sales/month/:month', countTotalQuerysPerMonth);
router.get('/querys/sales/year/:year', countTotalQuerysPerYear);
router.get('/querys/recent', getAllRecentQuerys);
router.patch('/updateQuery/', deliveredquery);

router.get('/testimonials', getAllTestimonials);
router.get('/testimonials/:testimonialId', getTestimonialsById);
router.post('/testimonials', createTestimonials);
router.patch('/testimonials/:testimonialId', updateTestimonials);
router.patch('/testimonials/:testimonialId/block', blockTestimonials);

router.get('/topProducts', getAllTopProducts);
router.get('/topProducts/:topProductId', getTopProductsById);
router.post('/topProducts', createTopProducts);
router.patch('/topProducts/:topProductId', updateTopProducts);
router.patch('/topProducts/:topProductId/block', blockTopProducts);

module.exports = router;