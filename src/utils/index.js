const getAreaRectangle = (baseParameter, alturaParameter) => {
    return (parseFloat(baseParameter) * parseFloat(alturaParameter)).toFixed(2)    
}

const getTriangleArea = (aParameter, bParameter, cParameter) => {
    let result = 0
    if (aParameter === bParameter || aParameter === cParameter || bParameter === cParameter) {
        if (aParameter === bParameter ) {
            result = (parseFloat(aParameter) * parseFloat(cParameter)) / 2 
           } else if (aParameter === cParameter){
               result = (parseFloat(aParameter) * parseFloat(bParameter)) / 2 
           } else {
               result = (parseFloat(bParameter) * parseFloat(cParameter)) / 2 
           }
    } else {
      const p = (parseFloat(aParameter) + parseFloat(bParameter) + parseFloat(cParameter)) /2
      result = (Math.sqrt(p * ( p - aParameter ) * ( p - bParameter) * ( p - cParameter)).toFixed(2))
    }
    return result
}
module.exports = {
    getAreaRectangle,
    getTriangleArea
}