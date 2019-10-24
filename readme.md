# Guía de Webpack 4 para desarrollo on Cloud
## (web app sin entorno local)
## 1- Instalación y configuración de Typescript
*# Instalar Typescript --> [documentación](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)*
```
npm i -D typescript
```
*# Generación del archivo tsconfig.json*
```
tsc --init
```
*Setear la configuración de typescript para nuestro proyecto --> [documentación](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)*
``` js
{
  "compileOnSave": true,
  "compilerOptions": {
    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    "sourceMap": true,                        /* Generates corresponding '.map' file. */
    //"outFile": "./app_paris/cartridge/static/default/js/new-checkout.js",                     /* Concatenate and emit output to single file. */
    //"outDir": "./app_paris/cartridge/static/default/js/new-checkout",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    "removeComments": true,                   /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    "noImplicitAny": false,                   /* Raise error on expressions and declarations with an implied 'any' type. */
    "strictNullChecks": false,                /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    "alwaysStrict": true,                     /* Parse in strict mode and emit "use strict" for each source file. */
    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    "noImplicitReturns": true,                /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */
    /* Module Resolution Options */
    "moduleResolution": "node",               /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,
    /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */
    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */
    /* Experimental Options */
    "experimentalDecorators": true,           /* Enables experimental support for ES7 decorators. */
    "emitDecoratorMetadata": true,            /* Enables experimental support for emitting type metadata for decorators. */
    "baseUrl": "./",
    "paths": {
      "@app/*": [
        "app/ts/*"
      ]
    }
  },
  "include": [
    "app/ts/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```
*# Generación del archivo tslint.json*
```
tslint --init
```
*Setear la configuración de tslint para nuestro proyecto --> [documentación](https://palantir.github.io/tslint)**
``` js
{
    "extends": "tslint:recommended",
    "rules": {
        "max-line-length": {
            "options": [
                180
            ]
        },
        "eofline": false,
        "arrow-parens": [
            true,
            "ban-single-arg-parens"
        ],
        "no-empty": false,
        "object-literal-sort-keys": false,
        "array-type": [
            true,
            "generic"
        ],
        "typedef": [
            true,
            "parameter",
            "call-signature",
            "property-declaration",
            "variable-declaration",
            "member-variable-declaration",
            "object-destructuring"
        ],
        "member-access": [
            true,
            "no-public"
        ],
        "trailing-comma": [
            false,
            {
                "multiline": "always",
                "singleline": "never"
            }
        ],
        "quotemark": [
            true,
            "single",
            "jsx-double"
        ],
        "semicolon": [
            true,
            "always",
            "ignore-bound-class-methods"
        ],
        "new-parens": true,
        "no-arg": true,
        "no-bitwise": true,
        "no-conditional-assignment": true,
        "no-consecutive-blank-lines": false,
        "no-console": {
            "severity": "warning",
            "options": [
                "debug",
                "info",
                "log",
                "time",
                "timeEnd",
                "trace"
            ]
        },
        "member-ordering": [
            true,
            {
                "order": [
                    "private-static-field",
                    "private-instance-field",
                    "private-constructor",
                    "public-static-field",
                    "public-instance-field",
                    "public-constructor",
                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method"
                ],
                "alphabetize": false
            }
        ]
    },
    "jsRules": {
        "max-line-length": {
            "options": [
                180
            ]
        }
    }
}
```
## 2- Instalación de webpack, webpack CLI, plugins, loaders generales y dependencias de desarrollo
+ Webpack y webpack CLI --> [documentación](https://webpack.js.org/guides/getting-started/)

    ```
    npm i -D webpack webpack-cli
    ```
+ Dependencia para trabajar preprocesador sass para NodeJs --> [documentación](https://github.com/sass/node-sass)

    ```
    npm i -D node-sass
    ```
+ Loader para cargar, compilar y transpilar codigo fuente Typescript en JS  --> [documentación](https://webpack.js.org/guides/typescript/#loader)

    ```
    npm i -D ts-loader
    ```
+ Dependencia para manejar rutas con typescript --> [documentación](https://github.com/dividab/tsconfig-paths-webpack-plugin)

    ```
    npm i -D tsconfig-paths-webpack-plugin
    ```
+ Loader css-loader interpreta @import y url () como import / require () --> [documentación](https://webpack.js.org/loaders/css-loader/#root)

    ```
    npm i -D css-loader
    ```
+ Loader para cargar, compilar y transpilar SCSS en CSS --> [documentación](https://webpack.js.org/loaders/sass-loader/#root)

    ```
    npm i -D sass-loader
    ```
+ Plugin para extraer codigo CSS de diferentes fuentes y construir un solo archivo de salida --> [documentación](https://webpack.js.org/plugins/mini-css-extract-plugin/#root)

    ```
    npm i -D mini-css-extract-plugin
    ```
+ Loader para revolser diferentes tipos de archivos e incorporarlos al archivo de salida --> [documentación](https://webpack.js.org/loaders/file-loader/#root)

    ```
    npm i -D file-loader
    ```    
+ Dependencia core del compilador de Babel --> [documentación](https://babeljs.io/docs/en/usage)

    ```
    npm i -D @babel/core
    ```
+ Dependencia de BABEL que permite setear las ultimas versiones de JS sin tener que configurarlas --> [documentación](https://babeljs.io/docs/en/babel-preset-env#docsNav)

    ```
    npm i -D @babel/preset-env
    ```
+ Dependencia de BABEL para transpilar TS a JS --> [documentación](https://babeljs.io/docs/en/babel-preset-typescript#docsNav)

    ```
    npm i -D @babel/preset-typescript
    ```
+ Dependencia de Webpack para transpilar TS a JS --> [documentación](https://webpack.js.org/loaders/babel-loader/#root)

    ```
    npm i -D babel-loader
    ```
+ Plugin para limpiar carpeta de archivos de salida cada vez que se ejecuta el proceso de webpack --> [documentación](https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder)

    ```
    npm i -D clean-webpack-plugin
    ```
+ Plugin para minificar archivos JS de salida a producción --> [documentación](https://webpack.js.org/plugins/terser-webpack-plugin/#root)

    ```
    npm i -D terser-webpack-plugin
    ```
+ Plugin para minificar archivos CSS de salida a producción --> [documentación](https://github.com/NMFR/optimize-css-assets-webpack-plugin)

    ```
    npm i -D optimize-css-assets-webpack-plugin
    ```     
+ Dependencia para unir distintas configuraciones de Webpack --> [documentación](https://github.com/survivejs/webpack-merge)

    ```
    npm i -D webpack-merge
    ```
+ Dependencia generar solo archivos de estilo por entry (no genera archivo JS por cada entry) --> [documentación](https://github.com/fqborges/webpack-fix-style-only-entries)

    ```
    npm i -D webpack-fix-style-only-entries
    ```
+ Dependencia para visualizar dashboard de estadisticas de los archivos de salida (input stats.json) --> [documentación](https://github.com/FormidableLabs/webpack-dashboard)

    ```
    npm i -D webpack-dashboard
    ```

## 3- Configuración de Webpack
*# Generación del archivo general "webpack.config.js"*
```
# create file with webpack-cli
webpack init

# or

# create file manually
touch webpack.common.js
```
*Setear la configuración común de webpack para nuestro proyecto --> [documentación](https://webpack.js.org/concepts/configuration/)*
``` js
const path = require('path');
const APP_DIR = path.resolve(__dirname, 'app');
const WebpackDashboard = require('webpack-dashboard/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsConfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: APP_DIR,
    entry: {
        app1: [
            APP_DIR.concat('/ts/app1.ts'),
            APP_DIR.concat('/scss/style1.scss')
        ],
        app2: [
            APP_DIR.concat('/ts/app2.ts'),
            APP_DIR.concat('/scss/style2.scss')
        ],
        app3: [
            APP_DIR.concat('/ts/app1.ts'),
            APP_DIR.concat('/scss/style1.scss'),
            APP_DIR.concat('/ts/app2.ts'),
            APP_DIR.concat('/scss/style2.scss')
        ],
        oneStyle1: APP_DIR.concat('/scss/style1.scss'),
        allStyles: [
            APP_DIR.concat('/scss/style1.scss'),
            APP_DIR.concat('/scss/style2.scss')
        ],
        oneTs: APP_DIR.concat('/ts/app1.ts'),
        allTs: [
            APP_DIR.concat('/ts/app1.ts'),
            APP_DIR.concat('/ts/app2.ts')
        ],
    },
    output: {
        filename: 'js/[name].js',
        path: APP_DIR.concat('/dist'),
        chunkFilename: '[id].js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            new TsConfigPathsWebpackPlugin(),
        ]
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('node-sass'),
                    }
                }
            ],
        }, ]
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new WebpackDashboard(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
    ]
};
```
*# Generación del archivo para entorno de desarrollo "webpack.dev.js"*
```
# create file manually
touch webpack.dev.js
```
*Setear la configuración de desarrollo de webpack para nuestro proyecto*
``` js
const WebpackMerge = require('webpack-merge');
const WebpackConfig = require('./webpack.config.js');

module.exports = WebpackMerge(WebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.ts?$/,
            use: [
                'ts-loader'
            ],
            exclude: /node_modules/
        }]
    },
});
```
*# Generación del archivo para entorno de producción "webpack.prod.js"*
```
# create file manually
touch webpack.prod.js
```
*Setear la configuración de producción de webpack para nuestro proyecto*
``` js
const WebpackMerge = require('webpack-merge');
const WebpackConfig = require('./webpack.config.js');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = WebpackMerge(WebpackConfig, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.ts?$/,
            use: [
                'babel-loader',
                'ts-loader'
            ],
            exclude: /node_modules/
        }]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        // we want terser to parse ecma 8 code. However, we don't want it
                        // to apply any minfication steps that turns valid ecma 5 code
                        // into invalid ecma 5 code. This is why the 'compress' and 'output'
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        inline: 2,
                    },
                    mangle: {
                        // Find work around for Safari 10+
                        // Bug: https://bugs.webkit.org/show_bug.cgi?id=171041
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true
                    },
                },
                // Use multi-process parallel running to improve the build speed
                parallel: true,
                // Enable file caching
                cache: true,
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', {
                        discardComments: {
                            removeAll: true
                        }
                    }],
                }
            })
        ],
    },
});
```
## 4- Configuración de Babel
*# Generación del archivo de configuración ".babelrc" (generar este archivo en la raiz del proyecto.)*
```
# create file manually
touch .babelrc
```
*Setear la configuración de Babel para nuestro proyecto --> [documentación](https://babeljs.io/docs/en/babel-preset-typescript#docsNav)*
```
{
    "presets": [
        "@babel/preset-env"
    ],
    "env": {
        "development": {
            "presets": ["@babel/preset-typescript"]
        }
    }
}
```
*Añadir configuración a archivo "package.json" para que Babel transpile JS navegadores determinados*
```
"browserslist": [
    "last 2 version",
    "> 0.25%",
    "maintained node versions",
    "not dead"
]
```
## 5- Generar archivo de estadisticas de los archivos de salida.
*archivo sirve como input para visualizadores web --> [web-view](https://webpack.js.org/guides/code-splitting/#bundle-analysis)*
```
webpack --profile --json > stats.json
```
## Resume de la instalación de las dependencias
```
npm i -D typescript \
        webpack \
        webpack-cli \
        node-sass \
        ts-loader \
        tsconfig-paths-webpack-plugin \
        css-loader \
        sass-loader \
        mini-css-extract-plugin \
        file-loader \
        @babel/core \
        @babel/preset-env \
        @babel/preset-typescript \
        babel-loader \
        clean-webpack-plugin \
        terser-webpack-plugin \
        optimize-css-assets-webpack-plugin \
        webpack-merge \
        webpack-fix-style-only-entries \
        webpack-dashboard
```
