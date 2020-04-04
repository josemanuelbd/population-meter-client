import React from 'react';
import { Container } from './styles';

interface Props {
  text?: string;
}

const Loading: React.FC<Props> = ({ text = 'Loading...' }: Props) => <Container>{ text }</Container>;

export default Loading;
