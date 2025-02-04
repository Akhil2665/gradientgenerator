import {Component} from 'react'

import GradientDirectionItem from './GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
  }

  render() {
    const {} = this.state
    return (
      <AppContainer>
        <Heading>Generate a CSS Color Gradient</Heading>
        <SubHeading>Choose Direction</SubHeading>
        <DirectionList>
          {gradientDirectionsList.map(eachObj => (
            <GradientDirectionItem directionDetails={eachObj} />
          ))}
        </DirectionList>
        <SubHeading>Choose Direction</SubHeading>
        <ColorSelctionContainer>
          <InputContainer>
            <LabelElement htmlFor={secondColor}></LabelElement>
            <ColorPickerElement
              id="firstColor"
              type="color"
              colorPicked={secondColorHexCode}
            ></ColorPickerElement>
          </InputContainer>
          <InputContainer>
            <LabelElement htmlFor={secondColor}></LabelElement>
            <ColorPickerElement
              id="secondColor"
              type="color"
              colorPicked={secondColorHexCode}
            ></ColorPickerElement>
          </InputContainer>
        </ColorSelctionContainer>
      </AppContainer>
    )
  }
}
