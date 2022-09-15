import React from 'react';
import {
    MDBFooter,
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-white text-lg-left'>
            <div className='text-center p-3 font-times text-white-50' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                <small>
                    &copy; Kiyomizu-dera Temple
                </small>
            </div>
        </MDBFooter>
    );
}