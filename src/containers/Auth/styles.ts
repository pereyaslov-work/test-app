import styled from 'styled-components'

export const StyledAuth = styled.div`
  display: grid;
  grid-template: auto / repeat(2, 1fr);
  height: 100%;
  background-image: url('/src/assets/images/main-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Form = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  width: 50%;
  height: 350px;
  padding: 0 50px;
  border: 3px solid #b0b3b3;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
`
