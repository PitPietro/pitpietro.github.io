"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
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
