import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get('/api/people');
        setPeople(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPeople();
  }, []);

  return (
    <div className="App">
      <h1>List of People</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
