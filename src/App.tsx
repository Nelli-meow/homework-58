import './App.css'
import Header from "./components/Header/Header.tsx";
import Card from "./components/Card/Card.tsx";
import Button from "./components/Button/Button.tsx";

const App = () => {

  return (
    <>
      <Header />
        <div className="container p-3">
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className="container d-flex justify-content-center align-items-center p-3">
            <Button/>
        </div>
    </>
  )
};

export default App
