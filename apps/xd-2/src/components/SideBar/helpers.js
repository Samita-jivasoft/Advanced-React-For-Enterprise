import { sm } from "app/constants";

export function handleNavBarHover(viewWidth, setExtendBar, localExtend, type, menuData, navExpanded, setIsAnimating, enterTimerRef, isAnimating) {
    // Use the ref passed as a parameter
    const enterTimer = enterTimerRef.current;
    if (!navExpanded) {
        if (type === 'enter') {
            if (viewWidth > sm) {
                if (isAnimating !== 'enter') {
                    setIsAnimating('enter');
                    enterTimerRef.current = setTimeout(() => {
                        setExtendBar(true);
                    }, 500);
                }

            }
        } else if (type === 'exit') {
            if (viewWidth > sm && menuData.length === 0) {
                if (enterTimer) {
                    clearTimeout(enterTimer); // Clear the "enter" timer if it's running
                }
                setExtendBar(false);
                setIsAnimating('exit');
            }
        }
    }

}
