import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import "./app.css";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  body {
    color: var(--text-color);
  }

  button {
    padding: 0;
    border: none;
    background-color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentsWrapper = styled.main`
  position: relative;
  flex: 1;
  padding: 160px 0;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <ContentsWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </ContentsWrapper>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
