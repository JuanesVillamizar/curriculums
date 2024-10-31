import Accordion from 'react-bootstrap/Accordion';

function AccordionComponent({ worker }) {
  let defaultActivateSeccion = 0;
  console.log('datos desde el accordion', worker);

  let getNivelHabilidad = (nivel) => {
    switch (nivel) {
      case 'Avanzado':
        return <div className='d-flex'>
          <i class="fas fa-solid fas fa-star text-warning"></i><i class="fas fa-solid fas fa-star text-warning"></i><i class="fas fa-solid fas fa-star text-warning"></i><i class="fas fa-solid fas fa-star text-warning"></i><i class="fas fa-solid fas fa-star text-warning"></i>
        </div>;
      case 'Bajo':
        return <div className='d-flex'>
          <i class="fas fa-solid fas fa-star text-warning"></i><i class="far fa-solid fas fa-star"></i><i class="far fa-solid fas fa-star"></i><i class="far fa-solid fas fa-star"></i><i class="far fa-solid fas fa-star"></i>
        </div>;
      case 'Intermedio':
        return <div className='d-flex'>
          <i class="fas fa-solid fas fa-star text-warning"></i><i class="fas fa-solid fas fa-star text-warning"></i><i class="fas fa-solid fas fa-star text-warning"></i><i class="far fa-solid fas fa-star"></i><i class="far fa-solid fas fa-star"></i>
        </div>;
    }
  }

  return (
    <div>
      {
        worker != null && worker
          ? <Accordion defaultActiveKey={{ defaultActivateSeccion }}>
            {
              worker.experiencia
                ? <Accordion.Item eventKey="0">
                    <Accordion.Header>Experiencia Laboral</Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        {
                          worker != null
                            ? worker.experiencia.map((exp) => {
                              return <div className='px-3 separador-seccion'>
                                <ul>
                                  <li>
                                    <span>{exp.empresa}</span><div></div>
                                    <span>{exp.puesto}</span><div></div>
                                    <span>{exp.duracion}</span><div></div>
                                    <span>Responsabilidades: </span>
                                    <ul>
                                      {exp.responsabilidades.map((res) => {
                                        return <li>
                                          <span>{res}</span>
                                        </li>;
                                      })}
                                    </ul>
                                    <span>Logros: </span>
                                    <ul>
                                      {exp.logros.map((logro) => {
                                        return <li>
                                          <span>{logro}</span>
                                        </li>;
                                      })}
                                    </ul>
                                  </li>
                                </ul>
                              </div>;
                            })
                            : <div></div>
                        }
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                : ''
            }
            {
              worker.educacion
                ? <Accordion.Item eventKey="1">
                    <Accordion.Header>Informacion Academica</Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        {
                          worker != null
                            ? worker.educacion.map((edu) => {
                              return <div className='px-3 separador-seccion'>
                                <ul>
                                  <li>
                                    <span>{edu.grado}</span><div></div>
                                    <span>{edu.institucion}</span><div></div>
                                    <span>Año de graduacion: {edu.ano_graduacion}</span><div></div>
                                    <span>Responsabilidades: </span>
                                    <ul>
                                      {edu.logros_academicos.map((logro) => {
                                        return <li>
                                          <span>{logro}</span>
                                        </li>;
                                      })}
                                    </ul>
                                  </li>
                                </ul>
                              </div>;
                            })
                            : <div></div>
                        }
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                : ''
            }
            {
              worker.habilidades
                ? <Accordion.Item eventKey="2">
                    <Accordion.Header>Habilidades</Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        {
                          worker != null
                            ? worker.habilidades.map((habilidad) => {
                              return <div className='px-3 separador-seccion'>
                                <ul>
                                  <li>
                                    <span>{habilidad.habilidad}</span><div></div>
                                    <span>Años de experiencia: {habilidad.anios_experiencia}</span><div></div>
                                    <span>{habilidad.nivel}</span><div></div>
                                    {getNivelHabilidad(habilidad.nivel)}
                                  </li>
                                </ul>
                              </div>;
                            })
                            : <div></div>
                        }
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                : ''
            }
            {
              worker.certificaciones
                ? <Accordion.Item eventKey="3">
                    <Accordion.Header>Certificados</Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        {
                          worker != null
                            ? worker.certificaciones.map((certificacion) => {
                              return <div className='px-3 separador-seccion'>
                                <ul>
                                  <li>
                                    <span>{certificacion.certificacion}</span><div></div>
                                    <span>{certificacion.institucion}</span><div></div>
                                    <span>Se obtuvo en el {certificacion.ano_obtencion}</span>
                                  </li>
                                </ul>
                              </div>;
                            })
                            : <div></div>
                        }
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                : ''
            }
            {
              worker.certificaciones
                ? <Accordion.Item eventKey="4">
                    <Accordion.Header>Referecnias</Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        {
                          worker != null
                            ? worker.referencias.map((referencia) => {
                              return <div className='px-3 separador-seccion'>
                                <ul>
                                  <li>
                                    <span>{referencia.nombre}</span><div></div>
                                    <span>{referencia.relacion}</span><div></div>
                                    <span>{referencia.contacto}</span>
                                  </li>
                                </ul>
                              </div>;
                            })
                            : <div></div>
                        }
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                : ''
            }
            {
              worker.certificaciones
                ? <Accordion.Item eventKey="5">
                    <Accordion.Header>Intereses</Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        <ul className='px-3'>
                          {
                            worker != null
                              ? worker.intereses.map((interes) => {
                                return <li>
                                  <div className='separador-seccion'>
                                    <span>{interes}</span>
                                  </div>
                                </li>;
                              })
                              : <div></div>
                          }
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                : ''
            }
            {
              worker.certificaciones
                ? <Accordion.Item eventKey="6">
                    <Accordion.Header>Idiomas</Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        {
                          worker != null
                            ? worker.idiomas.map((idioma) => {
                              return <div className='px-3 separador-seccion'>
                                <ul>
                                  <li>
                                    <span>{idioma.idioma}</span>
                                    {getNivelHabilidad(idioma.nivel)}
                                  </li>
                                </ul>
                              </div>;
                            })
                            : <div></div>
                        }
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                : ''
            }
          </Accordion>
          : ''
      }
    </div>
  );
}

export default AccordionComponent;