// Write your code here
import {DirectionListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {changeActiveDirection, directionDetails} = props
  const {displayText, value} = directionDetails
  const onClickedDirection = () => changeActiveDirection(value)

  return (
    <DirectionListItem>
      <DirectionButton type="button" onClick={onClickedDirection}>
        {displayText}
      </DirectionButton>
    </DirectionListItem>
  )
}

export default GradientDirectionItem
