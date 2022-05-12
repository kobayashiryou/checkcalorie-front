import React from 'react';
import * as S from './style';

const Header: React.FC = () => {
  return(
    <>
      <S.Container>
        <S.Menu>
          <S.MenuList>
            HOME
          </S.MenuList>
          <S.MenuList>
            遊ぶ
          </S.MenuList>
          <S.MenuList>
            食べる
          </S.MenuList>
          <S.MenuList>
            泊まる
          </S.MenuList>
        </S.Menu>
      </S.Container>
    </>
  )
}

export default Header;