import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const clube = new Clube();
const quadraFutebol = new QuadraFutebol();
const quadraTenis = new QuadraTenis();

clube.adicionarQuadra(quadraFutebol);
clube.adicionarQuadra(quadraTenis);

const dataReserva = new Date('2023-12-28');
const dataReservaII = new Date('2023-12-29');

const reservarQuadraFutebol = clube
.buscarQuadra<QuadraFutebol>(0)
.reservar(dataReserva);

const reservarQuadraTenis = clube
.buscarQuadra<QuadraTenis>(1)
.reservar(dataReservaII);

console.log(reservarQuadraFutebol);
console.log(reservarQuadraTenis);
