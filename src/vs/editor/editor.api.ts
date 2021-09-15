/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { EditorOptions, WrappingIndent, EditorAutoIndentStrategy } from 'vs/editor/common/config/editorOptions';
import { createMonacoBaseAPI } from 'vs/editor/common/standalone/standaloneBase';
import { createMonacoEditorAPI } from 'vs/editor/standalone/browser/standaloneEditor';
import { createMonacoLanguagesAPI } from 'vs/editor/standalone/browser/standaloneLanguages';
import { globals } from 'vs/base/common/platform';
import { FormattingConflicts } from 'vs/editor/contrib/format/format';
import { createMonacoExtraAPI } from 'vs/editor/standalone/browser/standaloneExtra';

// Set defaults for standalone editor
EditorOptions.wrappingIndent.defaultValue = WrappingIndent.None;
EditorOptions.glyphMargin.defaultValue = false;
EditorOptions.autoIndent.defaultValue = EditorAutoIndentStrategy.Advanced;
EditorOptions.overviewRulerLanes.defaultValue = 2;

// We need to register a formatter selector which simply picks the first available formatter.
// See https://github.com/microsoft/monaco-editor/issues/2327
FormattingConflicts.setFormatterSelector((formatter, document, mode) => Promise.resolve(formatter[0]));

const api = createMonacoBaseAPI();
api.editor = createMonacoEditorAPI();
api.languages = createMonacoLanguagesAPI();
api.extra = createMonacoExtraAPI();

export const CancellationTokenSource = api.CancellationTokenSource;
export const Emitter = api.Emitter;
export const KeyCode = api.KeyCode;
export const KeyMod = api.KeyMod;
export const Position = api.Position;
export const Range = api.Range;
export const Selection = api.Selection;
export const Uri = api.Uri;
export const Token = api.Token;
export const MarkdownString = api.MarkdownString;
export const Disposable = api.Disposable;
export const DisposableStore = api.DisposableStore;
export const ErrorHandler = api.ErrorHandler;
export const SelectionDirection = api.SelectionDirection;
export const MarkerSeverity = api.MarkerSeverity;
export const MarkerTag = api.MarkerTag;
export const MarkdownStringTextNewlineStyle = api.MarkdownStringTextNewlineStyle;
export const LogLevel = api.LogLevel;
export const errorHandler = api.errorHandler;

export const editor = api.editor;
export const languages = api.languages;
export const extra = api.extra;

if (globals.MonacoEnvironment?.globalAPI || (typeof define === 'function' && (<any>define).amd)) {
	self.monaco = api;
}

if (typeof self.require !== 'undefined' && typeof self.require.config === 'function') {
	self.require.config({
		ignoreDuplicateModules: [
			'vscode-languageserver-types',
			'vscode-languageserver-types/main',
			'vscode-languageserver-textdocument',
			'vscode-languageserver-textdocument/main',
			'vscode-nls',
			'vscode-nls/vscode-nls',
			'jsonc-parser',
			'jsonc-parser/main',
			'vscode-uri',
			'vscode-uri/index',
			'vs/basic-languages/typescript/typescript'
		]
	});
}
