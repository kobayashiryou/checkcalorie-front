import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: 55px;
  width: 100%;
  background-color: #228b22;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
`

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  width: 60%;
  list-style: none;
`

export const MenuList = styled.li`
  text-align: center;
  font-weight: bold;
  color: #f8f8ff;
  width: 100%;
`