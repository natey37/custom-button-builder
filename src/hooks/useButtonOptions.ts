import { useState } from 'react'

const initialOptions = {
    content: 'Customizable Button',
    backgroundColor: '#4CAF50',
    borderWidth: '2px 2px 4px 10px',
    borderStyle: 'solid',
    borderColor: '#000000',
    borderRadius: '5px',
    color: '#FFFFFF',
    fontSize: '12px',
    padding: '15px 32px',
    textAlign: "center",
    textDecoration: 'none',
    width: '250px',
    height: '50px',
    boxShadow: 'none',
    textTransform: "uppercase",
    textShadow: 'none',
    transform: 'none',
    backgroundImage: 'none',
    backgroundClip: 'border-box',
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}


export default function useButtonOptions(): { cssCode: string, options: Options, handleChange: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void, handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void, handleImport: (e: React.ChangeEvent<HTMLInputElement>) => void, handleExport: () => void, copyToClipboard: (css: string) => void, randomButton: () => void}{

    const [cssCode, setCssCode] = useState('');
    const [options, setOptions] = useState<Options>(initialOptions);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        let { name, value } = event.target;
        setOptions({
          ...options,
          [name]: value
        });
        setCssCode('')
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

    const randomButton = () => {

        const styles = {
            border: ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'],
            textAlign: ['left', 'right', 'center', 'justify', 'initial', 'inherit'],
            textTransform: ['capitalize', 'uppercase', 'lowercase', 'none', 'initial', 'inherit'],
            textDecoration: ['none', 'underline', 'overline', 'line-through', 'initial', 'inherit'],
            transform: ['none', 'rotate(90deg)', 'rotate(180deg)', 'rotate(270deg)', 'rotate(360deg)'],
            backgroundClip: ['border-box', 'padding-box', 'content-box', 'initial', 'inherit'],
            catUrl: ['https://cataas.com/cat', 'https://cataas.com/cat/cute', 'https://cataas.com/cat/says/Hello', 'https://cataas.com/cat/gif', 'https://cataas.com/cat/says/Hello?filter=sepia', 'https://cataas.com/cat/says/Hello?filter=blur', 'https://cataas.com/cat/says/Hello?filter=grayscale', 'https://cataas.com/cat/says/Hello?filter=invert', 'https://cataas.com/cat/says/Hello?filter=opacity', 'https://cataas.com/cat/says/Hello?filter=contrast', 'https://cataas.com/cat/says/Hello?filter=brightness', 'https://cataas.com/cat/says/Hello?filter=saturate', 'https://cataas.com/cat/says/Hello?filter=sepia', 'https://cataas.com/cat/says/Hello?filter=blur', 'https://cataas.com/cat/says/Hello?filter=grayscale', 'https://cataas.com/cat/says/Hello?filter=invert', 'https://cataas.com/cat/says/Hello?filter=opacity', 'https://cataas.com/cat/says/Hello?filter=contrast', 'https://cataas.com/cat/says/Hello?filter=brightness', 'https://cataas.com/cat/says/Hello?filter=saturate'],
            backgroundRepeat: ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round', 'initial', 'inherit']
        };

        const randomStyle = (style: keyof typeof styles) => {
            const random = Math.floor(Math.random() * styles[style].length);
            return styles[style][random];
        }

        const randomString = () => {
            const random = Math.floor(Math.random() * 100);
            return `Button ${random}`;
        }

        const options = {
            content: randomString(), 
            backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
            borderWidth: `${Math.floor(Math.random() * 10)}px ${Math.floor(Math.random() * 10)}px ${Math.floor(Math.random() * 10)}px ${Math.floor(Math.random() * 10)}px`,
            borderStyle: randomStyle('border'),
            borderColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
            borderRadius: `${Math.floor(Math.random() * 100)}px`,
            color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
            fontSize: `${Math.floor(Math.random() * 50)}px`,
            padding: `${Math.floor(Math.random() * 10)}px ${Math.floor(Math.random() * 10)}px ${Math.floor(Math.random() * 10)}px ${Math.floor(Math.random() * 10)}px`,
            textAlign: randomStyle('textAlign'),
            textDecoration: randomStyle('textDecoration'),
            width: `${Math.floor(Math.random() * 300)}px`,
            height: `${Math.floor(Math.random() * 300)}px`,
            boxShadow: `${Math.floor(Math.random() * 10)}px ${Math.floor(Math.random() * 10)}px ${Math.floor(Math.random() * 10)}px ${Math.floor(Math.random() * 10)}px #${Math.floor(Math.random()*16777215).toString(16)}`,
            textTransform: randomStyle('textTransform'),
            textShadow: `${Math.floor(Math.random() * 10)}px ${Math.floor(Math.random() * 10)}px ${Math.floor(Math.random() * 10)}px #${Math.floor(Math.random()*16777215).toString(16)}`,
            transform: randomStyle('transform'),
            backgroundImage: `url(${randomStyle('catUrl')})`,
            backgroundClip: randomStyle('backgroundClip'),
            backgroundSize: `${Math.floor(Math.random() * 100)}px ${Math.floor(Math.random() * 100)}px`,
            backgroundPosition: `${Math.floor(Math.random() * 100)}px ${Math.floor(Math.random() * 100)}px`,
            backgroundRepeat: randomStyle('backgroundRepeat'),
        }

        setOptions(options);
    }
      

    return { options, handleChange, handleSubmit, cssCode, handleImport, handleExport, copyToClipboard, randomButton };
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
    textAlign: string;
    textDecoration: string;
    width: string;
    height: string;
    boxShadow: string;
    textTransform: string;
    textShadow: string;
    transform: string;
    backgroundImage: string;
    backgroundClip: string;
    backgroundSize: string;
    backgroundPosition: string;
    backgroundRepeat: string;
}
