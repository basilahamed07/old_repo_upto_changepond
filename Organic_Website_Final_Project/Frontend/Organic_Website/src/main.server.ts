<<<<<<< HEAD
export { AppServerModule as default } from './app/app.module.server';
=======
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
>>>>>>> a21b3a3a23108ac3abda5728b236ff742aada292
