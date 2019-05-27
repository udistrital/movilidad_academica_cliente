
export let FORM_TIPODOCUMENTO = {
    titulo: 'Tipodocumento',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'Tipodocumento',
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
    ],
}
