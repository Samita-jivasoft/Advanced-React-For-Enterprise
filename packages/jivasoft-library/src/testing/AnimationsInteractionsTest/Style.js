import styled from 'styled-components';

export const TestStyled = styled.div`
  text-align: center;
  height:100%;
  width:100%;

  h2 {
    margin: 20px 0;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 30px;
    padding: 10px;
    margin: 20px auto;
    max-width: 1000px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: auto;
    box-sizing: border-box;
  }

  .emphasis div, .entrance div, .exit div, .path div{
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #d2d1cd;
    border-radius: 10px;
    background-color: olive;
    box-sizing: border-box;
  }

  .hov div{
    padding: 30px;
    margin-bottom: 20px;
    border: 1px solid #d2d1cd;
    border-radius: 10px;
    background-color: olive;
    box-sizing: border-box;
  }

  .elev div{
    padding: 30px;
    margin-bottom: 20px;
    border: 1px solid #d2d1cd;
    border-radius: 10px;

    box-sizing: border-box;
  }

  .emphasis div:hover, .entrance div:hover, .exit div:hover, .path div:hover{
    background-color: #9c9c5e;
  }

  //emphasis
  .ele1 { ${({ theme }) => theme?.animation?.emphasis?.spin}; }
  .ele2 {
    background: linear-gradient(90deg, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.2) 75%) olive;
    background-size: 200% 100%;
    ${({ theme }) => theme?.animation?.emphasis?.shine}; }
  .ele3 {
      background: linear-gradient(90deg, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.2) 75%) olive;
      background-size: 200% 100%;
      ${({ theme }) => theme?.animation?.emphasis?.shineX}; }
  .ele4 { ${({ theme }) => theme?.animation?.emphasis?.blinking}; }
  .ele5 { ${({ theme }) => theme?.animation?.emphasis?.focus}; }
  .ele6 { ${({ theme }) => theme?.animation?.emphasis?.shakeBell}; }
  .ele7 { ${({ theme }) => theme?.animation?.emphasis?.opacityPulse}; }
  .ele8 { ${({ theme }) => theme?.animation?.emphasis?.pulsateWithSpin}; }
  .ele9 { ${({ theme }) => theme?.animation?.emphasis?.pulsateX}; }
  .ele10 { ${({ theme }) => theme?.animation?.emphasis?.pulsateY}; }
  .ele11 { ${({ theme }) => theme?.animation?.emphasis?.pulse}; }
  .ele12 { ${({ theme }) => theme?.animation?.emphasis?.lowPulse}; }
  .ele13 { ${({ theme }) => theme?.animation?.emphasis?.fastPulse}; }
  .ele14 { ${({ theme }) => theme?.animation?.emphasis?.slowPulse}; }
  .ele15 { ${({ theme }) => theme?.animation?.emphasis?.fastPulsateX}; }
  .ele16 { ${({ theme }) => theme?.animation?.emphasis?.slowPulsateX}; }
  .ele17 { ${({ theme }) => theme?.animation?.emphasis?.fastPulsateY}; }
  .ele18 { ${({ theme }) => theme?.animation?.emphasis?.slowPulsateY}; }
  .ele19 { ${({ theme }) => theme?.animation?.emphasis?.breathe}; }
  .ele20 { ${({ theme }) => theme?.animation?.emphasis?.opacityToHigh}; }


  //entrance

  .en1 { ${({ theme }) => theme?.animation?.entrance?.slideUp}; }
  .en2 { ${({ theme }) => theme?.animation?.entrance?.fadeIn}; }
  .en3 { ${({ theme }) => theme?.animation?.entrance?.textSlideIn}; }
  .en4 { ${({ theme }) => theme?.animation?.entrance?.slideDown}; }
  .en5 { ${({ theme }) => theme?.animation?.entrance?.expandIn}; }
  .en6 { ${({ theme }) => theme?.animation?.entrance?.slideInLeft}; }
  .en7 { ${({ theme }) => theme?.animation?.entrance?.slideInRight}; }
  .en8 { ${({ theme }) => theme?.animation?.entrance?.selected}; }
  .en9 { ${({ theme }) => theme?.animation?.entrance?.floatDown}; }
  .en10 { ${({ theme }) => theme?.animation?.entrance?.floatUp}; }
  .en11 { ${({ theme }) => theme?.animation?.entrance?.expand}; }
  .en12 { ${({ theme }) => theme?.animation?.entrance?.fadeInScaled}; }
  .en13{ ${({ theme }) => theme?.animation?.entrance?.fadeOut}; }
  .en14 { ${({ theme }) => theme?.animation?.entrance?.slideIn}; }
  .en15 { ${({ theme }) => theme?.animation?.entrance?.slideInBottom}; }
  .en16{ ${({ theme }) => theme?.animation?.entrance?.flash}; }
  .en17{ ${({ theme }) => theme?.animation?.entrance?.slideInScaled}; }
  .en18{ ${({ theme }) => theme?.animation?.entrance?.initOpen}; }



  //exit

  .ex1 { ${({ theme }) => theme?.animation?.exit?.scale}; }
  .ex2 { ${({ theme }) => theme?.animation?.exit?.animateOut}; }
  .ex3 { ${({ theme }) => theme?.animation?.exit?.expandOut}; }


  //path

  .p1 { ${({ theme }) => theme?.animation?.path?.shake}; }
  .p2 { ${({ theme }) => theme?.animation?.path?.shakeY}; }
  .p3 { ${({ theme }) => theme?.animation?.path?.shakeX}; }
  .p4 { ${({ theme }) => theme?.animation?.path?.bounce}; }
  .p5 { ${({ theme }) => theme?.animation?.path?.flip}; }
  .p6 { ${({ theme }) => theme?.animation?.path?.bounceBack}; }
  .p7 { ${({ theme }) => theme?.animation?.path?.shiftRight}; }
  .p8 { ${({ theme }) => theme?.animation?.path?.shiftLeft}; }
  .p9 { ${({ theme }) => theme?.animation?.path?.shiftUp}; }
  .p10 { ${({ theme }) => theme?.animation?.path?.shiftDown}; }

  //hover
  .hov1 { ${({ theme }) => theme?.interaction?.spinOnHover}; }
  .hov2 { ${({ theme }) => theme?.interaction?.breatheOnHover}; }
  .hov3 { ${({ theme }) => theme?.interaction?.scaleOnHover}; }
  .hov5 { ${({ theme }) => theme?.interaction?.shakeOnHover}; }
  .hov6 { ${({ theme }) => theme?.interaction?.shakeBellOnHover}; }
  .hov7 { ${({ theme }) => theme?.interaction?.shakeXOnHover}; }
  .hov8 { ${({ theme }) => theme?.interaction?.blinkOnHover}; }
  .hov9 { ${({ theme }) => theme?.interaction?.expandOnHover}; }
  .hov11 { ${({ theme }) => theme?.interaction?.pulseOnHover}; }
  .hov12 { ${({ theme }) => theme?.interaction?.opacityPulseOnHover}; }
  .hov14 { ${({ theme }) => theme?.interaction?.slowPulseOnHover}; }
  .hov15 { ${({ theme }) => theme?.interaction?.fastPulseOnHover}; }
  .hov16{ ${({ theme }) => theme?.interaction?.shakeYOnHover}; }

  //Selectable
  .sel { ${({ theme }) => theme?.selectable}; }
  .sel1 { ${({ theme }) =>  theme?.selectable1}; }
  .sel2 { ${({ theme }) =>  theme?.selectable2}; }
  .sel3 { ${({ theme }) =>  theme?.selectable3}; }
  .sel4 { ${({ theme }) =>  theme?.selectable4}; }

  //elevation
  .elev1 { ${({ theme }) =>  theme?.elevation1}; }
  .elev2 { ${({ theme }) =>  theme?.elevation2}; }
  .elev3 { ${({ theme }) =>  theme?.elevation3}; }
  .elev4 { ${({ theme }) =>  theme?.elevation4}; }



`;
