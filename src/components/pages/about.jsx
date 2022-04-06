import React from "react";
import {
  StyledAbout,
  ItemContainer,
  CustomDesign,
  EasyInterface,
  Performance,
  CustomContainer,
  InterfaceContainer,
  PerformanceContainer,
} from "../styles/aboutStyle";

import customdesign from "../../assets/Images/customdesign.png";
import drink from "../../assets/Images/drink.png";
import feather from "../../assets/Images/feather.png";

function About() {
  return (
    <StyledAbout id="about">
      <ItemContainer>
        <CustomDesign>
          <CustomContainer>
            <img src={customdesign} alt="" />
            <h2>Custom Design</h2>
            <p>
              We craft unique designs from scratch to reflect your business in
              an optimal way to connect you to your audience.
            </p>
          </CustomContainer>
        </CustomDesign>
        <EasyInterface>
          <InterfaceContainer>
            <img src={drink} alt="" />
            <h2>Easy to use interface</h2>
            <p>
              Our custom interfaces gives you easy access and total control for
              all settings and content.
            </p>
          </InterfaceContainer>
        </EasyInterface>
        <Performance>
          <PerformanceContainer>
            <img src={feather} alt="" />
            <h2>Easy to use interface</h2>
            <p>
              Our custom interfaces gives you easy access and total control for
              all settings and content.
            </p>
          </PerformanceContainer>
        </Performance>
      </ItemContainer>
    </StyledAbout>
  );
}

export default About;
