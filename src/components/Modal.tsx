import React from 'react';

interface Props {
    open: boolean;
    handleOpen: () => void;
}

const Modal: React.FC<Props>= (props) => {

    const { open, handleOpen } = props;

        return (
            <>
            {open && 
                <div onClick={handleOpen} className="overlay">
                    <div className="overlay-modal">
                        <div>
                            <h2>Style Instructions</h2>
                            <ul>
                                <li>
                                    <strong>content:</strong> - This specifies the content of the button. It can be a string of text or an image.
                                    <br/>
                                    Ex.<em>"Example Content" | url("http://www.example.com/test.png")</em>
                                </li>
                                <br/>
                                <li>
                                    <strong>background-color:</strong> - The background color of the button. Accepts standard color names (e.g. "red", "blue", "green"), RGB or RGBA values (e.g. "rgb(255, 0, 0)", "rgba(255, 0, 0, 0.5)"), and HEX values (e.g. "#ff0000", "#f00"). It also includes the "transparent" keyword, which makes the background transparent.
                                    <br/>
                                    Ex.<em>#92a8d1 | rgb(146, 168, 209) | rgba(146, 168, 209, .5) | hsl(219°, 41%, 70%)</em> 
                                </li>
                                <br/>
                                <li>
                                    <strong>border-width:</strong> - The width of the button's border. Accepts length units such as pixels (px) or ems (em), or using keywords such as "thin", "medium", or "thick". Additionally, values can be set individually to each side using the shorthand property, like this: border-width: 5px 10px 20px 30px where the values are clockwise.
                                    <br/>
                                    Ex.<em>thin | medium | thick | 7px | 2em | 1.2 rem</em> 
                                </li>
                                <br/>
                                <li>
                                    <strong>border-style:</strong> - The style of the button's border. Accepts solid, dotted, dashed, double, groove, ridge, inset, and outset.
                                    <br/>
                                    Ex.<em>solid | dotted | dashed | double | groove | ridge | inset | outset</em> 
                                </li>
                                <br/>
                                <li>
                                    <strong>border-color:</strong> - The color of the button's border. Accepts standard color names (e.g. "red", "blue", "green"), RGB or RGBA values (e.g. "rgb(255, 0, 0)", "rgba(255, 0, 0, 0.5)"), and HEX values (e.g. "#ff0000", "#f00"). It also includes the "transparent" keyword, which makes the background transparent.
                                    <br/>
                                    Ex.<em>#92a8d1 | rgb(146, 168, 209) | rgba(146, 168, 209, .5) | hsl(219°, 41%, 70%)</em> 
                                </li>
                                <br/>
                                <li>
                                    <strong>border-radius:</strong> - The roundness of the button's corners. Accepts length units (such as pixels or ems) or percentage values. For example, a value of "5px" will create a corner with a radius of 5 pixels, while a value of "10%" will create a corner with a radius equal to 10% of the width of the element. Additionally, values can be set individually to each corner using the shorthand property, like this: border-radius: 5px 10px 20px 30px where the values are clockwise. 
                                    <br/>
                                    Ex.<em>3px | 20%</em> 
                                </li>
                                <br/>
                                <li>
                                    <strong>color:</strong> - The color of the text inside the button. Accepts standard color names (e.g. "red", "blue", "green"), RGB or RGBA values (e.g. "rgb(255, 0, 0)", "rgba(255, 0, 0, 0.5)"), and HEX values (e.g. "#ff0000", "#f00"). It also includes the "transparent" keyword, which makes the background transparent.
                                    <br/>
                                    Ex.<em>#92a8d1 | rgb(146, 168, 209) | rgba(146, 168, 209, .5) | hsl(219°, 41%, 70%)</em> 
                                </li>
                                <br/>
                                <li>
                                    <strong>font-size:</strong> - The size of the text inside the button. Accepts a variety of different values, including specific pixel or point sizes, relative sizes such as "larger" or "smaller", or values specified using the "em" or "rem" units.
                                    <br/>
                                    Ex.<em>10px | 1.5em | 20% | 5rem</em> 
                                </li>
                                <br/>
                                <li>
                                    <strong>padding:</strong> - The amount of space between the text and the edge of the button. Accepts pixels (px), ems (em), percentages (%). Additionally, values can be set individually to each side using the shorthand property, like this: padding: 5px 10px 20px 30px where the values are clockwise.
                                    <br/>
                                    Ex.<em>15px | 2em | 5% </em> 
                                </li>
                                <br/>
                                <li>
                                    <strong>text-align:</strong> - The alignment of the text inside the button. Accepts "left", "right", "center"
                                    <br/>
                                    Ex.<em>left | right | center</em> 
                                </li>
                                <br/>
                                <li>
                                    <strong>text-decoration:</strong> - The decoration applied to the text inside the button. Accepts "none", "underline", "overline", "line-through", "blink". Additionally you can specify the style of the decoration using the "wavy", "solid", "double", "dotted", or "dashed" keyword. Additionally you can specify the color of the decoration using a valid color value.
                                    <br/>
                                    Ex.<em>underline red | line-through wavy blue </em> 
                                </li>
                                <br/>
                                <li>
                                    <strong>width:</strong> - The width of the button. Accepts a specific length value, such as "200px" or "10em", or a percentage value, such as "50%" or a view length, such as "50vw". It can also take the keyword "auto", which will cause the element to take up as much width as necessary to fit its content.
                                    <br/>
                                    Ex.<em>100px | 20em | 50% | 20vw </em> 
                                </li>
                                <br/>
                                <li>
                                    <strong>height:</strong> - The height of the button. Accepts a specific length value, such as "200px" or "10em", or a percentage value, such as "50%" or a view length, such as "50vh". It can also take the keyword "auto", which will cause the element to take up as much width as necessary to fit its content.
                                    <br/>
                                    Ex.<em>150px | 25rem | 70% | 100vh </em> 
                                </li>
                                <br/>
                                <li>
                                    <strong>box-shadow:</strong> - The shadow effect applied to the button. The value of the "box-shadow" property is a combination of several values, including the horizontal offset, vertical offset, blur radius, spread distance, and color of the shadow.
                                    <br/>
                                    Ex.<em>2px 2px 3px #000000 | -5px -5px 10px rgba(0, 0, 0, 0.5) | 0px 0px 0px 2px #ff0000 | 7inset 0px 0px 10px 2px #0000ff</em> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
          </>
        );
};

export default Modal


// text-transform: This property is used to change the case of text. The options available are:

// none: No change to the text case.
// uppercase: Converts all characters in the text to uppercase.
// lowercase: Converts all characters in the text to lowercase.
// capitalize: Converts the first character of each word in the text to uppercase.
// text-shadow: This property is used to add a shadow effect to text. The value can be set in the following format: x-offset y-offset blur-radius color. For example: 2px 2px 2px #000000

// transform: This property allows you to apply 2D or 3D transformation to an element. The possible values are:

// rotate(deg): Rotates an element by the specified degree.
// skew(deg): Skews an element by the specified degree.
// scale(x, y): Scales an element by the specified x and y values.
// transition: This property allows you to specify the duration, delay, and easing of property changes on an element. The value can be set in the following format: property duration timing-function delay. For example: background-color 2s ease-in 1s

// animation: This property allows you to specify the duration, delay, iteration count, and direction of animations on an element. The value can be set in the following format: name duration timing-function delay iteration-count direction. For example: pulse 2s ease-in-out 1s infinite alternate

// background-image: This property allows you to set an image as the background of an element. The value can be a URL to an image or a gradiant. For example: url(image.jpg) or linear-gradient(to right, red, blue)

// background-clip: This property allows you to specify the area of an element where the background image or color should be drawn. The options available are:

// border-box: The background is painted