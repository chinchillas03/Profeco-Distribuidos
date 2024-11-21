
import Header from './components/Header'
import Product from './components/Product'

function App() {

  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className='text-center text-uppercase mt-3'>Productos disponibles</h2>
        <form className="d-flex justify-content-md-between ">
          <input
            className="form-control "
            type="search"
            placeholder="Buscar productos..."
            aria-label="Buscar"
          />
          <button className="btn btn-outline-primary" type="submit">Buscar</button>
        </form>
        <div className='row mt-3'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </main>
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">Profeco - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
