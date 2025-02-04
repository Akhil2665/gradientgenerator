// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
background-image: linear-gradient(to top, yellow, green);
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
  justify-content: space-around;
  align-items: center;
`
export const LabelElement = styled.label`
font-size: 20px;
font-weight: 500px;
`
export const ColorPickerElement = styled.input`
background-color: blue;
color: white;
`
export const GenerateButton = styled.button`
background-color:  #00c9b7;
color: #1e293b;
`
