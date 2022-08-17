
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
  const reduxdata = useSelector(state => state);
  const dispatch = useDispatch();
  const [data, setData] = useState([])

  const axios = require('axios').default;

  useEffect(() => {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/current/childrens-middle-grade.json?api-key=0nG5do2caU59G7F2PT1eRQD0RAsaX5Du')
      .then(function (response) {
        setData(response)
        console.log(response.data.results.books)

        setData(response.data.results.books)

      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
    console.log(reduxdata, "reduxdATA")

  }, [])
  const Last = () => {
    const action = { type: "ADATA", payload: data }
    dispatch(action)
    console.log(reduxdata);
  }

  return (
    <div>
      <div className="container">
        <div className="header bg-info p-2">
          <div className="row">
            <div className="col-3">
              <h2 className='text-white'>Bookspace</h2>
            </div>
            <div className="col-7">
              <input placeholder='search' type="text" className='form-control' />
            
            </div>
            <div className="col-2">
              <button className='btn btn-outline-light'>Korzina</button>
            </div>
          </div>
        </div>

      </div>
      <div className="container text-center p-2">
        <button className='btn btn-outline-danger fw-bold fs-3 text-center' onClick={() => Last()}>Bestselling books</button>
      </div>
      <div className="container">
        <div className="row">
          {
           (reduxdata.length > 0 ) ? (

            reduxdata.map((v,i) => {
              return <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
              <div className="part bg-info">
                <h4 className='text-center text-white'>{v.name}</h4>
                <h3 className='text-center text-white'>{v.author}</h3>
                <div className='ps-5 pe-5'>
                  <img className='img-fluid' src={v.book_image} alt="" />
                </div>
                <h3 className='text-center text-white'>{v.price}$</h3>
                <div className='tugmalar d-flex justify-content-center pb-2'>
                  <Link to="/korzina" className='btn btn-outline-warning fw-bold m-1'>Korzina</Link>
                  <Link to='/more' className='btn btn-outline-primary fw-bold m-1'>Info</Link>
                </div>
              </div>
            </div>
            })
           ) :

          (
            <h1>Click this button, please!</h1>
           )
           
          }
        </div>
      </div>
    </div>
  )
}

export default Home


  