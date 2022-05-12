import React from 'react';
import ImgCover from '../../atoms/ImgCover';
import * as S from './style';

const Card: React.FC = () => {
  return (
    <>
      <S.Container>
        <ImgCover>
          <S.CardImg src="/kirigamine.jpg" />
        </ImgCover>
      </S.Container>
    </>
  )
}

export default Card;