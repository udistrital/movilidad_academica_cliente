
export let FORM_PAIS = {
    titulo: 'Pais',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'Pais',
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
        etiqueta: 'checkbox',
        claseGrid: 'col-6',
        nombre: 'Activo',
        label_i18n: 'activo',
        placeholder_i18n: 'activo',
        requerido: true,
        tipo: 'checkbox',
    },
    ],
}
