// Write your code here
import {DirectionListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {changeActiveDirection, directionDetails, isActive} = props
  const {displayText, value} = directionDetails
  const onClickedDirection = () => changeActiveDirection(value)

  return (
    <DirectionListItem>
      <DirectionButton
        type="button"
        onClick={onClickedDirection}
        style={{opacity: isActive ? 1 : 0.5}}
      >
        {displayText}
      </DirectionButton>
    </DirectionListItem>
  )
}

export default GradientDirectionItem
