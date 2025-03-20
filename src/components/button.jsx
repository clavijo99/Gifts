/*
    Creamos un componente y haciendo uso de la destructuracion extraemos las propiedades
    o podemos usar 



    function ButtonCustom(props){
    return (
        <>
        { props.showLabel && <h2>{props.label}</h2>   }
        <button className="button">{props.textButton}</button>
        </>
    )
}
*/



function ButtonCustom({label, textButton, showLabel, onClick}){
    return (
        <>
        { showLabel && <h2>{label}</h2>   }
        <button onClick={onClick} className="button">{textButton}</button>
        </>
    )
}

export default ButtonCustom;