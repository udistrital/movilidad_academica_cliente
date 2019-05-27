
export let FORM_NIVELACADEMICO = {
    titulo: 'Nivelacademico',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'Nivelacademico',
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
