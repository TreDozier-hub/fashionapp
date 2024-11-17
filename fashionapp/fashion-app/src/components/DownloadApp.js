import React from 'react';
import AppIos from '../assets/AppStore.png';
import './App.css';
import AppGoogle from '../assets/googlePlay.png';
import Phone from '../assets/image_4.png';

function DownloadApp() {
    return (

        <section class="download">
                <div className="fdownload-section-1">
                    <h2>DOWNLOAD APP &<br /> GET THE VOUCHER!</h2>
                    <p>Get 30% off for first transaction using<br />
                        Rondovision mobile app for now.</p>

                    <div className="iconApp">
                        <a href="#logo">
                            <img src={AppIos} alt="AppIos" className="appIos" />
                        </a>

                        <a href="#logo">
                            <img src={AppGoogle} alt="AppGoogle" className="AppGoogle" />
                        </a>
                    </div>
                </div>
                <div class="fdownload-section-2">

                        <div className="">
                            <a href="#logo">
                                <img src={Phone} alt="Phone" className="Phone" />
                            </a>
                        </div>

                    </div>
        </section>


    );

}


export default DownloadApp;