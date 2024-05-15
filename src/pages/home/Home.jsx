import React from "react";
import Login from "../login/Login";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <Login />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
