const Cartwidget = () => {
    let contandor = 0;

    return(
        <div style={{display: "flex", alignItems: "center", marginLeft: 800}}>
            <img src="../public/Carrito.svg" alt="Logo Carrito"  height={50}/>
            <h5>{contandor}</h5>
        </div>
    )
}

export default Cartwidget