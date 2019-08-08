import React from 'react';
import { Row, Col } from 'antd';
import Range from './Range/Range';

const Content = ({settings, onChange, onAfterChange, onMouse}) => {
      return (
            <div>
                  <Row>
                        <Col className='settings' lg={6} md={12} sm={24}>
                              <Range
                                    curVal={settings.contrast}
                                    onChange={onChange}
                                    name={'contrast'}
                                    onAfterChange={onAfterChange}
                                    onMouse={onMouse} /> 
                              <Range 
                                    curVal={settings.hue}
                                    onChange={onChange}
                                    name={'hue'}
                                    onAfterChange={onAfterChange}
                                    onMouse={onMouse} />
                              <Range 
                                    curVal={settings.brightness}
                                    onChange={onChange}
                                    name={'brightness'}
                                    onAfterChange={onAfterChange}
                                    onMouse={onMouse} />
                              <Range 
                                    curVal={settings.saturate}
                                    onChange={onChange}
                                    name={'saturate'}
                                    onAfterChange={onAfterChange}
                                    onMouse={onMouse} />
                              
                              <Range 
                                    curVal={settings.sepia}
                                    onChange={onChange}
                                    name={'sepia'}
                                    onAfterChange={onAfterChange}
                                    onMouse={onMouse} />
                        </Col>

                        <Col lg={18} md={12} sm={24}>main image</Col>
                  </Row>   
            </div>
      );
};

export default Content;