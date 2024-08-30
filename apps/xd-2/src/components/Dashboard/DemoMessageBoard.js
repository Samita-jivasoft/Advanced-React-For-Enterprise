import { useAppTheme } from 'app/data'
import { DynamicText } from '@jivasoft/jivasoft-lib/dist/components'
import { DemoMessageBoardStyled, DemoMessagePostStyled, DemoMessagePanelStyled } from './Styles/DemoMessageBoard'

export const DemoMessageBoard = () => {
    const [themeState,] = useAppTheme()

    const EmptySVG = <svg xmlns="http://www.w3.org/2000/svg" width="172.212" height="127.413" viewBox="0 0 172.212 127.413">
        <g id="Group_12" data-name="Group 12" transform="translate(-609.082 -450.481)">
            <g id="Group_11" data-name="Group 11" transform="translate(-206.546 -47)">
                <path id="Path_1" data-name="Path 1" d="M1325.013,304.269l69.24-39.979,69.675,39.979-69.675,40.753Z" transform="translate(-494.332 233.192)" fill="#02213c" />
                <path id="Path_2" data-name="Path 2" d="M1394.615,264.29V300.6l-39.324,21.461L1325.2,304.336Z" transform="translate(-494.477 233.192)" fill="#19334a" />
                <path id="Path_7" data-name="Path 7" d="M1325.2,594.75V577.487l29.949,17.263,39.114-6.642v46.683Z" transform="translate(-494.477 -9.896)" fill="#19334a" />
                <path id="Path_8" data-name="Path 8" d="M1635.845,563.4l70.087-39.154s0-38.739,0-38.739l-48.415,28.321-21.672,3.612Z" transform="translate(-736.059 61.494)" fill="#19334a" />
                <path id="Path_9" data-name="Path 9" d="M1635.845,478.738l20.968,26.473,67.807-43.655-18.743-23.9Z" transform="translate(-736.78 99.396)" fill="#89aad8" />
                <path id="Path_10" data-name="Path 10" d="M900.261,533.52,939,554.312,899.484,577.5l-38.219-22.49Z" fill="#022a4d" />
                <path id="Path_11" data-name="Path 11" d="M1179.556,467.973l15.1-24.019,70.519,40.7-18.783,24.57Z" transform="translate(-363.928 93.523)" fill="#89aad8" />
            </g>
        </g>
        <circle id="MagnifyingGlassCircle" fill='#022a4d' cx="15" cy="15" r="12" stroke="#89aad8" strokeWidth="7" transform="translate(70 15)" />
        <line x1="21" y1="21" x2="35" y2="35" stroke="#89aad8" strokeWidth="7" transform="translate(70 15)" />
    </svg>

    return (<DemoMessageBoardStyled>
        <DemoMessagePanelStyled>
            <DynamicText
                variant={'header1'}
            >Welcome to Extra Duty Solutions</DynamicText>
            <DynamicText
                variant={'subheader1'}
            >We appreciate you taking time to register with us.
            </DynamicText>
            <div style={{ margin: 10 }}>
                {EmptySVG}
            </div>
            <DemoMessagePostStyled>
                <DynamicText
                    variant={'subheader1'}
                >Our team is reviewing your registration.</DynamicText>
                <DynamicText
                    variant={'body2'}
                >You will receive an email when your account has been approved.</DynamicText>
            </DemoMessagePostStyled>
            <DemoMessagePostStyled>
                <DynamicText
                    variant={'subheader1'}
                >What's Next?</DynamicText>
                <DynamicText
                    variant={'body2'}
                > As soon as your account has been approved, you can start using this portal to:
                </DynamicText>
                <DynamicText
                    variant={'body3'}
                >
                    <li>
                        Request Off-Duty Officers
                    </li>
                    <li>
                        Check the Status of Requested and Scheduled Details
                    </li>
                    <li>
                        Review & Pay Invoices
                    </li>
                    <li>
                        Manage your Profile & Preferences
                    </li>
                </DynamicText>
            </DemoMessagePostStyled>
            <DemoMessagePostStyled>
                <DynamicText
                    variant={'subheader1'}
                >To end this session, click the Logout button in the left hand menu, or close the browser.</DynamicText>
            </DemoMessagePostStyled>
            {/* <DemoMessagePostStyled>
  
          <DynamicText
            variant={'subheader1'}
          >Ready to begin?</DynamicText>
          <DynamicText
            variant={'body2'}
  
          >
            If you have received confirmation from our team, tap the button below to get started with XD2.
          </DynamicText>
  
        </DemoMessagePostStyled>
        <DynamicButtonV2
          icon={<FaCheckCircle />}
          color={'white'}
          type={'chip'}
          backgroundColor={themeState.currentTheme.successColor}
          text={"Yes, I am ready!"}
          onClick={() => window.location.reload()}
        /> */}
        </DemoMessagePanelStyled>
    </DemoMessageBoardStyled>)
}