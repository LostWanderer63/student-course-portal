const express = require('express');
const courses = require('../data/courses');

const router = express.Router();

router.get('/', (req, res) => {
  const names = courses.map((course) => course.name).join(', ');
  res.send(`Courses: ${names}`);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).send('Course not found');
  }

  res.send(`Course: ${course.name}, Description: ${course.description}`);
});

module.exports = router;
