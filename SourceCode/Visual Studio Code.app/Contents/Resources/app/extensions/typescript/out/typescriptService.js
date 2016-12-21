/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var semver = require('semver');
var API = (function () {
    function API(_versionString) {
        this._versionString = _versionString;
        this._version = semver.valid(_versionString);
        if (!this._version) {
            this._version = '1.0.0';
        }
        else {
            // Cut of any prerelease tag since we sometimes consume those
            // on purpose.
            var index = _versionString.indexOf('-');
            if (index >= 0) {
                this._version = this._version.substr(0, index);
            }
        }
    }
    Object.defineProperty(API.prototype, "versionString", {
        get: function () {
            return this._versionString;
        },
        enumerable: true,
        configurable: true
    });
    API.prototype.has1xFeatures = function () {
        return semver.gte(this._version, '1.0.0');
    };
    API.prototype.has203Features = function () {
        return semver.gte(this._version, '2.0.3');
    };
    API.prototype.has206Features = function () {
        return semver.gte(this._version, '2.0.6');
    };
    return API;
}());
exports.API = API;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/02611b40b24c9df2726ad8b33f5ef5f67ac30b44/extensions/typescript/out/typescriptService.js.map
