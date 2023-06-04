import React from 'react'
import pdfiamge from '../assets/PDF_file_icon.svg.png';
import word from '../assets/microsoft-word-logo.png';
import ppt from '../assets/microsoft-powerpoint-logo-0.png';
import folder from '../assets/file.png'
import { useNavigate } from "react-router-dom";
export const MainComponent = () => {
    const Navigate = useNavigate();
    return (
        <div className='App'>
            <p className='title'> Now Talk with your Files ! </p>
            <div className='files-div'>
                <div className='pdf-file background-style'>
                    <img className='img' src={pdfiamge} onClick={()=>{ Navigate('/pdf')}}  />
                    <h2>PDF File</h2>
                </div>
                <div className='word-file background-style'>
                    <img className='img' style={{width:280}} src={word} onClick={()=>{ Navigate('/word')}} />
                    <h2>WORD</h2>

                </div>
                <div className='ppt-file background-style'>
                    <img className='img' style={{width:290}} src={ppt} onClick={()=>{ Navigate('/ppt')}} />
                    <h2>PPTX</h2>
                </div>
            </div>
            <div>
                <img className='folder' src={folder}></img>
            </div>
        </div>
    )
}
