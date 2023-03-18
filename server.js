import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => res.send('Server running'));

const people = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Michael Brown' },
  { id: 4, name: 'Emily Johnson' },
  { id: 5, name: 'David Jones' },
  { id: 6, name: 'Sarah Davis' },
  { id: 7, name: 'Kevin Wilson' },
  { id: 8, name: 'Laura Taylor' },
  { id: 9, name: 'Richard Williams' },
  { id: 10, name: 'Emma White' },
];

app.get('/api/people', (req, res) => {
  res.json(people);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));