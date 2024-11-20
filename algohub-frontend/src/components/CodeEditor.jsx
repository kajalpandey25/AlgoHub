import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import './CodeEditor.css';

function CodeEditor() {
  const [code, setCode] = useState("// Write your code here");

  const handleRunCode = () => {
    alert("Code Submitted!");
    // You can implement functionality to run the code or send it to a backend API for execution
  };

  const handleSaveCode = () => {
    localStorage.setItem('savedCode', code);
    alert("Code Saved!");
  };

  return (
    <div className="code-editor-container">
      <header className="editor-header">
        <h2>Interactive Code Editor</h2>
        <p>Write and test your code here. Use this editor to practice coding challenges or build your projects.</p>
      </header>
      
      <div className="editor-content">
        <Editor
          height="500px"
          defaultLanguage="javascript"
          value={code}
          onChange={(newValue) => setCode(newValue)}
          theme="vs-dark" // Adding a dark theme for better visual appeal
        />
      </div>
      
      <div className="editor-actions">
        <button className="action-btn run-btn" onClick={handleRunCode}>Run Code</button>
        <button className="action-btn save-btn" onClick={handleSaveCode}>Save Code</button>
      </div>

      <footer className="editor-footer">
        <p>Build and experiment with algorithms or any coding problem here.</p>
      </footer>
    </div>
  );
}

export default CodeEditor;
