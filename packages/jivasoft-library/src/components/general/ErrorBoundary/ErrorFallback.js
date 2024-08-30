import { AiTwotoneFileExclamation } from "react-icons/ai";
import { BsExclamationOctagonFill, BsExclamationTriangleFill } from "react-icons/bs";
import { FaExclamationCircle } from "react-icons/fa";

export const ErrorFallback = (props) => {
    const { title, message, button } = props;

    return (<div style={{
        height: '100%',
        width: '100%',
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'linear-gradient(0deg, rgba(0,21,44,1) 0%, rgba(0,0,0,1) 100%)', color: 'white'
    }}>
        {<div style={{ fontSize: 30, fontWeight: 'bold' }}>
              {title ? title : 'Something went wrong'}
        </div>}
        {button && <div style={{ marginTop: 20, fontSize: 30, fontWeight: 'bold' }}>
            {button}
        </div>}
        {message && <div style={{ marginTop: 20, color: 'white' }}>
            <a href="url">I keep seeing this error.</a>

        </div>}
    </div>)

}