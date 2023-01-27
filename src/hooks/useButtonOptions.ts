import { useState } from 'react'
import { TextAlign } from '../enums';

const initialOptions = {
    content: 'Customizable Button',
    backgroundColor: '#4CAF50',
    borderWidth: '2px 2px 4px 10px',
    borderStyle: 'solid',
    borderColor: '#000000',
    borderRadius: '5px',
    color: '#FFFFFF',
    fontSize: '16px',
    padding: '15px 32px',
    textAlign: TextAlign.Center,
    textDecoration: 'none',
    width: '250px',
    height: '50px',
    boxShadow: 'none',
    transition: 'all 0.3s ease-in-out',
    textTransform: 'none',
    textShadow: 'none',
    transform: 'none',
    animation: 'none',
    backgroundImage: 'none',
    backgroundClip: 'border-box',
    backgroundSize: 'auto',
    backgroundPosition: 'center',
}


export default function useButtonOptions(): { cssCode: string, options: Options, handleChange: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void, handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void, handleImport: (e: React.ChangeEvent<HTMLInputElement>) => void, handleExport: () => void, copyToClipboard: (css: string) => void}{

    const [cssCode, setCssCode] = useState('');
    const [options, setOptions] = useState<Options>(initialOptions);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        let { name, value } = event.target;
        setOptions({
          ...options,
          [name]: value
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        localStorage.setItem('buttonStyles', JSON.stringify(options));

        const css = `button {
${Object.entries(options).reduce((acc, [key, value]) => {
            if (value !== "none") {
                let newKey = key.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
                return acc + `\t${newKey}: ${value};\n`
            }
            return acc
        }, '')}}`;

        // const css = `button {
        //     background-color: ${options.backgroundColor};
        //     border: ${options.borderWidth} ${options.borderStyle} ${options.borderColor};
        //     border-radius: ${options.borderRadius};
        //     color: ${options.color};
        //     font-size: ${options.fontSize};
        //     padding: ${options.padding};
        //     text-align: ${options.textAlign};
        //     text-decoration: ${options.textDecoration};
        //     width: ${options.width};
        //     height: ${options.height};
        //     box-shadow: ${options.boxShadow};
        //     transition: ${options.transition};
        //     text-transform: ${options.textTransform};
        //     text-shadow: ${options.textShadow};
        //     transform: ${options.transform};
        //     animation: ${options.animation};
        //     background-image: ${options.backgroundImage};
        //     background-clip: ${options.backgroundClip};
        //     background-size: ${options.backgroundSize};
        //     background-position: ${options.backgroundPosition};
        // }`;
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
        a.download = 'custom-button-builder.json';
        a.click();
        URL.revokeObjectURL(fileURL);
    }

    const copyToClipboard = (css: string) => {
        navigator.clipboard.writeText(css)
    }
      

    return { options, handleChange, handleSubmit, cssCode, handleImport, handleExport, copyToClipboard };
}

interface Options {
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
    textTransform: string;
    textShadow: string;
    transform: string;
    animation: string;
    backgroundImage: string;
    backgroundClip: string;
    backgroundSize: string;
    backgroundPosition: string;
}