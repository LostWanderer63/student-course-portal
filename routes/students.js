const express = require('express');
const students = require('../data/students');

const router = express.Router();

router.get('/', (req, res) => {
  const names = students.map((student) => student.name).join(', ');
  res.send(`Students: ${names}`);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).send('Student not found');
  }

  res.send(`Student: ${student.name}`);
});

module.exports = router;
