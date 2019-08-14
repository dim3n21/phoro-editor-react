import React from 'react';
import { Row, Col, Input, Button, Spin } from 'antd';
import Range from './Range/Range';
import Image from './Image/Image';
import Filter from './Filter/Filter';
import FilterList from './FilterList/FilterList';

const { Search } = Input;

const Content = ({settings, onChange, onAfterChange, onMouse, submitLink, image, onReset, onSearch, showSearchImages, searchResults, updateImage, loadSpin}) => {

      let display;

      const inputImage = (
            <div>
                  <Filter settings={settings} implementFilter={()=>{}}>
                        <Image src={image} type="hero" />
                  </Filter>
                  <div style={{marginTop: '0.3rem'}}>
                        <FilterList image={image}/>
                  </div>
                  
            </div> )

      const searchedImages = (
            searchResults.map( result => {
                  console.log(result.urls.regular)
                   return (
                         <Col span={8} key={result.id} onClick={() => updateImage(result.urls.regular)}>
                               <Image src={result.urls.regular} type='' />
                         </Col>
                         )
                   })
      )

      if (loadSpin) {
            display =  <div className="spinner">
                              <Spin />
                        </div>
      } else if (showSearchImages) {
             display = searchedImages
            } else {
            display = inputImage
      }

      return (
            <div>
                  <Row>
                        <Col className='settings' lg={6} md={24} sm={24}>
                              <Row>
                                    <Col span={24}>
                                         <Search
                                                placeholder="link to image"
                                                enterButton="Upload Image"
                                                size="large"
                                                allowClear
                                                onSearch={(value, event) => {submitLink(value, event)}}
                                                />
                                    </Col>
                              </Row>
                              <Row>
                                    <Col span={24} style={{ marginTop: '2rem',
                                                            marginBottom: '2rem' }}>
                                    <Search
                                          placeholder="search image"
                                          enterButton="Search Image"
                                          allowClear
                                          size="large"
                                          onSearch={ (value, event) => onSearch(value, event) }
                                    />
                                    </Col>
                              </Row>
                              <Row>
                                    <Col span={24}>
                                          <Range
                                                curVal={settings.contrast}
                                                onChange={onChange}
                                                name={'contrast'}
                                                onAfterChange={onAfterChange}
                                                onMouse={onMouse}
                                                min={1}
                                                max={5} /> 
                                    </Col>
                                    <Col span={24}>
                                          <Range 
                                                curVal={settings.hue}
                                                onChange={onChange}
                                                name={'hue'}
                                                onAfterChange={onAfterChange}
                                                onMouse={onMouse}
                                                min={1}
                                                max={360} />
                                    </Col>

                                    <Col span={24}>      
                                    <Range 
                                          curVal={settings.brightness}
                                          onChange={onChange}
                                          name={'brightness'}
                                          onAfterChange={onAfterChange}
                                          onMouse={onMouse}
                                          min={1}
                                          max={200} />
                                    </Col>
                                    
                                    <Col span={24}>
                                          <Range 
                                                curVal={settings.saturate}
                                                onChange={onChange}
                                                name={'saturate'}
                                                onAfterChange={onAfterChange}
                                                onMouse={onMouse}
                                                min={1}
                                                max={300} />
                                    </Col>
                                    
                                    <Col span={24}>
                                          <Range 
                                                curVal={settings.sepia}
                                                onChange={onChange}
                                                name={'sepia'}
                                                onAfterChange={onAfterChange}
                                                onMouse={onMouse}
                                                min={1}
                                                max={100} />
                                    </Col>
                                    <Col span={24}>  
                                          <Range 
                                                curVal={settings.blur}
                                                onChange={onChange}
                                                name={'blur'}
                                                onAfterChange={onAfterChange}
                                                onMouse={onMouse}
                                                min={1}
                                                max={50} />
                                    </Col>    
                              </Row>
                              <Row>
                                    
                                    <Col lg={24} sm={24}>
                                          <div>
                                                <Button onClick={onReset}>&nbsp;Reset&nbsp;</Button>  
                                          </div>
                                          
                                    </Col>
                                    
                                    {/* <Col lg={12} sm={24}>
                                          <div style={{marginBottom: '0.7rem'}}>
                                                <Button>Download</Button>
                                          </div>
                                    </Col> */}
                              </Row>
                        </Col>
                        <Col lg={18} md={24} sm={24}>
                              <Row>
                                    {display}                              
                              </Row>
                        </Col>
                  </Row>   
            </div>
      );
};

export default Content;