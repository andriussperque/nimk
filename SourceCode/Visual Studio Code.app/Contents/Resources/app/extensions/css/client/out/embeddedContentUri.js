/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var vscode_1 = require('vscode');
exports.EMBEDDED_CONTENT_SCHEME = 'embedded-content';
function isEmbeddedContentUri(virtualDocumentUri) {
    return virtualDocumentUri.scheme === exports.EMBEDDED_CONTENT_SCHEME;
}
exports.isEmbeddedContentUri = isEmbeddedContentUri;
function getEmbeddedContentUri(parentDocumentUri, embeddedLanguageId) {
    return new vscode_1.Uri().with({ scheme: exports.EMBEDDED_CONTENT_SCHEME, authority: embeddedLanguageId, path: '/' + encodeURIComponent(parentDocumentUri) + '.' + embeddedLanguageId });
}
exports.getEmbeddedContentUri = getEmbeddedContentUri;
;
function getHostDocumentUri(virtualDocumentUri) {
    var languageId = virtualDocumentUri.authority;
    var path = virtualDocumentUri.path.substring(1, virtualDocumentUri.path.length - languageId.length - 1); // remove leading '/' and new file extension
    return decodeURIComponent(path);
}
exports.getHostDocumentUri = getHostDocumentUri;
;
function getEmbeddedLanguageId(virtualDocumentUri) {
    return virtualDocumentUri.authority;
}
exports.getEmbeddedLanguageId = getEmbeddedLanguageId;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/02611b40b24c9df2726ad8b33f5ef5f67ac30b44/extensions/css/client/out/embeddedContentUri.js.map
