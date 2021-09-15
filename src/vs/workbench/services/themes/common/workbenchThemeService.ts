/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { refineServiceDecorator } from 'vs/platform/instantiation/common/instantiation';
import { Event } from 'vs/base/common/event';
import { Color } from 'vs/base/common/color';
import { IColorTheme, IThemeService, IFileIconTheme } from 'vs/platform/theme/common/themeService';
import { ConfigurationTarget } from 'vs/platform/configuration/common/configuration';
import { isBoolean, isString } from 'vs/base/common/types';

/**
 * @internal
 */
export const IWorkbenchThemeService = refineServiceDecorator<IThemeService, IWorkbenchThemeService>(IThemeService);

export const VS_LIGHT_THEME = 'vs';
export const VS_DARK_THEME = 'vs-dark';
export const VS_HC_THEME = 'hc-black';

/**
 * @internal
 */
export const HC_THEME_ID = 'Default High Contrast';

/**
 * @internal
 */
export const THEME_SCOPE_OPEN_PAREN = '[';
/**
 * @internal
 */
export const THEME_SCOPE_CLOSE_PAREN = ']';
/**
 * @internal
 */
export const THEME_SCOPE_WILDCARD = '*';

/**
 * @internal
 */
export const themeScopeRegex = /\[(.+?)\]/g;

/**
 * @internal
 */
export enum ThemeSettings {
	COLOR_THEME = 'workbench.colorTheme',
	FILE_ICON_THEME = 'workbench.iconTheme',
	PRODUCT_ICON_THEME = 'workbench.productIconTheme',
	COLOR_CUSTOMIZATIONS = 'workbench.colorCustomizations',
	TOKEN_COLOR_CUSTOMIZATIONS = 'editor.tokenColorCustomizations',
	SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS = 'editor.semanticTokenColorCustomizations',

	PREFERRED_DARK_THEME = 'workbench.preferredDarkColorTheme',
	PREFERRED_LIGHT_THEME = 'workbench.preferredLightColorTheme',
	PREFERRED_HC_THEME = 'workbench.preferredHighContrastColorTheme',
	DETECT_COLOR_SCHEME = 'window.autoDetectColorScheme',
	DETECT_HC = 'window.autoDetectHighContrast'
}

export interface IWorkbenchTheme {
	readonly id: string;
	readonly label: string;
	readonly extensionData?: ExtensionData;
	readonly description?: string;
	readonly settingsId: string | null;
}

export interface IWorkbenchColorTheme extends IWorkbenchTheme, IColorTheme {
	readonly settingsId: string;
	readonly tokenColors: ITextMateThemingRule[];
}

/**
 * @internal
 */
export interface IColorMap {
	[id: string]: Color;
}

/**
 * @internal
 */
export interface IWorkbenchFileIconTheme extends IWorkbenchTheme, IFileIconTheme {
}

/**
 * @internal
 */
export interface IWorkbenchProductIconTheme extends IWorkbenchTheme {
	readonly settingsId: string;
}

export type ThemeSettingTarget = ConfigurationTarget | undefined | 'auto' | 'preview';


export interface IWorkbenchThemeService extends IThemeService {
	readonly _serviceBrand: undefined;
	/**
	 * @internal
	 */
	setColorTheme(themeId: string | undefined, settingsTarget: ThemeSettingTarget): Promise<IWorkbenchColorTheme | null>;
	getColorTheme(): IWorkbenchColorTheme;
	/**
	 * @internal
	 */
	getColorThemes(): Promise<IWorkbenchColorTheme[]>;
	onDidColorThemeChange: Event<IWorkbenchColorTheme>;
	restoreColorTheme(): void;

	/**
	 * @internal
	 */
	setFileIconTheme(iconThemeId: string | undefined, settingsTarget: ThemeSettingTarget): Promise<IWorkbenchFileIconTheme>;
	/**
	 * @internal
	 */
	getFileIconTheme(): IWorkbenchFileIconTheme;
	/**
	 * @internal
	 */
	getFileIconThemes(): Promise<IWorkbenchFileIconTheme[]>;
	/**
	 * @internal
	 */
	onDidFileIconThemeChange: Event<IWorkbenchFileIconTheme>;

	/**
	 * @internal
	 */
	setProductIconTheme(iconThemeId: string | undefined, settingsTarget: ThemeSettingTarget): Promise<IWorkbenchProductIconTheme>;
	/**
	 * @internal
	 */
	getProductIconTheme(): IWorkbenchProductIconTheme;
	/**
	 * @internal
	 */
	getProductIconThemes(): Promise<IWorkbenchProductIconTheme[]>;
	/**
	 * @internal
	 */
	onDidProductIconThemeChange: Event<IWorkbenchProductIconTheme>;
}

/**
 * @internal
 */
export interface IThemeScopedColorCustomizations {
	[colorId: string]: string;
}

/**
 * @internal
 */
export interface IColorCustomizations {
	[colorIdOrThemeScope: string]: IThemeScopedColorCustomizations | string;
}

/**
 * @internal
 */
export interface IThemeScopedTokenColorCustomizations {
	[groupId: string]: ITextMateThemingRule[] | ITokenColorizationSetting | boolean | string | undefined;
	comments?: string | ITokenColorizationSetting;
	strings?: string | ITokenColorizationSetting;
	numbers?: string | ITokenColorizationSetting;
	keywords?: string | ITokenColorizationSetting;
	types?: string | ITokenColorizationSetting;
	functions?: string | ITokenColorizationSetting;
	variables?: string | ITokenColorizationSetting;
	textMateRules?: ITextMateThemingRule[];
	semanticHighlighting?: boolean; // deprecated, use ISemanticTokenColorCustomizations.enabled instead
}

/**
 * @internal
 */
export interface ITokenColorCustomizations {
	[groupIdOrThemeScope: string]: IThemeScopedTokenColorCustomizations | ITextMateThemingRule[] | ITokenColorizationSetting | boolean | string | undefined;
	comments?: string | ITokenColorizationSetting;
	strings?: string | ITokenColorizationSetting;
	numbers?: string | ITokenColorizationSetting;
	keywords?: string | ITokenColorizationSetting;
	types?: string | ITokenColorizationSetting;
	functions?: string | ITokenColorizationSetting;
	variables?: string | ITokenColorizationSetting;
	textMateRules?: ITextMateThemingRule[];
	semanticHighlighting?: boolean; // deprecated, use ISemanticTokenColorCustomizations.enabled instead
}

/**
 * @internal
 */
export interface IThemeScopedSemanticTokenColorCustomizations {
	[styleRule: string]: ISemanticTokenRules | boolean | undefined;
	enabled?: boolean;
	rules?: ISemanticTokenRules;
}

/**
 * @internal
 */
export interface ISemanticTokenColorCustomizations {
	[styleRuleOrThemeScope: string]: IThemeScopedSemanticTokenColorCustomizations | ISemanticTokenRules | boolean | undefined;
	enabled?: boolean;
	rules?: ISemanticTokenRules;
}

/**
 * @internal
 */
export interface IThemeScopedExperimentalSemanticTokenColorCustomizations {
	[themeScope: string]: ISemanticTokenRules | undefined;
}

/**
 * @internal
 */
export interface IExperimentalSemanticTokenColorCustomizations {
	[styleRuleOrThemeScope: string]: IThemeScopedExperimentalSemanticTokenColorCustomizations | ISemanticTokenRules | undefined;
}

/**
 * @internal
 */
export type IThemeScopedCustomizations =
	IThemeScopedColorCustomizations
	| IThemeScopedTokenColorCustomizations
	| IThemeScopedExperimentalSemanticTokenColorCustomizations
	| IThemeScopedSemanticTokenColorCustomizations;

/**
 * @internal
 */
export type IThemeScopableCustomizations =
	IColorCustomizations
	| ITokenColorCustomizations
	| IExperimentalSemanticTokenColorCustomizations
	| ISemanticTokenColorCustomizations;

/**
 * @internal
 */
export interface ISemanticTokenRules {
	[selector: string]: string | ISemanticTokenColorizationSetting | undefined;
}

export interface ITextMateThemingRule {
	name?: string;
	scope?: string | string[];
	settings: ITokenColorizationSetting;
}

export interface ITokenColorizationSetting {
	foreground?: string;
	background?: string;
	fontStyle?: string; /* [italic|underline|bold] */
}

export interface ISemanticTokenColorizationSetting {
	foreground?: string;
	fontStyle?: string; /* [italic|underline|bold] */
	bold?: boolean;
	underline?: boolean;
	italic?: boolean;
}

export interface ExtensionData {
	extensionId: string;
	extensionPublisher: string;
	extensionName: string;
	extensionIsBuiltin: boolean;
}

/**
 * @internal
 */
export namespace ExtensionData {
	/**
	 * @internal
	 */
	export function toJSONObject(d: ExtensionData | undefined): any {
		return d && { _extensionId: d.extensionId, _extensionIsBuiltin: d.extensionIsBuiltin, _extensionName: d.extensionName, _extensionPublisher: d.extensionPublisher };
	}
	/**
	 * @internal
	 */
	export function fromJSONObject(o: any): ExtensionData | undefined {
		if (o && isString(o._extensionId) && isBoolean(o._extensionIsBuiltin) && isString(o._extensionName) && isString(o._extensionPublisher)) {
			return { extensionId: o._extensionId, extensionIsBuiltin: o._extensionIsBuiltin, extensionName: o._extensionName, extensionPublisher: o._extensionPublisher };
		}
		return undefined;
	}
}

export interface IThemeExtensionPoint {
	id: string;
	label?: string;
	description?: string;
	path: string;
	uiTheme?: typeof VS_LIGHT_THEME | typeof VS_DARK_THEME | typeof VS_HC_THEME;
	_watch: boolean; // unsupported options to watch location
}
