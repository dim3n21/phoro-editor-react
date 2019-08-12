import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import Range from './Range/Range';
import Image from './Image/Image';
import Filter from './Filter/Filter';
import FilterList from './FilterList/FilterList';

const Content = ({settings, image, onChange, onAfterChange, onMouse, submitLink, onReset, implementFilter}) => {
      
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

                              <Row>
                                    <Col lg={12} sm={24}>
                                          <Button onClick={onReset}>&nbsp;Reset&nbsp;</Button>
                                    </Col>
                                    <Col lg={12} sm={24}>
                                          <Button>Download</Button>
                                    </Col>
                              </Row>

                              <Row>
                                    <Col span={24} style={{marginTop: '2rem'}}>
                                         <Input
                                                placeholder="link to image"
                                                allowClear
                                                onPressEnter={(e) => {submitLink(e)}}
                                                />
                                    </Col>
                              </Row>
                        </Col>

                        <Col lg={18} md={12} sm={24}>
                              <Filter settings={settings} implementFilter={()=>{}}>
                                    <Image type="hero" />
                              </Filter>
                              <FilterList image={image} implementFilter={implementFilter} />
                              
                        </Col>
                  </Row>   
            </div>
      );
};

export default Content;