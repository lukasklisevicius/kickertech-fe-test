import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import './styles/App.scss';

const App = () => {
  return (
    <>
    {/* include Navbar component */}
    <Navbar />
    <div className="container">
      <Card/>
      <Card/>
      <Card/>
    </div>
    </>
  );
}

export default App;
