import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.querySelector("#root");

const root = createRoot(rootElement);

root.render(
  <App/>
)
