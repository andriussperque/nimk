/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var vscode_1 = require('vscode');
var TypeScriptReferenceSupport = (function () {
    function TypeScriptReferenceSupport(client) {
        this.tokens = [];
        this.client = client;
    }
    TypeScriptReferenceSupport.prototype.provideReferences = function (document, position, options, token) {
        var _this = this;
        var args = {
            file: this.client.asAbsolutePath(document.uri),
            line: position.line + 1,
            offset: position.character + 1
        };
        if (!args.file) {
            return Promise.resolve([]);
        }
        var apiVersion = this.client.apiVersion;
        return this.client.execute('references', args, token).then(function (msg) {
            var result = [];
            var refs = msg.body.refs;
            for (var i = 0; i < refs.length; i++) {
                var ref = refs[i];
                if (!options.includeDeclaration && apiVersion.has203Features() && ref.isDefinition) {
                    continue;
                }
                var url = _this.client.asUrl(ref.file);
                var location = new vscode_1.Location(url, new vscode_1.Range(ref.start.line - 1, ref.start.offset - 1, ref.end.line - 1, ref.end.offset - 1));
                result.push(location);
            }
            return result;
        }, function (err) {
            _this.client.error("'references' request failed with error.", err);
            return [];
        });
    };
    return TypeScriptReferenceSupport;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TypeScriptReferenceSupport;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/02611b40b24c9df2726ad8b33f5ef5f67ac30b44/extensions/typescript/out/features/referenceProvider.js.map
