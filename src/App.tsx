//Модуль 3, задание 1
// import React from 'react';
// import Message from './components/Message';

// const App: React.FC = () => {
//   const messageText = 'Пропс'

//   return (
//     <div>
//       <h1>Моё приложение на Vite + React + TypeScript</h1>
//       {}
//       <Message text={messageText} />
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Layout> <Home /> </Layout> } />
      </Routes>
    </Router>
  );
}

export default App;