/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var vscode_1 = require('vscode');
var TypeScriptDefinitionProvider = (function () {
    function TypeScriptDefinitionProvider(client) {
        this.tokens = [];
        this.client = client;
    }
    TypeScriptDefinitionProvider.prototype.provideDefinition = function (document, position, token) {
        var _this = this;
        var args = {
            file: this.client.asAbsolutePath(document.uri),
            line: position.line + 1,
            offset: position.character + 1
        };
        if (!args.file) {
            return Promise.resolve(null);
        }
        return this.client.execute('definition', args, token).then(function (response) {
            var locations = response.body;
            if (!locations || locations.length === 0) {
                return null;
            }
            return locations.map(function (location) {
                var resource = _this.client.asUrl(location.file);
                if (resource === null) {
                    return null;
                }
                else {
                    return new vscode_1.Location(resource, new vscode_1.Range(location.start.line - 1, location.start.offset - 1, location.end.line - 1, location.end.offset - 1));
                }
            });
        }, function (error) {
            _this.client.error("'definition' request failed with error.", error);
            return null;
        });
    };
    return TypeScriptDefinitionProvider;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TypeScriptDefinitionProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/02611b40b24c9df2726ad8b33f5ef5f67ac30b44/extensions/typescript/out/features/definitionProvider.js.map
