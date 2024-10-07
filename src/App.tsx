import './App.css'
import Header from "./components/Header/Header.tsx";
import Card from "./components/Card/Card.tsx";
import Button from "./components/Button/Button.tsx";
import Alert from "./components/Alert/Alert.tsx";
import {useState} from "react";

const App = () => {
    const [showAlert, setShowAlert] = useState(true);

    const closeAlert = () => {
        setShowAlert(false);
    };

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
        <div className="container d-flex justify-content-sm-between align-items-center p-3">
            {showAlert && (
                <Alert
                    type="warning"
                    onDismiss={closeAlert}
                >
                    This is a warning type alert
                </Alert>
            )}
            <Alert type="success">
                This is a success type alert
            </Alert>
        </div>
    </>
  )
};

export default App
