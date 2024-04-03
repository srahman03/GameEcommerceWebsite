import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Spinner from './components/Spinner';
import Main from './pages/Main';
import './App.css';

export const AppContext = React.createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [library, setLibrary] = useState([]);
  const [bag, setBag] = useState([]);

  useEffect(() => {
    // Simulate loading delay (replace with actual loading logic)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the timeout as needed

    // Cleanup timeout on unmount (optional, but not necessary)
    // return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <Spinner />
        </div>
      ) : (
        <AppContext.Provider value={{ library, setLibrary, bag, setBag }}>
          <Main />
        </AppContext.Provider>
      )}
    </>
  );
}

export default App;
