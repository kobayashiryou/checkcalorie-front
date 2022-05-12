import React from 'react';
import * as S from './style';

const ImgCover: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.CloudContainer>
          <S.FirstCloud />
          <S.SecondCloud />
          <S.ThirdCloud />
        </S.CloudContainer>
      </S.Container>
    </>
  )
}

export default ImgCover;