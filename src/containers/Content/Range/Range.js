import React from 'react';
import { Slider } from 'antd';

const Range = ({curVal, onChange, name, onAfterChange, onMouse, min, max}) => {
      
      return (
            <div className="setting" onMouseOver={() => onMouse(name)}>
                   <p className="setting_name">{name}</p>
                   <Slider min={min} max={max} defaultValue={curVal} onChange={onChange} onAfterChange={onAfterChange}/>
            </div>
      );
};

export default Range;