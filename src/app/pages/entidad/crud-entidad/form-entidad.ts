
export let FORM_ENTIDAD = {
    titulo: 'Entidad',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'Entidad',
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
        nombre: 'Direccion',
        label_i18n: 'direccion',
        placeholder_i18n: 'direccion',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'input',
        claseGrid: 'col-6',
        nombre: 'Correo',
        label_i18n: 'correo',
        placeholder_i18n: 'correo',
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
        tipo: 'text',
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
        nombre: 'Organizacion',
        label_i18n: 'organizacion',
        placeholder_i18n: 'organizacion',
        requerido: true,
        tipo: 'text',
    },
    {
        etiqueta: 'select',
        claseGrid: 'col-6',
        nombre: 'Idnaturaleza',
        label_i18n: 'idnaturaleza',
        placeholder_i18n: 'idnaturaleza',
        requerido: true,
        tipo: 'Naturaleza',
        // key: 'Name',
        opciones: [],
    },
    ],
}
