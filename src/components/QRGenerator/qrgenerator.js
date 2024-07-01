import { useEffect, useState } from 'react'; 
import SideMenuItem from './Menu';

const QRCode = () => {
    const [temp, setTemp] = useState(""); 
    const [word, setWord] = useState(""); 
    const [size, setSize] = useState(400); 
    const [bgColor, setBgColor] = useState("ffffff"); 
    const [qrCode, setQrCode] = useState(""); 
    
    useEffect(() => { 
        setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`); 
    }, [word, size, bgColor]); 
    
    const handleClick = () => { 
        setWord(temp); 
    } 
    
    return ( 
             
        <div className="min-h-screen bg-background container mx-auto flex flex-col items-center justify-center py-10">
        
            <h1 className="text-4xl text-primary mb-8 font-bold">QR Code Generator</h1> 
            <div className="w-full max-w-md bg-secondary p-6 rounded-lg shadow-lg space-y-6">
                <div className="flex flex-col space-y-4">
                    <input 
                        type="text" 
                        className="w-full p-2 rounded-lg border border-gray-300" 
                        onChange={(e) => setTemp(e.target.value)} 
                        placeholder="Enter text to encode" 
                    /> 
                    <button 
                        className="w-full p-2 bg-primary text-white rounded-lg hover:bg-primary-dark" 
                        onClick={handleClick}> 
                        Generate 
                    </button> 
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <label className="block text-white">Background Color:</label>
                        <input 
                            type="color" 
                            className="w-full p-2 rounded-lg border border-gray-300" 
                            onChange={(e) => setBgColor(e.target.value.substring(1))} 
                        /> 
                    </div>
                    <div>
                        <label className="block text-white">Dimension:</label>
                        <input 
                            type="range" 
                            min="200" 
                            max="600" 
                            value={size} 
                            className="w-full p-2 rounded-lg" 
                            onChange={(e) => setSize(e.target.value)} 
                        /> 
                    </div>
                </div>
            </div>
            <div className="mt-8 w-full max-w-md bg-secondary p-6 rounded-lg shadow-lg flex flex-col items-center">
                {qrCode && (
                    <>
                        <img src={qrCode} alt="QR Code" className="mb-4"/>
                        <a href={qrCode} download="QRCode" className="w-full">
                            <button 
                                type="button" 
                                className="w-full p-2 bg-accent text-white rounded-lg hover:bg-accent-dark"> 
                                Download
                            </button>
                        </a>
                    </>
                )}
            </div>
        </div>
      

    ); 
};

export default QRCode;
