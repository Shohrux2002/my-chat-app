import Navbar from "./Navbar";
import ComponentChat from "./ComponentChat";
import "../index.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Route, Routes } from "react-router-dom";
import Auth from "./Auth";

const style = {
  appContanier: "max-w-[100vw] max-h-[100vh]",
  sectionContainer:
    "flex  flex-col h-[99vh] bg-grey-100  shadow-xs  border relative",
};
function App() {
  const [user] = useAuthState(auth);

  return (
    <div className={style.appContanier}>
      <section className={style.sectionContainer}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={user ? <ComponentChat /> : null} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
