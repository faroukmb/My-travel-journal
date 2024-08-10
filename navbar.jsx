
import earth from "./src/assets/earth-svgrepo-com.svg"
function Navbar(){
    return (
        <div className="nav">
            <img src={earth} alt="" height={30} />
         <h3>My travel journal</h3>
        </div>
    )
}
export default Navbar;