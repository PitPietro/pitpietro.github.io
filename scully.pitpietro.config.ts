import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "pitpietro",
  outDir: './dist/static',
  routes: {
    '/blog/:postID': {
      type: 'contentFolder',
      postID: {
        folder: './blog'
      }
    },
    '/dev/:id': {
      type: 'contentFolder',
      id: {
        folder: "./markdown-files/dev"
      }
    },
    '/os/:id': {
      type: 'contentFolder',
      id: {
        folder: "./markdown-files/os"
      }
    },
  }
};
