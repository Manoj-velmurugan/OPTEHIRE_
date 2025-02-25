// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
// import Landing from './pages/landing'; // Home page
// import Home from './pages/Home'; // Placeholder for another page (if needed)

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} /> {/* Home page route */}
//         <Route path="/home" element={<Home/>} /> {/* Other page route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./pages/landing";
// import Home from "./pages/Home"; // Import Home Page

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/home" element={<Home />} /> {/* Home Page Route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import Landing from "./pages/landing";
import Home from "./pages/Home";
import ExploreJobs from "./pages/explorejobs";
import Feedback from "./pages/feedback";

function ProtectedRoute({ children }) {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/home");
    }
  }, [isSignedIn, navigate]);

  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/explorejobs" element={<ExploreJobs />}/>
        <Route path="/generatefeedback" element={<Feedback/>} />
      </Routes>
    </Router>
  );
}

export default App;
