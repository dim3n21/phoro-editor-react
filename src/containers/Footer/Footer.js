import React from 'react';
import {Row, Col} from 'antd';

const Footer = () => {
      return (
            <div className="footer">
                  <Row>
                        <Col span={4}>
                              <a href="https://github.com/dim3n21" target="_blank">
                                    <img src={process.env.PUBLIC_URL + './assets/icons/github-logo.png'} alt="github" class="footer_icon"/>
                              </a>
                              <a href="https://codepen.io/dandrianov/" target="_blank">
                                    <img src={process.env.PUBLIC_URL + './assets/icons/codepen.png'} alt="codepen" class="footer_icon"/>
                              </a>
                              <a href="https://www.linkedin.com/in/dmitry-andrianov/" target="_blank">
                                    <img src={process.env.PUBLIC_URL + './assets/icons/linkedin.png'} alt="linkedin" class="footer_icon"/>
                              </a>
                              <a href="https://www.behance.net/dmitryandrianov" target="_blank">
                                    <img src={process.env.PUBLIC_URL + './assets/icons/behance.png'} alt="behance" class="footer_icon"/>
                              </a>
                        </Col>
                        <Col span={20} align="right" className="footer_text">
                              © by Dmitry Andrianov.
                        </Col>
                  </Row>
            </div>
      );
};

export default Footer;