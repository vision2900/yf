import React from 'react';
import { FlexItem, FlexItemProps } from "./FlexItem";

export interface LandingPageProps
  extends FlexItemProps {
  id: string;
  bgc: string;
}

const LandingPage: React.FC<{ items: LandingPageProps[] }> = ({
  items
}) =>
  <>
    {items.map((item)=> <div key={item.id} style={{ backgroundColor: item.bgc }}>
      <FlexItem
        image={item.image}
        title={item.title}
        titleColor={item.titleColor}
        description={item.description}
        subtitle={item.subtitle}
        align={item.align}
        buttonLink={item.buttonLink}
        buttonText={item.buttonText}
        bottomTitle={item.bottomTitle}
        reverse={item.reverse}
      />
    </div>)}
  </>;

export { LandingPage };
