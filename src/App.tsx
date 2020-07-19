//Dependencias
import React, { Component } from "react";
import { IFrame, Servicio, Img, Pensamientos } from "./components/Components";
import pensamientos from "./components/Pensamientos";
import { ingElectromecanica, serviIndustrial } from "./components/Servicios";

//Imagenes
import Principal from "./images/Principal.jpg";
import LogoPrincipal from "./images/LogotipoFinal.png";


class App extends Component<any, IState> {
    constructor(props) {
        super(props);
        // Se establese la fecha en le estado para definir el horario
        this.state = {
            fecha: new Date()
        };
    }

    render(): JSX.Element {
        return (
            <div className="App">
                {/* Inicio de la cabecera! */}
                <header className="container-fluid p-3">
                    <h1 className="h1 text-center">Electroservicios Industriales <br /> y Suministros</h1>
                    <p className="mt-4 h4 text-center text-black-50">
                        <em>¡Calidad y Servicio nos respalda!</em>
                    </p>
                    <Img src={Principal} className="img" />
                    <a href="#Contacto">
                        <button type="button" className="centerX btn btn-warning btn-lg mt-3">
                            Ponte en Contacto
                        </button>
                    </a>
                </header>
                {/* Inicio de el body de la aplicacion */}
                <section className="mt-4">
                    {/* Quienes somos! */}
                    <article className="container-fluid">
                        <p className="h3 titulos">¿Quienes somos?</p>
                        <div className="my-5 col-11 mx-auto mx-2 row">
                            <div className="col-md-6" id="Empresa">
                                <p className=""><strong>Electroservicios Industriales y suministros,</strong> es una empresa con experiencia de mas de 10 años en el mantenimiento electrico-industrial (mantenimiento a subestaciones, transformadores, instalaciones eléctricas, sistemas de bombeo, torres de enfriamiento, compresores de aire, etc), brindando servicios a la indrustria metal-mecanica tales como: Neturen mexicana, Proveedora y maquiladora de licores, Unipres mexicana, Compas, ZF Chassis Technology Aguascalientes, ZF Chassis Technology San Luis Potosí, Gohsyu Mexicana,  entre otros.</p>
                            </div>
                            <div className="col-md-6">
                                <Img src={LogoPrincipal} className="img-simple" />
                            </div>
                        </div>
                    </article>
                    {/* La empresa! */}
                    <article className="container-fluid">
                        <p className="h3 titulos">La Empresa</p>
                        <div className="my-5 row col-11 centerX mx-2">
                            {
                                pensamientos.map((objec, index) => (
                                    <Pensamientos
                                        src={objec.src}
                                        text={objec.text}
                                        titulo={objec.titulo}
                                        key={index}
                                    />
                                ))
                            }
                        </div>
                    </article>
                    {/* Servicios */}
                    <article className="container-fluid">
                        <p className="h3 titulos">Servicios</p>
                        <section>
                            <p className="h4 mt-4 text-center">Ingeniería Electromecánica</p>
                            <div className="row">
                                {
                                    ingElectromecanica.map((servicio, index) => (
                                        <Servicio
                                            key={index}
                                            title={servicio.titulo}
                                            src={servicio.src}
                                        />
                                    ))
                                }
                            </div>
                        </section>
                        <section>
                            <p className="h4 mt-4 text-center">Servicios Industriales</p>
                            <div className="row">
                                {
                                    serviIndustrial.map((servicio, index) => (
                                        <Servicio
                                            key={index}
                                            title={servicio.titulo}
                                            src={servicio.src}
                                        />
                                    ))
                                }
                            </div>
                        </section>
                    </article>
                    {/* Contacto! */}
                    <article className="container-fluid" id="Contacto">
                        <p className="h3 titulos">Contacto</p>
                        <div className="row mx-2">
                            <div className="col-lg-5 my-5">
                                <p className="h3 text-center">Comunicate con nosotros</p>
                                <div>
                                    <p className="text-center">Gaspar de la Funte #317 Villas de Nuestra Señora de la Asunción, aguascalientes, Aguacalientes, México</p>
                                    <p className="text-center">
                                        <strong>Oficina: </strong>
                                        <span className="text-warning">(01) 449-158-4499</span>
                                    </p>
                                    <p className="text-center">
                                        <strong>Celular: </strong>
                                        <span className="text-warning">(044) 449-256-4117</span>
                                    </p>
                                    <p className="text-center">
                                        <strong>Email: </strong>
                                        <span className="text-warning">contacto@electroserviciosind.com</span>
                                    </p>
                                    <p className="h3 text-center">Servicio Industrial</p>
                                    <p className="text-center">Estamos a sus ordenes la 24 horas del dia, los 365 dias del año.</p>
                                    <div className="form-group">
                                        <p className="h3 text-center">Horario de Oficina</p>
                                        <p className="text-center">Por cuestiones sanitarias, se esta trabajando con una modalidad de <b><i>Home Office</i></b>, por lo cual, se están recibiendo y realizando cotizaciónes de nuestros proveedores y clientes</p>
                                        <select className="form-control border-0" defaultValue={this.state.fecha.getDay()}>
                                            <option value="1">Lunes. 9:00-18:00</option>
                                            <option value="2">Martes. 9:00-18:00</option>
                                            <option value="3">Miercoles. 9:00-18:00</option>
                                            <option value="4">Jueves. 9:00-18:00</option>
                                            <option value="5">Viernes. 9:00-18:00</option>
                                            <option value="6">Sabado. 10:00-15:00</option>
                                            <option value="0">Domingo. Cerrado</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col lg-7 mb-5">
                                <IFrame
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7402.339121858151!2d-102.263983!3d21.928032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429efd1addc1ba5%3A0xdbbfba3d12a0f9be!2sGaspar%20de%20La%20Fuente%20317%2C%20Villas%20de%20Ntra.%20Sra.%20de%20la%20Asunci%C3%B3n%2C%2020126%20Aguascalientes%2C%20Ags.!5e0!3m2!1ses!2smx!4v1567224945853!5m2!1ses!2smx"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    id="map-Desktop"
                                />
                            </div>
                        </div>
                    </article>
                    <article className="margin-top-mobil">
                        <IFrame
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7402.339121858151!2d-102.263983!3d21.928032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429efd1addc1ba5%3A0xdbbfba3d12a0f9be!2sGaspar%20de%20La%20Fuente%20317%2C%20Villas%20de%20Ntra.%20Sra.%20de%20la%20Asunci%C3%B3n%2C%2020126%20Aguascalientes%2C%20Ags.!5e0!3m2!1ses!2smx!4v1567224945853!5m2!1ses!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            id="map-Mobil"
                        />
                    </article>
                </section>
                <footer>
                    {/* Creación del footer */}
                </footer>
            </div>
        );
    }
}

interface IState {
    fecha: Date;
}

export default App;