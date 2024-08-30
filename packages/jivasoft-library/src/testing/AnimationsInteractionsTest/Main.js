import React from 'react'
import { TestStyled } from './Style'

export const AnimationsInteractionsTest = () => {
  return (
    <TestStyled>
      <h1>Animation</h1>

      <section>
        <h2>Emphasis  </h2>
        <div className='container emphasis'>
          <div className='ele1'> spin</div>
          <div className='ele2'>shine</div>
          <div className='ele3'>shineX</div>
          <div className='ele4'>blinking</div>
          <div className='ele5'>focus</div>
          <div className='ele6'>shakeBell</div>
          <div className='ele7'>opacityPulse</div>
          <div className='ele8'>pulsateWithSpin</div>
          <div className='ele9'>pulsateX</div>
          <div className='ele10'>pulsateY</div>
          <div className='ele11'>pulse</div>
          <div className='ele12'>lowPulse</div>
          <div className='ele13'>fastPulse</div>
          <div className='ele14'>slowPulse</div>
          <div className='ele15'>fastPulsateX</div>
          <div className='ele16'>slowPulsateX</div>
          <div className='ele17'>fastPulsateY</div>
          <div className='ele18'>slowPulsateY</div>
          <div className='ele19'>breathe</div>
          <div className='ele20'>opacityToHigh</div>

        </div>
      </section>

      <section>
        <h2>Entrance Animation</h2>
        <div className='container entrance'>

          <div className='en1'>slideUp</div>
          <div className='en2'>fadeIn</div>
          <div className='en3'>textSlideIn</div>
          <div className='en4'>slideDown</div>
          <div className='en5'>expandIn</div>
          <div className='en6'>slideInLeft</div>
          <div className='en7'>slideInRight</div>
          <div className='en8'>selected</div>
          <div className='en9'>floatDown</div>
          <div className='en10'>floatUp</div>
          <div className='en11'>expand</div>
          <div className='en12'>fadeInScaled</div>
          <div className='en13'>fadeIn</div>
          <div className='en14'>slideIn</div>
          <div className='en15'>slideInBottom</div>
          <div className='en16'>flash</div>
          <div className='en17'>slideInScaled</div>
          <div className='en18'>initOpen</div>

        </div>
      </section>

      <section>
        <h2>Exit Animation</h2>
        <div className='container exit'>
          <div className='ex1'>scale</div>
          <div className='ex2'>animateOut</div>
          <div className='ex3'>expandOut</div>
        </div>
      </section>

      <section>
        <h2>Path Animation</h2>
        <div className='container path'>

          <div className='p1'>shake</div>
          <div className='p2'>shakeY</div>
          <div className='p3'>shakeX</div>
          <div className='p4'>bounce</div>
          <div className='p5'>flip</div>
          <div className='p6'>bounceBack</div>
          <div className='p7'>shiftRight</div>
          <div className='p8'>shiftLeft</div>
          <div className='p9'>shiftUp</div>
          <div className='p10'>shiftDown</div>


        </div>
      </section>
      <h1>Interaction</h1>
      <section>
        <h2>Hover Interaction</h2>
        <div className='container hov'>
          <div className='hov1'>spinOnHover</div>
          <div className='hov2'>breatheOnHover</div>
          <div className='hov3'>scaleOnHover</div>

          <div className='hov5'>shakeOnHover</div>
          <div className='hov6'>shakeBellOnHover</div>
          <div className='hov7'>shakeXOnHover</div>
          <div className='hov16'>shakeYOnHover</div>
          <div className='hov8'>blinkOnHover</div>
          <div className='hov9'>expandOnHover</div>

          <div className='hov11'>pulseOnHover</div>
          <div className='hov12'>opacityPulseOnHover</div>

          <div className='hov14'>slowPulseOnHover</div>
          <div className='hov15'>fastPulseOnHover</div>

        </div>
      </section>
      <h1>Elevation</h1>
      <section>
        <div className='container elev'>
          <div className='elev1'>Elevation 1</div>
          <div className='elev2'>Elevation 2</div>
          <div className='elev3'>Elevation 3</div>
          <div className='elev4'>Elevation 4</div>

        </div>
      </section>
      <h1>Selectable</h1>
      <section>
        <div className='container hov'>
          <div className='sel'>Selectable</div>
          <div className='sel1'>Selectable 1</div>
          <div className='sel2'>Selectable 2</div>
          <div className='sel3'>Selectable 3</div>
          <div className='sel4'>Selectable 4</div>

        </div>
      </section>




    </TestStyled>
  )
}
