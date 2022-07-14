import React from 'react';
import * as S from './style';

const FirstPreviewrRightSide: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.ImgContainer>
          <S.MainImg src="/adera.png" />
          <S.TempDisplayContainer>
            <S.TmpIcon />
            <S.TmpDisplay>
              19°
            </S.TmpDisplay>
          </S.TempDisplayContainer>
        </S.ImgContainer>
      </S.Container>
    </>
  )
}

export default FirstPreviewrRightSide;