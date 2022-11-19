import ContextProvider from "./context";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Main />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
