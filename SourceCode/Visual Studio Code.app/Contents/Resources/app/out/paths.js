/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function getAppDataPath(t){switch(t){case"win32":return process.env.APPDATA||path.join(process.env.USERPROFILE,"AppData","Roaming");case"darwin":return path.join(os.homedir(),"Library","Application Support");case"linux":return process.env.XDG_CONFIG_HOME||path.join(os.homedir(),".config");default:throw new Error("Platform not supported")}}function getDefaultUserDataPath(t){return path.join(getAppDataPath(t),pkg.name)}var path=require("path"),os=require("os"),pkg=require("../package.json");exports.getAppDataPath=getAppDataPath,exports.getDefaultUserDataPath=getDefaultUserDataPath;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/02611b40b24c9df2726ad8b33f5ef5f67ac30b44/core/paths.js.map
