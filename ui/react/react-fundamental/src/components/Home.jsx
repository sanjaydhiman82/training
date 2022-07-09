import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>React fundamental tutorial </h2>
     
      <nav>
        <ul>
          <li>
            <Link to="/lifecycle">React lifecycle </Link>
          </li>
          <li>
            <Link to="/hooks">React Hooks </Link>
          </li>
          <li>
            <Link to="/propstate">React state management by props </Link>
          </li>
          <li>
            <Link to="/ctxstate">React state management by Context </Link>
          </li>
          <li>
            <Link to="/reduxstate">React state management by Redux </Link>
          </li>
          <li>
            <Link to="/axiosdemo">Axios demo </Link>
          </li>
          <li>
            <Link to="/">back</Link>
          </li>
        </ul>
      </nav>
    <hr></hr>
      <Outlet />
    </>
  )
};
export default Home;