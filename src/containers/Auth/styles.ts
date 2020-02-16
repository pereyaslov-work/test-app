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
  flex-direction: column;
  max-width: 500px;
  width: 50%;
  height: 400px;
  padding: 20px;
  border: 1px solid rgba(0,0,0,0.4);
  background-color: rgba(0,0,0,0.2);
  border-radius: 15px;
`
