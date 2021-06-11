import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "pitpietro",
  outDir: './dist/static',
  routes: {
    '/os/:id': {
      type: 'contentFolder',
      id: {
        folder: "./markdown-files/os"
      }
    },
  }
};
