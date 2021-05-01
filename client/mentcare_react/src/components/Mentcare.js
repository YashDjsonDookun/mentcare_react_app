import React, { useState } from 'react'
import DoctorLogin from './DoctorLogin';
import MentcareSystem from './MentcareSystem';

export default function Mentcare() {
    const [doc, setDoc] = useState();
    return (
        <div>
            {!doc ? <DoctorLogin setDoc={setDoc} /> : <MentcareSystem doc={doc} />}
        </div>
    )
}
