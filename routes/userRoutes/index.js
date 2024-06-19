const express = require('express');
const router = express();
const { getAllBanners } = require('../../controller/user/banners');

const { getAllPersonas } = require('../../controller/user/personas');
const { getAllCourses } = require('../../controller/user/courses');
const { getAllJobs } = require('../../controller/user/jobs');
const { createQuery } = require('../../controller/user/query');
const { getAllTestimonials } = require('../../controller/user/testimonials');
const { getAllTopProducts } = require('../../controller/user/topProducts');


router.use(express.json());

router.get('/Personas', getAllPersonas);


router.get('/banners', getAllBanners);

router.get('/courses', getAllCourses);

router.get('/jobs', getAllJobs);

router.post('/query', createQuery);

router.get('/testimonials', getAllTestimonials);

router.get('/topProducts', getAllTopProducts);

module.exports = router;