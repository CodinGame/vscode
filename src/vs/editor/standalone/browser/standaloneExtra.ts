/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as standaloneEnums from 'vs/editor/common/standalone/standaloneEnums';
import { setSnippetSuggestSupport, getSnippetSuggestSupport, CompletionItem as SuggestCompletionItem } from 'vs/editor/contrib/suggest/suggest';
import { parseSnippet, Snippet, snippetScopeSelect } from 'vs/workbench/contrib/snippets/browser/snippetsFile';
import { SimpleKeybinding, ChordKeybinding, ResolvedKeybinding, ResolvedKeybindingPart } from 'vs/base/common/keybindings';
import { KeyCodeUtils } from 'vs/base/common/keyCodes';
import { SnippetCompletion, SnippetCompletionProvider } from 'vs/workbench/contrib/snippets/browser/snippetCompletionProvider';
import { ExtensionIdentifier } from 'vs/platform/extensions/common/extensions';
import { handleConfig as handleLanguageConfiguration } from 'vs/workbench/contrib/codeEditor/browser/languageConfigurationExtensionPoint';
import { VS_DARK_THEME, VS_HC_THEME, VS_LIGHT_THEME } from 'vs/workbench/services/themes/common/workbenchThemeService';
import { TMGrammarFactory } from 'vs/workbench/services/textMate/common/TMGrammarFactory';
import { Extensions as TokenClassificationExtensions, getTokenClassificationRegistry, TokenStyle } from 'vs/platform/theme/common/tokenClassificationRegistry';
import { Extensions as JsonContributionExtensions } from 'vs/platform/jsonschemas/common/jsonContributionRegistry';
import { ColorThemeData } from 'vs/workbench/services/themes/common/colorThemeData';
import { parseTextMateGrammar, TMTokenization, TMTokenizationSupport } from 'vs/workbench/services/textMate/browser/abstractTextMateService';
import {
	ContextKeyExpr,
	ContextKeyFalseExpr,
	ContextKeyTrueExpr,
	ContextKeyDefinedExpr,
	ContextKeyEqualsExpr,
	ContextKeyInExpr,
	ContextKeyNotInExpr,
	ContextKeyNotEqualsExpr,
	ContextKeyNotExpr,
	ContextKeyGreaterExpr,
	ContextKeyGreaterEqualsExpr,
	ContextKeySmallerExpr,
	ContextKeySmallerEqualsExpr,
	ContextKeyRegexExpr,
	ContextKeyNotRegexExpr,
	ContextKeyAndExpr,
	ContextKeyOrExpr,
	RawContextKey
} from 'vs/platform/contextkey/common/contextkey';
import { KeybindingIO, OutputBuilder } from 'vs/workbench/services/keybinding/common/keybindingIO';
import { KeybindingParser } from 'vs/base/common/keybindingParser';
import { ScanCodeBinding } from 'vs/base/common/keybindings';
import { ResolvedKeybindingItem } from 'vs/platform/keybinding/common/resolvedKeybindingItem';
import { Registry } from 'vs/platform/registry/common/platform';
import { DefaultConfigurationModel, ConfigurationModel } from 'vs/platform/configuration/common/configurationModels';
import { addToValueTree } from 'vs/platform/configuration/common/configuration';
import { MacLinuxFallbackKeyboardMapper } from 'vs/workbench/services/keybinding/common/macLinuxFallbackKeyboardMapper';
import { Extensions as KeybindingExtensions, KeybindingsRegistry } from 'vs/platform/keybinding/common/keybindingsRegistry';
import { KeybindingResolver } from 'vs/platform/keybinding/common/keybindingResolver';
import { CommandsRegistry } from 'vs/platform/commands/common/commands';
import { allSettings, Extensions as ConfigurationExtensions } from 'vs/platform/configuration/common/configurationRegistry';
import { resolveUserKeybindingItems } from 'vs/workbench/services/keybinding/browser/keybindingService';
import { OS } from 'vs/base/common/platform';
import { AbstractKeybindingService } from 'vs/platform/keybinding/common/abstractKeybindingService';
import { SimpleConfigurationService, SimpleEditorModelResolverService, StandaloneKeybindingService } from 'vs/editor/standalone/browser/simpleServices';
import { FoldingModel, setCollapseStateForMatchingLines } from 'vs/editor/contrib/folding/foldingModel';
import { AbstractCodeEditorService } from 'vs/editor/browser/services/abstractCodeEditorService';
import { StandaloneCodeEditorServiceImpl } from 'vs/editor/standalone/browser/standaloneCodeServiceImpl';
import { FoldingRegion, FoldingRegions } from 'vs/editor/contrib/folding/foldingRanges';
import { FoldingController } from 'vs/editor/contrib/folding/folding';
import { CodeEditorServiceImpl, GlobalStyleSheet } from 'vs/editor/browser/services/codeEditorServiceImpl';
import { AsyncReferenceCollection, ReferenceCollection, toDisposable } from 'vs/base/common/lifecycle';
import { once } from 'vs/base/common/functional';

/**
 * @internal
 */
export function createMonacoExtraAPI(): typeof monaco.extra {
	return {
		setSnippetSuggestSupport: <any>setSnippetSuggestSupport,
		getSnippetSuggestSupport: <any>getSnippetSuggestSupport,
		parseTextMateGrammar: <any>parseTextMateGrammar,
		handleLanguageConfiguration: <any>handleLanguageConfiguration,
		resolveUserKeybindingItems: <any>resolveUserKeybindingItems,
		parseSnippet: <any>parseSnippet,
		snippetScopeSelect: <any>snippetScopeSelect,
		addToValueTree,
		setCollapseStateForMatchingLines: <any>setCollapseStateForMatchingLines,
		getTokenClassificationRegistry,
		toDisposable,

		// enums
		ExtensionType: standaloneEnums.ExtensionType,
		SnippetSortOrder: standaloneEnums.SnippetSortOrder,
		SnippetSource: standaloneEnums.SnippetSource,
		ContextKeyExprType: standaloneEnums.ContextKeyExprType,
		OperatingSystem: standaloneEnums.OperatingSystem,
		ScanCode: standaloneEnums.ScanCode,
		EditPresentationTypes: standaloneEnums.EditPresentationTypes,
		ConfigurationScope: standaloneEnums.ConfigurationScope,
		ProgressLocation: standaloneEnums.ProgressLocation,
		ConfigurationTarget: standaloneEnums.ConfigurationTarget,
		KeybindingWeight: standaloneEnums.KeybindingWeight,
		KeybindingSource: standaloneEnums.KeybindingSource,
		TextEditorSelectionRevealType: standaloneEnums.TextEditorSelectionRevealType,
		once,

		// classes
		Snippet: <any>Snippet,
		SnippetCompletion: <any>SnippetCompletion,
		SnippetCompletionProvider: <any>SnippetCompletionProvider,
		ExtensionIdentifier: <any>ExtensionIdentifier,
		SuggestCompletionItem: <any>SuggestCompletionItem,
		TMGrammarFactory: <any>TMGrammarFactory,
		ColorThemeData: <any>ColorThemeData,
		TokenStyle,
		KeybindingIO: <any>KeybindingIO,
		OutputBuilder: <any>OutputBuilder,
		KeybindingParser: <any>KeybindingParser,
		ResolvedKeybindingItem: <any>ResolvedKeybindingItem,
		SimpleKeybinding: <any>SimpleKeybinding,
		ChordKeybinding: <any>ChordKeybinding,
		ResolvedKeybinding: <any>ResolvedKeybinding,
		ResolvedKeybindingPart: <any>ResolvedKeybindingPart,
		ScanCodeBinding: <any>ScanCodeBinding,
		DefaultConfigurationModel: <any>DefaultConfigurationModel,
		ConfigurationModel: <any>ConfigurationModel,
		ContextKeyExpr: <any>ContextKeyExpr,
		ContextKeyFalseExpr: <any>ContextKeyFalseExpr,
		ContextKeyTrueExpr: <any>ContextKeyTrueExpr,
		ContextKeyDefinedExpr: <any>ContextKeyDefinedExpr,
		ContextKeyEqualsExpr: <any>ContextKeyEqualsExpr,
		ContextKeyInExpr: <any>ContextKeyInExpr,
		ContextKeyNotInExpr: <any>ContextKeyNotInExpr,
		ContextKeyNotEqualsExpr: <any>ContextKeyNotEqualsExpr,
		ContextKeyNotExpr: <any>ContextKeyNotExpr,
		ContextKeyGreaterExpr: <any>ContextKeyGreaterExpr,
		ContextKeyGreaterEqualsExpr: <any>ContextKeyGreaterEqualsExpr,
		ContextKeySmallerExpr: <any>ContextKeySmallerExpr,
		ContextKeySmallerEqualsExpr: <any>ContextKeySmallerEqualsExpr,
		ContextKeyRegexExpr: <any>ContextKeyRegexExpr,
		ContextKeyNotRegexExpr: <any>ContextKeyNotRegexExpr,
		ContextKeyAndExpr: <any>ContextKeyAndExpr,
		ContextKeyOrExpr: <any>ContextKeyOrExpr,
		RawContextKey: <any>RawContextKey,
		MacLinuxFallbackKeyboardMapper: <any>MacLinuxFallbackKeyboardMapper,
		KeyCodeUtils: <any>KeyCodeUtils,
		KeybindingResolver: <any>KeybindingResolver,
		AbstractKeybindingService: <any>AbstractKeybindingService,
		StandaloneKeybindingService: <any>StandaloneKeybindingService,
		AbstractCodeEditorService: <any>AbstractCodeEditorService,
		SimpleEditorModelResolverService: <any>SimpleEditorModelResolverService,
		StandaloneCodeEditorServiceImpl: <any>StandaloneCodeEditorServiceImpl,
		CodeEditorServiceImpl: <any>CodeEditorServiceImpl,
		GlobalStyleSheet,
		FoldingController: <any>FoldingController,
		FoldingRegion,
		FoldingRegions,
		FoldingModel: <any>FoldingModel,
		SimpleConfigurationService: <any>SimpleConfigurationService,
		TMTokenizationSupport: <any>TMTokenizationSupport,
		TMTokenization: <any>TMTokenization,
		ReferenceCollection: <any>ReferenceCollection,
		AsyncReferenceCollection: <any>AsyncReferenceCollection,

		// Constants
		Registry: Registry,
		KeybindingExtensions: KeybindingExtensions,
		KeybindingsRegistry: <any>KeybindingsRegistry,
		ConfigurationExtensions: <any>ConfigurationExtensions,
		CommandsRegistry: <any>CommandsRegistry,
		allSettings: <any>allSettings,
		OS: <any>OS,
		VS_LIGHT_THEME,
		VS_DARK_THEME,
		VS_HC_THEME,
		TokenClassificationExtensions,
		JsonContributionExtensions
	};
}
