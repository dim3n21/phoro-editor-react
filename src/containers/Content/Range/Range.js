import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

const Range = ({curVal, onChange, name, onAfterChange, onMouse, min, max}) => {
      
      return (
            <div className="setting" onMouseOver={() => onMouse(name)}>
                   <Row>
                         <Col span={18} align="left" style={{paddingRight: "1rem"}}>
                              <p className="setting_name">{name}</p>
                         </Col>
                         <Col span={6} align="left">
                         <InputNumber
                                    min={min}
                                    max={max}
                                    value={curVal}
                                    onChange={onChange} />
                         </Col>
                   </Row>
                   
                   
                   <Row>
                         <Col span={24}>
                              <Slider
                                    min={min}
                                    max={max}
                                    value={curVal}
                                    onChange={onChange}
                                    onAfterChange={onAfterChange}/>
                         </Col>
                         
                   </Row>
            </div>
      );
};

export default Range;