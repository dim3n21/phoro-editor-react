import React from 'react';
import { Slider } from 'antd';

const Range = ({contrast, onChange, name, onAfterChange}) => {
      
      return (
            <div>
                   <p>{name}</p>
                   <Slider min={0} max={100} defaultValue={contrast} onChange={onChange} onAfterChange={onAfterChange}/>
            </div>
      );
};

export default Range;