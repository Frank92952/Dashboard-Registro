import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import firebaseConfig from './firebase'
//import { FirebaseAppProvider } from 'reactfire'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  
  
  
  // <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    
  //     <Suspense fallback={'conectando a la App...'}>
  //       <App />
  //     </Suspense>
   
    
  // </FirebaseAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

