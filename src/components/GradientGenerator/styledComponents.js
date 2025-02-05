// Style your elements here
import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 24px;
`

export const SubHeading = styled.h1`
  font-size: 14px;
`

export const AppContainer = styled.div`
  background-image: ${props => {
    const {
      firstColorHexCode,
      secondColorHexCode,
      activeDirection,
    } = props.dataReq
    return `linear-gradient(to ${activeDirection}, ${firstColorHexCode}, ${secondColorHexCode})`
  }};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  color: #ffffff;
`

export const ColorSelctionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 30px;
`
export const LabelElement = styled.label`
  font-size: 20px;
  font-weight: 500px;
`
export const ColorPickerElement = styled.input`
  height: 40px;
  width: 80px;
  opacity: 0.5;
  border: none;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  font-weight: 600;
`

export const DirectionList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const FormContainer = styled.div`
  font-family: 'roboto';
  display: flex;
  flex-direction: column;
  align-items: center;
`
