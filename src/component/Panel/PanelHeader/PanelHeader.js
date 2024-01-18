import React from "react";
import { Link } from "react-router-dom";

const PanelHeader = () => {
    return (
        <>
            <div className="panelheader flex border-b  border-black">

                <div>
                    <Link to="/panel1">
                        <div>
                            <ul>
                                <li className="ml-5">Panel 1</li>
                            </ul>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/panel2">
                        <div>
                            <ul>
                                <li className="ml-5">Panel 2</li>
                            </ul>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/panel3">
                        <div>
                            <ul>
                                <li className="ml-5">Panel 3</li>
                            </ul>
                        </div>
                    </Link>
                </div>
                <div>
                    <ul>
                        <li className="ml-5">Panel 4</li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default PanelHeader;