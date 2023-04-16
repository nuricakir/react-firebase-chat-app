import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/Login/SignIn";
import { UserAuthContextProvider } from "./context/userAuthContext";
import { DrawerContextProvider } from "./context/drawerContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <DrawerContextProvider>
                  <Chat />
                </DrawerContextProvider>
              </ProtectedRoute>
            }
          />
        </Routes>
        <Toaster />
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
