import React from 'react'

export const PdfComponent = () => {
    return (
        <div style={{backgroundColor:'#0c0f18'}}>
            <iframe
            className='iframe'
                src="https://raghav001-pdf.hf.space"
                frameborder="0"
                width="850"
                height="450"
            ></iframe>
        </div>
    )
}
