
export let FORM_ORGANIZACION = {
    titulo: 'Organizacion',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'Organizacion',
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
        nombre: 'Nit',
        label_i18n: 'nit',
        placeholder_i18n: 'nit',
        requerido: true,
        tipo: 'text',
    },
    ],
}
