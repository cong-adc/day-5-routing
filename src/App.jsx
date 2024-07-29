import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useParams,
  Link,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#89b4ff",
      }}
    >
      <div>LOGO</div>

      <ul style={{ listStyle: "none", display: "flex", gap: 20 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

const Home = () => {
  return <div>Home page</div>;
};

const Blog = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/blog/blog-1">Blog 1</Link>
      <Link to="/blog/blog-2">Blog 2</Link>
      <Link to="/blog/blog-3">Blog 3</Link>
      <Link to="/blog/blog-4">Blog 4</Link>
    </div>
  );
};

const NotFound = () => {
  return <h1>404 Not Found</h1>;
};

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "white",
        height: 50,
      }}
    >
      Footer Layout
    </footer>
  );
};

const Layout = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const BlogDetail = () => {
  const { id } = useParams();
  return <div>Blog Detail: {id}</div>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
