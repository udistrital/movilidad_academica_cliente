// import { environment } from '../environments/environment';
export const Config = {
    LOCAL: {
         NUXEO: {	       
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',	                                       
        },	     
        WSO2_SERVICE: 'https://autenticacion.udistrital.edu.co/apioas/',	        
        DOCUMENTO_SERVICE: 'https://autenticacion.udistrital.edu.co/apioas/convenios_crud/v1/',
        CONVENIO_SERVICE: 'https://autenticacion.udistrital.edu.co/apioas/convenios_crud/v1/',
        MOVILIDAD_ACADEMICA_SERVICE: 'https://autenticacion.udistrital.edu.co/apioas/movilidad_academica_crud/v1/',
        MOVILIDAD_ACADEMICA_SERVICE_MID: 'https://autenticacion.udistrital.edu.co/apioas/movilidad_academica_mid/v1/',
        CAMPUS_MID: 'https://autenticacion.udistrital.edu.co/apioas/campus_mid_api/v1/',
        PERSONA_SERVICE: 'https://autenticacion.udistrital.edu.co/apioas/configuracion_crud_api/v1/',
        CONFIGURACION_SERVICE: 'https://autenticacion.udistrital.edu.co/apioas/configuracion_crud_api/v1/',
        NOTIFICACION_SERVICE: 'wss://autenticacion.udistrital.edu.co/apioas/notificacion_ws/v1/',
        CONF_MENU_SERVICE: 'https://autenticacion.udistrital.edu.co/apioas/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
        TOKEN: {
          AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co/oauth2/authorize',
          CLIENTE_ID: 'Aq41QJIDIL0_PUtu4rQ1djPW0O4a',
          RESPONSE_TYPE: 'id_token token',
          SCOPE: 'openid email role documento',
          REDIRECT_URL: 'http://10.20.0.254/movilidad_academica/',
          SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
          SIGN_OUT_REDIRECT_URL: 'http://10.20.0.254/movilidad_academica/',
        },
    },
};

export const GENERAL = {
    // ENTORNO: Config[environment.entorno],
    ENTORNO: Config['LOCAL'],
    // ENTORNO: 'LOCAL',
};
