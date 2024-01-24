import React, { useState } from 'react';
import './Panel3.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import PanelHeader from '../PanelHeader/PanelHeader';
import PannelComponent from '../PannelComponent/PannelComponent';




function Panel2() {


    return (

        <>
            <div>
                <Header />
            </div>
            <PanelHeader />
            <div className='flex'>
                <div>
                    <div className="panel-heading text-center m-2">
                        Panel 3
                    </div>
                    <div className='pl-2 m-2'>
                        <div className="scroll-box4-panel3  bg-white">
                        </div>

                    </div>
                </div>

                <div>
                    <div className="panel-heading text-center m-2">
                        Panel 3
                    </div>
                    <div className='pl-2 m-2'>
                        <div className="scroll-box4-panel3 bg-white">
                        </div>

                    </div>
                </div>
            </div>
            <div className="panel-heading text-center">
          Panel 3
        </div>
            <div>
        <PannelComponent/>
       </div>

            <div>
                <Footer />
            </div>
        </>
    );
}

export default Panel2;





