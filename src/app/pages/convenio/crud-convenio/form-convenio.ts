
export let FORM_CONVENIO = {
    titulo: 'Convenio',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'Convenio',
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
        nombre: 'Descripcion',
        label_i18n: 'descripcion',
        placeholder_i18n: 'descripcion',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Responsable',
        label_i18n: 'responsable',
        placeholder_i18n: 'responsable',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Correoresponsable',
        label_i18n: 'correoresponsable',
        placeholder_i18n: 'correoresponsable',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Enlace',
        label_i18n: 'enlace',
        placeholder_i18n: 'enlace',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'Idpaiscategoria',
        label_i18n: 'idpaiscategoria',
        placeholder_i18n: 'idpaiscategoria',
        requerido: true,
        tipo: 'Paiscategoria',
        key: 'Nombre',
        opciones: [],
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'Identidad',
        label_i18n: 'identidad',
        placeholder_i18n: 'identidad',
        requerido: true,
        tipo: 'Entidad',
        key: 'Nombre',
        opciones: [],
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'Idestados',
        label_i18n: 'idestados',
        placeholder_i18n: 'idestados',
        requerido: true,
        tipo: 'Estados',
        key: 'Nombre',
        opciones: [],
    },
    ],
}
