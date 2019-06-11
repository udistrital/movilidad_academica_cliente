# :ledger: Admin - Movilidad Académica ,CERI
Este repositorio se comporta como microservicio del proyecto de Movilidad_academica. En este repositorio se define la tecnología que se renderizara del lado del cliente.
Como componentes básicos cuenta con:
 * **ngxAdmin** ~ [link_documentación](https://github.com/akveo/ngx-admin)
 * **Angular 6.0**
 * **Bootstrap 4**
 * **Nebular Components**

<summary><h2> :writing_hand: Mockups</h2></summary>
<details>
  Los siguientes mockups grafican la estructura general de la aplicación, como sus principales vistas.
  Vista General: 
  <img src="/assets/general.png" alt="Mockup Vista General" />
  Vista Formularios: 
  <img src="/assets/Form.png" alt="Mockup Vista Formularios" />
  Vista Listados: 
  <img src="/assets/Listado.png" alt="Mockup Vista Listados" />
  Vista Formulario Convenio: 
  <img src="/assets/Convenio.png" alt="Mockup Vista Convenios" />

</details>
<summary><h2> :paintbrush: Paleta de colores</h2></summary>
<details>
  Basados en la paleta de colores de la plataforma acual del CERI y la página oficial de la Universidad Distrital se realiza la siguiente paleta de colores:
  Paleta CERI:
  <img src="/assets/PaletaCERI.png" alt="Paleta Colores CERI" />
  Paleta Colores UDistrital:
  <img src="/assets/PaletaUDistrital.png" alt="Paleta Colores UDIstrital" />
  Paleta de Colores Elegida:
  <img src="/assets/PaletaMovilidad.png" alt="Paleta Colores Elegida" />
</details>
<summary><h2> 🛠️ Configuracion del proyecto</h2></summary>
<details>
  - Clonar el proyecto del repositorio de git, configurar el repositorio remoto (github), e instalarlo localmente con 
  
  ```shell 
      npm install
  ```
  - 🚀 Correr el proyecto para verificar que las dependencias estan correctamente instaladas

  ```shell 
      ng serve
  ```
</details>
<summary><h2> :pick: Dependencias Utilizadas</h2></summary>
<details>
    Dependencias incluidas:

  - **Nebular:** (https://github.com/akveo/nebular)
  - **Angular 6**
  - **Bootstrap 4** 

  ### API MID
  - **movilidad_academica_mid:** este [api](https://github.com/udistrital/movilidad_academica_mid). se encarga de gestionar la logica de negocio relacionada con el manejo de informacion relacionada con los estudiantes/docentes entrantes y salientes.

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
</details>