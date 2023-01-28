import React from 'react';
interface Props {
  content: string;
  backgroundColor: string;
  backgroundImage: string;
  backgroundSize: string;
  backgroundPosition: string;
  backgroundClip: string;
  backgroundRepeat: string;
  borderWidth: string;
  borderStyle: string;
  borderColor: string;
  borderRadius: string;
  color: string;
  fontSize: string;
  padding: string;
  textAlign: string;
  textDecoration: string;
  width: string;
  height: string;
  boxShadow: string;
  transform: string;
  textShadow: string;
  textTransform: string;
}

const CustomButton: React.FC<Props> = (props) => {
  const {
    content,
    backgroundColor,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundClip,
    backgroundRepeat,
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
    transform,
    textShadow,
    textTransform,
  } = props;

  enum TextAlign {
    Left = 'left',
    Center = 'center',
    Right = 'right',
  }
  let newTextAlign;
  if (textAlign === TextAlign.Left) {
    newTextAlign = TextAlign.Left;
  } else if (textAlign === TextAlign.Center) {
    newTextAlign = TextAlign.Center;
  } else if (textAlign === TextAlign.Right) {
    newTextAlign = TextAlign.Right;
  }

  enum TextTransform {
    Uppercase = 'uppercase',
    Lowercase = 'lowercase',
    Capitalize = 'capitalize',
    None = 'none',
  }
  let newTextTransform;
  if (textTransform === TextTransform.Uppercase) {
    newTextTransform = TextTransform.Uppercase;
  } else if (textTransform === TextTransform.Lowercase) {
    newTextTransform = TextTransform.Lowercase;
  } else if (textTransform === TextTransform.Capitalize) {
    newTextTransform = TextTransform.Capitalize;
  } else if (textTransform === TextTransform.None) {
    newTextTransform = TextTransform.None;
  }

  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage,
        backgroundSize: backgroundSize,
        backgroundPosition: backgroundPosition,
        backgroundClip: backgroundClip,
        backgroundRepeat: backgroundRepeat,
        borderWidth: borderWidth,
        borderStyle: borderStyle,
        borderColor: borderColor,
        color: color,
        borderRadius: borderRadius,
        fontSize: fontSize,
        padding: padding,
        textAlign: newTextAlign,
        textDecoration: textDecoration,
        width: width,
        height: height,
        boxShadow: boxShadow,
        transform: transform,
        textShadow: textShadow,
        textTransform: newTextTransform,
      }}
    >
      {content}
    </button>
  );
};

export default CustomButton;
