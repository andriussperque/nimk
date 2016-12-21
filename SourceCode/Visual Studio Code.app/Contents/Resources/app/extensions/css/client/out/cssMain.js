/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var path = require('path');
var vscode_1 = require('vscode');
var vscode_languageclient_1 = require('vscode-languageclient');
var colorDecorators_1 = require('./colorDecorators');
var nls = require('vscode-nls');
var localize = nls.loadMessageBundle(__filename);
var ColorSymbolRequest;
(function (ColorSymbolRequest) {
    ColorSymbolRequest.type = { get method() { return 'css/colorSymbols'; } };
})(ColorSymbolRequest || (ColorSymbolRequest = {}));
// this method is called when vs code is activated
function activate(context) {
    // The server is implemented in node
    var serverModule = context.asAbsolutePath(path.join('server', 'out', 'cssServerMain.js'));
    // The debug options for the server
    var debugOptions = { execArgv: ['--nolazy', '--debug=6004'] };
    // If the extension is launch in debug mode the debug server options are use
    // Otherwise the run options are used
    var serverOptions = {
        run: { module: serverModule, transport: vscode_languageclient_1.TransportKind.ipc },
        debug: { module: serverModule, transport: vscode_languageclient_1.TransportKind.ipc, options: debugOptions }
    };
    // Options to control the language client
    var clientOptions = {
        documentSelector: ['css', 'less', 'scss'],
        synchronize: {
            configurationSection: ['css', 'scss', 'less']
        },
        initializationOptions: {}
    };
    // Create the language client and start the client.
    var client = new vscode_languageclient_1.LanguageClient('css', localize(0, null), serverOptions, clientOptions);
    var disposable = client.start();
    // Push the disposable to the context's subscriptions so that the
    // client can be deactivated on extension deactivation
    context.subscriptions.push(disposable);
    var colorRequestor = function (uri) {
        return client.sendRequest(ColorSymbolRequest.type, uri).then(function (ranges) { return ranges.map(vscode_languageclient_1.Protocol2Code.asRange); });
    };
    disposable = colorDecorators_1.activateColorDecorations(colorRequestor, { css: true, scss: true, less: true });
    context.subscriptions.push(disposable);
    vscode_1.languages.setLanguageConfiguration('css', {
        wordPattern: /(#?-?\d*\.\d\w*%?)|(::?[\w-]*(?=[^,{;]*[,{]))|(([@#.!])?[\w-?]+%?|[@#!.])/g
    });
    vscode_1.languages.setLanguageConfiguration('less', {
        wordPattern: /(#?-?\d*\.\d\w*%?)|(::?[\w-]+(?=[^,{;]*[,{]))|(([@#.!])?[\w-?]+%?|[@#!.])/g
    });
    vscode_1.languages.setLanguageConfiguration('scss', {
        wordPattern: /(#?-?\d*\.\d\w*%?)|(::?[\w-]*(?=[^,{;]*[,{]))|(([@$#.!])?[\w-?]+%?|[@#!$.])/g
    });
    vscode_1.commands.registerCommand('_css.applyCodeAction', applyCodeAction);
}
exports.activate = activate;
function applyCodeAction(uri, documentVersion, edits) {
    var textEditor = vscode_1.window.activeTextEditor;
    if (textEditor && textEditor.document.uri.toString() === uri) {
        if (textEditor.document.version !== documentVersion) {
            vscode_1.window.showInformationMessage("CSS fix is outdated and can't be applied to the document.");
        }
        textEditor.edit(function (mutator) {
            for (var _i = 0, edits_1 = edits; _i < edits_1.length; _i++) {
                var edit = edits_1[_i];
                mutator.replace(vscode_languageclient_1.Protocol2Code.asRange(edit.range), edit.newText);
            }
        }).then(function (success) {
            if (!success) {
                vscode_1.window.showErrorMessage('Failed to apply CSS fix to the document. Please consider opening an issue with steps to reproduce.');
            }
        });
    }
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/02611b40b24c9df2726ad8b33f5ef5f67ac30b44/extensions/css/client/out/cssMain.js.map
