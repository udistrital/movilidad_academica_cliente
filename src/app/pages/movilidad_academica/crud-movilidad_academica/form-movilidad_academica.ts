
export let FORM_MOVILIDAD_ACADEMICA = {
    titulo: 'MovilidadAcademica',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'MovilidadAcademica',
    campos: [
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Id',
        label_i18n: 'id',
        placeholder_i18n: 'id',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Nombre',
        label_i18n: 'nombre',
        placeholder_i18n: 'nombre',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Apellido',
        label_i18n: 'apellido',
        placeholder_i18n: 'apellido',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Identificacion',
        label_i18n: 'identificacion',
        placeholder_i18n: 'identificacion',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'selectmultiple',
        claseGrid: 'col-6',
        nombre: 'Tipodocumento',
        label_i18n: 'tipodocumento',
        placeholder_i18n: 'tipodocumento',
        requerido: true,
        tipo: 'Tipodocumento',
        // key: 'Name',
        opciones: [],
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Tipopersona',
        label_i18n: 'tipopersona',
        placeholder_i18n: 'tipopersona',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Telefono',
        label_i18n: 'telefono',
        placeholder_i18n: 'telefono',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Direccion',
        label_i18n: 'direccion',
        placeholder_i18n: 'direccion',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'selectmultiple',
        claseGrid: 'col-6',
        nombre: 'Pais',
        label_i18n: 'pais',
        placeholder_i18n: 'pais',
        requerido: true,
        tipo: 'Pais',
        // key: 'Name',
        opciones: [],
    },
    {
        etiqueta: 'selectmultiple',
        claseGrid: 'col-6',
        nombre: 'Nivelacademico',
        label_i18n: 'nivelacademico',
        placeholder_i18n: 'nivelacademico',
        requerido: true,
        tipo: 'Nivelacademico',
        // key: 'Name',
        opciones: [],
    },
    {
        etiqueta: 'selectmultiple',
        claseGrid: 'col-6',
        nombre: 'Programaacademico',
        label_i18n: 'programaacademico',
        placeholder_i18n: 'programaacademico',
        requerido: true,
        tipo: 'Programaacademico',
        // key: 'Name',
        opciones: [],
    },
    {
        etiqueta: 'checkbox',
        claseGrid: 'col-6',
        nombre: 'Entrante',
        label_i18n: 'entrante',
        placeholder_i18n: 'entrante',
        requerido: true,
        tipo: 'checkbox',
    },
    {
        etiqueta: 'selectmultiple',
        claseGrid: 'col-6',
        nombre: 'Idtipomovilidad',
        label_i18n: 'idtipomovilidad',
        placeholder_i18n: 'idtipomovilidad',
        requerido: true,
        tipo: 'Tipomovilidad',
        // key: 'Name',
        opciones: [],
    },
    {
        etiqueta: 'mat-date',
        claseGrid: 'col-6',
        nombre: 'Fechainicio',
        label_i18n: 'fechainicio',
        placeholder_i18n: 'fechainicio',
        requerido: true,
        tipo: 'date',
    },
    {
        etiqueta: 'mat-date',
        claseGrid: 'col-6',
        nombre: 'Fechafinal',
        label_i18n: 'fechafinal',
        placeholder_i18n: 'fechafinal',
        requerido: true,
        tipo: 'date',
    },
    {
        etiqueta: 'selectmultiple',
        claseGrid: 'col-6',
        nombre: 'Idtipocategoria',
        label_i18n: 'idtipocategoria',
        placeholder_i18n: 'idtipocategoria',
        requerido: true,
        tipo: 'Tipocategoria',
        // key: 'Name',
        opciones: [],
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Presupuesto',
        label_i18n: 'presupuesto',
        placeholder_i18n: 'presupuesto',
        requerido: true,
        tipo: 'number',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Convenio',
        label_i18n: 'convenio',
        placeholder_i18n: 'convenio',
        requerido: true,
        tipo: 'number',
    },
    ],
}
