import React from "react";
import ReactDOM from "react-dom/client";
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Custom scrollbar styling
const style = document.createElement('style');
style.textContent = `
  /* Custom scrollbar for WebKit browsers (Chrome, Safari, Edge) */
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background: #4a5459;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #ff6b6b, #f68b09, #03697a);
    border-radius: 6px;
    border: 2px solid #4a5459;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #ff8888, #f6a509, #0389aa);
  }

  /* Firefox scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: #ff6b6b #4a5459;
  }

  *::-webkit-scrollbar-corner {
    background: #4a5459;
  }
`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
