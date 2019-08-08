import React from 'react';
import { Slider } from 'antd';

const Range = ({curVal, onChange, name, onAfterChange, onMouse}) => {
      
      return (
            <div className="setting" onMouseOver={() => onMouse(name)}>
                   <p className="setting_name">{name}</p>
                   <Slider min={0} max={100} defaultValue={curVal} onChange={onChange} onAfterChange={onAfterChange}/>
            </div>
      );
};

export default Range;