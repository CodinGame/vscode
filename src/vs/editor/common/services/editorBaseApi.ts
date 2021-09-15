/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CancellationTokenSource } from 'vs/base/common/cancellation';
import { Emitter } from 'vs/base/common/event';
import { KeyChord, KeyMod as ConstKeyMod } from 'vs/base/common/keyCodes';
import { URI } from 'vs/base/common/uri';
import { Position } from 'vs/editor/common/core/position';
import { Range } from 'vs/editor/common/core/range';
import { Selection } from 'vs/editor/common/core/selection';
import { EncodedTokenizationResult, Token, TokenizationResult } from 'vs/editor/common/languages';
import * as standaloneEnums from 'vs/editor/common/standalone/standaloneEnums';
import { MarkdownString } from 'vs/base/common/htmlContent';
import { Disposable, DisposableStore } from 'vs/base/common/lifecycle';
import { ErrorHandler, errorHandler } from 'vs/base/common/errors';
import { AbstractLogger, ConsoleLogger } from 'vs/platform/log/common/log';

export class KeyMod {
	public static readonly CtrlCmd: number = ConstKeyMod.CtrlCmd;
	public static readonly Shift: number = ConstKeyMod.Shift;
	public static readonly Alt: number = ConstKeyMod.Alt;
	public static readonly WinCtrl: number = ConstKeyMod.WinCtrl;

	public static chord(firstPart: number, secondPart: number): number {
		return KeyChord(firstPart, secondPart);
	}
}

export function createMonacoBaseAPI(): typeof monaco {
	return {
		editor: undefined!, // undefined override expected here
		languages: undefined!, // undefined override expected here
		extra: undefined!, // undefined override expected here
		CancellationTokenSource: CancellationTokenSource,
		Emitter: Emitter,
		KeyCode: standaloneEnums.KeyCode,
		KeyMod: KeyMod,
		Position: Position,
		Range: Range,
		Selection: <any>Selection,
		Uri: <any>URI,
		Token: Token,

		// classes
		MarkdownString: <any>MarkdownString,
		MarkdownStringTextNewlineStyle: standaloneEnums.MarkdownStringTextNewlineStyle,
		Disposable: <any>Disposable,
		DisposableStore: <any>DisposableStore,
		ErrorHandler: ErrorHandler,
		AbstractLogger: <any>AbstractLogger,
		ConsoleLogger: <any>ConsoleLogger,
		TokenizationResult: <any>TokenizationResult,
		EncodedTokenizationResult: EncodedTokenizationResult,

		// enums
		SelectionDirection: standaloneEnums.SelectionDirection,
		MarkerSeverity: standaloneEnums.MarkerSeverity,
		MarkerTag: standaloneEnums.MarkerTag,
		LogLevel: standaloneEnums.LogLevel,

		// Constants
		errorHandler
	};
}
