import React from "react";
import './Leaderboard.css';

function Leaderboard() {
  const users = [
    { name: "Alice", score: 120 },
    { name: "Bob", score: 100 },
    { name: "Charlie", score: 80 },
    { name: "Dave", score: 60 },
    { name: "Eve", score: 40 },
  ];

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
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.score} points</td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="leaderboard-footer">
        <p>Stay motivated and keep improving your skills!</p>
      </footer>
    </div>
  );
}

export default Leaderboard;
