import { Carousel } from '@mantine/carousel';
import { ProjectCard } from './ProjectCard';

export function ProjectCarousel({ projets }) {
  return (
    <Carousel
      withIndicators
      loop
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }} 
      slideGap="lg"
      align="start"
      slidesToScroll={1}
      dragFree
      styles={{
        control: {
          backgroundColor: '#170328',
          borderColor: '#800080',
          color: '#F4F2F7',
          '&:hover': {
            backgroundColor: '#25093D',
          },
        },
        indicator: {
          backgroundColor: '#A69FB0',
          transition: 'width 250ms ease',
          '&[data-active]': {
            backgroundColor: '#800080',
            width: '24px',
          },
        },
      }}
    >
      {projets.map((projet) => (
        <Carousel.Slide key={projet.id}>
          <ProjectCard projet={projet} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}