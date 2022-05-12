import React, { useState, useEffect } from 'react';
import * as S from './style';

type Props = {
  children: React.ReactNode
}

const FirstLoadingModal: React.FC<Props> = (props: Props) => {

  const [leave, setLeave] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLeave(true);
    }, 3000)
  }, []) // []を渡すとvueでいうところのmouted時に関数を実行する

  if (leave === false) {
    return (
      <>
        <S.Container>
          <S.TextBoxContainer>
            {props.children}
          </S.TextBoxContainer>
        </S.Container>
      </>
    )
  }
  return (
    <></>
  )
}

export default FirstLoadingModal;