import "./App.css";
import { AuthProvider } from "./Providers/Auth/autch";
import { Routes } from "./Routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
