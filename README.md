## Configuracion del proyecto

- Clonar el proyecto del repositorio de git, configurar el repositorio remoto (github), e instalarlo localmente con 
```shell 
    npm install
```
- Correr el proyecto para verificar que las dependencias estan correctamente instaladas

```shell 
    ng serve
```
## Dependencias Utilizadas
- **Nebular:** (https://github.com/akveo/nebular)
- **Angular**
- **Boostrap 4** 

### API MID
- **movilidad_academica_mid:** este [api](https://github.com/udistrital/movilidad_academica_mid. se encarga de gestionar la logica de negocio relacionada con el manejo de informacion relacionada con los estudiantes/docentes entrantes y salientes

### API CRUD
- **movilidad_academica_crud:** este [api](https://github.com/udistrital/movilidad_academica_crud). se encarga de gestionar las tablas del esquema de .....

### Herramientas usadas
- **ngxGenerator:** este [generador](https://github.com/BOTOOM/ngxGenerator) se encarga de crear una un proyecto con las caracteristicas descritas en el repositorio.
- **ngx-admin:** este [template](https://github.com/akveo/ngx-admin) es el que utiliza ngxGenerator, esta basado en Angular 7+, Bootstrap 4 y Nebular.

### Paleta de colores

### Variables de entorno
```typescript 
    export const Config = {
    LOCAL: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        DOCUMENTO_SERVICE: 'http://localhost:8094/v1/',
        MOVILIDAD_ACADEMICA_SERVICE: 'http://localhost:8080/v1/',
        CONFIGURACION_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/configuracion_crud_api/v1/',
        NOTIFICACION_SERVICE: 'ws://pruebasapi.intranetoas.udistrital.edu.co:8116/ws/join',
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
          CLIENTE_ID: '3Idp5LUlnZY7cOV10NaLuyRfzooa',
          RESPONSE_TYPE: 'id_token token',
          SCOPE: 'openid email role documento',
          REDIRECT_URL: 'http://localhost:4200/',
          SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
          SIGN_OUT_REDIRECT_URL: 'http://localhost:4200/',
        },
    },
};
```
