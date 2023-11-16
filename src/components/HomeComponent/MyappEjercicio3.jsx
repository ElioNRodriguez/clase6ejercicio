
export default function MyappEjercicio3(props) {
  return (
    <>
     <div className="card card-container">
        <img  src="src/assets/images/D_NQ_NP_2X_752236-MLU70660219945_072023-F.jpg" className="card-img-top img-card" alt="..." />
        <div className="card-body">
          <p className="card-text text-title"><span>Nombre:</span> {props.nombre} </p>
          <p className="card-text"><span className="descripcion">Descripción:</span> {props.descripcion} </p>
          <p className="card-text"><span>Precio:</span> {props.precio} </p>
          <p className="card-text"><span>SKU:</span> {props.sku} </p>
          <p className="card-text"><span>Cantidad:</span> {props.cantidad} </p>
          <a href="#" className="btn btn-danger button">Comprar</a>
        </div>
      </div>
    </>
  );
}
