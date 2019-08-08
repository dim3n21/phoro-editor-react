import React from 'react';
import { Slider } from 'antd';

const Range = ({contrast, onChange}) => {
      
      return (
            <div>
                   <Slider min={0} max={100} defaultValue={contrast} onChange={onChange}/>
            </div>
      );
};

export default Range;