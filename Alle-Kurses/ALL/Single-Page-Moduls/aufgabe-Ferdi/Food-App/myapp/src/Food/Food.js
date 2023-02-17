import "./Food.scss"
export default function Food({food}) {

    // const imgStyle = {
    //     width :500 
    //     // width :"500px" 
    // }
    const h3Style ={
        fontSize :"25px"
        // "fontSize" :"25px"
    }
    return (
        <div className="food-container">
        <h3 className="heiglighted-headline" style={h3Style}>{food.name}</h3>
        <img className="food-img"  src ={food.imag}></img> 
        {/* style ={imgStyle} */}
    </div>
    )
}
