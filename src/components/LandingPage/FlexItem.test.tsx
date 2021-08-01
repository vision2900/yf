import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { FlexItem, FlexItemProps } from './FlexItem';
import image from "../../images/image.png";

afterEach(() => {
  cleanup();
})

test('Flex Item should render the text', () => {
  const item: FlexItemProps  ={
    image: image,
    title: 'Velit commodo, amet, ornare.',
    titleColor: '#2C3333',
    description: 'Tempor sed porttitor a, fermentum. Diam morbi quisque elementum libero integer euismod nec. Nulla morbi proin blandit elementum adipiscing. Ultricies vitae eget nec tempus, aenean cursus nec ligula. Lobortis gravida habitant nunc, facilisi tortor. Blandit sit nam natoque iaculis.',
    subtitle: 'Nunc dignissim',
    align: 'left',
    buttonLink: '#',
    buttonText: 'Sapien nec, id',
    bottomTitle: 'Potenti cursus mi fames sed metus viverra sed libero augue.',
    reverse: false
  };
  render(<FlexItem
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
  />);
  const element = screen.getByTestId('flex-item')
  expect(element).toHaveTextContent(item.title);
  expect(element).toHaveTextContent(item.description as string);
  expect(element).toHaveTextContent(item.subtitle as string);
  expect(element).toHaveTextContent(item.buttonText as string);
  expect(element).toHaveTextContent(item.bottomTitle as string);
  expect(element).toHaveClass("container");
  expect(element).toHaveClass("root");
  expect(element).toContainHTML('</img>');
});

test('Flex Item no visible content and no image', () => {
  const item: FlexItemProps  ={
    title: 'Velit commodo, amet, ornare.',
    titleColor: '#2C3333',
    align: 'left',
    reverse: false
  };
  const { container } = render(<FlexItem
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
  />);
  expect(screen.queryByText("Nunc dignissim")).toBeNull();
  expect(screen.queryByText("Sapien nec, id")).toBeNull();
  expect(screen.queryByText("Potenti cursus mi fames sed metus viverra sed libero augue.")).toBeNull();
  expect(screen.queryByText("Tempor sed portt")).toBeNull();
  expect(container?.firstChild?.firstChild).toHaveClass("noImage");
});

test('Flex Item align center and reverse', () => {
  const item: FlexItemProps  ={
    image: image,
    title: 'Velit commodo, amet, ornare.',
    titleColor: '#2C3333',
    description: 'Tempor sed porttitor a, fermentum. Diam morbi quisque elementum libero integer euismod nec. Nulla morbi proin blandit elementum adipiscing. Ultricies vitae eget nec tempus, aenean cursus nec ligula. Lobortis gravida habitant nunc, facilisi tortor. Blandit sit nam natoque iaculis.',
    subtitle: 'Nunc dignissim',
    align: 'center',
    buttonLink: '#',
    buttonText: 'Sapien nec, id',
    bottomTitle: 'Potenti cursus mi fames sed metus viverra sed libero augue.',
    reverse: true
  };
  render(<FlexItem
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
  />);
  const element = screen.getByTestId('flex-item')
  expect(element).toHaveClass("center");
  expect(element).toHaveClass("reverse");
});

test('Flex Item matches snapshot', () => {
  const item: FlexItemProps  ={
    image: image,
    title: 'Velit commodo, amet, ornare.',
    titleColor: '#2C3333',
    description: 'Tempor sed porttitor a, fermentum. Diam morbi quisque elementum libero integer euismod nec. Nulla morbi proin blandit elementum adipiscing. Ultricies vitae eget nec tempus, aenean cursus nec ligula. Lobortis gravida habitant nunc, facilisi tortor. Blandit sit nam natoque iaculis.',
    subtitle: 'Nunc dignissim',
    align: 'left',
    buttonLink: '#',
    buttonText: 'Sapien nec, id',
    bottomTitle: 'Potenti cursus mi fames sed metus viverra sed libero augue.',
    reverse: false
  };

  const t = renderer.create(<FlexItem
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
  />).toJSON();
  expect(t).toMatchSnapshot();
});
