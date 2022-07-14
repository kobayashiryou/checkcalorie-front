import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(144, 233, 144, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`

export const ImgContainer = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  max-width: 740px;
  min-height:
  height: 80%;
  max-height: 600px;
`
export const TempDisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 21%;
  max-width: 180px;
  height: 19.5%;
  top: 0;
  left: 0;
  border-radius: 50px 20px 20px 20px;
`

export const TmpDisplay = styled.p`
  font-size: 1rem;
  width: 50%;
`
export const TmpIcon = styled.div`
  width: 50%;
  height: 40px;
  background-image: url(/sun.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
`

export const MainImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50px;
  object-fit: scale-down;
`