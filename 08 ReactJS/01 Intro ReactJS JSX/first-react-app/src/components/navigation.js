export default function Navigation() {
    return (
        <div>
            <nav className="side-menu">
                <ul>
                    <li className="hidden active">
                        <a className="page-scroll" href="/page-top">ass</a>
                    </li>
                    <li>
                        <a href="/home" className="page-scroll">
                            <span className="menu-title">Home</span>
                            <span className="dot"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/speakers" className="page-scroll">
                            <span className="menu-title">Speakers</span>
                            <span className="dot"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/tickets" className="page-scroll">
                            <span className="menu-title">Buy Tickets</span>
                            <span className="dot"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/schedule" className="page-scroll">
                            <span className="menu-title">Schedule</span>
                            <span className="dot"></span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid">

                <div className="row hero-header" id="home">
                    <div className="col-md-7">
                        <img src="img/meetup-logo.png" className="logo" alt="pic" />
                        <h1>Attend the most awaited Conference of 2015</h1>
                        <h3>to start you up with your business!</h3>
                        <h4>20<sup>th</sup> to 22<sup>nd</sup>  October, 2015</h4>
                        <a href="/" className="btn btn-lg btn-red">Buy Tickets Now <span className="ti-arrow-right"></span></a>

                    </div>
                    <div className="col-md-5 hidden-xs">
                        <img src="img/rocket.png" className="rocket animated bounce" alt="pic" />
                    </div>
                </div>

            </div>

        </div>
    );
};