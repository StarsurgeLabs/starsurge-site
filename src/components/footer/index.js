import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.footer`
  background-color: #a6ffcb;
  clear: both;
  text-align: center;
  width: 100%;
`;

const Footer = () => (
  <Wrapper>
    <small>Made with love in Floripa-SC</small>
  </Wrapper>
);

export default Footer;
