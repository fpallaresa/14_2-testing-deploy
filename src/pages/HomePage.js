import { Heading, Text } from '@chakra-ui/react';

const NAME_KEY = process.env.REACT_APP_NAME_KEY;
const PASSWORD_KEY = process.env.REACT_APP_PASSWORD_KEY;

const HomePage = () => {
  return (
    <div>
      <Heading as='h2' size='md' marginBottom='10px'>
        HomePage
      </Heading>
      <Text>El usuario es: {NAME_KEY}</Text>
      <Text>La contraseña es: {PASSWORD_KEY}</Text>
    </div>
  );
};

export default HomePage;
