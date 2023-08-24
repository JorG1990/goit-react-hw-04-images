
import React from "react";
import { Container } from "./Loader.styled";
import {  ThreeDots } from "react-loader-spinner";

const MyLoader = () => {
  return (
    <Container>
      <ThreeDots color="#00BFFF" height={80} with={80} />
    </Container>
  );
};

export default MyLoader;
