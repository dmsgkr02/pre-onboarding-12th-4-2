import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Content} from '../styles/CommonStyle';

type Props = {
  errorMesage: string | null;
}

export default function ErrorPage({errorMesage}: Props) {
  
  return (
    <Container>
      <Content>
        ErrorPage
        <br />
        {errorMesage}
        <br />
        <Link to={'/'}>홈 화면으로 이동</Link>
      </Content>
    </Container>
  )
}