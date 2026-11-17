const express = require('express');

const studentsRouter = require('./routes/students');
const coursesRouter = require('./routes/courses');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Student & Course Portal API!');
});

app.use('/students', studentsRouter);
app.use('/courses', coursesRouter);

// Custom 404 handler: runs only when no route above matched
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
