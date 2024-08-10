
function Cart(props){
    return (
        <div className="cart">
           <img src={`./src/assets/${props.img}`} alt="japan" />
           <div className="infos">
            <div className="location">
                <img src="./src/assets/travel_15692612.png" alt="" height={20}/>
                <p>{props.location}</p>
                <a href={props.link} target="_blank">View on google Maps</a>
            </div>
            <div className="description">
                <h1>{props.title}</h1>
                <p className="period">{props.period}</p>
                <p>{props.description}</p>
            </div>
           </div>
        </div>
    )
}

export default Cart