import React from 'react';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading';

import { useLoginRequest } from './hooks';
import { Container, Text } from './styles';
import { getLoginData, isFetchingLogin } from './selectors';

const LoginContainer: React.FC = () => {
  useLoginRequest();

  const { id, name } = useSelector(getLoginData);
  const isLoading = useSelector(isFetchingLogin);

  return (
    <Container>
      { isLoading && <Loading /> }
      <Text>{ id } { name }</Text>
      <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
      <Text>Quod velit modi cupiditate atque quisquam deserunt esse eos</Text>
      <Text>molestias quos adipisci fugit nihil consequatur quam eveniet</Text>
      <Text>explicabo excepturi, temporibus iure at?</Text>
      <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
      <Text>Quod velit modi cupiditate atque quisquam deserunt esse eos</Text>
      <Text>molestias quos adipisci fugit nihil consequatur quam eveniet</Text>
      <Text>explicabo excepturi, temporibus iure at?</Text>
      <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
      <Text>Quod velit modi cupiditate atque quisquam deserunt esse eos</Text>
      <Text>molestias quos adipisci fugit nihil consequatur quam eveniet</Text>
      <Text>explicabo excepturi, temporibus iure at?</Text>
    </Container>
  );
};

export default LoginContainer;
