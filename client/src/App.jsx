import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch('/api/people');
        const data = await response.json();
        setPeople(data);
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
