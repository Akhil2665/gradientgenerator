// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
  font-size: 24px;
  padding: 12px;
  border: none;
  outline: none;
  opacity: ${props => (props.isActive ? '1' : '0.5')};
  border-radius: 10px;
  min-height: 34px;
`
export const DirectionListItem = styled.li`
  font-size: 24px;
  margin-right: 20px;
`
