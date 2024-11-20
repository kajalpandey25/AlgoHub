function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h2>Welcome to AlgoHub</h2>
          <p>
            Your one-stop solution to learning, visualizing, and mastering Data Structures and Algorithms.
            Join our community and start your journey to becoming a coding expert!
          </p>
          <button className="cta-button" onClick={() => alert("Start Learning!")}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img
            src="https://media.istockphoto.com/id/1081869356/photo/taking-on-the-late-shift-with-true-dedication.webp?a=1&b=1&s=612x612&w=0&k=20&c=2fB4km8-W3elF6qr9pUhV8nDwARZLLiWorjnjE5oq-Y="
            alt="Algorithm Visualization"
            className="responsive-image"
          />
        </div>
      </div>

      <div className="features-section">
        <h3>Why Choose AlgoHub?</h3>
        <div className="features-grid">
          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRhdGElMjBzdHJ1Y3R1cmUlMjBhbmQlMjBhbGdvcml0aG1zJTIwJTIwSW50ZXJhY3RpdmUlMjBMZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Learning"
              className="feature-icon"
            />
            <h4>Interactive Learning</h4>
            <p>Understand algorithms with step-by-step visualization and practice exercises.</p>
          </div>
          <div className="feature-card">
            <img
              src="https://media.istockphoto.com/id/1483272796/photo/seminar-coding-talking.webp?a=1&b=1&s=612x612&w=0&k=20&c=8gVdW4mkv6YAwNla6MfnYvTeNYd1W93Z130l7NjM-iA="
              alt="Community"
              className="feature-icon"
            />
            <h4>Vibrant Community</h4>
            <p>Connect with other learners and participate in coding challenges and discussions.</p>
          </div>
          <div className="feature-card">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Leaderboard"
              className="feature-icon"
            />
            <h4>Track Your Progress</h4>
            <p>Compete on the leaderboard and monitor your skill growth over time.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-container {
          font-family: Arial, sans-serif;
          padding: 20px;
          margin: 0 auto;
          max-width: 1200px;
        }

        /* Hero Section */
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .hero-content {
          flex: 1 1 50%;
          padding: 20px;
        }
        .hero-content h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #333;
        }
        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 20px;
          color: #555;
        }
        .cta-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .cta-button:hover {
          background-color: #0056b3;
        }
        .hero-image {
          flex: 1 1 40%;
          text-align: center;
        }
        .responsive-image {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
        }

        /* Features Section */
        .features-section {
          text-align: center;
          margin-top: 40px;
        }
        .features-section h3 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #333;
        }
        .features-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
        }
        .feature-card {
          flex: 1 1 calc(33.33% - 20px);
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .feature-card img {
          max-width: 500px;
          margin-bottom: 15px;
        }
        .feature-card h4 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #007bff;
        }
        .feature-card p {
          color: #555;
          font-size: 1rem;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
          }
          .hero-content {
            text-align: center;
            margin-bottom: 20px;
          }
          .features-grid {
            flex-direction: column;
          }
          .feature-card {
            flex: 1 1 100%;
          }
        }

        @media (max-width: 480px) {
          .hero-content h2 {
            font-size: 2rem;
          }
          .hero-content p {
            font-size: 1rem;
          }
          .features-section h3 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
