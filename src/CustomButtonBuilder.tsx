import React, { useState } from 'react';
import CustomButton from './components/CustomButton';
import './styles.css'

const CustomButtonBuilder: React.FC = () => {
    const initialOptions = {
        backgroundColor: '#ffffff',
        textColor: '#000000',
        borderRadius: '5px',
        fontSize: '14px',
    }
 
    const [cssCode, setCssCode] = useState('');
    const [options, setOptions] = useState(initialOptions);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("I AM HERE", event.target)
        const { name, value } = event.target;
        switch (name) {
            case 'backgroundColor':
                console.log("HERE!!!")
                setOptions(prev => ({...prev, backgroundColor: value}));
                break;
            case 'textColor':
                setOptions(prev => ({...prev, textColor: value}));
                break;
            case 'borderRadius':
                setOptions(prev => ({...prev, borderRadius: value}));
                break;
            case 'fontSize':
                setOptions(prev => ({...prev, fontSize: value}));
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const css = `button {
            background-color: ${options.backgroundColor};
            color: ${options.textColor};
            border-radius: ${options.borderRadius};
            font-size: ${options.fontSize};
        }`;
        setCssCode(css);
    };

    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) {
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            setOptions(JSON.parse(e.target?.result as string));
        };
        reader.readAsText(file);
    }
    const handleExport = () => {
        const file = new Blob([JSON.stringify(options)], {type: 'application/json'});
        const fileURL = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = fileURL;
        a.download = 'buttonStyles.json';
        a.click();
        URL.revokeObjectURL(fileURL);
    }

    return (
        <div className="custom-button-builder">
            <form onSubmit={handleSubmit}>
                <label>
                    Import Button Styles:
                    <input 
                        type="file" 
                        onChange={handleImport} 
                    />
                </label>
                <label>
                    Background Color:
                    <input
                        type="color"
                        name="backgroundColor"
                        value={options.backgroundColor}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Text Color:
                    <input
                        type="color"
                        name="textColor"
                        value={options.textColor}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Border Radius:
                    <input
                        type="text"
                        name="borderRadius"
                        value={options.borderRadius}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Font Size:
                    <input
                        type="text"
                        name="fontSize"
                       
                        value={options.fontSize}
                        onChange={handleChange}
                    />
                    </label>
                    <br />
                    <button type="submit">Generate CSS</button>
                    <button type="button" onClick={handleExport}>Download Button JSON</button>
                </form>
                <br />
                <div>
                    <CustomButton
                        backgroundColor={options.backgroundColor}
                        textColor={options.textColor}
                        borderRadius={options.borderRadius}
                        fontSize={options.fontSize}
                    />
                </div>
                <br />
                <div>
                    <pre>{cssCode}</pre>
                </div>
            </div>
        );
    };
    
    export default CustomButtonBuilder;
    