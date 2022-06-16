import React from "react";
import * as ai from "react-icons/ai";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer/Footer";
import { Container } from "./style";

const Loading = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <img src="Frame.png" alt="logo" />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Loading;
