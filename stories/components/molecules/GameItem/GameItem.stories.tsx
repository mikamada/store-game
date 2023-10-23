import React from 'react';
import { Meta } from '@storybook/react';
import GameItem, { GameItemProps } from '../../../../components/molecules/GameItem';

export default {
  title: 'Components/Molecules/GameItem',
  component: GameItem,
} as Meta;

const Template: React.FC<GameItemProps> = (args) => <GameItem {...args} />;
export const Default = () => <Template title='Super Mech' category='Desktop' thumbnail='/assets/img/Thumbnail-3.png' />;
