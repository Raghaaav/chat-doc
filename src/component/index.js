import React from 'react'
import pdfiamge from '../assets/PDF_file_icon.svg.png';
import word from '../assets/word.png';
import ppt from '../assets/ppt.png';
import folder from '../assets/1024px-File_alt_font_awesome.svg.png'
export const index = () => {
    return (
        <>
            <h1> Now talk with your files</h1>
            <div className='files-div'>
                <div className='pdf-file background-style'>
                    <img className='img' src={pdfiamge} />
                    <h4>PDF File</h4>
                </div>
                <div className='word-file background-style'>
                    <img className='img' src={word} />
                    <h4>WORD</h4>

                </div>
                <div className='ppt-file background-style'>
                    <img className='img' src={ppt} />
                    <h4>PPTX</h4>
                </div>
            </div>
            <div>
                <img className='folder' src={folder}></img>
            </div>
        </>
    )
}
