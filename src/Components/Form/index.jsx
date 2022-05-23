import React, { useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import FanComponent from './Fan';
import "./style.css";
import TalentComponent from './Talent';

const MainComponent = () => {
  const [activeTabclass, setActiveTabClass] = useState(1);

  const changeTab = (id) => {
    setActiveTabClass(parseInt(id));
  }

  return (
    <Row>
      <Col sm={12} md={{ span: 8, offset: 2 }}>
        <div className='main-component-div'>
          <Tab.Container id="left-tabs-example" defaultActiveKey={activeTabclass}>
            <Row>
              <Col sm={12} md={{ span: 8, offset: 2 }}>
                <Nav className='nav-tag'>
                  <Nav.Item>
                    <Nav.Link eventKey={1}>FAN SIGNUP</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={2}>TALENT SIGNUP</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={12} md={{ span: 8, offset: 2 }} className="mt-3">
                <Tab.Content>
                  <Tab.Pane eventKey={1}>
                    <FanComponent />
                  </Tab.Pane>
                  <Tab.Pane eventKey={2}>
                    <TalentComponent />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Col>
    </Row>
  )
}

export default MainComponent
