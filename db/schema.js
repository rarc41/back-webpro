const { gql } = require("apollo-server");

// schema
const typeDefs = gql`

  type Avance{
    id: ID
    proyecto: ID
    fechaAvance: String  
    descripcion: String
    observaciones: String
    creadoPor: ID
  }

  type Usuario {
    id: ID
    nombre: String
    apellido: String
    identificacion: String
    email: String
    rol: String
    estado: String
    creado: String
  }

  type Proyecto {
    id: ID
    nombreProyecto: String
    objetivoGeneral: String
    objetivosEspecificos: [String]
    presupuesto: Float
    fechaInicio: String
    fechaFin: String
    estadoProyecto: Boolean
    faseProyecto: faseProyecto
    lider: ID
  }

  type Inscripcion {
    id: ID
    proyecto: Proyecto
    estudiante: Usuario
    estado: Boolean
    fechaIngreso: String
    fechaEgreso: String
  }

  input AvanceInput{
    descripcion: String!
    observaciones: String
  }
  
  type ProyectoDetalle {
    id: ID
    nombreProyecto: String
    objetivoGeneral: String
    objetivosEspecificos: [String]
    presupuesto: Float
    fechaInicio: String
    fechaFin: String
    estadoProyecto: Boolean
    faseProyecto: faseProyecto
    lider: ID
    inscripciones: [Inscripcion]
    avances: [Avance]
  }

  input InscripcionInput {
    proyecto: ID!
    estudiante: ID!
    estado: Boolean
    fechaIngreso: String
    fechaEgreso: String
  }

  input ProyectoInput {
    nombreProyecto: String!
    objetivoGeneral: String!
    objetivosEspecificos: [String!]
    presupuesto: Float!
  }

  input ActualizarProyectoInput {
    nombreProyecto: String
    objetivoGeneral: String
    objetivosEspecificos: [String]
    presupuesto: Float
    estadoProyecto: Boolean
    faseProyecto: faseProyecto
    lider: ID
  }

  enum faseProyecto {
    INICIADO
    EN_DESARROLLO
    TERMINADO
  }

  type Token {
    token: String
  }

  input UsuarioInput {
    identificacion: String
    rol: RolUsuario
    nombre: String
    apellido: String
    email: String
    password: String
  }

  enum RolUsuario {
    ADMINISTRADOR
    LIDER
    ESTUDIANTE
  }

  enum EstadoUsuario {
    AUTORIZADO
    NO_AUTORIZADO
    PENDIENTE
  }

  input AutenticarInput {
    email: String!
    password: String!
  }

  input AvanceInput {
    descripcion: String
    observaciones: String
  }

  type Query {
    #Usuarios
    obtenerUsuario: Usuario
    obtenerUsuarios: [Usuario]
    obtenerUsuariosPorRol(rol: String!): [Usuario]
    obtenerUsuariosInscritos(proyecto: ID!): [Usuario]

    #Proyectos
    obtenerProyecto(nombreProyecto: String!): Proyecto
    obtenerProyectos: [Proyecto]
    obternerProyectosPorLider: [Proyecto]
    obtenerProyectosPorEstudiante: [Proyecto]
    obtenerDetallesProyecto(id: ID!): Proyecto
    detallesProyecto(id: ID!): ProyectoDetalle

    #Inscripciones
    obtenerInscripcion(id: String!): Inscripcion
    obtenerInscripcionesLider: [Inscripcion]

    #Avances
    obtenerAvancesProyecto(proyecto: ID!): [Avance]
  }

  type Mutation {
    #Usuarios
    crearUsuario(input: UsuarioInput): Usuario
    autenticarUsuario(input: AutenticarInput): Token
    actualizarUsuario(id: ID!, input: UsuarioInput): Usuario
    actualizarUsuarioEstado(id: ID!, estado: EstadoUsuario!): Usuario

    #Proyectos
    CrearProyecto(input: ProyectoInput!): Proyecto
    actualizarProyectoEstado(id: ID!, input: ActualizarProyectoInput!): Proyecto
    actualizarProyectoLider(id: ID!, input: ProyectoInput!): Proyecto


    #Inscripciones
    crearInscripcion(input: InscripcionInput!): Inscripcion
    actualizarInscripcionEstado(id: ID!, estado: Boolean!): Inscripcion

    #Avances
    crearAvance(input: AvanceInput!, proyecto: ID!) : Avance
    actualizarAvance(id: ID!, input: AvanceInput!): Avance
  }
`;

module.exports = typeDefs;
