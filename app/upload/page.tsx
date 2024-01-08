'use client'
import React, {useState} from 'react';
import {CldImage, CldUploadWidget} from "next-cloudinary";

interface CloudResult {
    public_id
        : string
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('')

    return (
        <>
            {<CldImage alt='img' src={publicId} width={270} height={180}/>}
            <CldUploadWidget uploadPreset='gcr4lxzh'
                             options={{
                                 sources: ['local'],
                                 multiple: false,
                                 maxFiles: 5,
                                 styles: { palette: {
                                         window: "#FFFFFF",
                                         windowBorder: "#90A0B3",
                                         tabIcon: "#0078FF",
                                         menuIcons: "#5A616A",
                                         textDark: "#000000",
                                         textLight: "#FFFFFF",
                                         link: "#0078FF",
                                         action: "#FF620C",
                                         inactiveTabIcon: "#0E2F5A",
                                         error: "#F44235",
                                         inProgress: "#0078FF",
                                         complete: "#20B832",
                                         sourceBg: "#E4EBF1"
                                     },
                                     fonts: {
                                         default: {
                                             active: true
                                         }
                                     }}
                             }}
                             onUpload={(results, widget) => {
                                 if (results.event !== 'success') return;
                                 const info = results.info as CloudResult
                                 console.log(info)
                                 setPublicId(info.public_id
                                 )
                             }}
            >
                {({open}) => <button className='btn btn-primary' onClick={() => open()}>Upload</button>}
            </CldUploadWidget>
        </>

    );
};

export default UploadPage;