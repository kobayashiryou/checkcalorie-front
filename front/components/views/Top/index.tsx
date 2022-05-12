import React from 'react';
import * as S from "./style";
import FirstLoadingModal from '../../molecules/FirstLoadingModal';
import Header from '../../organisims/Header';
import TopPageText from '../../atoms/TopPageText';
import Logo from '../../atoms/Logo';
import Card from '../../molecules/Card';
import ImgCover from '../../atoms/ImgCover';

const Top: React.FC = () => {
  return (
    <>
      <FirstLoadingModal>
        <Logo />
      </FirstLoadingModal>
      <S.Container>
        <Header />
        <S.FirstPreviewContainer>
          <S.FirstPreviewLeftSide>
            <Logo />
          </S.FirstPreviewLeftSide>
          <TopPageText />
          <S.FirstPreviewrRightSide>
            <S.FirstPreviewrRightSideImg src="/kirigamine.jpg" />
          </S.FirstPreviewrRightSide>
        </S.FirstPreviewContainer>
        <ImgCover />
      </S.Container>
    </>
  )
}

export default Top;