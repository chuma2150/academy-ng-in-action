// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCsfF64JECmI1fulUXYIerv6M49IEd-DbQ',
    authDomain: 'ng-in-action.firebaseapp.com',
    databaseURL: 'https://ng-in-action.firebaseio.com',
    projectId: 'ng-in-action',
    storageBucket: 'ng-in-action.appspot.com',
    messagingSenderId: '911136048101'
  }
};
