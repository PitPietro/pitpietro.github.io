"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
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
