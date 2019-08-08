import React from 'react';
import { Row, Col } from 'antd';
import Range from './Range/Range';
import Image from './Image/Image';
import Filter from './Filter/Filter';

const Content = ({settings, image, onChange, onAfterChange, onMouse}) => {
      return (
            <div>
                  <Row>
                        <Col className='settings' lg={6} md={12} sm={24}>
                              <Range
                                    curVal={settings.contrast}
                                    onChange={onChange}
                                    name={'contrast'}
                                    onAfterChange={onAfterChange}
                                    onMouse={onMouse}
                                    min={1}
                                    max={5} /> 
                              <Range 
                                    curVal={settings.hue}
                                    onChange={onChange}
                                    name={'hue'}
                                    onAfterChange={onAfterChange}
                                    onMouse={onMouse}
                                    min={1}
                                    max={360} />
                              <Range 
                                    curVal={settings.brightness}
                                    onChange={onChange}
                                    name={'brightness'}
                                    onAfterChange={onAfterChange}
                                    onMouse={onMouse}
                                    min={1}
                                    max={200} />
                              <Range 
                                    curVal={settings.saturate}
                                    onChange={onChange}
                                    name={'saturate'}
                                    onAfterChange={onAfterChange}
                                    onMouse={onMouse}
                                    min={1}
                                    max={300} />
                              
                              <Range 
                                    curVal={settings.sepia}
                                    onChange={onChange}
                                    name={'sepia'}
                                    onAfterChange={onAfterChange}
                                    onMouse={onMouse}
                                    min={1}
                                    max={100} />
                              <Range 
                                    curVal={settings.blur}
                                    onChange={onChange}
                                    name={'blur'}
                                    onAfterChange={onAfterChange}
                                    onMouse={onMouse}
                                    min={1}
                                    max={50} />
                        </Col>

                        <Col lg={18} md={12} sm={24}>
                              <Filter settings={settings}>
                                    <Image src={image} />
                              </Filter>
                              
                        </Col>
                  </Row>   
            </div>
      );
};

export default Content;