import React from 'react';

export const DynamicIcon = ({ label, backgroundColor, foregroundColor, detailColor, color, height = 60, width = 60, type, icon }) => {

  switch (type) {
    case 'menu':
    case 'menugroup':
      return (

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 256 256"
        >
          <g fill="none" strokeMiterlimit="10" strokeWidth="0">
            <path
              fill={backgroundColor}
              d="M73.538 35.162L20.99 37.114c-1.739 0-2.753.651-3.232 2.323L6.85 76.754c-.451 1.586-2.613 2.328-4.117 2.328A2.741 2.741 0 010 76.349V14.726a3.808 3.808 0 013.808-3.808h27.056c1.01 0 1.978.401 2.692 1.115l7.85 7.85a3.808 3.808 0 002.692 1.115H69.73a3.808 3.808 0 013.808 3.808v10.356z"
              transform="matrix(2.81 0 0 2.81 1.407 1.407)"
            ></path>
            <path
              fill={foregroundColor}
              d="M2.733 79.082c1.503 0 2.282-1.147 2.733-2.733l10.996-38.362a3.898 3.898 0 013.748-2.824h67.379a2.41 2.41 0 012.311 3.09L79.004 75.279c-.492 1.751-1.571 3.818-3.803 3.803H2.733z"
              transform="matrix(2.81 0 0 2.81 1.407 1.407)"
            ></path>

          </g>
          <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill={color} fontSize="80" fontWeight="700">
            {label}
          </text>
        </svg>

      )
      case 'icon':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 100 100">
            <g transform={`translate(${50 - 70 / 2} ${50 - 70 / 2})`}>
              {/* Center the icon by translating it */}
              <svg width={70} height={70}>
                {icon}
              </svg>
            </g>
          </svg>
        );
      



    case 'workflow':
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 100 100">
          <rect x="0" y="0" width="100" height="100" rx="30" ry="30" fill={backgroundColor} />
          <linearGradient id="glossyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'white', stopOpacity: '1' }} />
            <stop offset="100%" style={{ stopColor: 'white', stopOpacity: '0' }} />
          </linearGradient>
          <rect x="0" y="0" width="100" height="100" rx="30" ry="30" fill="url(#glossyGradient)" />
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={color} fontSize="40" fontFamily="HelveticaNeue-Bold, Helvetica Neue" fontWeight="700">
            {label}
          </text>
          {icon}

        </svg>





      )

  }



}
// DynamicIcon.defaultProps = {
//   height: 60,
//   width: 60,

// }