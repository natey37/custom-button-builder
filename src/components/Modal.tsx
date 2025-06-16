import React from 'react';

interface Props {
  open: boolean;
  handleOpen: () => void;
}

const Modal: React.FC<Props> = (props) => {
  const { open, handleOpen } = props;

  return (
    <>
      {open && (
        <div onClick={handleOpen} className="overlay">
          <div className="overlay-modal">
            <div>
              <h1>Style Guide</h1>
              <ul>
                <li>
                  <strong>content:</strong> - The text or image displayed inside
                  the button.
                  <br />
                  Ex.
                  <em>
                    "Example Content" | url("http://www.example.com/test.png")
                  </em>
                </li>
                <br />

                <li>
                  <strong>background-color:</strong> - The background color of
                  the button.
                  <br />
                  Ex.
                  <em>
                    #92a8d1 | rgb(146, 168, 209) | rgba(146, 168, 209, .5) |
                    hsl(219°, 41%, 70%)
                  </em>
                </li>
                <br />

                <li>
                  <strong>background-clip:</strong> - Defines how far the
                  background extends.
                  <br />
                  Ex.
                  <em>border-box | padding-box | content-box</em>
                </li>
                <br />

                <li>
                  <strong>background-image:</strong> - The image used as the
                  background.
                  <br />
                  Ex.
                  <em>url("http://example.com/image.png") | none</em>
                </li>
                <br />

                <li>
                  <strong>background-size:</strong> - The size of the background
                  image.
                  <br />
                  Ex.
                  <em>cover | contain | 100px 100px | 50% auto</em>
                </li>
                <br />

                <li>
                  <strong>background-position:</strong> - The position of the
                  background image.
                  <br />
                  Ex.
                  <em>top left | center center | 50% 50% | 10px 20px</em>
                </li>
                <br />

                <li>
                  <strong>background-repeat:</strong> - How the background image
                  repeats.
                  <br />
                  Ex.
                  <em>
                    no-repeat | repeat | repeat-x | repeat-y | space | round
                  </em>
                </li>
                <br />

                <li>
                  <strong>border-width:</strong> - Width of the button's border.
                  <br />
                  Ex.
                  <em>thin | medium | thick | 7px | 2em | 1.2rem</em>
                </li>
                <br />

                <li>
                  <strong>border-style:</strong> - Style of the button's border.
                  <br />
                  Ex.
                  <em>
                    solid | dotted | dashed | double | groove | ridge | inset |
                    outset
                  </em>
                </li>
                <br />

                <li>
                  <strong>border-color:</strong> - Color of the button's border.
                  <br />
                  Ex.
                  <em>
                    #92a8d1 | rgb(146, 168, 209) | rgba(146, 168, 209, .5) |
                    hsl(219°, 41%, 70%)
                  </em>
                </li>
                <br />

                <li>
                  <strong>border-radius:</strong> - Roundness of the button's
                  corners.
                  <br />
                  Ex.
                  <em>3px | 20%</em>
                </li>
                <br />

                <li>
                  <strong>box-shadow:</strong> - Shadow applied to the button.
                  <br />
                  Ex.
                  <em>
                    2px 2px 3px #000000 | -5px -5px 10px rgba(0, 0, 0, 0.5) |
                    0px 0px 0px 2px #ff0000 | inset 0px 0px 10px 2px #0000ff
                  </em>
                </li>
                <br />

                <li>
                  <strong>color:</strong> - Color of the text inside the button.
                  <br />
                  Ex.
                  <em>
                    #92a8d1 | rgb(146, 168, 209) | rgba(146, 168, 209, .5) |
                    hsl(219°, 41%, 70%)
                  </em>
                </li>
                <br />

                <li>
                  <strong>font-size:</strong> - Size of the text inside the
                  button.
                  <br />
                  Ex.
                  <em>10px | 1.5em | 20% | 5rem</em>
                </li>
                <br />

                <li>
                  <strong>padding:</strong> - Space between text and edge of the
                  button.
                  <br />
                  Ex.
                  <em>15px | 2em | 5% | 5px 10px 20px 30px</em>
                </li>
                <br />

                <li>
                  <strong>text-align:</strong> - Alignment of text inside the
                  button.
                  <br />
                  Ex.
                  <em>left | center | right</em>
                </li>
                <br />

                <li>
                  <strong>text-decoration:</strong> - Decoration applied to
                  text.
                  <br />
                  Ex.
                  <em>
                    none | underline | overline | line-through | underline red |
                    line-through wavy blue
                  </em>
                </li>
                <br />

                <li>
                  <strong>text-transform:</strong> - Controls capitalization of
                  text.
                  <br />
                  Ex.
                  <em>none | uppercase | lowercase | capitalize</em>
                </li>
                <br />

                <li>
                  <strong>text-shadow:</strong> - Shadow applied to text.
                  <br />
                  Ex.
                  <em>2px 2px 3px #000000 | 1px 1px 5px rgba(0, 0, 0, 0.5)</em>
                </li>
                <br />

                <li>
                  <strong>width:</strong> - Width of the button.
                  <br />
                  Ex.
                  <em>100px | 20em | 50% | 20vw | auto</em>
                </li>
                <br />

                <li>
                  <strong>height:</strong> - Height of the button.
                  <br />
                  Ex.
                  <em>150px | 25rem | 70% | 100vh | auto</em>
                </li>
                <br />

                <li>
                  <strong>transform:</strong> - Applies transformations to the
                  button.
                  <br />
                  Ex.
                  <em>
                    rotate(45deg) | scale(1.2) | translateX(20px) | skew(10deg,
                    10deg)
                  </em>
                </li>
                <br />
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
