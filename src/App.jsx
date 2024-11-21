import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ContextProvider, Context } from "./store/social-media-store";
import "./App.css";
import ContentArea from "./components/ContentArea";

function App() {
  return (
    <ContextProvider>
      <Navbar /> 
      <ContentArea />
      <Footer></Footer>
    </ContextProvider>
  );
}

export default App;
