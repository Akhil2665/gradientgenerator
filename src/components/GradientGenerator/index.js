import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  Heading,
  SubHeading,
  ColorPickerElement,
  ColorSelctionContainer,
  DirectionList,
  InputContainer,
  LabelElement,
  GenerateButton,
  FormContainer,
} from './styledComponents'

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
    secondColorHexCode: `#8ae323`,
    firstColorHexCode: `#014f7b`,
    dataReq: {
      secondColorHexCode: `#8ae323`,
      firstColorHexCode: `#014f7b`,
      activeDirection: 'top',
    },
  }

  onChangefirstColorHexCode = event => {
    this.setState({firstColorHexCode: event.target.value})
  }

  onChangesecondColorHexCode = event => {
    this.setState({secondColorHexCode: event.target.value})
  }

  changeActiveDirection = value => {
    this.setState({activeDirection: value})
  }

  onSubmitData = () => {
    const {firstColorHexCode, secondColorHexCode, activeDirection} = this.state
    this.setState(prevState => ({
      dataReq: {
        ...prevState.dataReq,
        activeDirection,
        secondColorHexCode,
        firstColorHexCode,
      },
    }))
  }

  render() {
    const {dataReq, activeDirection} = this.state
    const {firstColorHexCode, secondColorHexCode} = dataReq

    console.log(firstColorHexCode, secondColorHexCode)
    return (
      <AppContainer dataReq={dataReq} data-testid="gradientGenerator">
        <Heading>Generate a CSS Color Gradient</Heading>
        <SubHeading>Choose Direction</SubHeading>
        <FormContainer>
          <DirectionList>
            {gradientDirectionsList.map(eachObj => (
              <GradientDirectionItem
                directionDetails={eachObj}
                changeActiveDirection={this.changeActiveDirection}
                isActive={eachObj.value === activeDirection}
                key={eachObj.directionId}
              />
            ))}
          </DirectionList>
          <SubHeading>Pick the Colors</SubHeading>
          <ColorSelctionContainer>
            <InputContainer>
              <LabelElement htmlFor="firstColor">
                {firstColorHexCode}
              </LabelElement>
              <ColorPickerElement
                type="color"
                id="firstColor"
                value={firstColorHexCode}
                onChange={this.onChangefirstColorHexCode}
              />
            </InputContainer>
            <InputContainer>
              <LabelElement htmlFor="secondColor">
                {secondColorHexCode}
              </LabelElement>
              <ColorPickerElement
                id="secondColor"
                type="color"
                value={secondColorHexCode}
                onChange={this.onChangesecondColorHexCode}
              />
            </InputContainer>
          </ColorSelctionContainer>
          <GenerateButton type="button" onClick={this.onSubmitData}>
            Generate
          </GenerateButton>
        </FormContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
