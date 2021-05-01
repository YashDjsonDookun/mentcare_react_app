import DoctorPatientPanel from './DoctorInfo_Panel'
import CreatePatient from './CreatePatient'
import Report from './Report'
import Search_Contact_Patient from './Search_Contact_Patient'

export default function MentcareSystem({doc}) {
    return (
        <div>
            <DoctorPatientPanel docInfo={doc}/>
            <CreatePatient />
        </div>
    )
}
