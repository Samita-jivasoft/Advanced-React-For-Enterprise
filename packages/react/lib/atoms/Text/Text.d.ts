import React from 'react';
import FontSizes from '../../foundation/FontSize';
interface TextProps {
    size?: keyof typeof FontSizes;
    children?: React.ReactNode;
}
declare const Text: React.FC<TextProps>;
export default Text;
