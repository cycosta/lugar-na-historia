import { Container, Dropdown } from '../../components';

import { postTypes } from '../../data/postTypes';

export const Home = () => (
  <Container>
    <Dropdown options={postTypes} />
  </Container>
);
