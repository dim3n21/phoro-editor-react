import React from 'react';
import { Row, Col } from 'antd';
import Range from './Range/Range';

const Content = ({settings, onChange, onAfterChange}) => {
      return (
            <div>
                  <Row>
                        <Col className='settings' span={6}>
                              <Range contrast={settings.contrast} onChange={onChange} name={'contrast'} onAfterChange={onAfterChange} />
                        </Col>
                        <Col span={18}>main image</Col>
                  </Row>   
            </div>
      );
};

export default Content;