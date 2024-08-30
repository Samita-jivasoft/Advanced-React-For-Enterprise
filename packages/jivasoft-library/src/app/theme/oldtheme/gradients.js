import { css } from "styled-components";
import { PRIMARY_COLOR, PRIMARY_SHADE, PRIMARY_TINT } from "./oldtheme";


export const GradientLinearToTop = css`
	/* fallback for old browsers */
	background: ${PRIMARY_COLOR};
	/* Chrome 10-25, Safari 5.1-6 */
	background: -webkit-linear-gradient(
		to top,
		${PRIMARY_SHADE},
		${PRIMARY_COLOR},
		${PRIMARY_TINT}
	);
	/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	background: linear-gradient(
		to top,
		${PRIMARY_SHADE},
		${PRIMARY_COLOR},
		${PRIMARY_TINT}
	);
`;
