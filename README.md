# Blog

## Technologies used
- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io)
- [Angular FlexLayout](https://github.com/angular/flex-layout)
- [Scully](https://scully.io/)

## Generate Blog Pages from .md

The 1<sup>st</sup> step is to build the static content of the website:
```bash
ng build
```

The 2<sup>nd</sup> step is to generate the route and, at the same time, scan for new routes: 
```bash
npm run scully -- --scanRoutes
```

The 3<sup>rd</sup> step is to serve the static website using:
```bash
npm run scully:serve
```

It will give you an output similar to:
```bash
> pitpietro@0.0.0 scully:serve
> npx scully serve --

using plugins from folder "./scully"
starting static server
Scully static server started on "http://localhost:1668/"
Angular distribution server started on "http://localhost:1864/"
```

Scully suggest opening your browser to port [1668](http://localhost:1668/) but I did not find any difference with the Angular [1864](http://localhost:1864/) port.
