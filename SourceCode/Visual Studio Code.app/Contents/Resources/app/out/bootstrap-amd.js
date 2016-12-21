/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function uriFromPath(e){var r=path.resolve(e).replace(/\\/g,"/");return r.length>0&&"/"!==r.charAt(0)&&(r="/"+r),encodeURI("file://"+r)}var path=require("path"),loader=require("./vs/loader"),rawNlsConfig=process.env.VSCODE_NLS_CONFIG,nlsConfig=rawNlsConfig?JSON.parse(rawNlsConfig):{availableLanguages:{}};loader.config({baseUrl:uriFromPath(__dirname),catchError:!0,nodeRequire:require,nodeMain:__filename,"vs/nls":nlsConfig}),nlsConfig.pseudo&&loader(["vs/nls"],function(e){e.setPseudoTranslation(nlsConfig.pseudo)}),exports.bootstrap=function(e){e&&loader([e],function(){},function(e){console.error(e)})};
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/02611b40b24c9df2726ad8b33f5ef5f67ac30b44/core/bootstrap-amd.js.map
