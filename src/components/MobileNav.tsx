import React from "react";
import { Link,useNavigate } from 'react-router-dom';

const MobileNav: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex space-x-4 justify-content-center mb-4 mt-10 ">

            <div onClick={() => {
                navigate("/");
            }}>
                {/* Content inside this div */}
            </div>
            <div className="flex space-x-4">
                <button className="btn btn-circle text-white bg-purple-400">
                    <Link to="/Home" className="btn btn-circle bg-purple-400 text-white">
                        Home
                    </Link>
                </button>
                <button className="btn btn-circle text-white bg-purple-400">
                    <Link to="/buy" >
                        Buy
                    </Link>
                </button>
                <button className="btn btn-circle text-white bg-purple-400 ">
                    <Link to="/Send" >
                        Send
                    </Link>
                </button>
                <button className="btn btn-circle text-white bg-purple-400 ">
                    <Link to="/swap" >
                        Swap
                    </Link>
                </button>
                <button className="btn btn-circle text-white bg-purple-400  ">
                    <Link to="/receive" >
                        Get
                    </Link>
                </button>
            </div>

        </div>
    );
}

export default MobileNav;

