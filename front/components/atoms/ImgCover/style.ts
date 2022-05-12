import styled from 'styled-components';

export const Container = styled.div`
  background-image: url("/kirigamine.jpg");
  height: 800px;
  width: 70%;
`
export const CloudContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const FirstCloud = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 100px;
  width: 80%;
  border-radius: 0 50px 50px 0;
`

export const SecondCloud = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 100px;
  width: 40%;
  border-radius: 0 -100px 0 0;
`
export const ThirdCloud = styled.div`
background-color: rgba(255, 255, 255, 0.5);
height: 100px;
width: 20%;
border-radius: 0 50px 50px 0;
`

export const CardImg = styled.img`
  height: 100%;
  width: 100%;
`
