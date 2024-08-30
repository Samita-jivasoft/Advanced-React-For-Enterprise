import { css } from "styled-components";
import { DEFAULT_UI_BORDERRADIUS, MOBILE_UI_BORDERRADIUS } from "./constants";
import { PRIMARY_COLOR, PRIMARY_SHADE, PRIMARY_TINT } from "./oldtheme";
import { DARK_b1, DARK_b2, DARK_b3 } from "./theme";


// export const darkbgb3gradientbordered = css`
// 	/* fallback for old browsers */
// 	border:1px solid ${DARK_b1};
// 	border-radius:${DEFAULT_UI_BORDERRADIUS};
// 	@media (max-width 600px){
// 		border-radius:${MOBILE_UI_BORDERRADIUS};
// 	}
// 	background: ${DARK_b3};
// 	/* Chrome 10-25, Safari 5.1-6 */
// 	background: -webkit-linear-gradient(
// 		45deg,
// 		${DARK_b3},
// 		${DARK_b2}
		
// 	);
// 	/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
// 	background: linear-gradient(
// 		45deg,
// 		${DARK_b3},
// 		${DARK_b2}
// 	);
// `;
export const GradientLinearToTop = css`
	/* fallback for old browsers */
	background: ${PRIMARY_COLOR};
	/* Chrome 10-25, Safari 5.1-6 */
	background: -webkit-linear-gradient(
		to top,
		${({theme})=>theme.bga3},
		${({theme})=>theme.bg0},
		${({theme})=>theme.bgb3}
	);
	/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	background: linear-gradient(
		to top,
		${({theme})=>theme.bga3},
		${({theme})=>theme.bg0},
		${({theme})=>theme.bgb3}
	);
`;
export const GradientLinearToBottom = css`
	/* fallback for old browsers */
	background: ${PRIMARY_COLOR};
	/* Chrome 10-25, Safari 5.1-6 */
	background: -webkit-linear-gradient(
		to bottom,
		${({theme})=>theme.bga3},
		${({theme})=>theme.bg0},
		${({theme})=>theme.bgb1}
	);
	/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	background: linear-gradient(
		to bottom,
		${({theme})=>theme.bga3},
		${({theme})=>theme.bg0},
		${({theme})=>theme.bgb1}
	);
`;