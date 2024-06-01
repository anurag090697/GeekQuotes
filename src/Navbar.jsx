function Navbar(){
return (
    <nav>
        <div>
            <img src="public\assets\gsdr.svg" alt="" className="logop"/>
        <h2>GeekFoods</h2>
        </div>
        <div>
            <a href="">
                Home
            </a>
            <a href="" className="mkblue">
               Quote
            </a>
            <a href="">
               Restaurants
            </a>
            <a href="">
               Foods
            </a>
            <a href="">
                Contact
            </a>
        </div>
        <div>
            <button className="btnGS">Get Started</button>
        </div>
    </nav>
)
}
export default Navbar;