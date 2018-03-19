___
![Bradmax][bradmaxLogo]
![AngularJs][angularJsLogo]
___
Repository contains [bradmax player][bradmax] AngularJs modules.
___
## Npm submodules:
| name | npm package | language | module | description |
|:---:|:---|:---:|:---:|:---|
| `gorilla` | [@bradmax/player-ag/gorilla][npm-player-ag] | *js* | *CommonJs+AngularJs* | **AngularJs** module with [bradmax player][bradmax] **gorilla** skin. |
| `mole`    | [@bradmax/player-ag/mole][npm-player-ag]    | *js* | *CommonJs+AngularJs* | **AngularJs** module with [bradmax player][bradmax] **mole** skin.    |
| `snake`   | [@bradmax/player-ag/snake][npm-player-ag]   | *js* | *CommonJs+AngularJs* | **AngularJs** module with [bradmax player][bradmax] **snake** skin.   |
| `zebra`   | [@bradmax/player-ag/zebra][npm-player-ag]   | *js* | *CommonJs+AngularJs* | **AngularJs** module with [bradmax player][bradmax] **zebra** skin.   |
___
## Example project:
- [bradmax-com/bradmax-player-ag-example](https://github.com/bradmax-com/bradmax-player-ag-example) : angular js application.
___
## Usage:
### 1. Include bradmax player ag in your app module:
```
angular
 .module('myApp', [
  'bradmax.player.ag.gorilla', // if you want bradmax player with 'Gorilla' skin.
  'bradmax.player.ag.mole',    // if you want bradmax player with 'Mole' skin.
  'bradmax.player.ag.snake',   // if you want bradmax player with 'Snake' skin.
  'bradmax.player.ag.zebra',   // if you want bradmax player with 'Zebra' skin.
 ])
```
#### If bradmax player configuration is set as angular constant named `BRADMAX_PLAYER_CONFIGURATION`:
```
angular
 .module('myApp', [...])
 .constant('BRADMAX_PLAYER_CONFIGURATION', CONFIG_JSON);
```
*Replace `CONFIG_JSON` with valid [bradmax player configuration][bradmax-doc-config] json object.*

***NOTE:** angular constant means single configuration for every player.*
### 2. Include bradmax player ag in app html:
- add [bradmax player][bradmax] sources
```
<!-- gorilla skin -->
<script src="PATH_TO_NODE_MODULES_DIR/@bradmax/player-ag/gorilla/index.js"></script>

<!-- mole skin -->
<script src="PATH_TO_NODE_MODULES_DIR/@bradmax/player-ag/mole/index.js"></script>

<!-- snake skin -->
<script src="PATH_TO_NODE_MODULES_DIR/@bradmax/player-ag/snake/index.js"></script>

<!-- zebra skin -->
<script src="PATH_TO_NODE_MODULES_DIR/@bradmax/player-ag/zebra/index.js"></script>
```
*Replace `PATH_TO_NODE_MODULES_DIR` with relative path pointing to directory where yarn install dependencies, usually `node_modules` in project root dir.*
- [bradmax player configuration][bradmax-doc-config] as angular constant `BRADMAX_PLAYER_CONFIGURATION`:
```
<!-- gorilla skin -->
<bradmax-player-gorilla></bradmax-player-gorilla>

<!-- mole skin -->
<bradmax-player-mole></bradmax-player-mole>

<!-- snake skin -->
<bradmax-player-snake></bradmax-player-snake>

<!-- zebra skin -->
<bradmax-player-zebra></bradmax-player-zebra>
```
- [bradmax player configuration][bradmax-doc-config] as inner html *( stringified json object inside player html tag )*:
```
<!-- gorilla skin -->
<bradmax-player-gorilla>CONFIG_JSON_STRING</bradmax-player-gorilla>

<!-- mole skin -->
<bradmax-player-mole>CONFIG_JSON_STRING</bradmax-player-mole>

<!-- snake skin -->
<bradmax-player-snake>CONFIG_JSON_STRING</bradmax-player-snake>

<!-- zebra skin -->
<bradmax-player-zebra>CONFIG_JSON_STRING</bradmax-player-zebra>
```
*Replace `CONFIG_JSON_STRING` with valid stringified [bradmax player configuration][bradmax-doc-config] json object.*
- url to [bradmax player configuration][bradmax-doc-config] json file:
```
<!-- gorilla skin -->
<bradmax-player-gorilla config-url="URL_TO_CONFIG"></bradmax-player-gorilla>

<!-- mole skin -->
<bradmax-player-mole config-url="URL_TO_CONFIG"></bradmax-player-mole>

<!-- snake skin -->
<bradmax-player-snake config-url="URL_TO_CONFIG"></bradmax-player-snake>

<!-- zebra skin -->
<bradmax-player-zebra config-url="URL_TO_CONFIG"></bradmax-player-zebra>
```
*Replace `URL_TO_CONFIG` with url pointing to valid [bradmax player configuration][bradmax-doc-config] json file*
___
#### License MIT 
___
More info @ [bradmax.com][bradmax]

[bradmax]: https://bradmax.com
[bradmax-doc-config]: https://bradmax.com/static/player-doc/configuration.html
[npm-player-ag]: https://npmjs.com/package/bradmax-player-ag
[npm-player-ng]: https://npmjs.com/package/bradmax-player-ng
[npm-player-rxjs]: https://npmjs.com/package/bradmax-player-rxjs
[npm-player-js]: https://npmjs.com/package/bradmax-player-js
[git-player-ag]: https://github.com/bradmax-com/bradmax-player-ag
[git-player-ag-example]: https://github.com/bradmax-com/bradmax-player-ag-example
[git-player-ng]: https://github.com/bradmax-com/bradmax-player-ng
[git-player-ng-example]: https://github.com/bradmax-com/bradmax-player-ng-example
[git-player-rxjs]: https://github.com/bradmax-com/bradmax-player-rxjs
[git-player-rx-example]: https://github.com/bradmax-com/bradmax-player-rx-example
[git-player-js]: https://github.com/bradmax-com/bradmax-player-ag

[bradmaxLogo]: ./assets/md/bradmax.svg
[angularJsLogo]: ./assets/md/ag.svg
