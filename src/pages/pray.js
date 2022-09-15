import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBTypography,
    MDBRow
} from 'mdb-react-ui-kit';
import exploreKannonPic from '../asset/pic/pic_pray_01.webp';
import prayStep1_01 from '../asset/pic/pray_step_1_01.webp';
import prayStep1_02 from '../asset/pic/pray_step_1_02.webp';
import prayStep1_03 from '../asset/pic/pray_step_1_03.webp';
import prayStep1_04 from '../asset/pic/pray_step_1_04.webp';
import prayStep1_05 from '../asset/pic/pray_step_1_05.webp';

export default function Pray() {
    return (
        <>
            <div id='prayBanner' className='vh-100'></div>
            <div id='exploreKannon' className='text-center text-dark'>
                <h3 className='font-times'>I</h3>
                <div className='d-flex justify-content-center'>
                    <hr className='opacity-100 m-0' style={{ width: '6%' }} />
                </div>
                <br />
                <h6 className='fw-bold pt-4' style={{ letterSpacing: '2px' }}>EXPLORE KANNON</h6>
                <h2 className='font-times pt-4'>VISITING THE KIYOMIZU KANNON-SAN</h2>
                <MDBContainer className='font-times' style={{ padding: '4rem 0' }}>
                    <div className='d-flex justify-content-center'>
                        <MDBCol size='11' md='8' className='text-start'>
                            <p style={{ textIndent: '2rem', fontSize: '15px' }}>
                                Kiyomizu-dera Temple is a place where the deity Kannon is worshiped. The principal image of the temple is the statue of the Eleven-headed Thousand-armed Kannon Bodhisattva. The forty-two arms and the expressions on the eleven faces represent the great compassion of Kannon, who is believed to save humans from difficulties. Kannon has long been worshiped by pious people who wish for worldly benefits, such as good health, success, and romantic relationships. Worshipers felt so close to Kannon that they came to refer to the deity as Kiyomizu Kannon-san.
                            </p>
                        </MDBCol>
                    </div>
                    <div className='d-flex justify-content-center py-4'>
                        <MDBCol size='11' md='8' id='exploreKannonPic'>
                            <img src={exploreKannonPic} alt='exploreKannonPic' className='img-fluid' />
                        </MDBCol>
                    </div>
                    <div className='d-flex justify-content-center py-4'>
                        <MDBCol size='11' md='8' className='text-start'>
                            <p style={{ textIndent: '2rem', fontSize: '15px' }}>
                                Kannon is also known as the deity that watches over all directions. It is believed that Kannon appears in thirty-three different forms, answering any and all prayers of all living things. She does not always appear in the image enshrined in Kiyomizu-dera Temple. A person you passed on the street might be a form of Kannon appearing in this world to teach the proper way to live. Kannon is around in our daily lives, not a being of a faraway world.
                            </p>
                        </MDBCol>
                    </div>
                    <div className='d-flex justify-content-center py-4'>
                        <MDBCol size='11' md='8'>
                            <div id='wordCardKannon' className='square border'>
                                <div className='p-4 font-times'>
                                    <div className="d-flex py-4">
                                        <div className="p-2 fw-bold" style={{ transform: 'rotate(-90deg)', translate: '20px' }}>KAN</div>
                                        <MDBTypography tag='div' className='display-1 d-flex align-items-center'>
                                            観
                                        </MDBTypography>
                                        <div className="p-2 flex-grow-1">
                                            <div className='d-flex justify-content-around align-items-center'>
                                                <hr style={{ width: '16%' }} />
                                                <MDBCol size='8'>
                                                    <p className='m-0'>SUBJECTIVITY,</p>
                                                    <span>
                                                        one’s personal mind,
                                                        invisible things
                                                    </span>
                                                </MDBCol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="p-2 fw-bold" style={{ transform: 'rotate(-90deg)', translate: '20px' }}>NON</div>
                                        <MDBTypography tag='div' className='display-1 d-flex align-items-center'>
                                            音
                                        </MDBTypography>
                                        <div className="p-2 flex-grow-1">
                                            <div className='d-flex justify-content-around align-items-center'>
                                                <hr style={{ width: '16%' }} />
                                                <MDBCol size='8'>
                                                    <p className='m-0'>OBJECTIVITY,</p>
                                                    <span>
                                                        surroundings and others,
                                                        all things in the world
                                                    </span>
                                                </MDBCol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-start py-4'>
                                        <p>
                                            The name Kannon bears two contrasting meanings: “you” and “I.” Kannon tells us that the ideal way of life for humans is to understand other people’s joy and pain and to view the world with unprejudiced eyes.
                                        </p>
                                        <p>
                                            People tend to judge things from their own point of view. They are likely to be influenced by superficial matters and unaware of other people’s feelings or changes in the situation around them. Kannon is considered a deity who watches over the world both subjectively and objectively with the whole heart and not just the eyes, unlike we humans who tend to take a more biased perspective.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                    </div>
                </MDBContainer>
            </div>
            <div id='prayBanner2' className='vh-100'></div>
            <div id='toPrayKannon' className='text-center text-dark'>
                <h3 className='font-times'>II</h3>
                <div className='d-flex justify-content-center'>
                    <hr className='opacity-100 m-0' style={{ width: '6%' }} />
                </div>
                <br />
                <h6 className='fw-bold pt-4' style={{ letterSpacing: '2px' }}>TO PRAY</h6>
                <h2 className='font-times py-4'>MANNERS OF WORSHIP</h2>
                <div className='d-flex justify-content-center'>
                    <MDBCol size='11' md='8' className='text-start font-times'>
                        <p style={{ textIndent: '2rem', fontSize: '15px' }}>
                            There are a few simple manners to follow while worshiping Kannon. By purifying your body and soul, you prepare to reflect on yourself. Follow the proper procedure, join your hands with a calm mind, and offer a prayer to Kannon.
                        </p>
                    </MDBCol>
                </div>
                <div className='d-flex justify-content-center py-4'>
                    <hr style={{ width: '70%' }} />
                </div>
                <div className='d-flex justify-content-center py-4'>
                    <MDBCol size='11' md='8' className='text-start font-times'>
                        <p style={{ textIndent: '2rem', fontSize: '15px' }}>
                            Before paying a visit to Kannon, it is necessary to purify your hands. In Japanese, the palm of the hand is also called “tana-gokoro,” a word meaning the heart of the hand. That is, to purify your hands means to cleanse your heart. There are no strict rules to follow while purifying. Simply rinse your hands with the healing water and calm your mind. The following manner is generally used when purifying one’s hands. Feel free to use this guide for reference.
                        </p>
                    </MDBCol>
                </div>
                <MDBContainer className='d-flex justify-content-center'>
                    <MDBCol size='12' md='10' xl='8' className='d-flex justify-content-center'>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size='10' md='6'>
                                <img src={prayStep1_01} className='img-fluid' alt='prayStep1_01' />
                                <div className="d-flex">
                                    <div className="p-2"><div className='border rounded p-2'>1</div></div>
                                    <div className="p-2 flex-grow-1">
                                        <div className='d-flex align-items-center'>
                                            Taking the scoop in your right hand, pour some water into your left hand to purify it.
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol size='10' md='6'>
                                <img src={prayStep1_02} className='img-fluid' alt='prayStep1_02' />
                                <div className="d-flex">
                                    <div className="p-2"><div className='border rounded p-2'>2</div></div>
                                    <div className="p-2 flex-grow-1">
                                        <div className='d-flex align-items-center'>
                                            Shift the scoop from your right hand to your left, and purify your right hand.
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol size='10' md='6'>
                                <img src={prayStep1_03} className='img-fluid' alt='prayStep1_03' />
                                <div className="d-flex">
                                    <div className="p-2"><div className='border rounded p-2'>3</div></div>
                                    <div className="p-2 flex-grow-1">
                                        <div className='d-flex align-items-center'>
                                            Taking the scoop in your right hand again, pour water into your left hand, and rinse your mouth. (Do not put your lips to the scoop.)
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol size='10' md='6'>
                                <img src={prayStep1_04} className='img-fluid' alt='prayStep1_04' />
                                <div className="d-flex">
                                    <div className="p-2"><div className='border rounded p-2'>4</div></div>
                                    <div className="p-2 flex-grow-1">
                                        <div className='d-flex align-items-center'>
                                            Purify your left hand again.
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol size='10' md='6'>
                                <img src={prayStep1_05} className='img-fluid' alt='prayStep1_05' />
                                <div className="d-flex">
                                    <div className="p-2"><div className='border rounded p-2'>5</div></div>
                                    <div className="p-2 flex-grow-1">
                                        <div className='d-flex align-items-center'>
                                            After rinsing its handle with the rest of the water, put the scoop back in its place.
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBContainer>
            </div>
        </>
    )
}