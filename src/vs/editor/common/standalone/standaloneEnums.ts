/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// THIS IS A GENERATED FILE. DO NOT EDIT DIRECTLY.


export enum AccessibilitySupport {
	/**
	 * This should be the browser case where it is not known if a screen reader is attached or no.
	 */
	Unknown = 0,
	Disabled = 1,
	Enabled = 2
}

/**
 * Open ended enum at runtime
 */
export enum ColorId {
	None = 0,
	DefaultForeground = 1,
	DefaultBackground = 2
}
/**
 * Color scheme used by the OS and by color themes.
 */
export enum ColorScheme {
	DARK = 'dark',
	LIGHT = 'light',
	HIGH_CONTRAST = 'hc'
}

export enum CompletionItemInsertTextRule {
	/**
	 * Adjust whitespace/indentation of multiline insert texts to
	 * match the current line indentation.
	 */
	KeepWhitespace = 1,
	/**
	 * `insertText` is a snippet.
	 */
	InsertAsSnippet = 4
}

export enum CompletionItemKind {
	Method = 0,
	Function = 1,
	Constructor = 2,
	Field = 3,
	Variable = 4,
	Class = 5,
	Struct = 6,
	Interface = 7,
	Module = 8,
	Property = 9,
	Event = 10,
	Operator = 11,
	Unit = 12,
	Value = 13,
	Constant = 14,
	Enum = 15,
	EnumMember = 16,
	Keyword = 17,
	Text = 18,
	Color = 19,
	File = 20,
	Reference = 21,
	Customcolor = 22,
	Folder = 23,
	TypeParameter = 24,
	User = 25,
	Issue = 26,
	Snippet = 27
}

export enum CompletionItemTag {
	Deprecated = 1
}

/**
 * How a suggest provider was triggered.
 */
export enum CompletionTriggerKind {
	Invoke = 0,
	TriggerCharacter = 1,
	TriggerForIncompleteCompletions = 2
}

export enum ConfigurationScope {
	/**
	 * Application specific configuration, which can be configured only in local user settings.
	 */
	APPLICATION = 1,
	/**
	 * Machine specific configuration, which can be configured only in local and remote user settings.
	 */
	MACHINE = 2,
	/**
	 * Window specific configuration, which can be configured in the user or workspace settings.
	 */
	WINDOW = 3,
	/**
	 * Resource specific configuration, which can be configured in the user, workspace or folder settings.
	 */
	RESOURCE = 4,
	/**
	 * Resource specific configuration that can be configured in language specific settings
	 */
	LANGUAGE_OVERRIDABLE = 5,
	/**
	 * Machine specific configuration that can also be configured in workspace or folder settings.
	 */
	MACHINE_OVERRIDABLE = 6
}

export enum ConfigurationTarget {
	USER = 1,
	USER_LOCAL = 2,
	USER_REMOTE = 3,
	WORKSPACE = 4,
	WORKSPACE_FOLDER = 5,
	DEFAULT = 6,
	MEMORY = 7
}

/**
 * A positioning preference for rendering content widgets.
 */
export enum ContentWidgetPositionPreference {
	/**
	 * Place the content widget exactly at a position
	 */
	EXACT = 0,
	/**
	 * Place the content widget above a position
	 */
	ABOVE = 1,
	/**
	 * Place the content widget below a position
	 */
	BELOW = 2
}

export enum ContextKeyExprType {
	False = 0,
	True = 1,
	Defined = 2,
	Not = 3,
	Equals = 4,
	NotEquals = 5,
	And = 6,
	Regex = 7,
	NotRegex = 8,
	Or = 9,
	In = 10,
	NotIn = 11,
	Greater = 12,
	GreaterEquals = 13,
	Smaller = 14,
	SmallerEquals = 15
}

/**
 * Describes the reason the cursor has changed its position.
 */
export enum CursorChangeReason {
	/**
	 * Unknown or not set.
	 */
	NotSet = 0,
	/**
	 * A `model.setValue()` was called.
	 */
	ContentFlush = 1,
	/**
	 * The `model` has been changed outside of this cursor and the cursor recovers its position from associated markers.
	 */
	RecoverFromMarkers = 2,
	/**
	 * There was an explicit user gesture.
	 */
	Explicit = 3,
	/**
	 * There was a Paste.
	 */
	Paste = 4,
	/**
	 * There was an Undo.
	 */
	Undo = 5,
	/**
	 * There was a Redo.
	 */
	Redo = 6
}

/**
 * The default end of line to use when instantiating models.
 */
export enum DefaultEndOfLine {
	/**
	 * Use line feed (\n) as the end of line character.
	 */
	LF = 1,
	/**
	 * Use carriage return and line feed (\r\n) as the end of line character.
	 */
	CRLF = 2
}

/**
 * A document highlight kind.
 */
export enum DocumentHighlightKind {
	/**
	 * A textual occurrence.
	 */
	Text = 0,
	/**
	 * Read-access of a symbol, like reading a variable.
	 */
	Read = 1,
	/**
	 * Write-access of a symbol, like writing to a variable.
	 */
	Write = 2
}

export enum EditPresentationTypes {
	Multiline = 'multilineText',
	Singleline = 'singlelineText'
}

/**
 * Configuration options for auto indentation in the editor
 */
export enum EditorAutoIndentStrategy {
	None = 0,
	Keep = 1,
	Brackets = 2,
	Advanced = 3,
	Full = 4
}

export enum EditorOption {
	acceptSuggestionOnCommitCharacter = 0,
	acceptSuggestionOnEnter = 1,
	accessibilitySupport = 2,
	accessibilityPageSize = 3,
	ariaLabel = 4,
	autoClosingBrackets = 5,
	autoClosingDelete = 6,
	autoClosingOvertype = 7,
	autoClosingQuotes = 8,
	autoIndent = 9,
	automaticLayout = 10,
	autoSurround = 11,
	bracketPairColorization = 12,
	guides = 13,
	codeLens = 14,
	codeLensFontFamily = 15,
	codeLensFontSize = 16,
	colorDecorators = 17,
	columnSelection = 18,
	comments = 19,
	contextmenu = 20,
	copyWithSyntaxHighlighting = 21,
	cursorBlinking = 22,
	cursorSmoothCaretAnimation = 23,
	cursorStyle = 24,
	cursorSurroundingLines = 25,
	cursorSurroundingLinesStyle = 26,
	cursorWidth = 27,
	disableLayerHinting = 28,
	disableMonospaceOptimizations = 29,
	domReadOnly = 30,
	dragAndDrop = 31,
	emptySelectionClipboard = 32,
	extraEditorClassName = 33,
	fastScrollSensitivity = 34,
	find = 35,
	fixedOverflowWidgets = 36,
	folding = 37,
	foldingStrategy = 38,
	foldingHighlight = 39,
	foldingImportsByDefault = 40,
	foldingMaximumRegions = 41,
	unfoldOnClickAfterEndOfLine = 42,
	fontFamily = 43,
	fontInfo = 44,
	fontLigatures = 45,
	fontSize = 46,
	fontWeight = 47,
	formatOnPaste = 48,
	formatOnType = 49,
	glyphMargin = 50,
	gotoLocation = 51,
	hideCursorInOverviewRuler = 52,
	hover = 53,
	inDiffEditor = 54,
	inlineSuggest = 55,
	letterSpacing = 56,
	lightbulb = 57,
	lineDecorationsWidth = 58,
	lineHeight = 59,
	lineNumbers = 60,
	lineNumbersMinChars = 61,
	linkedEditing = 62,
	links = 63,
	matchBrackets = 64,
	minimap = 65,
	mouseStyle = 66,
	mouseWheelScrollSensitivity = 67,
	mouseWheelZoom = 68,
	multiCursorMergeOverlapping = 69,
	multiCursorModifier = 70,
	multiCursorPaste = 71,
	occurrencesHighlight = 72,
	overviewRulerBorder = 73,
	overviewRulerLanes = 74,
	padding = 75,
	parameterHints = 76,
	peekWidgetDefaultFocus = 77,
	definitionLinkOpensInPeek = 78,
	quickSuggestions = 79,
	quickSuggestionsDelay = 80,
	readOnly = 81,
	renameOnType = 82,
	renderControlCharacters = 83,
	renderFinalNewline = 84,
	renderLineHighlight = 85,
	renderLineHighlightOnlyWhenFocus = 86,
	renderValidationDecorations = 87,
	renderWhitespace = 88,
	revealHorizontalRightPadding = 89,
	roundedSelection = 90,
	rulers = 91,
	scrollbar = 92,
	scrollBeyondLastColumn = 93,
	scrollBeyondLastLine = 94,
	scrollPredominantAxis = 95,
	selectionClipboard = 96,
	selectionHighlight = 97,
	selectOnLineNumbers = 98,
	showFoldingControls = 99,
	showUnused = 100,
	snippetSuggestions = 101,
	smartSelect = 102,
	smoothScrolling = 103,
	stickyTabStops = 104,
	stopRenderingLineAfter = 105,
	suggest = 106,
	suggestFontSize = 107,
	suggestLineHeight = 108,
	suggestOnTriggerCharacters = 109,
	suggestSelection = 110,
	tabCompletion = 111,
	tabIndex = 112,
	unicodeHighlighting = 113,
	unusualLineTerminators = 114,
	useShadowDOM = 115,
	useTabStops = 116,
	wordSeparators = 117,
	wordWrap = 118,
	wordWrapBreakAfterCharacters = 119,
	wordWrapBreakBeforeCharacters = 120,
	wordWrapColumn = 121,
	wordWrapOverride1 = 122,
	wordWrapOverride2 = 123,
	wrappingIndent = 124,
	wrappingStrategy = 125,
	showDeprecated = 126,
	inlayHints = 127,
	editorClassName = 128,
	pixelRatio = 129,
	tabFocusMode = 130,
	layoutInfo = 131,
	wrappingInfo = 132
}

/**
 * End of line character preference.
 */
export enum EndOfLinePreference {
	/**
	 * Use the end of line character identified in the text buffer.
	 */
	TextDefined = 0,
	/**
	 * Use line feed (\n) as the end of line character.
	 */
	LF = 1,
	/**
	 * Use carriage return and line feed (\r\n) as the end of line character.
	 */
	CRLF = 2
}

/**
 * End of line character preference.
 */
export enum EndOfLineSequence {
	/**
	 * Use line feed (\n) as the end of line character.
	 */
	LF = 0,
	/**
	 * Use carriage return and line feed (\r\n) as the end of line character.
	 */
	CRLF = 1
}

export enum ExtensionType {
	System = 0,
	User = 1
}

/**
 * Describes what to do with the indentation when pressing Enter.
 */
export enum IndentAction {
	/**
	 * Insert new line and copy the previous line's indentation.
	 */
	None = 0,
	/**
	 * Insert new line and indent once (relative to the previous line's indentation).
	 */
	Indent = 1,
	/**
	 * Insert two new lines:
	 *  - the first one indented which will hold the cursor
	 *  - the second one at the same indentation level
	 */
	IndentOutdent = 2,
	/**
	 * Insert new line and outdent once (relative to the previous line's indentation).
	 */
	Outdent = 3
}

export enum InjectedTextCursorStops {
	Both = 0,
	Right = 1,
	Left = 2,
	None = 3
}

export enum InlayHintKind {
	Other = 0,
	Type = 1,
	Parameter = 2
}

/**
 * How an {@link InlineCompletionsProvider inline completion provider} was triggered.
 */
export enum InlineCompletionTriggerKind {
	/**
	 * Completion was triggered automatically while editing.
	 * It is sufficient to return a single completion item in this case.
	 */
	Automatic = 0,
	/**
	 * Completion was triggered explicitly by a user gesture.
	 * Return multiple completion items to enable cycling through them.
	 */
	Explicit = 1
}
/**
 * Virtual Key Codes, the value does not hold any inherent meaning.
 * Inspired somewhat from https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
 * But these are "more general", as they should work across browsers & OS`s.
 */
export enum KeyCode {
	DependsOnKbLayout = -1,
	/**
	 * Placed first to cover the 0 value of the enum.
	 */
	Unknown = 0,
	Backspace = 1,
	Tab = 2,
	Enter = 3,
	Shift = 4,
	Ctrl = 5,
	Alt = 6,
	PauseBreak = 7,
	CapsLock = 8,
	Escape = 9,
	Space = 10,
	PageUp = 11,
	PageDown = 12,
	End = 13,
	Home = 14,
	LeftArrow = 15,
	UpArrow = 16,
	RightArrow = 17,
	DownArrow = 18,
	Insert = 19,
	Delete = 20,
	Digit0 = 21,
	Digit1 = 22,
	Digit2 = 23,
	Digit3 = 24,
	Digit4 = 25,
	Digit5 = 26,
	Digit6 = 27,
	Digit7 = 28,
	Digit8 = 29,
	Digit9 = 30,
	KeyA = 31,
	KeyB = 32,
	KeyC = 33,
	KeyD = 34,
	KeyE = 35,
	KeyF = 36,
	KeyG = 37,
	KeyH = 38,
	KeyI = 39,
	KeyJ = 40,
	KeyK = 41,
	KeyL = 42,
	KeyM = 43,
	KeyN = 44,
	KeyO = 45,
	KeyP = 46,
	KeyQ = 47,
	KeyR = 48,
	KeyS = 49,
	KeyT = 50,
	KeyU = 51,
	KeyV = 52,
	KeyW = 53,
	KeyX = 54,
	KeyY = 55,
	KeyZ = 56,
	Meta = 57,
	ContextMenu = 58,
	F1 = 59,
	F2 = 60,
	F3 = 61,
	F4 = 62,
	F5 = 63,
	F6 = 64,
	F7 = 65,
	F8 = 66,
	F9 = 67,
	F10 = 68,
	F11 = 69,
	F12 = 70,
	F13 = 71,
	F14 = 72,
	F15 = 73,
	F16 = 74,
	F17 = 75,
	F18 = 76,
	F19 = 77,
	NumLock = 78,
	ScrollLock = 79,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the ';:' key
	 */
	Semicolon = 80,
	/**
	 * For any country/region, the '+' key
	 * For the US standard keyboard, the '=+' key
	 */
	Equal = 81,
	/**
	 * For any country/region, the ',' key
	 * For the US standard keyboard, the ',<' key
	 */
	Comma = 82,
	/**
	 * For any country/region, the '-' key
	 * For the US standard keyboard, the '-_' key
	 */
	Minus = 83,
	/**
	 * For any country/region, the '.' key
	 * For the US standard keyboard, the '.>' key
	 */
	Period = 84,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the '/?' key
	 */
	Slash = 85,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the '`~' key
	 */
	Backquote = 86,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the '[{' key
	 */
	BracketLeft = 87,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the '\|' key
	 */
	Backslash = 88,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the ']}' key
	 */
	BracketRight = 89,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 * For the US standard keyboard, the ''"' key
	 */
	Quote = 90,
	/**
	 * Used for miscellaneous characters; it can vary by keyboard.
	 */
	OEM_8 = 91,
	/**
	 * Either the angle bracket key or the backslash key on the RT 102-key keyboard.
	 */
	IntlBackslash = 92,
	Numpad0 = 93,
	Numpad1 = 94,
	Numpad2 = 95,
	Numpad3 = 96,
	Numpad4 = 97,
	Numpad5 = 98,
	Numpad6 = 99,
	Numpad7 = 100,
	Numpad8 = 101,
	Numpad9 = 102,
	NumpadMultiply = 103,
	NumpadAdd = 104,
	NUMPAD_SEPARATOR = 105,
	NumpadSubtract = 106,
	NumpadDecimal = 107,
	NumpadDivide = 108,
	/**
	 * Cover all key codes when IME is processing input.
	 */
	KEY_IN_COMPOSITION = 109,
	ABNT_C1 = 110,
	ABNT_C2 = 111,
	AudioVolumeMute = 112,
	AudioVolumeUp = 113,
	AudioVolumeDown = 114,
	BrowserSearch = 115,
	BrowserHome = 116,
	BrowserBack = 117,
	BrowserForward = 118,
	MediaTrackNext = 119,
	MediaTrackPrevious = 120,
	MediaStop = 121,
	MediaPlayPause = 122,
	LaunchMediaPlayer = 123,
	LaunchMail = 124,
	LaunchApp2 = 125,
	/**
	 * Placed last to cover the length of the enum.
	 * Please do not depend on this value!
	 */
	MAX_VALUE = 126
}

export enum KeybindingSource {
	Default = 1,
	User = 2
}

export enum KeybindingWeight {
	EditorCore = 0,
	EditorContrib = 100,
	WorkbenchContrib = 200,
	BuiltinExtension = 300,
	ExternalExtension = 400
}

/**
 * Open ended enum at runtime
 */
export enum LanguageId {
	Null = 0,
	PlainText = 1
}

export enum LogLevel {
	Trace = 0,
	Debug = 1,
	Info = 2,
	Warning = 3,
	Error = 4,
	Critical = 5,
	Off = 6
}

export enum MarkdownStringTextNewlineStyle {
	Paragraph = 0,
	Break = 1
}

export enum MarkerSeverity {
	Hint = 1,
	Info = 2,
	Warning = 4,
	Error = 8
}

export enum MarkerTag {
	Unnecessary = 1,
	Deprecated = 2
}

/**
 * Position in the minimap to render the decoration.
 */
export enum MinimapPosition {
	Inline = 1,
	Gutter = 2
}

/**
 * Type of hit element with the mouse in the editor.
 */
export enum MouseTargetType {
	/**
	 * Mouse is on top of an unknown element.
	 */
	UNKNOWN = 0,
	/**
	 * Mouse is on top of the textarea used for input.
	 */
	TEXTAREA = 1,
	/**
	 * Mouse is on top of the glyph margin
	 */
	GUTTER_GLYPH_MARGIN = 2,
	/**
	 * Mouse is on top of the line numbers
	 */
	GUTTER_LINE_NUMBERS = 3,
	/**
	 * Mouse is on top of the line decorations
	 */
	GUTTER_LINE_DECORATIONS = 4,
	/**
	 * Mouse is on top of the whitespace left in the gutter by a view zone.
	 */
	GUTTER_VIEW_ZONE = 5,
	/**
	 * Mouse is on top of text in the content.
	 */
	CONTENT_TEXT = 6,
	/**
	 * Mouse is on top of empty space in the content (e.g. after line text or below last line)
	 */
	CONTENT_EMPTY = 7,
	/**
	 * Mouse is on top of a view zone in the content.
	 */
	CONTENT_VIEW_ZONE = 8,
	/**
	 * Mouse is on top of a content widget.
	 */
	CONTENT_WIDGET = 9,
	/**
	 * Mouse is on top of the decorations overview ruler.
	 */
	OVERVIEW_RULER = 10,
	/**
	 * Mouse is on top of a scrollbar.
	 */
	SCROLLBAR = 11,
	/**
	 * Mouse is on top of an overlay widget.
	 */
	OVERLAY_WIDGET = 12,
	/**
	 * Mouse is outside of the editor.
	 */
	OUTSIDE_EDITOR = 13
}

export enum OperatingSystem {
	Windows = 1,
	Macintosh = 2,
	Linux = 3
}

/**
 * A positioning preference for rendering overlay widgets.
 */
export enum OverlayWidgetPositionPreference {
	/**
	 * Position the overlay widget in the top right corner
	 */
	TOP_RIGHT_CORNER = 0,
	/**
	 * Position the overlay widget in the bottom right corner
	 */
	BOTTOM_RIGHT_CORNER = 1,
	/**
	 * Position the overlay widget in the top center
	 */
	TOP_CENTER = 2
}

/**
 * Vertical Lane in the overview ruler of the editor.
 */
export enum OverviewRulerLane {
	Left = 1,
	Center = 2,
	Right = 4,
	Full = 7
}

export enum PositionAffinity {
	/**
	 * Prefers the left most position.
	*/
	Left = 0,
	/**
	 * Prefers the right most position.
	*/
	Right = 1,
	/**
	 * No preference.
	*/
	None = 2
}

export enum ProgressLocation {
	Explorer = 1,
	Scm = 3,
	Extensions = 5,
	Window = 10,
	Notification = 15,
	Dialog = 20
}

export enum RenderLineNumbersType {
	Off = 0,
	On = 1,
	Relative = 2,
	Interval = 3,
	Custom = 4
}

export enum RenderMinimap {
	None = 0,
	Text = 1,
	Blocks = 2
}

/**
 * keyboardEvent.code
 */
export enum ScanCode {
	DependsOnKbLayout = -1,
	None = 0,
	Hyper = 1,
	Super = 2,
	Fn = 3,
	FnLock = 4,
	Suspend = 5,
	Resume = 6,
	Turbo = 7,
	Sleep = 8,
	WakeUp = 9,
	KeyA = 10,
	KeyB = 11,
	KeyC = 12,
	KeyD = 13,
	KeyE = 14,
	KeyF = 15,
	KeyG = 16,
	KeyH = 17,
	KeyI = 18,
	KeyJ = 19,
	KeyK = 20,
	KeyL = 21,
	KeyM = 22,
	KeyN = 23,
	KeyO = 24,
	KeyP = 25,
	KeyQ = 26,
	KeyR = 27,
	KeyS = 28,
	KeyT = 29,
	KeyU = 30,
	KeyV = 31,
	KeyW = 32,
	KeyX = 33,
	KeyY = 34,
	KeyZ = 35,
	Digit1 = 36,
	Digit2 = 37,
	Digit3 = 38,
	Digit4 = 39,
	Digit5 = 40,
	Digit6 = 41,
	Digit7 = 42,
	Digit8 = 43,
	Digit9 = 44,
	Digit0 = 45,
	Enter = 46,
	Escape = 47,
	Backspace = 48,
	Tab = 49,
	Space = 50,
	Minus = 51,
	Equal = 52,
	BracketLeft = 53,
	BracketRight = 54,
	Backslash = 55,
	IntlHash = 56,
	Semicolon = 57,
	Quote = 58,
	Backquote = 59,
	Comma = 60,
	Period = 61,
	Slash = 62,
	CapsLock = 63,
	F1 = 64,
	F2 = 65,
	F3 = 66,
	F4 = 67,
	F5 = 68,
	F6 = 69,
	F7 = 70,
	F8 = 71,
	F9 = 72,
	F10 = 73,
	F11 = 74,
	F12 = 75,
	PrintScreen = 76,
	ScrollLock = 77,
	Pause = 78,
	Insert = 79,
	Home = 80,
	PageUp = 81,
	Delete = 82,
	End = 83,
	PageDown = 84,
	ArrowRight = 85,
	ArrowLeft = 86,
	ArrowDown = 87,
	ArrowUp = 88,
	NumLock = 89,
	NumpadDivide = 90,
	NumpadMultiply = 91,
	NumpadSubtract = 92,
	NumpadAdd = 93,
	NumpadEnter = 94,
	Numpad1 = 95,
	Numpad2 = 96,
	Numpad3 = 97,
	Numpad4 = 98,
	Numpad5 = 99,
	Numpad6 = 100,
	Numpad7 = 101,
	Numpad8 = 102,
	Numpad9 = 103,
	Numpad0 = 104,
	NumpadDecimal = 105,
	IntlBackslash = 106,
	ContextMenu = 107,
	Power = 108,
	NumpadEqual = 109,
	F13 = 110,
	F14 = 111,
	F15 = 112,
	F16 = 113,
	F17 = 114,
	F18 = 115,
	F19 = 116,
	F20 = 117,
	F21 = 118,
	F22 = 119,
	F23 = 120,
	F24 = 121,
	Open = 122,
	Help = 123,
	Select = 124,
	Again = 125,
	Undo = 126,
	Cut = 127,
	Copy = 128,
	Paste = 129,
	Find = 130,
	AudioVolumeMute = 131,
	AudioVolumeUp = 132,
	AudioVolumeDown = 133,
	NumpadComma = 134,
	IntlRo = 135,
	KanaMode = 136,
	IntlYen = 137,
	Convert = 138,
	NonConvert = 139,
	Lang1 = 140,
	Lang2 = 141,
	Lang3 = 142,
	Lang4 = 143,
	Lang5 = 144,
	Abort = 145,
	Props = 146,
	NumpadParenLeft = 147,
	NumpadParenRight = 148,
	NumpadBackspace = 149,
	NumpadMemoryStore = 150,
	NumpadMemoryRecall = 151,
	NumpadMemoryClear = 152,
	NumpadMemoryAdd = 153,
	NumpadMemorySubtract = 154,
	NumpadClear = 155,
	NumpadClearEntry = 156,
	ControlLeft = 157,
	ShiftLeft = 158,
	AltLeft = 159,
	MetaLeft = 160,
	ControlRight = 161,
	ShiftRight = 162,
	AltRight = 163,
	MetaRight = 164,
	BrightnessUp = 165,
	BrightnessDown = 166,
	MediaPlay = 167,
	MediaRecord = 168,
	MediaFastForward = 169,
	MediaRewind = 170,
	MediaTrackNext = 171,
	MediaTrackPrevious = 172,
	MediaStop = 173,
	Eject = 174,
	MediaPlayPause = 175,
	MediaSelect = 176,
	LaunchMail = 177,
	LaunchApp2 = 178,
	LaunchApp1 = 179,
	SelectTask = 180,
	LaunchScreenSaver = 181,
	BrowserSearch = 182,
	BrowserHome = 183,
	BrowserBack = 184,
	BrowserForward = 185,
	BrowserStop = 186,
	BrowserRefresh = 187,
	BrowserFavorites = 188,
	ZoomToggle = 189,
	MailReply = 190,
	MailForward = 191,
	MailSend = 192,
	MAX_VALUE = 193
}

export enum ScrollType {
	Smooth = 0,
	Immediate = 1
}

export enum ScrollbarVisibility {
	Auto = 1,
	Hidden = 2,
	Visible = 3
}

/**
 * The direction of a selection.
 */
export enum SelectionDirection {
	/**
	 * The selection starts above where it ends.
	 */
	LTR = 0,
	/**
	 * The selection starts below where it ends.
	 */
	RTL = 1
}

export enum SignatureHelpTriggerKind {
	Invoke = 1,
	TriggerCharacter = 2,
	ContentChange = 3
}

export enum SnippetSortOrder {
	Top = 0,
	Inline = 1,
	Bottom = 2
}

export enum SnippetSource {
	User = 1,
	Workspace = 2,
	Extension = 3
}

/**
 * A standard token type.
 */
export enum StandardTokenType {
	Other = 0,
	Comment = 1,
	String = 2,
	RegEx = 3
}

/**
 * A symbol kind.
 */
export enum SymbolKind {
	File = 0,
	Module = 1,
	Namespace = 2,
	Package = 3,
	Class = 4,
	Method = 5,
	Property = 6,
	Field = 7,
	Constructor = 8,
	Enum = 9,
	Interface = 10,
	Function = 11,
	Variable = 12,
	Constant = 13,
	String = 14,
	Number = 15,
	Boolean = 16,
	Array = 17,
	Object = 18,
	Key = 19,
	Null = 20,
	EnumMember = 21,
	Struct = 22,
	Event = 23,
	Operator = 24,
	TypeParameter = 25
}

export enum SymbolTag {
	Deprecated = 1
}

/**
 * The kind of animation in which the editor's cursor should be rendered.
 */
export enum TextEditorCursorBlinkingStyle {
	/**
	 * Hidden
	 */
	Hidden = 0,
	/**
	 * Blinking
	 */
	Blink = 1,
	/**
	 * Blinking with smooth fading
	 */
	Smooth = 2,
	/**
	 * Blinking with prolonged filled state and smooth fading
	 */
	Phase = 3,
	/**
	 * Expand collapse animation on the y axis
	 */
	Expand = 4,
	/**
	 * No-Blinking
	 */
	Solid = 5
}

/**
 * The style in which the editor's cursor should be rendered.
 */
export enum TextEditorCursorStyle {
	/**
	 * As a vertical line (sitting between two characters).
	 */
	Line = 1,
	/**
	 * As a block (sitting on top of a character).
	 */
	Block = 2,
	/**
	 * As a horizontal line (sitting under a character).
	 */
	Underline = 3,
	/**
	 * As a thin vertical line (sitting between two characters).
	 */
	LineThin = 4,
	/**
	 * As an outlined block (sitting on top of a character).
	 */
	BlockOutline = 5,
	/**
	 * As a thin horizontal line (sitting under a character).
	 */
	UnderlineThin = 6
}

export enum TextEditorSelectionRevealType {
	/**
	 * Option to scroll vertically or horizontally as necessary and reveal a range centered vertically.
	 */
	Center = 0,
	/**
	 * Option to scroll vertically or horizontally as necessary and reveal a range centered vertically only if it lies outside the viewport.
	 */
	CenterIfOutsideViewport = 1,
	/**
	 * Option to scroll vertically or horizontally as necessary and reveal a range close to the top of the viewport, but not quite at the top.
	 */
	NearTop = 2,
	/**
	 * Option to scroll vertically or horizontally as necessary and reveal a range close to the top of the viewport, but not quite at the top.
	 * Only if it lies outside the viewport
	 */
	NearTopIfOutsideViewport = 3
}

/**
 * Describes the behavior of decorations when typing/editing near their edges.
 * Note: Please do not edit the values, as they very carefully match `DecorationRangeBehavior`
 */
export enum TrackedRangeStickiness {
	AlwaysGrowsWhenTypingAtEdges = 0,
	NeverGrowsWhenTypingAtEdges = 1,
	GrowsOnlyWhenTypingBefore = 2,
	GrowsOnlyWhenTypingAfter = 3
}

/**
 * Describes how to indent wrapped lines.
 */
export enum WrappingIndent {
	/**
	 * No indentation => wrapped lines begin at column 1.
	 */
	None = 0,
	/**
	 * Same => wrapped lines get the same indentation as the parent.
	 */
	Same = 1,
	/**
	 * Indent => wrapped lines get +1 indentation toward the parent.
	 */
	Indent = 2,
	/**
	 * DeepIndent => wrapped lines get +2 indentation toward the parent.
	 */
	DeepIndent = 3
}