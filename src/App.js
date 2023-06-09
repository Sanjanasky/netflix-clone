
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import Login from './components/Login';
import Banner from './components/Banner';
import List from './components/List';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <HomeRoutes />} />
        <Route exact path="/login" element={<LoginRoutes />} />
        <Route exact path="/register" element={<RegisterRoutes />} />
        <Route  exact path="/dashboard" element={<DashboardRoutes />} />
      </Routes>
    </Router>
  );
}

function HomeRoutes() {
  return (
    <>
    <Header />
      <HomeBanner />
     
    </>
  );
}
function LoginRoutes() {
  return (
    <>
    <Header />
      <Login />
     
    </>
  );
}
function RegisterRoutes() {
  return (
    <>
    <Header />
      <Login/>
     
    </>
  );
}
function DashboardRoutes() {
  return (
    <>
    <Header />
      <Banner />
        <List title="Netflix Originals" param="originals"/>
        <List title="Trending Now" param="trending"/>
        <List title="Now Playing" param="now_playing"/>
        <List title="popular" param="popular"/>
        <List title="Top Rated" param="top_rated"/>
        <List title="Upcoming" param="upcoming"/>
    </>
  );
}

export default App;



