import React,{useState} from 'react'
import "bootswatch/dist/superhero/bootstrap.min.css"

const Divisas=()=>{

	const [cotizaD , setCotizaD] = useState([])
	const [monedaD , setMonedaD] = useState([])
	const [cotizaR , setCotizaR] = useState([])
	const [monedaR , setMonedaR] = useState([])
	const [cotizaE , setCotizaE] = useState([])
	const [monedaE , setMonedaE] = useState([])
			React.useEffect(() =>{
				obtenerDatos()

	},[])


	const obtenerDatos =async() =>{
		const dataDolar =await fetch('https://cotizacionapp.herokuapp.com/cotizacion/dolar')
		const dataReal =await fetch('https://cotizacionapp.herokuapp.com/cotizacion/real')
		const dataEuro =await fetch('https://cotizacionapp.herokuapp.com/cotizacion/euro')
		const valueD =await dataDolar.json()
		const valueR =await dataReal.json()
		const valueE =await dataEuro.json()
		setCotizaD(valueD['precio'])
		setMonedaD(valueD['moneda'])
		setCotizaR(valueR['precio'])
		setMonedaR(valueR['moneda'])
	    setCotizaE(valueE['precio'])
		setMonedaE(valueE['moneda'])
	}
	setInterval(obtenerDatos, 5000)	
	return (

 	
		<div className="row">
    <div className="col" align="center">
      {monedaD}--{cotizaD}
    </div>
    <div className="col" align="center">
      {monedaR}--{cotizaR}
    </div>
    <div className="col" align="center">
      {monedaE}--{cotizaE}
    </div>
 	</div>
	


		)
}



export default Divisas