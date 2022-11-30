import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import reset from "styled-reset";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import ProductModal from "./components/Modal/Modal";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    color: var(--text-color);
  }

  button, input, textarea {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }

  button {
    padding: 0;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
  const location = useLocation();
  const background = location.state && location.state.background;
  const [productsData, setProductsData] = useState([]);

  const url = "https://test.api.weniv.co.kr/mall";

  const getProductsData = async () => {
    await axios
      .get(url)
      .then(res => {
        setProductsData([...res.data]);
      })
      .catch(Error => {
        console.error(Error);
      })
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <ContentsWrapper>
        <Routes location={background || location}>
          <Route path="/" element={<HomePage productsData={productsData} />} />
          <Route path="/product/:id" element={<ProductDetailPage productsData={productsData} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        {background && (
          <Routes>
            <Route path="/product/:id" element={<ProductModal productsData={productsData} />} />
          </Routes>
        )}
      </ContentsWrapper>
      <Footer />
    </Wrapper>
  );
}

export default App;
