import { IconEdsLogo, IconJivasoftLogo } from 'app/brand'
import { md } from 'app/constants'
import { useViewport } from 'app/data'
import { PRIMARY_COLOR } from 'app/globalStyles'
import { Carousel } from '@jivasoft/jivasoft-lib/dist/components'
import { StyledAuthHeader } from './styles'

export const AuthHeader = () => {
  const { viewWidth, viewHeight } = useViewport()
  return (
    <StyledAuthHeader
      className='auth-header-container'
      backgroundColor={viewWidth < md ? null : PRIMARY_COLOR}
      width={viewWidth < md ? '100%' : '70%'}
    >
      {/* <Carousel
        showStepper={false}
        showNav={false}
        delay={5000}
        carouselList={[
          <div
            key={'item1'}
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              width: '100%'
            }}
          >
            <div style={{ width: '50%', margin: 'auto' }}>
              <IconEdsLogo />
            </div>
            {viewWidth > md && (
              <div
                style={{
					margin:'10%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <h4>
                  <b>MANAGED SOLUTIONS FOR LAW ENFORCEMENT EXTRA DUTY</b>
                </h4>

                <div>
                  We provide agencies solutions that relieve them of
                  administrative burden, limits their financial and legal risk,
                  and enhances operational efficiency.
                </div>
              </div>
            )}
          </div>,
          <div
            key={'item2'}
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              width: '100%'
            }}
          >
            <div style={{ width: '50%', margin: 'auto', background: 'red;' }}>
              <IconJivasoftLogo />
            </div>
            {viewWidth > md && (
              <div
                style={{
                  margin: '10%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <h4>
                  <b>PUBLIC SAFETY SCHEDULING SOFTWARE</b>
                </h4>

                <div>
                  Streamline your operations, increase accountability and
                  control costs in an ever-changing world with Jivasoft software
                  products.
                </div>
              </div>
            )}
          </div>
        ]}
      /> */}
      <div
        key={'item1'}
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ width: '50%', margin: '10px' }}>
          <IconEdsLogo />
        </div>
        {viewWidth > md && (
          <div
            style={{
              margin: '10%',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <h4>
              <b>MANAGED SOLUTIONS FOR LAW ENFORCEMENT EXTRA DUTY</b>
            </h4>

            <div>
              We provide agencies solutions that relieve them of administrative
              burden, limits their financial and legal risk, and enhances
              operational efficiency.
            </div>
          </div>
        )}
      </div>
    </StyledAuthHeader>
  )
}
