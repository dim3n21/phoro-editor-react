import React from 'react';
import {Row, Col} from 'antd';

const Header = ({title}) => {
      return (
            <div className="header">
                  <Row>
                              <Col span={24}>{title}</Col>  
                  </Row>
            </div>
      );
};

export default Header;