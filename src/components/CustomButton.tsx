import React from 'react';
import { TextAlign } from '../enums';

interface Props {
    content: string;
    backgroundColor: string;
    borderWidth: string;
    borderStyle: string;
    borderColor: string;
    borderRadius: string;
    color: string;
    fontSize: string;
    padding: string;
    textAlign: TextAlign;
    textDecoration: string;
    width: string;
    height: string;
    boxShadow: string;
    transition: string;
}

const CustomButton: React.FC<Props> = (props) => {
    const { 
        content,
        backgroundColor, 
        borderWidth, 
        borderStyle, 
        borderColor,
        borderRadius, 
        color, 
        fontSize, 
        padding, 
        textAlign, 
        textDecoration, 
        width, 
        height, 
        boxShadow, 
        transition 
    } = props;

    return (
        <button 
            style={{
                backgroundColor: backgroundColor, 
                borderWidth: borderWidth,
                borderStyle: borderStyle,
                borderColor: borderColor,
                color: color, 
                borderRadius: borderRadius, 
                fontSize: fontSize,
                padding: padding,
                textAlign: textAlign,
                textDecoration: textDecoration,
                width: width,
                height: height,
                boxShadow: boxShadow,
                transition: transition
            }}>
            {content}
        </button>
    );
};

export default CustomButton;
