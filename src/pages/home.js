import React from 'react';
import {
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBTypography
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div id='firstSection'>
                <div className="d-flex align-items-center vh-100">
                    <MDBCol xs='12' md='6' className='p-4 font-times'>
                        <h1 className='text-white lh-base'>
                            <span className='letterSpacing'>A</span><MDBTypography tag='u'>&emsp; &emsp;</MDBTypography> <span className='letterSpacing'>WIDELY</span>
                            <br />
                            <span className='letterSpacing'>WORSHIPED</span>
                            <br />
                            <MDBTypography tag='u'> &emsp; &emsp; &nbsp; &nbsp; </MDBTypography> <span className='letterSpacing'> &nbsp; HOLY</span>
                            <br />
                            <span className='letterSpacing'>PLACE.</span> <MDBTypography tag='u'>&emsp; &emsp;</MDBTypography>
                        </h1>
                        <span className='text-white'>
                            The eleven faces and forty-two arms of
                            <br />
                            Kannon show great compassion.
                            <br />
                            People have felt very close to the principal
                            <br />
                            image of the temple and
                            <br />
                            called the deity “Kiyomizu Kannon-san.”
                        </span>
                    </MDBCol>
                </div>
            </div>
            <div id='secondSection'>
                <div className='text-center'>
                    <h4 className='text-dark pt-4'>NEWS</h4>
                    <div className='py-4'>
                        <div className="d-flex justify-content-center font-times">
                            <MDBCol xs='12' md='10' lg='8'>
                                <div className="d-flex new-list">
                                    <div className="p-2">Aug 18, 2022</div>
                                    <div className="p-2 flex-grow-1 text-start">“TIME” Archive page Opened. / FEEL KIYOMIZUDERA</div>
                                    <div className="p-2"><MDBIcon fas icon="long-arrow-alt-right" /></div>
                                </div>
                                <hr />
                                <div className="d-flex new-list">
                                    <div className="p-2">Jun 29, 2022</div>
                                    <div className="p-2 flex-grow-1 text-start">Photo Exhibition – TIME by Kensaku Kakimoto / FEEL KIYOMIZUDERA</div>
                                    <div className="p-2"><MDBIcon fas icon="long-arrow-alt-right" /></div>
                                </div>
                                <hr />
                                <div className="d-flex new-list">
                                    <div className="p-2">Oct 26, 2021</div>
                                    <div className="p-2 flex-grow-1 text-start">Uploaded the archived videos of silk road – a path of prayers / FEEL KIYOMIZUDERA</div>
                                    <div className="p-2"><MDBIcon fas icon="long-arrow-alt-right" /></div>
                                </div>
                                <hr />
                            </MDBCol>
                        </div>
                    </div>
                    <div className='p-4'>
                        <p className='text-uppercase'>
                            <Link to='/news' className='text-dark text-decoration-underline'>SEE MORE</Link>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div id='thirdSection' className='p-4 font-times'>
                <h2 className='text-center text-dark py-4'>KANNON <span className='fst-italic'>REIJO</span>, THE EMBODIMENT OF<br />KANNON’S COMPASSION</h2>
                <div className="d-flex justify-content-center">
                    <hr style={{ width: '10%' }} />
                </div>
                <p className='text-start text-lg-center text-dark py-4'>
                    Over 1250 years have passed since the foundation of Kiyomizu-dera Temple. Halfway up Mt. Otowa,
                    <br className='d-none d-md-block' />
                    one of the peaks in Kyoto’s Higashiyama mountain range, stands the temple, to which large numbers of visitors
                    <br className='d-none d-md-block' />
                    come to pay their respects to Kannon, a deity of great mercy and compassion. For this reason, our temple is
                    <br className='d-none d-md-block' />
                    known as a “Kannon
                    <MDBTypography tag='em'> Reijo</MDBTypography>
                    .” “Reijo” is a Japanese word meaning a “holy place”
                    <br className='d-none d-md-block' />
                    with which the Kannon’s compassion is abundant.
                </p>
                <p className='text-start text-lg-center text-dark py-4'>
                    Visitors will stand before the Kannon with thankful hearts—feelings of gratitude for coming into this world,
                    <br className='d-none d-md-block' />
                    your tranquil daily lives, and your loved ones, friends, and acquaintances who are always there beside you.
                    <br className='d-none d-md-block' />
                    In other words, worshiping Kannon means taking a hard look at your true self.
                </p>
                <p className='text-start text-lg-center text-dark py-4'>
                    Find the Kannon’s compassion in your everyday deeds.
                </p>
                <p className='text-start text-lg-center text-dark py-4'>
                    We at Kiyomizu-dera Temple, along with the deity Kannon, wish for the happiness of all people across in the world.
                    <br className='d-none d-md-block' />
                    When you visit the temple, simply put your hands together when in front of the statue of Kannon
                    <br className='d-none d-md-block' />
                    and offer a prayer of thanksgiving.
                </p>
            </div>
            <div id='fourthSection'>
                <div id='contentPray' className='contentSection'>
                    <MDBRow className='m-0 h-100'>
                        <MDBCol md='5' className='left-section-content'>
                            <h4 className='text-uppercase'>PRAY</h4>
                            <hr style={{ width: '10%' }} />
                            <p>
                                Kanon Rejio, a
                                widely worshiped
                                holy place
                            </p>
                            <small className='d-none d-lg-block font-times'>
                                The eleven faces and forty-two arms of Kannon show great compassion. People have felt very close to the principal image of the temple and called the deity “Kiyomizu Kannon-san.”
                            </small>
                            <MDBIcon fas icon="long-arrow-alt-right" />
                        </MDBCol>
                        <MDBCol md='7' className='right-section-content'></MDBCol>
                    </MDBRow>
                </div>
                <div id='contentVisit' className='contentSection'>
                    <MDBRow className='m-0 h-100'>
                        <MDBCol md='7' className='right-section-content reverse-section-content'></MDBCol>
                        <MDBCol md='5' className='left-section-content reverse-section-content'>
                            <h4 className='text-uppercase'>VISIT</h4>
                            <hr style={{ width: '10%' }} />
                            <p>
                                The Buddhist building express the Kannon's teaching.
                            </p>
                            <small className='d-none d-lg-block font-times'>
                                From the scenery of the historic structures and temple buildings, visitors can feel the Kannon’s merciful heart. Check our traditional event schedules on this page.
                            </small>
                            <MDBIcon fas icon="long-arrow-alt-right" />
                        </MDBCol>
                    </MDBRow>
                </div>
                <div id='contentLearn' className='contentSection'>
                    <MDBRow className='m-0 h-100'>
                        <MDBCol md='5' className='left-section-content'>
                            <h4 className='text-uppercase'>LEARN</h4>
                            <hr style={{ width: '10%' }} />
                            <p>
                                The history of Kiyomizu is the course of deep falth in Kanon.
                            </p>
                            <small className='d-none d-lg-block font-times'>
                                The beginning of the temple dates back over 1250 years. One priest found a pure spring welling up deep in Mt. Otowa.
                            </small>
                            <MDBIcon fas icon="long-arrow-alt-right" />
                        </MDBCol>
                        <MDBCol md='7' className='right-section-content'></MDBCol>
                    </MDBRow>
                </div>
                <div id='contentLocation' className='contentSection'>
                    <MDBRow className='m-0 h-100'>
                        <MDBCol md='7' className='right-section-content reverse-section-content'></MDBCol>
                        <MDBCol md='5' className='left-section-content reverse-section-content d-flex align-items-center'>
                            <div>
                                <h4 className='text-uppercase'>LOCATION</h4>
                                <hr style={{ width: '10%' }} />
                                <p>
                                    The temple offers a stunning cityscape of Kyoto.
                                </p>
                                <small className='d-none d-lg-block font-times'>
                                    View this page to learn about how to get here. Various means of transportation from Kyoto Station and many other stations are described.
                                </small>
                                <MDBIcon fas icon="long-arrow-alt-right" />
                            </div>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
            <div id='fifthSection' className='d-flex justify-content-center'>
                <MDBCol size='11' md='10' lg='8' className='d-flex align-items-center justify-content-center text-white square border border-4' style={{ height: '160px' }}>
                    EVENTS SCHEDULE IN 2022
                </MDBCol>
            </div>
        </>
    )
}