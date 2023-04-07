import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Titolo test</h1>
      <Link to="/search">
        <Button>Get start</Button>
      </Link>
    </>
  );
};
export default Home;
