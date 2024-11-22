import React, { useState, useEffect } from "react";
import axios from "axios";
import './Leaderboard.css';

function Leaderboard() {
  const [users, setUsers] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/users") // Update with your backend API endpoint
      .then(response => setUsers(response.data))
      .catch(err => console.log("Error fetching leaderboard data:", err));
  }, []);

  return (
    <div className="leaderboard-container">
      <header className="leaderboard-header">
        <h2>Leaderboard</h2>
        <p>Check out the top performers on AlgoHub.</p>
      </header>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td> {/* Adjust the key as per your backend response */}
                <td>{user.score} points</td> {/* Adjust the key as per your backend response */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>

      <footer className="leaderboard-footer">
        <p>Stay motivated and keep improving your skills!</p>
      </footer>
    </div>
  );
}

export default Leaderboard;
