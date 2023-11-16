export default function FormPage() {
  return (
    <>
       <div className="body-form">
      <div className="container-form">
        <h1 className="title-form text-light fw-bold">Registrate!</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" className="form-control" name="nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" className="form-control" name="apellido" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" className="form-control" name="telefono" required  />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password :</label>
            <input type="password" className="form-control" name="password" required  />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirmar Password :</label>
            <input type="password" className="form-control" name="password" required  />
          </div>
          <div className="btn-container">
            <button type="reset" className="btn btn-form"> Reiniciar</button>
            <button type="submit" className="btn btn-form">Enviar</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
