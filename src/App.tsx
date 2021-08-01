import React from 'react';
import image from './images/image.png';
import { LandingPage, LandingPageProps } from './components/LandingPage';
import './styles/application.scss';

const App = () => {
  const items: LandingPageProps[] = [
    {
      id: '1',
      bgc: '#F6F8F8',
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
    },
    {
      id: '2',
      bgc: '#F6F8F8',
      image: image,
      title: 'Velit commodo, amet, ornare.',
      titleColor: '#2C3333',
      description: 'Tempor sed porttitor a, fermentum. Diam morbi quisque elementum libero integer euismod nec. Nulla morbi proin blandit elementum adipiscing. Ultricies vitae eget nec tempus, aenean cursus nec ligula. Lobortis gravida habitant nunc, facilisi tortor. Blandit sit nam natoque iaculis.',
      subtitle: 'Nunc dignissim',
      align: 'center',
      buttonLink: '#',
      buttonText: 'Sapien nec, id',
      bottomTitle: 'Potenti cursus mi fames sed metus viverra sed libero augue.',
      reverse: false
    },
    {
      id: '3',
      bgc: '#16382B',
      title: 'Velit commodo, amet, ornare.',
      titleColor: '#ffffff',
      description: 'Tempor sed porttitor a, fermentum. Diam morbi quisque elementum libero integer euismod nec. Nulla morbi proin blandit elementum adipiscing. Ultricies vitae eget nec tempus, aenean cursus nec ligula. Lobortis gravida habitant nunc, facilisi tortor. Blandit sit nam natoque iaculis.',
      align: 'left',
      buttonLink: '#',
      buttonText: 'Sapien nec, id'
    },
    {
      id: '4',
      bgc: '#F6F8F8',
      image: image,
      title: 'Velit commodo, amet, ornare.',
      titleColor: '#2C3333',
      description: 'Tempor sed porttitor a, fermentum. Diam morbi quisque elementum libero integer euismod nec. Nulla morbi proin blandit elementum adipiscing. Ultricies vitae eget nec tempus, aenean cursus nec ligula. Lobortis gravida habitant nunc, facilisi tortor. Blandit sit nam natoque iaculis.',
      subtitle: 'Nunc dignissim',
      align: 'left',
      buttonLink: '#',
      buttonText: 'Sapien nec, id',
      bottomTitle: 'Potenti cursus mi fames sed metus viverra sed libero augue.',
      reverse: true
    },
    {
      id: '5',
      bgc: '#16382B',
      title: 'Velit commodo, amet, ornare.',
      titleColor: '#ffffff',
      description: 'Tempor sed porttitor a, fermentum. Diam morbi quisque elementum libero integer euismod nec. Nulla morbi proin blandit elementum adipiscing. Ultricies vitae eget nec tempus, aenean cursus nec ligula. Lobortis gravida habitant nunc, facilisi tortor. Blandit sit nam natoque iaculis.',
      align: 'left',
      bottomTitle: 'Potenti cursus mi fames sed metus viverra sed libero augue.',
    },
    {
      id: '6',
      bgc: '#F6F8F8',
      title: 'Velit commodo, amet, ornare.',
      titleColor: '#2C3333',
      description: 'Tempor sed porttitor a, fermentum. Diam morbi quisque elementum libero integer euismod nec. Nulla morbi proin blandit elementum adipiscing. Ultricies vitae eget nec tempus, aenean cursus nec ligula. Lobortis gravida habitant nunc, facilisi tortor. Blandit sit nam natoque iaculis.',
      align: 'center',
      buttonLink: '#',
      buttonText: 'Sapien nec, id'
    },
    {
      id: '7',
      bgc: '#16382B',
      title: 'Velit commodo, amet, ornare.',
      titleColor: '#ffffff',
      align: 'center',
      buttonLink: '#',
      buttonText: 'Sapien nec, id'
    },
    {
      id: '8',
      bgc: '#F6F8F8',
      subtitle: 'Nunc dignissim',
      title: 'Velit commodo, amet, ornare.',
      titleColor: '#2C3333',
      description: 'Tempor sed porttitor a, fermentum. Diam morbi quisque elementum libero integer euismod nec. Nulla morbi proin blandit elementum adipiscing. Ultricies vitae eget nec tempus, aenean cursus nec ligula. Lobortis gravida habitant nunc, facilisi tortor. Blandit sit nam natoque iaculis.',
      align: 'right',
      bottomTitle: 'Potenti cursus mi fames sed metus viverra sed libero augue.',
    },
    {
      id: '9',
      bgc: '#16382B',
      image: image,
      title: 'Velit commodo, amet, ornare.',
      titleColor: '#ffffff',
      description: 'Tempor sed porttitor a, fermentum. Diam morbi quisque elementum libero integer euismod nec. Nulla morbi proin blandit elementum adipiscing. Ultricies vitae eget nec tempus, aenean cursus nec ligula. Lobortis gravida habitant nunc, facilisi tortor. Blandit sit nam natoque iaculis.',
      align: 'left',
      buttonLink: '#',
      buttonText: 'Sapien nec, id',
      reverse: false
    },
    {
      id: '10',
      bgc: '#F6F8F8',
      image: image,
      title: 'Velit commodo, amet, ornare.',
      titleColor: '#2C3333',
      align: 'center',
      buttonLink: '#',
      buttonText: 'Sapien nec, id',
      bottomTitle: 'Potenti cursus mi fames sed metus viverra sed libero augue.',
      reverse: false
    }
  ]
  return (
    <LandingPage items={items} />
  );
}

export default App;
