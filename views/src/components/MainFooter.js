import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MainFooter = () => {
  return (
    <Container className='main-footer' fluid>
      <Row>
        <Col sm={12} className='shop-summary'>
          <h2>MART<span class="spcolor">ALE</span></h2>
          <p>Online shopping for Matale People...</p>
        </Col>
       
       
        
        
      </Row>
    </Container>
  );
};

export default MainFooter;
