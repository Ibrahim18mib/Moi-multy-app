import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

declare global {
  interface Window {
    ipcway: {
      minimize: () => void;
      maximize: () => void;
      close: () => void;
      updateMessage: (callback: () => void) => void;
      appRouter(data: any): () => void;
      closeSubApp: () => void;
    };
  }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
