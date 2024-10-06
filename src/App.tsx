import './App.css'
import Header from "./components/Header/Header.tsx";
import Card from "./components/Card/Card.tsx";

const App = () => {

  return (
    <>
      <Header />
        <div className="container">
            <Card/>
        </div>
    </>
  )
};

export default App
