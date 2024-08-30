import { useViewport } from 'app/data'
import { StyledPropFooter } from './styles'

export const TestFooter = props => {
  const { propArray } = props
  const { viewWidth, viewHeight } = useViewport()
  return (
    <>
      <StyledPropFooter
      // style={{flexDirection:viewWidth<830?'column':'row'}}
      >
        {/* mapping through an array */}
        {propArray.map((property, index) => {
          return (
            property !== 'children' && (
              <div style={{ margin: 5 }} key={index}>
                <div style={{ fontWeight: 'bold' }}>{property}</div>
                <div>{props[property]}</div>
              </div>
            )
          )
        })}
        <div style={{ margin: 5, border: '1px solid black' }}>
          <div>vh:{viewHeight}</div>
          <div>vw:{viewWidth}</div>
        </div>
      </StyledPropFooter>
    </>
  )
}
