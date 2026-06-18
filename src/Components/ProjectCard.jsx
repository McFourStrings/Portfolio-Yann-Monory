import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export function ProjectCard({ projet }) {
  return (
    <Card 
      shadow="lg" 
      padding="xl" 
      radius="md" 
      withBorder
      style={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: '#170328', 
        borderColor: '#800080',      
        color: '#F4F2F7',            
      }}
    >
      
      <Card.Section>
        <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
          <Image
            src={projet.photo || "https://placehold.co/600x600/170328/A69FB0?text=Projet+En+Cours"}
            alt={projet.nom}
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderBottom: '2px solid #800080'
            }} 
          />
        </div>
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={700} size="xl" style={{ color: '#F4F2F7' }}>
          {projet.nom}
        </Text>
      </Group>

      <Group gap={6} mb="md">
        {projet.stacks.map((tech, index) => (
          <Badge 
            key={index} 
            variant="filled"
            style={{ 
              backgroundColor: '#800080',
              color: '#F4F2F7',
              fontSize: '11px'
            }}
          >
            {tech}
          </Badge>
        ))}
      </Group>

      <Text 
        size="sm" 
        style={{ 
          color: '#A69FB0', 
          flexGrow: 1,      
          lineHeight: '1.5'
        }} 
        mb="xl"
      >
        {projet.description}
      </Text>

      <Group gap="sm" style={{ marginTop: 'auto' }}>
        {projet.demo && (
          <Button 
            component="a" 
            href={projet.demo} 
            target="_blank" 
            style={{ 
              flex: 1,
              backgroundColor: '#800080',
              color: '#F4F2F7',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A000A0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#800080'}
          >
            Démo
          </Button>
        )}

        <Button 
          component="a" 
          href={projet.git} 
          target="_blank" 
          variant="outline"
          style={{ 
            flex: 1,
            backgroundColor: 'transparent',
            borderColor: '#A69FB0',
            color: '#A69FB0',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#25093D';
            e.currentTarget.style.color = '#F4F2F7';
            e.currentTarget.style.borderColor = '#F4F2F7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#A69FB0';
            e.currentTarget.style.borderColor = '#A69FB0';
          }}
        >
          GitHub
        </Button>
      </Group>
    </Card>
  );
}