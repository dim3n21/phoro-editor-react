import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

const Range = ({curVal, onChange, name, onAfterChange, onMouse, min, max}) => {
      
      return (
            <div className="setting" onMouseOver={() => onMouse(name)}>
                   <p className="setting_name">{name}</p>
                   <Row>
                         <Col span={20}>
                              <Slider
                                    min={min}
                                    max={max}
                                    value={curVal}
                                    onChange={onChange}
                                    onAfterChange={onAfterChange}/>
                         </Col>
                         <Col span={4}>
                              <InputNumber
                                    min={min}
                                    max={max}
                                    value={curVal}
                                    onChange={onChange} />
                         </Col>
                   </Row>
            </div>
      );
};

export default Range;