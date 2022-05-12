import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  background-color: #228b22;
  z-index: 99;
`

export const TextBoxContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  height: 50%;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`
