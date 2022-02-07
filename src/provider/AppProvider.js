import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import AppContext from './AppContext'
import { getAreaRectangle, getTriangleArea } from '../utils'

const AppProvider = ({ children }) => {
  const [total, setTotal] = useState()

  const [baseRetangulo, setBase] = useState(0)
  const [alturaRetangulo, setAltura] = useState(0)
  const [areaRetangulo, setAreaRetangulo] = useState(0)

  const [aSide, setASide] = useState(0)
  const [bSide, setBSide] = useState(0)
  const [cSide, setCSide] = useState(0)
  const [areaTriangulo, setAreaTriangulo] = useState(0)

  const loadData = () => {
    Axios.get('http://18.118.129.38/api/areatotal')
     .then((response)=> {
      setTotal(response.data.areatotal.toFixed(2))})
  }
  useEffect(()=> {
      loadData();
  }, []);


  const submitRectangle = (e) => {
    e.preventDefault()
    const base = parseFloat(baseRetangulo)
    const altura =  parseFloat(alturaRetangulo)
    if (base <= 0 || altura <= 0) {
      return alert('Apenas números acima de zero')
    } else {
    const data = {base, altura}
    Axios.post('http://18.118.129.38/api/retangulos', data)
          .then(loadData)
    let result = getAreaRectangle(baseRetangulo, alturaRetangulo)
    setAreaRetangulo(result)
    setBase(0)
    setAltura(0)
    }
  }

  const submitTriangle = (e) => {
    e.preventDefault()
    const a = parseFloat(aSide)
    const b = parseFloat(bSide)
    const c = parseFloat(cSide)
    if (a <= 0 || b <=0 || c <= 0){
      return alert('Apenas números acima de zero')
    } else {
    const data = {a, b, c}
    Axios.post('http://18.118.129.38/api/triangulos', data)
         .then(loadData)
    let result = getTriangleArea(a, b, c)
      setAreaTriangulo(result)
      setASide(0)
      setBSide(0)
      setCSide(0)
    }
  }

    return (
        <div>
            <AppContext.Provider value={{ total, 
                submitRectangle, setBase, baseRetangulo, setAltura, alturaRetangulo, areaRetangulo, 
                submitTriangle, aSide, setASide, bSide, setBSide, cSide, setCSide, areaTriangulo}
            }>
                { children }              
            </AppContext.Provider>
        </div>
    )
}

export default AppProvider;