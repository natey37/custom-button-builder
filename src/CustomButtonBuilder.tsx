import React from 'react';
import CustomButton from './components/CustomButton';
import Modal from './components/Modal';
import './styles.css'
import useModal from './hooks/useModal';
import useButtonOptions from './hooks/useButtonOptions';

const CustomButtonBuilder: React.FC = () => {

    const { options, handleChange, handleSubmit, cssCode, handleImport, handleExport, copyToClipboard, randomButton } = useButtonOptions();
    const { openModal, handleModal } = useModal()

    const inputTitle = "Enter optional values for top, right, bottom, left width separated by spaces. Allowed px, em, rem, %" 
    
    return (
        <>
            <Modal open={openModal} handleOpen={handleModal}/>
            <div className="custom-button-builder">
                <form onSubmit={handleSubmit}>
                    <div className='flex-row'>
                        <label> Import Button Styles:</label>
                        <input 
                            type="file" 
                            onChange={handleImport} 
                        />
                        <button onClick={randomButton}>Randomize</button>
                        <button onClick={handleModal}>Style Instructions</button>
                    </div>
                    <div className='option-row'>
                        <div className='option-box'>
                            <label>Content:
                            <input
                                type="text"
                                name="content"
                                value={options.content}
                                onChange={handleChange}
                            />
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Background Color:</label>
                                <input
                                    type="color"
                                    name="backgroundColor"
                                    value={options.backgroundColor}
                                    onChange={handleChange}
                                />
                        </div>
                        <div className='option-box'>
                            <label>Background Image:
                                <input type="text" value={options.backgroundImage} onChange={handleChange} name="backgroundImage" placeholder="none" />
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Background Clip:
                                <select value={options.backgroundClip} onChange={handleChange} name="backgroundClip">
                                    <option value="border-box">Border Box</option>
                                    <option value="padding-box">Padding Box</option>
                                    <option value="content-box">Content Box</option>
                                </select>
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Background Size:
                                <input type="text" value={options.backgroundSize} onChange={handleChange} name="backgroundSize" placeholder="none" />
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Background Position:
                                <input type="text" value={options.backgroundPosition} onChange={handleChange} name="backgroundPosition" placeholder="none" />
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Background Repeat:
                                <select value={options.backgroundRepeat} onChange={handleChange} name="backgroundRepeat">
                                    <option value="no-repeat">No Repeat</option>
                                    <option value="repeat">Repeat</option>
                                    <option value="repeat-x">Repeat X</option>
                                    <option value="repeat-y">Repeat Y</option>
                                    <option value="space">Space</option>
                                    <option value="round">Round</option>
                                </select>
                            </label>
                        </div>
                        <div title={inputTitle} className='option-box'>
                            <label>Border Width:
                                <input
                                    type="text"
                                    name="borderWidth"
                                    value={options.borderWidth}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Border Style:
                                <select
                                    name="borderStyle"
                                    value={options.borderStyle}
                                    onChange={handleChange}
                                >
                                    <option value="none">None</option>
                                    <option value="solid">Solid</option>
                                    <option value="dotted">Dotted</option>
                                    <option value="dashed">Dashed</option>
                                    <option value="double">Double</option>
                                    <option value="groove">Groove</option>
                                    <option value="ridge">Ridge</option>
                                    <option value="inset">Inset</option>
                                    <option value="outset">Outset</option>
                                </select>
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Border Color:</label>
                                <input
                                    type="color"
                                    name="borderColor"
                                    value={options.borderColor}
                                    onChange={handleChange}
                                />
                            
                        </div>
                        <div title={inputTitle} className='option-box'>
                            <label>Border Radius:
                                <input
                                    type="text"
                                    name="borderRadius"
                                    value={options.borderRadius}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div title="box-shadow: [x-offset] [y-offset] [blur] [spread] [color] [style] (e.g. 5px 5px 5px 5px #000000, 2px 2px 2px 2px #000000 inset)" className='option-box'>
                            <label>Box Shadow:
                                <input
                                    type="text"
                                    name="boxShadow"
                                    value={options.boxShadow}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Color:
                                <input
                                    type="color"
                                    name="color"
                                    value={options.color}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Font Size:
                                <input
                                    type="text"
                                    name="fontSize"
                                    value={options.fontSize}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Text Transform:
                                <select value={options.textTransform} onChange={handleChange} name="textTransform">
                                    <option value={"none"}>None</option>
                                    <option value={"uppercase"}>Uppercase</option>
                                    <option value={"lowercase"}>Lowercase</option>
                                    <option value={"capitalize"}>Capitalize</option>
                                </select>
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Text Shadow:
                                <input type="text" value={options.textShadow} onChange={handleChange} name="textShadow" placeholder="none" />
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Text Align:
                                <select name="textAlign" value={options.textAlign} onChange={handleChange}>
                                    <option value={"left"}>Left</option>
                                    <option value={"center"}>Center</option>
                                    <option value={"right"}>Right</option>
                                </select>
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Text Decoration:
                                <select name="textDecoration" value={options.textDecoration} onChange={handleChange}>
                                    <option value="none">None</option>
                                    <option value="underline">Underline</option>
                                    <option value="overline">Overline</option>
                                    <option value="line-through">Line-through</option>
                                </select>
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Width:
                                <input
                                    type="text"
                                    name="width"
                                    value={options.width}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Height:
                                <input
                                    type="text"
                                    name="height"
                                    value={options.height}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Padding:
                                <input
                                    type="text"
                                    name="padding"
                                    value={options.padding}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className='option-box'>
                            <label>Transform:
                                    <input type="text" value={options.transform} onChange={handleChange} name="transform" placeholder="none" />
                            </label>
                        </div>
                    </div>
                    <br />
                    <div>
                        <CustomButton
                            content={options.content}
                            backgroundColor={options.backgroundColor}
                            backgroundImage={options.backgroundImage}
                            backgroundPosition={options.backgroundPosition}
                            backgroundClip={options.backgroundClip}
                            backgroundSize={options.backgroundSize}
                            backgroundRepeat={options.backgroundRepeat}
                            borderWidth={options.borderWidth}
                            borderStyle={options.borderStyle}
                            borderColor={options.borderColor}
                            borderRadius={options.borderRadius}
                            color={options.color}
                            fontSize={options.fontSize}
                            padding={options.padding}
                            textAlign={options.textAlign}
                            textDecoration={options.textDecoration}
                            textShadow={options.textShadow}
                            width={options.width}
                            height={options.height}
                            boxShadow={options.boxShadow}
                            transform={options.transform}
                            textTransform={options.textTransform}

                        />
                    </div>
                    <br/>
                    <br/>
                    <div className='flex-row'>
                        {cssCode ?
                            <button type="button" onClick={() => copyToClipboard(cssCode)}>Copy</button>
                            :
                            <button type="submit">Generate CSS</button>
                        }
                        <button className={`${!cssCode && "disabled-button"}`} disabled={cssCode ? false : true} type="button" onClick={handleExport}>Download JSON</button>
                    </div>
                </form>
                <div>
                    <pre>{cssCode}</pre>
                </div>
            </div>
        </>
    );
};
    
export default CustomButtonBuilder;
    

