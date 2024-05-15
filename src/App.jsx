import { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Shopping from "./pages/shopping/Shopping";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";
import Table from "./components/table/Table";
import Posts from "./components/posts/Posts";
import Products from "./components/products/Products";
import Contacts from "./components/contacts/Contacts";
import Agents from "./components/agents/Agents";
import Articles from "./components/articles/Articles";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="users" element={<Table />} />
            <Route path="products" element={<Products />} />
            <Route path="posts" element={<Posts />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="agents" element={<Agents />} />
            <Route path="articles" element={<Articles />} />
          </Route>
        </Route>
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Fragment>
  );
}

export default App;
