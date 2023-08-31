import React from "react";
import { Link } from "react-router-dom";
import { Container, Content } from "../styles/CommonStyle";

type Props = {
  errorMesage: string | null;
};

export default function ErrorPage({ errorMesage }: Props) {
  return (
    <Container>
      <Content>
        <h1>ErrorPage</h1>
        <h3>{errorMesage}</h3>
        <h3>
          <Link to={"/"}>홈 화면으로 이동</Link>
        </h3>
      </Content>
    </Container>
  );
}
