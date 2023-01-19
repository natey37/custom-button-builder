import React from 'react';

interface Props {
    backgroundColor: string;
    textColor: string;
    borderRadius: string;
    fontSize: string;
}

const CustomButton: React.FC<Props> = (props) => {
    const { backgroundColor, textColor, borderRadius, fontSize } = props;

    return (
        <button style={{ backgroundColor: backgroundColor, color: textColor, borderRadius: borderRadius, fontSize: fontSize}}>
            Customizable Button
        </button>
    );
};

export default CustomButton;
