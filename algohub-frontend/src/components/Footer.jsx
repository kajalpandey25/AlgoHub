function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>AlgoHub is a platform to learn, visualize, and practice Data Structures and Algorithms. Join us to boost your coding skills!</p>
          </div>
  
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/visualization">Visualizations</a></li>
              <li><a href="/code-editor">Code Editor</a></li>
              <li><a href="/leaderboard">Leaderboard</a></li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:support@algohub.com">support@algohub.com</a></li>
              <li><a href="tel:+1234567890">+1 234 567 890</a></li>
            </ul>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AlgoHub. All rights reserved.</p>
        </div>
  
        <style jsx>{`
          .footer {
            background-color: #333;
            color: #fff;
            padding: 40px 20px;
            font-family: Arial, sans-serif;
            margin-top: 40px;
          }
  
          .footer-container {
            display: flex;
            justify-content: space-between;
            gap: 40px;
            flex-wrap: wrap;
          }
  
          .footer-section {
            flex: 1 1 calc(33.33% - 40px);
            margin-bottom: 20px;
          }
  
          .footer-section h4 {
            font-size: 1.4rem;
            margin-bottom: 15px;
            color: #f1f1f1;
          }
  
          .footer-section p,
          .footer-section ul {
            color: #bbb;
          }
  
          .footer-section a {
            color: #bbb;
            text-decoration: none;
            font-size: 1rem;
            transition: color 0.3s;
          }
  
          .footer-section a:hover {
            color: #007bff;
          }
  
          .footer-bottom {
            text-align: center;
            margin-top: 40px;
            font-size: 1rem;
            color: #bbb;
          }
  
          .footer-bottom p {
            margin: 0;
          }
  
          /* Responsive Styles */
          @media (max-width: 768px) {
            .footer-container {
              flex-direction: column;
              align-items: center;
            }
            .footer-section {
              flex: 1 1 100%;
              text-align: center;
            }
          }
  
          @media (max-width: 480px) {
            .footer-section h4 {
              font-size: 1.2rem;
            }
            .footer-section p,
            .footer-section ul,
            .footer-bottom p {
              font-size: 0.9rem;
            }
          }
        `}</style>
      </footer>
    );
  }
  
  export default Footer;
  