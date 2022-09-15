import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/home';
import PrayPage from './pages/pray';
import './scss.sass';

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/pray" element={<Pray />}></Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  )
}

function Pray() {
  return (
    <>
      <Navbar />
      <PrayPage />
      <Footer />
    </>
  )
}

export default App;
