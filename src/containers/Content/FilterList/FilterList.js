import React from 'react';
import { Row, Col} from 'antd';
import Filter from '../Filter/Filter';
import Image from '../Image/Image';

const FilterList = ({image, implementFilter}) => {
      return (
            <Row>
                  <Col span={6}>
                        <Filter
                              settings={{ contrast: 1, hue: 1, brightness: 85, saturate: 253, sepia: 20, blur: 1 }}
                              implementFilter={implementFilter}>
                              <Image src={image} type="filter"/>
                        </Filter>
                  </Col>
                  <Col span={6}>
                        <Filter
                              settings={{ contrast: 1, hue: 1, brightness: 90, saturate: 1, sepia: 1, blur: 1 }}
                              implementFilter={implementFilter}>
                              <Image src={image} type="filter"/>
                        </Filter>
                  </Col>
                  <Col span={6}>
                        <Filter
                              settings={{ contrast: 1, hue: 200, brightness: 100, saturate: 300, sepia: 40, blur: 1 }}
                              implementFilter={implementFilter}>
                              <Image src={image} type="filter"/>
                        </Filter>
                  </Col>
                  <Col span={6}>
                        <Filter
                              settings={{ contrast: 1, hue: 60, brightness: 65, saturate: 100, sepia: 20, blur: 1 }}
                              implementFilter={implementFilter}>
                              <Image src={image} type="filter"/>
                        </Filter></Col>
            </Row>
      );
};

export default FilterList;