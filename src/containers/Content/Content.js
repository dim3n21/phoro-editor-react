import React from 'react';
import { Row, Col } from 'antd';
import Range from './Range/Range';
import { Slider } from 'antd';

const Content = ({settings, onChange}) => {
      return (
            <div>
                  <Row>
                        <Col className='settings' span={6}>
                              <Range contrast={settings.contrast} onChange={onChange} />
                        </Col>
                        <Col span={18}>main image</Col>
                  </Row>   
            </div>
      );
};

export default Content;