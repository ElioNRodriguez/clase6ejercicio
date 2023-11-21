import MyappEjercicio3 from "./MyappEjercicio3";
import "./card.css";

export default function CardPage() {
  return (
    <div className="body-card">
      <main className="main">
        <MyappEjercicio3
          nombre="Violin Palatino"
          descripcion="El Violín Palatino 4/4 es una joya de la música, diseñado para aquellos que buscan perfeccionar su arte o para aquellos que están dando sus primeros pasos en el mundo de las cuerdas. Su tamaño completo (4/4) lo hace ideal para adultos y jóvenes, proporcionando un sonido acústico rico y vibrante que deleitará tanto a los intérpretes como a los oyentes."
          precio="$57.000"
          sku="VE01"
          cantidad="14"
        />
      </main>
    </div>
  );
}
