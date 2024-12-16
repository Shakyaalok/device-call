import {
    CContainer,
    CRow,
    CCol,

} from '@coreui/react'
import Testing from "../Components/Testing";
import {  useSelector } from 'react-redux';
import './launch.css'
import Index from './Index';

const Launch = () => {

    const multiSelect = useSelector(state => state.data)


return (
    <CContainer fluid style={{ width: '100%', height: '100%' }} >
        <CRow style={{paddingTop: '4rem' }}>
            {multiSelect.map((tile) => (
                <CCol lg={multiSelect.length>1 ? 4 : 12} md={multiSelect.length>1 ? 6:12} sm={12}>
                 {/* <Testing />x */}
                <Index/>
                </CCol>
            ))}

        </CRow>
    </CContainer>

)

}


export default Launch;


