import { Link } from "react-router-dom";

const HomePage = () => {

    return ( 
        <>
    <div id="homepage">
        <div id="homewelcome">
        <div id="home-header">
            <img src="TeamLogo.JPG" alt="" className="topLogoImg1" />

            <ul className="home-lists">
<li><Link to = "/" className="home-links">Home</Link></li>
<li><Link to = "/join" className="home-links">Join Us</Link></li>
<li><Link to = "/students" className="home-links">Our Students</Link></li>
            </ul>
    
    </div>
    <div id="home-center">
        <div id="home-quote">
    <p>In a world that gives countless reasons to be bad, the bravest are those that still DARE TO DO GOOD.</p>

<p id="quote-ref">By: Good person</p>
</div>


<div className="rightquote">
    <div id="welcome-right">
    <h4>Welcome To Eclat Online University</h4>
    <h6>"Smile, laugh, learn, repeat</h6>
    <Link to="/join" id="homeClickHere"> <strong>Click Here To Join Us</strong></Link>
    </div>
    <div id="tips">
        <h5>Tips:</h5>
    <p>"If at first you don't succeed, blame the instructions."</p>
    <p>"When in doubt, just Google it and pretend you knew it all along."</p></div>

</div>




    </div></div>
    <div id="home-footer">
    © Copyright: Bill Otunga - {new Date().getFullYear()}
    </div>
    </div>
    </> );
}
 
export default HomePage;