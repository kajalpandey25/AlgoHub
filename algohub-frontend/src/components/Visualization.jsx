import React from 'react';
import './Visualization.css';

function Visualization() {
  return (
    <div className="visualization-container">
      <header className="visualization-header">
        <h2>Explore Algorithm Visualizations</h2>
        <p className="intro-text">Explore how algorithms work with step-by-step animations. Visualize sorting, searching, and other algorithms to understand them better.</p>
      </header>

      <section className="visualization-content">
        <div className="feature">
          <h3>Sorting Algorithms</h3>
          <p>Visualize popular sorting algorithms like Quick Sort, Merge Sort, and Bubble Sort. See how data is ordered step by step.</p>
          {/* You can integrate an actual sorting algorithm visualization here */}
          <button className="explore-btn">Start Sorting Visualization</button>
        </div>

        <div className="feature">
          <h3>Searching Algorithms</h3>
          <p>Understand how algorithms like Binary Search, Linear Search, and more help in finding elements in sorted and unsorted lists.</p>
          {/* You can integrate an actual searching algorithm visualization here */}
          <button className="explore-btn">Start Searching Visualization</button>
        </div>

        <div className="feature">
          <h3>Graph Algorithms</h3>
          <p>Explore graph-related algorithms such as Dijkstra's Shortest Path, BFS, and DFS.</p>
          {/* You can integrate an actual graph algorithm visualization here */}
          <button className="explore-btn">Start Graph Visualization</button>
        </div>
      </section>

      <footer className="visualization-footer">
        <p>Stay tuned for more algorithm visualizations! </p>
      </footer>
    </div>
  );
}

export default Visualization;
