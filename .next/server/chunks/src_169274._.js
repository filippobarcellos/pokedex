module.exports = {

"[project]/src/components/ui/textfield/styles.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "TextFieldStyles": ()=>TextFieldStyles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/mizuhara/dist/utils/index.mjs [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-variants/dist/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const TextFieldStyles = {
    Root: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tv"]({
        base: [
            "relative flex cursor-text gap-2 px-3",
            "[&:has(:disabled)]:cursor-not-allowed"
        ]
    }),
    Slot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tv"]({
        base: [
            "relative z-10 flex shrink-0 items-center text-input"
        ]
    }),
    Input: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tv"]({
        base: [
            "peer block h-10 w-full appearance-none bg-transparent text-sm text-black outline-none transition",
            "placeholder:text-muted-foreground",
            "disabled:cursor-not-allowed disabled:opacity-50"
        ]
    }),
    Chrome: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tv"]({
        base: [
            "pointer-events-none absolute inset-0 z-0 rounded-md border-2 border-blue-700 ring-offset-2 ring-offset-background transition",
            "peer-focus-within:ring-1 peer-focus-within:ring-ring peer-[&:focus-within[aria-invalid=true]]:ring-destructive peer-aria-[invalid=true]:border-destructive"
        ]
    })
};

})()),
"[project]/src/components/ui/textfield/index.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "TextField": ()=>TextField,
    "TextFieldInput": ()=>TextFieldInput
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textfield$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/textfield/styles.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const TextFieldContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({
    hasRoot: false
});
const useTextFieldContext = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](TextFieldContext);
};
const TextFieldRoot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textfield$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextFieldStyles"].Root({
            className
        }),
        ref: ref,
        onPointerDown: (event)=>{
            props.onPointerDown?.(event);
            const target = event.target;
            if (target.closest("input, button, a")) return;
            const input = event.currentTarget.querySelector("input");
            if (!input) return;
            const position = input.compareDocumentPosition(target);
            const targetIsBeforeTextFieldInput = (position & Node.DOCUMENT_POSITION_PRECEDING) !== 0;
            const cursorPosition = targetIsBeforeTextFieldInput ? 0 : input.value.length;
            requestAnimationFrame(()=>{
                input.setSelectionRange(cursorPosition, cursorPosition);
                input.focus();
            });
        },
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](TextFieldContext.Provider, {
            value: {
                hasRoot: true
            },
            children: props.children
        }, void 0, false, {
            fileName: "<[project]/src/components/ui/textfield/index.tsx>",
            lineNumber: 45,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/textfield/index.tsx>",
        lineNumber: 20,
        columnNumber: 7
    }, this);
});
TextFieldRoot.displayName = "TextFieldRoot";
const TextFieldSlot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    if (!props.children) return null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textfield$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextFieldStyles"].Slot({
            className
        }),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/textfield/index.tsx>",
        lineNumber: 64,
        columnNumber: 7
    }, this);
});
TextFieldSlot.displayName = "TextFieldSlot";
const TextFieldInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type = "text", ...props }, ref)=>{
    const { hasRoot } = useTextFieldContext();
    if (type === "file") throw new Error("TextField does not support type=file");
    const input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                type: type,
                spellCheck: "false",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textfield$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextFieldStyles"].Input({
                    className
                }),
                ref: ref,
                ...props
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/textfield/index.tsx>",
                lineNumber: 86,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textfield$2f$styles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextFieldStyles"].Chrome()
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/textfield/index.tsx>",
                lineNumber: 93,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
    return hasRoot ? input : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](TextFieldRoot, {
        children: input
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/textfield/index.tsx>",
        lineNumber: 97,
        columnNumber: 30
    }, this);
});
TextFieldInput.displayName = "TextFieldInput";
const TextField = Object.assign(TextFieldInput, {
    Root: Object.assign(TextFieldRoot, {
        displayName: "TextField.Root"
    }),
    Slot: Object.assign(TextFieldSlot, {
        displayName: "TextField.Slot"
    }),
    Input: Object.assign(TextFieldInput, {
        displayName: "TextField.Input"
    })
});
TextField.displayName = "TextField";

})()),
"[project]/src/components/icons.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Icons": ()=>Icons
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircleIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-ssr] (ecmascript) {export default as AlertCircleIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__CheckIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) {export default as CheckIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronLeftIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) {export default as ChevronLeftIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronRightIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) {export default as ChevronRightIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__CircleIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) {export default as CircleIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__InfoIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) {export default as InfoIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__LaptopIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [app-ssr] (ecmascript) {export default as LaptopIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__MoonIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) {export default as MoonIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$more$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__MoreHorizontalIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/more-horizontal.js [app-ssr] (ecmascript) {export default as MoreHorizontalIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__RulerIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-ssr] (ecmascript) {export default as RulerIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__SearchIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) {export default as SearchIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__SunIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) {export default as SunIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Volume2Icon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) {export default as Volume2Icon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$weight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__WeightIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/weight.js [app-ssr] (ecmascript) {export default as WeightIcon}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const Icons = {
    Logo: (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
            width: "153",
            height: "56",
            viewBox: "0 0 153 56",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("g", {
                    clipPath: "url(#clip0_235_917)",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                            d: "M84.9083 3.24249e-05L82.3539 1.31838L71.8453 13.3464L73.6923 15.5252L71.6863 16.5918L63.077 8.96719L63.0742 8.97238L60.515 10.3578L60.0231 11.2887L60.0668 9.20056L46.0705 13.6636L46.0708 13.671L43.4911 15.0526L43.8577 22.5236L46.2719 21.9143L46.4226 23.5729C44.3836 23.2838 42.2059 23.5741 40.1382 24.446C39.2394 24.837 38.4014 25.3174 37.6292 25.8762C38.1539 23.5588 38.0294 21.2744 37.1448 19.237C36.1001 16.8296 34.2618 14.8401 32.0077 13.5848C30.4275 12.5341 28.5439 11.8795 26.5732 11.6568C21.73 10.8118 15.9143 11.6793 10.1905 14.1133C8.08626 15.0093 6.12351 16.026 4.35316 17.1515L2.11553 18.568L2.11703 18.5709L0 20.7178L6.82823 32.2226L9.39697 31.122L20.387 56L30.8278 52.6382L33.3275 50.9613L33.3977 50.939L32.7459 48.4285L31.2049 42.5237C32.025 44.121 33.2519 45.2946 33.2519 45.2946C34.3613 46.377 35.7211 47.1647 37.2382 47.6068C40.1561 48.4449 43.4493 47.8986 46.2763 46.0993C46.9039 45.7029 47.7195 45.1049 48.3296 44.5722L48.6795 48.4234L58.5157 46.9711L61.1427 45.5967L61.1474 45.5961L61.1366 39.39L79.2092 48.3255L81.7767 46.9416L81.7636 46.9347V38.4528L81.7676 38.4737C83.8809 38.1598 85.6948 37.3791 87.4782 36.3092C87.5091 36.2909 87.5405 36.2701 87.5715 36.2513L86.7951 40.9625L97.9328 42.7416L100.072 41.5915L101.435 44.1056L103.451 42.9999L103.852 46.314L116.505 48.5537L119.033 47.1659L118.931 47.1363L119.041 47.1557L118.553 44.0698C119.426 43.9711 120.334 43.8539 121.116 43.5762C121.427 43.4697 121.864 43.2956 122.332 43.0903L121.83 47.5336L130.218 48.7392L130.299 52.149L139.002 54.9176L141.592 53.5473L141.585 53.5415L141.604 53.5475L153 19.2639L141.133 16.385L141.129 16.4031L139.269 17.3922L138.964 15.8871L125.02 12.8236V12.823L122.445 14.2103L122.531 21.259C121.081 21.2253 119.586 21.4758 118.135 22.0232C117.115 22.4125 116.168 22.9242 115.31 23.5464L113.206 10.2919H103.979L103.977 10.2824L103.959 10.2919H103.932L103.929 10.3075L101.382 11.6756L101.357 11.8161H93.9159L93.9021 11.9002L93.9033 11.8036L91.3704 13.1947L90.8421 16.4014C88.5756 14.2814 85.6202 13.1216 82.3987 13.0543L90.6861 8.6083L84.9074 0.000557663L84.9011 0.00771475L84.9083 3.24249e-05ZM84.4624 3.82325L87.5182 7.9665L78.7817 12.2893L78.1784 11.3742L84.4624 3.82325ZM106.376 12.8578H111.099L113.059 25.5739C110.565 28.4098 109.353 32.2221 110.186 35.7097C110.831 38.4135 112.496 40.5909 114.882 41.8627C115.122 41.9834 115.371 42.1028 115.628 42.206L115.877 43.8545L108.912 42.7927L107.058 30.5314L104.436 37.2953L100.509 28.8414H100.464L98.9126 38.6315L92.3676 37.4948L93.288 32.0317C93.535 31.7999 93.7781 31.5675 94.0172 31.3221L96.1385 29.1418L94.0766 27.2991L96.2673 14.2886H102.871L104.523 23.2951L106.376 12.8578ZM63.9963 13.0311L70.1207 18.853L61.5557 27.8595L69.6026 31.0364C70.5014 32.7366 71.8724 34.1813 73.5928 35.2456C75.2559 36.2702 77.1614 36.8759 79.177 37.0748L79.1782 42.835L58.7066 32.6154L58.7249 38.0117L58.576 38.1239L58.7255 38.1978L58.7428 43.323L53.4473 44.0439L53.0782 39.6301C54.7134 36.8316 55.3113 33.534 54.4579 30.51C53.9895 28.8478 53.1242 27.405 51.9483 26.2489L51.1887 17.2498L48.8106 17.8654L48.7057 15.5899L57.2098 13.0624L57.3999 16.2542L57.3882 16.2762L57.4011 16.2722L57.7313 21.817L63.9963 13.0311ZM22.7893 14.0762C23.9484 14.0785 25.0549 14.173 26.0961 14.3566C27.5695 14.5221 29.1291 14.9557 30.4952 15.8608C32.3694 16.9143 33.8031 18.4139 34.6298 20.3238C36.646 24.9743 33.2779 31.6667 26.6116 35.7732L30.0971 49.1222L24.4555 50.9211L12.8792 25.1161C12.2495 25.4465 11.0865 26.0005 10.0185 26.523L5.82656 19.4549C7.49357 18.3923 9.32177 17.4504 11.2664 16.6303C15.3596 14.8927 19.312 14.0694 22.7893 14.0762ZM81.9827 15.7003C85.2583 15.6614 88.0757 16.9988 89.9627 19.3099L81.438 28.3666C82.016 28.4754 82.9352 28.3241 83.6138 28.162C84.8361 27.8645 85.7332 27.3554 86.4729 26.7422C86.4654 26.7522 86.4572 26.7618 86.4502 26.7721C86.4894 26.7363 86.5276 26.705 86.568 26.6721L86.5639 26.6675C87.0149 26.282 87.4076 25.8581 87.7813 25.4205L91.188 28.4795L92.2201 29.4101C91.7727 29.872 91.3028 30.308 90.827 30.7064C88.8625 32.3283 86.6231 33.3857 83.6644 34.0992C83.0177 34.2471 82.3838 34.3547 81.7638 34.4091C77.0677 34.8698 73.1279 32.7177 71.6329 29.2267C71.4467 28.8039 71.303 28.3758 71.1945 27.919C70.503 24.9789 71.0936 22.3512 72.5488 20.2923C72.9679 19.6916 73.4652 19.144 74.0239 18.6509C75.3945 17.4302 77.1443 16.5427 79.1338 16.0655C80.1124 15.83 81.0657 15.7114 81.9829 15.7005L81.9827 15.7003ZM127.493 16.0478L136.59 17.8726L139.648 32.3503L142.785 19.3705L149.705 20.8967L139.959 50.3544L135.905 49.1488L135.11 48.5343L134.697 31.1056L132.263 44.8448L126.983 44.0036L127.361 40.048C130.809 37.1402 132.637 32.553 131.635 28.3961C131.195 26.5554 130.247 24.9526 128.91 23.7342L129.356 19.069L127.36 18.5386L127.493 16.0478ZM122.233 23.5698C123.947 23.5425 125.529 24.0242 126.781 24.9228C127.518 25.4442 128.13 26.1078 128.612 26.8791C128.977 27.4883 129.261 28.1597 129.433 28.893C130.047 31.4308 129.316 34.1489 127.712 36.3387C127.025 37.2721 126.188 38.1108 125.222 38.7976C124.5 39.3105 123.706 39.7463 122.852 40.0608C121.166 40.7018 119.49 40.835 117.996 40.5386C116.954 40.3335 116.005 39.9283 115.179 39.3417C113.865 38.393 112.898 36.9921 112.471 35.233C111.974 33.1197 112.432 30.8632 113.571 28.8865C114.139 27.9202 114.867 27.0121 115.729 26.2295C116.69 25.3692 117.805 24.6648 119.045 24.1887C120.127 23.7858 121.204 23.5863 122.233 23.5698ZM68.3556 24.357C68.242 25.5391 68.3005 26.7754 68.5486 28.0289L65.7011 26.9322L65.7014 26.9319L68.3556 24.357ZM45.0574 25.5551C46.6721 25.5707 48.1695 26.0299 49.394 26.8603C50.7385 27.7705 51.7638 29.139 52.2424 30.8539C52.3026 31.0358 52.3423 31.227 52.3826 31.414C52.5194 32.0674 52.5745 32.7373 52.5484 33.3975C52.4837 35.385 51.7525 37.3765 50.5283 39.0613C49.3638 40.6906 47.737 42.0354 45.823 42.8577C40.9287 44.9273 36.0345 42.8576 34.7269 38.2196C33.4601 33.7351 36.4075 28.3968 41.1496 26.3577C42.4746 25.7994 43.8015 25.543 45.0574 25.5551ZM48.317 44.4322L48.3179 44.4409C48.3046 44.4455 48.291 44.4504 48.2773 44.4552C48.2904 44.4474 48.3039 44.4401 48.317 44.4322L48.317 44.4322Z",
                            fill: "#1d4ed8"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/icons.tsx>",
                            lineNumber: 31,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                            d: "M30.1704 25.1959C29.6599 22.462 26.0784 20.9551 22.5274 22.8882L23.4427 26.0171L24.8826 30.6409L25.5395 32.7469C28.2036 31.0371 30.8812 28.9827 30.1704 25.1959ZM26.6433 29.3998C26.2555 28.1366 25.405 25.409 25.405 25.409C25.409 25.4214 25.2375 24.8253 25.0342 24.1429C25.7871 24.0086 26.5104 24.063 27.1055 24.3486C27.4382 24.5068 28.023 24.8757 28.1508 25.575C28.4449 27.1471 27.914 28.2692 26.6433 29.3998Z",
                            fill: "#1d4ed8"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/icons.tsx>",
                            lineNumber: 35,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                            d: "M83.9026 20.8582C81.9176 19.0407 78.8323 19.1819 77.0216 21.1614C75.2002 23.1376 75.3433 26.2188 77.3311 28.0289C77.4929 28.1848 77.6678 28.3123 77.8438 28.4375L84.2467 21.1999C84.1337 21.0821 84.0201 20.9648 83.9026 20.8582ZM77.8569 25.9491C77.2306 24.8015 77.3572 23.3444 78.2935 22.3232C79.194 21.3439 80.5737 21.0651 81.7501 21.5179L77.8569 25.9491Z",
                            fill: "#1d4ed8"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/icons.tsx>",
                            lineNumber: 39,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                            d: "M125.337 27.3698C125.391 27.5846 125.419 27.7971 125.412 28.0233C125.353 29.3755 124.08 30.4194 122.561 30.3485C121.044 30.2964 119.853 29.1471 119.912 27.7983C119.963 26.5339 121.092 25.5331 122.486 25.4691C122.221 25.4095 121.945 25.3784 121.656 25.3682C119.117 25.2588 117.041 27.0542 116.953 29.2893C116.856 31.6797 118.775 33.6287 121.275 33.7369C123.818 33.8384 125.893 32.0368 125.994 29.6577C126.023 28.8331 125.779 28.0425 125.337 27.3698Z",
                            fill: "#1d4ed8"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/icons.tsx>",
                            lineNumber: 43,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                            d: "M48.2918 30.0997C48.2918 31.4576 47.0546 32.5457 45.5392 32.5457C44.0198 32.5457 42.7871 31.457 42.7871 30.0997C42.7871 28.8342 43.8716 27.7909 45.2615 27.6696C44.9952 27.6214 44.7181 27.5937 44.432 27.5937C41.8929 27.5937 39.8897 29.4735 39.8897 31.712C39.8897 34.1008 41.8934 35.9744 44.3911 35.9744C46.9325 35.9744 48.9339 34.0996 48.9339 31.712C48.9339 30.8852 48.6603 30.106 48.1896 29.4644C48.2532 29.6577 48.2918 29.8719 48.2918 30.0997Z",
                            fill: "#1d4ed8"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/icons.tsx>",
                            lineNumber: 47,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/icons.tsx>",
                    lineNumber: 30,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("clipPath", {
                        id: "clip0_235_917",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("rect", {
                            width: "153",
                            height: "56",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/icons.tsx>",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/icons.tsx>",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/icons.tsx>",
                    lineNumber: 52,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/icons.tsx>",
            lineNumber: 22,
            columnNumber: 5
        }, this),
    Pokeball: (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M16.0845 2.57792C23.1539 2.57792 28.9533 8.0028 29.5413 14.9169H21.1331C20.6327 12.5392 18.5243 10.7497 15.9969 10.7497C13.4694 10.7497 11.3611 12.5392 10.8606 14.9169H2.62757C3.2219 8.0028 9.02131 2.57792 16.0845 2.57792ZM18.8935 14.9169C19.0186 15.2548 19.0874 15.6177 19.0874 15.9993H19.0936C19.0936 16.381 19.0248 16.7439 18.8997 17.0818C18.4618 18.2581 17.3294 19.0903 16.0031 19.0903C14.6768 19.0903 13.5445 18.2519 13.1065 17.0818C12.9814 16.7439 12.9126 16.381 12.9126 15.9993H12.9064C12.9064 15.6177 12.9752 15.2548 13.1003 14.9169C13.5382 13.7405 14.6706 12.9083 15.9969 12.9083C17.3232 12.9083 18.4555 13.7468 18.8935 14.9169ZM15.9093 29.427C8.83988 29.427 3.04047 24.0021 2.45239 17.0881H10.8606C11.3611 19.4658 13.4694 21.2553 15.9969 21.2553C18.5243 21.2553 20.6327 19.4658 21.1331 17.0881H29.3724C28.7781 23.9959 22.9787 29.427 15.9093 29.427ZM15.9969 0C7.16325 0 0 7.16435 0 15.9993C0 24.8343 7.16325 31.9987 15.9969 31.9987C24.8305 31.9987 32 24.8406 32 15.9993C32 7.1581 24.8368 0 15.9969 0Z",
                fill: "white"
            }, void 0, false, {
                fileName: "<[project]/src/components/icons.tsx>",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/components/icons.tsx>",
            lineNumber: 60,
            columnNumber: 5
        }, this),
    ChevronLeft: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronLeftIcon$7d$__["ChevronLeftIcon"],
    ChevronRight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronRightIcon$7d$__["ChevronRightIcon"],
    MoreHorizontal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$more$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__MoreHorizontalIcon$7d$__["MoreHorizontalIcon"],
    Check: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__CheckIcon$7d$__["CheckIcon"],
    Circle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__CircleIcon$7d$__["CircleIcon"],
    Moon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__MoonIcon$7d$__["MoonIcon"],
    Sun: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__SunIcon$7d$__["SunIcon"],
    Laptop: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__LaptopIcon$7d$__["LaptopIcon"],
    Search: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__SearchIcon$7d$__["SearchIcon"],
    Weight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$weight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__WeightIcon$7d$__["WeightIcon"],
    Length: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__RulerIcon$7d$__["RulerIcon"],
    Info: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__InfoIcon$7d$__["InfoIcon"],
    Volume2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Volume2Icon$7d$__["Volume2Icon"],
    Alert: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircleIcon$7d$__["AlertCircleIcon"]
};

})()),
"[project]/src/components/pokemon-search.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PokemonSearch": ()=>PokemonSearch
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textfield$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/textfield/index.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function PokemonSearch({ query, onChange }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "mb-12",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textfield$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextField"].Root, {
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textfield$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextField"].Input, {
                    id: "search",
                    name: "search",
                    value: query,
                    onChange: onChange,
                    placeholder: "Enter Pokémon name or number",
                    autoComplete: "off"
                }, void 0, false, {
                    fileName: "<[project]/src/components/pokemon-search.tsx>",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textfield$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextField"].Slot, {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icons"].Search, {
                        className: "size-4 text-blue-700"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-search.tsx>",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/pokemon-search.tsx>",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/pokemon-search.tsx>",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/pokemon-search.tsx>",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Button": ()=>Button,
    "ButtonStyles": ()=>ButtonStyles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/mizuhara/dist/utils/index.mjs [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-variants/dist/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const ButtonStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tv"]({
    base: [
        "inline-flex select-none items-center justify-center rounded-md text-sm font-medium outline-none ring-offset-background transition",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
    ],
    variants: {
        variant: {
            default: [
                "border text-primary-foreground",
                "border-blue-700 hover:bg-blue-100"
            ],
            destructive: [
                "bg-destructive text-destructive-foreground",
                "hover:bg-destructive/90"
            ],
            outline: [
                "border border-input bg-blue-700 hover:bg-blue-100",
                "hover:text-black"
            ],
            secondary: [
                "bg-secondary text-secondary-foreground",
                "hover:bg-secondary/80"
            ],
            ghost: [
                "text-blue-700 hover:bg-blue-100"
            ],
            link: [
                "text-primary underline-offset-4",
                "hover:underline"
            ]
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type = "button", variant, size, asChild, ...props }, ref)=>{
    const Component = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Component, {
        type: type,
        className: ButtonStyles({
            variant,
            size,
            className
        }),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/button.tsx>",
        lineNumber: 57,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";

})()),
"[project]/src/components/ui/pagination.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Pagination": ()=>Pagination
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/mizuhara/dist/utils/index.mjs [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__t__as__cn$7d$__ = __turbopack_import__("[project]/node_modules/mizuhara/dist/utils/index.mjs [app-ssr] (ecmascript) {export t as cn}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
function PaginationRoot({ className, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("nav", {
        role: "navigation",
        "aria-label": "pagination",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__t__as__cn$7d$__["cn"]("mx-auto mt-8 flex w-full justify-center", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/pagination.tsx>",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
const PaginationContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__t__as__cn$7d$__["cn"]("flex flex-wrap items-center justify-center gap-1", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/pagination.tsx>",
        lineNumber: 25,
        columnNumber: 3
    }, this));
PaginationContent.displayName = "PaginationContent";
const PaginationItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/pagination.tsx>",
        lineNumber: 37,
        columnNumber: 19
    }, this));
PaginationItem.displayName = "PaginationItem";
function PaginationLink({ className, isActive, size = "icon", children, disabled, ...props }) {
    if (disabled) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            "aria-disabled": true,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonStyles"]({
                variant: isActive ? "outline" : "ghost",
                size,
                className
            }),
            children: children
        }, void 0, false, {
            fileName: "<[project]/src/components/ui/pagination.tsx>",
            lineNumber: 57,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        "aria-current": isActive ? "page" : undefined,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonStyles"]({
            variant: isActive ? "outline" : "ghost",
            size,
            className
        }),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/pagination.tsx>",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
PaginationLink.displayName = "PaginationLink";
function PaginationPrevious({ className, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](PaginationLink, {
        "aria-label": "Go to previous page",
        size: "default",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__t__as__cn$7d$__["cn"]("gap-1 pl-2.5", className),
        ...props,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icons"].ChevronLeft, {
                className: "size-4"
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/pagination.tsx>",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                children: "Previous"
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/pagination.tsx>",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/pagination.tsx>",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
PaginationPrevious.displayName = "PaginationPrevious";
function PaginationNext({ className, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](PaginationLink, {
        "aria-label": "Go to next page",
        size: "default",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__t__as__cn$7d$__["cn"]("gap-1 pr-2.5", className),
        ...props,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                children: "Next"
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/pagination.tsx>",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icons"].ChevronRight, {
                className: "size-4"
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/pagination.tsx>",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/pagination.tsx>",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
function PaginationEllipsis({ className, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
        "aria-hidden": true,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__t__as__cn$7d$__["cn"]("flex size-9 items-center justify-center", className),
        ...props,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icons"].MoreHorizontal, {
                className: "size-4 opacity-50"
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/pagination.tsx>",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                className: "sr-only",
                children: "More pages"
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/pagination.tsx>",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/pagination.tsx>",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
const Pagination = Object.assign(PaginationRoot, {
    Content: PaginationContent,
    Ellipsis: PaginationEllipsis,
    Item: PaginationItem,
    Link: PaginationLink,
    Next: PaginationNext,
    Previous: PaginationPrevious
});

})()),
"[project]/src/components/pokemon-pagination-skeleton.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PokemonPaginationSkeleton": ()=>PokemonPaginationSkeleton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/pagination.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function PokemonPaginationSkeleton() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"], {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Content, {
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Item, {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Previous, {
                        disabled: true,
                        href: "/"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-pagination-skeleton.tsx>",
                        lineNumber: 8,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/pokemon-pagination-skeleton.tsx>",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                Array.from({
                    length: 5
                }).map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Item, {
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Link, {
                            href: "/",
                            disabled: true,
                            children: i + 1
                        }, void 0, false, {
                            fileName: "<[project]/src/components/pokemon-pagination-skeleton.tsx>",
                            lineNumber: 12,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "<[project]/src/components/pokemon-pagination-skeleton.tsx>",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Item, {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Ellipsis, {}, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-pagination-skeleton.tsx>",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/pokemon-pagination-skeleton.tsx>",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Item, {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Link, {
                        disabled: true,
                        href: "/",
                        children: "10"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-pagination-skeleton.tsx>",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/pokemon-pagination-skeleton.tsx>",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Item, {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Next, {
                        disabled: true,
                        href: "/"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-pagination-skeleton.tsx>",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/pokemon-pagination-skeleton.tsx>",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/pokemon-pagination-skeleton.tsx>",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/pokemon-pagination-skeleton.tsx>",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/pokemon-pagination.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PokemonPagination": ()=>PokemonPagination
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/pagination.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const PAGINATION_RANGE = 5;
function PokemonPagination({ page, totalPages }) {
    const searchParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"]();
    const q = searchParams.get("q");
    console.log({
        page,
        totalPages
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"], {
        children: totalPages > 1 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Content, {
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Item, {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Previous, {
                        disabled: page === 1,
                        href: {
                            pathname: "/",
                            query: {
                                ...page - 1 !== 1 && {
                                    page: page - 1
                                },
                                ...q && {
                                    q
                                }
                            }
                        },
                        scroll: false
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                    lineNumber: 25,
                    columnNumber: 11
                }, this),
                [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Item, {
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Link, {
                            href: {
                                pathname: "/",
                                query: {
                                    ...q && {
                                        q
                                    }
                                }
                            },
                            scroll: false,
                            isActive: page === 1,
                            children: 1
                        }, void 0, false, {
                            fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                            lineNumber: 40,
                            columnNumber: 15
                        }, this)
                    }, 1, false, {
                        fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this),
                    ...page > PAGINATION_RANGE - 1 ? [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Item, {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Ellipsis, {}, void 0, false, {
                                fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this)
                        }, "ellipsis-1", false, {
                            fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                            lineNumber: 55,
                            columnNumber: 19
                        }, this)
                    ] : [],
                    ...Array.from({
                        length: Math.min(totalPages, PAGINATION_RANGE)
                    }, (_, i)=>{
                        const pageNumber = page <= 3 ? i + 2 : page + i - 2;
                        return pageNumber > 1 && pageNumber < totalPages ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Item, {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Link, {
                                href: {
                                    pathname: "/",
                                    query: {
                                        page: pageNumber,
                                        ...q && {
                                            q
                                        }
                                    }
                                },
                                scroll: false,
                                isActive: page === pageNumber,
                                children: pageNumber
                            }, void 0, false, {
                                fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this)
                        }, pageNumber, false, {
                            fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                            lineNumber: 65,
                            columnNumber: 19
                        }, this) : null;
                    }).filter(Boolean),
                    ...page < totalPages - 2 ? [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Item, {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Ellipsis, {}, void 0, false, {
                                fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                                lineNumber: 86,
                                columnNumber: 21
                            }, this)
                        }, "ellipsis-2", false, {
                            fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                            lineNumber: 85,
                            columnNumber: 19
                        }, this)
                    ] : [],
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Item, {
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Link, {
                            href: {
                                pathname: "/",
                                query: {
                                    page: totalPages,
                                    ...q && {
                                        q
                                    }
                                }
                            },
                            scroll: false,
                            isActive: page === totalPages,
                            children: totalPages
                        }, void 0, false, {
                            fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                            lineNumber: 91,
                            columnNumber: 15
                        }, this)
                    }, totalPages, false, {
                        fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                        lineNumber: 90,
                        columnNumber: 13
                    }, this)
                ],
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Item, {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pagination"].Next, {
                        disabled: page === totalPages,
                        href: {
                            pathname: "/",
                            query: {
                                page: page + 1,
                                ...q && {
                                    q
                                }
                            }
                        },
                        scroll: false
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                        lineNumber: 107,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/pokemon-pagination.tsx>",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/pokemon-pagination.tsx>",
            lineNumber: 24,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/pokemon-pagination.tsx>",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Skeleton": ()=>Skeleton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/mizuhara/dist/utils/index.mjs [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__t__as__cn$7d$__ = __turbopack_import__("[project]/node_modules/mizuhara/dist/utils/index.mjs [app-ssr] (ecmascript) {export t as cn}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Skeleton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__t__as__cn$7d$__["cn"]("rounded-md bg-slate-200 motion-safe:animate-pulse", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/skeleton.tsx>",
        lineNumber: 10,
        columnNumber: 7
    }, this);
});
Skeleton.displayName = "Skeleton";

})()),
"[project]/src/components/pokemon-card-skeleton.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PokemonCardSkeleton": ()=>PokemonCardSkeleton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function PokemonCardSkeleton() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "rounded-md border-2 border-blue-700 px-6 py-4",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "size-32"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-card-skeleton.tsx>",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-5 w-8"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-card-skeleton.tsx>",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-28"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-card-skeleton.tsx>",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/pokemon-card-skeleton.tsx>",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "my-2 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-5 w-14"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-card-skeleton.tsx>",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-5 w-14"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-card-skeleton.tsx>",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/pokemon-card-skeleton.tsx>",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/pokemon-card-skeleton.tsx>",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/pokemon-list-skeleton.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PokemonListSkeleton": ()=>PokemonListSkeleton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$card$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/pokemon-card-skeleton.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function PokemonListSkeleton() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "m-auto grid max-w-screen-md animate-fade gap-6 sm:grid-cols-2 md:grid-cols-3",
        children: Array.from({
            length: 9
        }).map((_, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$card$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PokemonCardSkeleton"], {}, i, false, {
                fileName: "<[project]/src/components/pokemon-list-skeleton.tsx>",
                lineNumber: 7,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "<[project]/src/components/pokemon-list-skeleton.tsx>",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Badge": ()=>Badge,
    "BadgeStyles": ()=>BadgeStyles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/mizuhara/dist/utils/index.mjs [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-variants/dist/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const BadgeStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tv"]({
    base: [
        "inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold outline-none transition-colors",
        "focus:ring-2 focus:ring-ring focus:ring-offset-2"
    ],
    variants: {
        type: {
            normal: "bg-stone-500 text-zinc-50",
            fire: "bg-orange-500 text-zinc-950",
            water: "bg-sky-500 text-zinc-950",
            grass: "bg-green-600 text-zinc-950",
            electric: "bg-yellow-400 text-zinc-950",
            ice: "bg-blue-300 text-zinc-950",
            fighting: "bg-red-500 text-zinc-950",
            poison: "bg-fuchsia-600 text-zinc-50",
            ground: "bg-orange-300 text-zinc-950",
            flying: "bg-violet-300 text-zinc-950",
            psychic: "bg-pink-600 text-white",
            bug: "bg-lime-500 text-zinc-950",
            rock: "bg-stone-600 text-zinc-50",
            ghost: "bg-violet-400 text-zinc-950",
            dark: "bg-stone-800 text-zinc-50",
            dragon: "bg-violet-600 text-zinc-50",
            steel: "bg-slate-400 text-zinc-950",
            fairy: "bg-pink-300 text-zinc-950"
        }
    }
});
const Badge = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        ref: ref,
        className: BadgeStyles({
            type,
            className
        }),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/badge.tsx>",
        lineNumber: 40,
        columnNumber: 7
    }, this);
});
Badge.displayName = "Badge";

})()),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "capitalize": ()=>capitalize,
    "createUrl": ()=>createUrl,
    "getPokemonCries": ()=>getPokemonCries,
    "getPokemonSprite": ()=>getPokemonSprite,
    "getPokemonWeakness": ()=>getPokemonWeakness,
    "getRandomItem": ()=>getRandomItem,
    "toggleParam": ()=>toggleParam,
    "updateURLParams": ()=>updateURLParams
});
function createUrl(pathname, params) {
    const paramsString = params.toString();
    const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
    return `${pathname}${queryString}`;
}
function toggleParam({ params, key, value, condition }) {
    const paramsCopy = new URLSearchParams(params);
    const shouldDelete = condition ?? paramsCopy.has(key);
    if (shouldDelete) {
        paramsCopy.delete(key);
    } else {
        paramsCopy.set(key, value);
    }
    return paramsCopy;
}
function updateURLParams({ key, value, condition, currentParams, path, router }) {
    const newParams = toggleParam({
        params: new URLSearchParams(currentParams.toString()),
        key,
        value,
        condition
    });
    if (router) {
        router.replace(createUrl(path, newParams), {
            scroll: false
        });
    } else {
        window.history.replaceState(null, "", createUrl(path, newParams));
    }
}
function capitalize(string) {
    return string.at(0)?.toUpperCase() + string.slice(1);
}
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
const typeChart = {
    normal: {
        normal: 100,
        fire: 100,
        water: 100,
        electric: 100,
        grass: 100,
        ice: 100,
        fighting: 200,
        poison: 100,
        ground: 100,
        flying: 100,
        psychic: 100,
        bug: 100,
        rock: 100,
        ghost: 0,
        dragon: 100,
        dark: 100,
        steel: 100,
        fairy: 100
    },
    fire: {
        normal: 100,
        fire: 50,
        water: 200,
        electric: 100,
        grass: 50,
        ice: 50,
        fighting: 100,
        poison: 100,
        ground: 200,
        flying: 100,
        psychic: 100,
        bug: 50,
        rock: 200,
        ghost: 100,
        dragon: 100,
        dark: 100,
        steel: 50,
        fairy: 50
    },
    water: {
        normal: 100,
        fire: 50,
        water: 50,
        electric: 200,
        grass: 200,
        ice: 50,
        fighting: 100,
        poison: 100,
        ground: 100,
        flying: 100,
        psychic: 100,
        bug: 100,
        rock: 100,
        ghost: 100,
        dragon: 100,
        dark: 100,
        steel: 50,
        fairy: 100
    },
    electric: {
        normal: 100,
        fire: 100,
        water: 100,
        electric: 50,
        grass: 100,
        ice: 100,
        fighting: 100,
        poison: 100,
        ground: 200,
        flying: 50,
        psychic: 100,
        bug: 100,
        rock: 100,
        ghost: 100,
        dragon: 100,
        dark: 100,
        steel: 50,
        fairy: 100
    },
    grass: {
        normal: 100,
        fire: 200,
        water: 50,
        electric: 50,
        grass: 50,
        ice: 200,
        fighting: 100,
        poison: 200,
        ground: 50,
        flying: 200,
        psychic: 100,
        bug: 200,
        rock: 100,
        ghost: 100,
        dragon: 100,
        dark: 100,
        steel: 100,
        fairy: 100
    },
    ice: {
        normal: 100,
        fire: 200,
        water: 100,
        electric: 100,
        grass: 100,
        ice: 50,
        fighting: 200,
        poison: 100,
        ground: 100,
        flying: 100,
        psychic: 100,
        bug: 100,
        rock: 200,
        ghost: 100,
        dragon: 100,
        dark: 100,
        steel: 200,
        fairy: 100
    },
    fighting: {
        normal: 100,
        fire: 100,
        water: 100,
        electric: 100,
        grass: 100,
        ice: 100,
        fighting: 100,
        poison: 100,
        ground: 100,
        flying: 200,
        psychic: 200,
        bug: 100,
        rock: 100,
        ghost: 100,
        dragon: 100,
        dark: 50,
        steel: 100,
        fairy: 200
    },
    poison: {
        normal: 100,
        fire: 100,
        water: 100,
        electric: 100,
        grass: 50,
        ice: 100,
        fighting: 50,
        poison: 50,
        ground: 200,
        flying: 100,
        psychic: 200,
        bug: 50,
        rock: 100,
        ghost: 100,
        dragon: 100,
        dark: 100,
        steel: 100,
        fairy: 50
    },
    ground: {
        normal: 100,
        fire: 100,
        water: 200,
        electric: 0,
        grass: 200,
        ice: 200,
        fighting: 100,
        poison: 50,
        ground: 100,
        flying: 100,
        psychic: 100,
        bug: 100,
        rock: 50,
        ghost: 100,
        dragon: 100,
        dark: 100,
        steel: 100,
        fairy: 100
    },
    flying: {
        normal: 100,
        fire: 100,
        water: 100,
        electric: 200,
        grass: 50,
        ice: 200,
        fighting: 50,
        poison: 100,
        ground: 0,
        flying: 100,
        psychic: 100,
        bug: 50,
        rock: 200,
        ghost: 100,
        dragon: 100,
        dark: 100,
        steel: 100,
        fairy: 100
    },
    psychic: {
        normal: 100,
        fire: 100,
        water: 100,
        electric: 100,
        grass: 100,
        ice: 100,
        fighting: 50,
        poison: 100,
        ground: 100,
        flying: 100,
        psychic: 50,
        bug: 200,
        rock: 100,
        ghost: 200,
        dragon: 100,
        dark: 200,
        steel: 100,
        fairy: 100
    },
    bug: {
        normal: 100,
        fire: 200,
        water: 100,
        electric: 100,
        grass: 50,
        ice: 100,
        fighting: 50,
        poison: 100,
        ground: 50,
        flying: 200,
        psychic: 100,
        bug: 100,
        rock: 200,
        ghost: 100,
        dragon: 100,
        dark: 100,
        steel: 100,
        fairy: 100
    },
    rock: {
        normal: 50,
        fire: 50,
        water: 200,
        electric: 100,
        grass: 200,
        ice: 100,
        fighting: 200,
        poison: 50,
        ground: 200,
        flying: 50,
        psychic: 100,
        bug: 100,
        rock: 100,
        ghost: 100,
        dragon: 100,
        dark: 100,
        steel: 200,
        fairy: 100
    },
    ghost: {
        normal: 0,
        fire: 100,
        water: 100,
        electric: 100,
        grass: 100,
        ice: 100,
        fighting: 0,
        poison: 50,
        ground: 100,
        flying: 100,
        psychic: 100,
        bug: 50,
        rock: 100,
        ghost: 200,
        dragon: 100,
        dark: 200,
        steel: 100,
        fairy: 100
    },
    dragon: {
        normal: 100,
        fire: 50,
        water: 50,
        electric: 50,
        grass: 50,
        ice: 200,
        fighting: 100,
        poison: 100,
        ground: 100,
        flying: 100,
        psychic: 100,
        bug: 100,
        rock: 100,
        ghost: 100,
        dragon: 200,
        dark: 100,
        steel: 100,
        fairy: 200
    },
    dark: {
        normal: 100,
        fire: 100,
        water: 100,
        electric: 100,
        grass: 100,
        ice: 100,
        fighting: 200,
        poison: 100,
        ground: 100,
        flying: 100,
        psychic: 0,
        bug: 200,
        rock: 100,
        ghost: 50,
        dragon: 100,
        dark: 50,
        steel: 100,
        fairy: 200
    },
    steel: {
        normal: 50,
        fire: 200,
        water: 100,
        electric: 100,
        grass: 50,
        ice: 50,
        fighting: 200,
        poison: 0,
        ground: 200,
        flying: 50,
        psychic: 50,
        bug: 50,
        rock: 50,
        ghost: 100,
        dragon: 50,
        dark: 100,
        steel: 50,
        fairy: 50
    },
    fairy: {
        normal: 100,
        fire: 100,
        water: 100,
        electric: 100,
        grass: 100,
        ice: 100,
        fighting: 50,
        poison: 200,
        ground: 100,
        flying: 100,
        psychic: 100,
        bug: 50,
        rock: 100,
        ghost: 100,
        dragon: 0,
        dark: 50,
        steel: 200,
        fairy: 100
    }
};
const getPokemonWeakness = (types)=>{
    const weaknesses = types.reduce((acc, type)=>{
        const typeWeaknesses = Object.entries(typeChart[type]).filter(([, damageFactor])=>damageFactor > 100).map(([weaknessType, damageFactor])=>({
                type: weaknessType,
                damageFactor
            }));
        return [
            ...acc,
            ...typeWeaknesses
        ];
    }, []);
    const uniqueWeaknesses = weaknesses.reduce((acc, weakness)=>{
        const existingWeakness = acc.find(({ type })=>type === weakness.type);
        if (existingWeakness) {
            existingWeakness.damageFactor += weakness.damageFactor;
            return acc;
        }
        return [
            ...acc,
            weakness
        ];
    }, []);
    const filteredWeaknesses = uniqueWeaknesses.filter(({ type, damageFactor })=>{
        const combinedDamageFactor = types.reduce((total, pokemonType)=>total * (typeChart[pokemonType][type] / 10), damageFactor / 10);
        return combinedDamageFactor > 1;
    });
    return filteredWeaknesses.filter(({ type })=>types.every((pokemonType)=>typeChart[pokemonType][type] > 50));
};
const pokemonBaseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
function getPokemonSprite(id) {
    return `${pokemonBaseUrl}/${id}.png`;
}
function getPokemonCries(id) {
    return `https://pokemoncries.com/cries/${id}.mp3`;
}

})()),
"[project]/src/components/pokemon-card.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PokemonCard": ()=>PokemonCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function PokemonCard({ pokemon }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "rounded-md border-2 border-blue-700 px-6 py-4 hover:bg-blue-100",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: `/${pokemon.name}`,
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPokemonSprite"](pokemon.id),
                    alt: pokemon.name,
                    width: 128,
                    height: 128,
                    className: "rendering-pixelated",
                    draggable: false
                }, void 0, false, {
                    fileName: "<[project]/src/components/pokemon-card.tsx>",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "text-sm text-muted-foreground",
                    children: [
                        "#",
                        String(pokemon.id).padStart(3, "0")
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/pokemon-card.tsx>",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "text-2xl font-semibold capitalize leading-none tracking-tight text-black",
                    children: pokemon.name
                }, void 0, false, {
                    fileName: "<[project]/src/components/pokemon-card.tsx>",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "my-2 mt-4 flex items-center gap-2",
                    children: pokemon.pokemons[0].types.map(({ type })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            type: type?.name,
                            className: "capitalize",
                            children: type.name
                        }, type?.name, false, {
                            fileName: "<[project]/src/components/pokemon-card.tsx>",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "<[project]/src/components/pokemon-card.tsx>",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/pokemon-card.tsx>",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/pokemon-card.tsx>",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/pokemon-list.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PokemonList": ()=>PokemonList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/pokemon-card.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function PokemonList({ data }) {
    const isEmpty = data?.list.length === 0;
    if (isEmpty) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
            className: "text-center text-2xl font-semibold",
            children: "No Pokemon found."
        }, void 0, false, {
            fileName: "<[project]/src/components/pokemon-list.tsx>",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "m-auto grid max-w-screen-md animate-fade gap-6 sm:grid-cols-2 md:grid-cols-3",
        children: data?.list.map((pokemon)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PokemonCard"], {
                pokemon: pokemon
            }, pokemon.id, false, {
                fileName: "<[project]/src/components/pokemon-list.tsx>",
                lineNumber: 21,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "<[project]/src/components/pokemon-list.tsx>",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/graphql/gql/graphql.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* eslint-disable */ __turbopack_esm__({
    "Cursor_Ordering": ()=>Cursor_Ordering,
    "Order_By": ()=>Order_By,
    "PokemonDocument": ()=>PokemonDocument,
    "PokemonListDocument": ()=>PokemonListDocument,
    "Pokemon_V2_Ability_Select_Column": ()=>Pokemon_V2_Ability_Select_Column,
    "Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns": ()=>Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns,
    "Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns": ()=>Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns,
    "Pokemon_V2_Abilitychange_Select_Column": ()=>Pokemon_V2_Abilitychange_Select_Column,
    "Pokemon_V2_Abilitychangeeffecttext_Select_Column": ()=>Pokemon_V2_Abilitychangeeffecttext_Select_Column,
    "Pokemon_V2_Abilityeffecttext_Select_Column": ()=>Pokemon_V2_Abilityeffecttext_Select_Column,
    "Pokemon_V2_Abilityflavortext_Select_Column": ()=>Pokemon_V2_Abilityflavortext_Select_Column,
    "Pokemon_V2_Abilityname_Select_Column": ()=>Pokemon_V2_Abilityname_Select_Column,
    "Pokemon_V2_Berry_Select_Column": ()=>Pokemon_V2_Berry_Select_Column,
    "Pokemon_V2_Berryfirmness_Select_Column": ()=>Pokemon_V2_Berryfirmness_Select_Column,
    "Pokemon_V2_Berryfirmnessname_Select_Column": ()=>Pokemon_V2_Berryfirmnessname_Select_Column,
    "Pokemon_V2_Berryflavor_Select_Column": ()=>Pokemon_V2_Berryflavor_Select_Column,
    "Pokemon_V2_Berryflavormap_Select_Column": ()=>Pokemon_V2_Berryflavormap_Select_Column,
    "Pokemon_V2_Berryflavorname_Select_Column": ()=>Pokemon_V2_Berryflavorname_Select_Column,
    "Pokemon_V2_Characteristic_Select_Column": ()=>Pokemon_V2_Characteristic_Select_Column,
    "Pokemon_V2_Characteristicdescription_Select_Column": ()=>Pokemon_V2_Characteristicdescription_Select_Column,
    "Pokemon_V2_Contestcombo_Select_Column": ()=>Pokemon_V2_Contestcombo_Select_Column,
    "Pokemon_V2_Contesteffect_Select_Column": ()=>Pokemon_V2_Contesteffect_Select_Column,
    "Pokemon_V2_Contesteffecteffecttext_Select_Column": ()=>Pokemon_V2_Contesteffecteffecttext_Select_Column,
    "Pokemon_V2_Contesteffectflavortext_Select_Column": ()=>Pokemon_V2_Contesteffectflavortext_Select_Column,
    "Pokemon_V2_Contesttype_Select_Column": ()=>Pokemon_V2_Contesttype_Select_Column,
    "Pokemon_V2_Contesttypename_Select_Column": ()=>Pokemon_V2_Contesttypename_Select_Column,
    "Pokemon_V2_Egggroup_Select_Column": ()=>Pokemon_V2_Egggroup_Select_Column,
    "Pokemon_V2_Egggroupname_Select_Column": ()=>Pokemon_V2_Egggroupname_Select_Column,
    "Pokemon_V2_Encounter_Select_Column": ()=>Pokemon_V2_Encounter_Select_Column,
    "Pokemon_V2_Encountercondition_Select_Column": ()=>Pokemon_V2_Encountercondition_Select_Column,
    "Pokemon_V2_Encounterconditionname_Select_Column": ()=>Pokemon_V2_Encounterconditionname_Select_Column,
    "Pokemon_V2_Encounterconditionvalue_Select_Column": ()=>Pokemon_V2_Encounterconditionvalue_Select_Column,
    "Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_And_Arguments_Columns": ()=>Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_And_Arguments_Columns,
    "Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns": ()=>Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns,
    "Pokemon_V2_Encounterconditionvaluemap_Select_Column": ()=>Pokemon_V2_Encounterconditionvaluemap_Select_Column,
    "Pokemon_V2_Encounterconditionvaluename_Select_Column": ()=>Pokemon_V2_Encounterconditionvaluename_Select_Column,
    "Pokemon_V2_Encountermethod_Select_Column": ()=>Pokemon_V2_Encountermethod_Select_Column,
    "Pokemon_V2_Encountermethodname_Select_Column": ()=>Pokemon_V2_Encountermethodname_Select_Column,
    "Pokemon_V2_Encounterslot_Select_Column": ()=>Pokemon_V2_Encounterslot_Select_Column,
    "Pokemon_V2_Evolutionchain_Select_Column": ()=>Pokemon_V2_Evolutionchain_Select_Column,
    "Pokemon_V2_Evolutiontrigger_Select_Column": ()=>Pokemon_V2_Evolutiontrigger_Select_Column,
    "Pokemon_V2_Evolutiontriggername_Select_Column": ()=>Pokemon_V2_Evolutiontriggername_Select_Column,
    "Pokemon_V2_Experience_Select_Column": ()=>Pokemon_V2_Experience_Select_Column,
    "Pokemon_V2_Gender_Select_Column": ()=>Pokemon_V2_Gender_Select_Column,
    "Pokemon_V2_Generation_Select_Column": ()=>Pokemon_V2_Generation_Select_Column,
    "Pokemon_V2_Generationname_Select_Column": ()=>Pokemon_V2_Generationname_Select_Column,
    "Pokemon_V2_Growthrate_Select_Column": ()=>Pokemon_V2_Growthrate_Select_Column,
    "Pokemon_V2_Growthratedescription_Select_Column": ()=>Pokemon_V2_Growthratedescription_Select_Column,
    "Pokemon_V2_Item_Select_Column": ()=>Pokemon_V2_Item_Select_Column,
    "Pokemon_V2_Itemattribute_Select_Column": ()=>Pokemon_V2_Itemattribute_Select_Column,
    "Pokemon_V2_Itemattributedescription_Select_Column": ()=>Pokemon_V2_Itemattributedescription_Select_Column,
    "Pokemon_V2_Itemattributemap_Select_Column": ()=>Pokemon_V2_Itemattributemap_Select_Column,
    "Pokemon_V2_Itemattributename_Select_Column": ()=>Pokemon_V2_Itemattributename_Select_Column,
    "Pokemon_V2_Itemcategory_Select_Column": ()=>Pokemon_V2_Itemcategory_Select_Column,
    "Pokemon_V2_Itemcategoryname_Select_Column": ()=>Pokemon_V2_Itemcategoryname_Select_Column,
    "Pokemon_V2_Itemeffecttext_Select_Column": ()=>Pokemon_V2_Itemeffecttext_Select_Column,
    "Pokemon_V2_Itemflavortext_Select_Column": ()=>Pokemon_V2_Itemflavortext_Select_Column,
    "Pokemon_V2_Itemflingeffect_Select_Column": ()=>Pokemon_V2_Itemflingeffect_Select_Column,
    "Pokemon_V2_Itemflingeffecteffecttext_Select_Column": ()=>Pokemon_V2_Itemflingeffecteffecttext_Select_Column,
    "Pokemon_V2_Itemgameindex_Select_Column": ()=>Pokemon_V2_Itemgameindex_Select_Column,
    "Pokemon_V2_Itemname_Select_Column": ()=>Pokemon_V2_Itemname_Select_Column,
    "Pokemon_V2_Itempocket_Select_Column": ()=>Pokemon_V2_Itempocket_Select_Column,
    "Pokemon_V2_Itempocketname_Select_Column": ()=>Pokemon_V2_Itempocketname_Select_Column,
    "Pokemon_V2_Itemsprites_Select_Column": ()=>Pokemon_V2_Itemsprites_Select_Column,
    "Pokemon_V2_Language_Select_Column": ()=>Pokemon_V2_Language_Select_Column,
    "Pokemon_V2_Languagename_Select_Column": ()=>Pokemon_V2_Languagename_Select_Column,
    "Pokemon_V2_Location_Select_Column": ()=>Pokemon_V2_Location_Select_Column,
    "Pokemon_V2_Locationarea_Select_Column": ()=>Pokemon_V2_Locationarea_Select_Column,
    "Pokemon_V2_Locationareaencounterrate_Select_Column": ()=>Pokemon_V2_Locationareaencounterrate_Select_Column,
    "Pokemon_V2_Locationareaname_Select_Column": ()=>Pokemon_V2_Locationareaname_Select_Column,
    "Pokemon_V2_Locationgameindex_Select_Column": ()=>Pokemon_V2_Locationgameindex_Select_Column,
    "Pokemon_V2_Locationname_Select_Column": ()=>Pokemon_V2_Locationname_Select_Column,
    "Pokemon_V2_Machine_Select_Column": ()=>Pokemon_V2_Machine_Select_Column,
    "Pokemon_V2_Move_Select_Column": ()=>Pokemon_V2_Move_Select_Column,
    "Pokemon_V2_Moveattribute_Select_Column": ()=>Pokemon_V2_Moveattribute_Select_Column,
    "Pokemon_V2_Moveattributedescription_Select_Column": ()=>Pokemon_V2_Moveattributedescription_Select_Column,
    "Pokemon_V2_Moveattributemap_Select_Column": ()=>Pokemon_V2_Moveattributemap_Select_Column,
    "Pokemon_V2_Moveattributename_Select_Column": ()=>Pokemon_V2_Moveattributename_Select_Column,
    "Pokemon_V2_Movebattlestyle_Select_Column": ()=>Pokemon_V2_Movebattlestyle_Select_Column,
    "Pokemon_V2_Movebattlestylename_Select_Column": ()=>Pokemon_V2_Movebattlestylename_Select_Column,
    "Pokemon_V2_Movechange_Select_Column": ()=>Pokemon_V2_Movechange_Select_Column,
    "Pokemon_V2_Movedamageclass_Select_Column": ()=>Pokemon_V2_Movedamageclass_Select_Column,
    "Pokemon_V2_Movedamageclassdescription_Select_Column": ()=>Pokemon_V2_Movedamageclassdescription_Select_Column,
    "Pokemon_V2_Movedamageclassname_Select_Column": ()=>Pokemon_V2_Movedamageclassname_Select_Column,
    "Pokemon_V2_Moveeffect_Select_Column": ()=>Pokemon_V2_Moveeffect_Select_Column,
    "Pokemon_V2_Moveeffectchange_Select_Column": ()=>Pokemon_V2_Moveeffectchange_Select_Column,
    "Pokemon_V2_Moveeffectchangeeffecttext_Select_Column": ()=>Pokemon_V2_Moveeffectchangeeffecttext_Select_Column,
    "Pokemon_V2_Moveeffecteffecttext_Select_Column": ()=>Pokemon_V2_Moveeffecteffecttext_Select_Column,
    "Pokemon_V2_Moveflavortext_Select_Column": ()=>Pokemon_V2_Moveflavortext_Select_Column,
    "Pokemon_V2_Movelearnmethod_Select_Column": ()=>Pokemon_V2_Movelearnmethod_Select_Column,
    "Pokemon_V2_Movelearnmethoddescription_Select_Column": ()=>Pokemon_V2_Movelearnmethoddescription_Select_Column,
    "Pokemon_V2_Movelearnmethodname_Select_Column": ()=>Pokemon_V2_Movelearnmethodname_Select_Column,
    "Pokemon_V2_Movemeta_Select_Column": ()=>Pokemon_V2_Movemeta_Select_Column,
    "Pokemon_V2_Movemetaailment_Select_Column": ()=>Pokemon_V2_Movemetaailment_Select_Column,
    "Pokemon_V2_Movemetaailmentname_Select_Column": ()=>Pokemon_V2_Movemetaailmentname_Select_Column,
    "Pokemon_V2_Movemetacategory_Select_Column": ()=>Pokemon_V2_Movemetacategory_Select_Column,
    "Pokemon_V2_Movemetacategorydescription_Select_Column": ()=>Pokemon_V2_Movemetacategorydescription_Select_Column,
    "Pokemon_V2_Movemetastatchange_Select_Column": ()=>Pokemon_V2_Movemetastatchange_Select_Column,
    "Pokemon_V2_Movename_Select_Column": ()=>Pokemon_V2_Movename_Select_Column,
    "Pokemon_V2_Movetarget_Select_Column": ()=>Pokemon_V2_Movetarget_Select_Column,
    "Pokemon_V2_Movetargetdescription_Select_Column": ()=>Pokemon_V2_Movetargetdescription_Select_Column,
    "Pokemon_V2_Movetargetname_Select_Column": ()=>Pokemon_V2_Movetargetname_Select_Column,
    "Pokemon_V2_Nature_Select_Column": ()=>Pokemon_V2_Nature_Select_Column,
    "Pokemon_V2_Naturebattlestylepreference_Select_Column": ()=>Pokemon_V2_Naturebattlestylepreference_Select_Column,
    "Pokemon_V2_Naturename_Select_Column": ()=>Pokemon_V2_Naturename_Select_Column,
    "Pokemon_V2_Naturepokeathlonstat_Select_Column": ()=>Pokemon_V2_Naturepokeathlonstat_Select_Column,
    "Pokemon_V2_Palpark_Select_Column": ()=>Pokemon_V2_Palpark_Select_Column,
    "Pokemon_V2_Palparkarea_Select_Column": ()=>Pokemon_V2_Palparkarea_Select_Column,
    "Pokemon_V2_Palparkareaname_Select_Column": ()=>Pokemon_V2_Palparkareaname_Select_Column,
    "Pokemon_V2_Pokeathlonstat_Select_Column": ()=>Pokemon_V2_Pokeathlonstat_Select_Column,
    "Pokemon_V2_Pokeathlonstatname_Select_Column": ()=>Pokemon_V2_Pokeathlonstatname_Select_Column,
    "Pokemon_V2_Pokedex_Select_Column": ()=>Pokemon_V2_Pokedex_Select_Column,
    "Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_And_Arguments_Columns": ()=>Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_And_Arguments_Columns,
    "Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns": ()=>Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns,
    "Pokemon_V2_Pokedexdescription_Select_Column": ()=>Pokemon_V2_Pokedexdescription_Select_Column,
    "Pokemon_V2_Pokedexname_Select_Column": ()=>Pokemon_V2_Pokedexname_Select_Column,
    "Pokemon_V2_Pokedexversiongroup_Select_Column": ()=>Pokemon_V2_Pokedexversiongroup_Select_Column,
    "Pokemon_V2_Pokemon_Select_Column": ()=>Pokemon_V2_Pokemon_Select_Column,
    "Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_And_Arguments_Columns": ()=>Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_And_Arguments_Columns,
    "Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns": ()=>Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns,
    "Pokemon_V2_Pokemonability_Select_Column": ()=>Pokemon_V2_Pokemonability_Select_Column,
    "Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns": ()=>Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns,
    "Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns": ()=>Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns,
    "Pokemon_V2_Pokemoncolor_Select_Column": ()=>Pokemon_V2_Pokemoncolor_Select_Column,
    "Pokemon_V2_Pokemoncolorname_Select_Column": ()=>Pokemon_V2_Pokemoncolorname_Select_Column,
    "Pokemon_V2_Pokemondexnumber_Select_Column": ()=>Pokemon_V2_Pokemondexnumber_Select_Column,
    "Pokemon_V2_Pokemonegggroup_Select_Column": ()=>Pokemon_V2_Pokemonegggroup_Select_Column,
    "Pokemon_V2_Pokemonevolution_Select_Column": ()=>Pokemon_V2_Pokemonevolution_Select_Column,
    "Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_And_Arguments_Columns": ()=>Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_And_Arguments_Columns,
    "Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns": ()=>Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns,
    "Pokemon_V2_Pokemonform_Select_Column": ()=>Pokemon_V2_Pokemonform_Select_Column,
    "Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_And_Arguments_Columns": ()=>Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_And_Arguments_Columns,
    "Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns": ()=>Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns,
    "Pokemon_V2_Pokemonformgeneration_Select_Column": ()=>Pokemon_V2_Pokemonformgeneration_Select_Column,
    "Pokemon_V2_Pokemonformname_Select_Column": ()=>Pokemon_V2_Pokemonformname_Select_Column,
    "Pokemon_V2_Pokemonformsprites_Select_Column": ()=>Pokemon_V2_Pokemonformsprites_Select_Column,
    "Pokemon_V2_Pokemonformtype_Select_Column": ()=>Pokemon_V2_Pokemonformtype_Select_Column,
    "Pokemon_V2_Pokemongameindex_Select_Column": ()=>Pokemon_V2_Pokemongameindex_Select_Column,
    "Pokemon_V2_Pokemonhabitat_Select_Column": ()=>Pokemon_V2_Pokemonhabitat_Select_Column,
    "Pokemon_V2_Pokemonhabitatname_Select_Column": ()=>Pokemon_V2_Pokemonhabitatname_Select_Column,
    "Pokemon_V2_Pokemonitem_Select_Column": ()=>Pokemon_V2_Pokemonitem_Select_Column,
    "Pokemon_V2_Pokemonmove_Select_Column": ()=>Pokemon_V2_Pokemonmove_Select_Column,
    "Pokemon_V2_Pokemonshape_Select_Column": ()=>Pokemon_V2_Pokemonshape_Select_Column,
    "Pokemon_V2_Pokemonshapename_Select_Column": ()=>Pokemon_V2_Pokemonshapename_Select_Column,
    "Pokemon_V2_Pokemonspecies_Select_Column": ()=>Pokemon_V2_Pokemonspecies_Select_Column,
    "Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_And_Arguments_Columns": ()=>Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_And_Arguments_Columns,
    "Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns": ()=>Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns,
    "Pokemon_V2_Pokemonspeciesdescription_Select_Column": ()=>Pokemon_V2_Pokemonspeciesdescription_Select_Column,
    "Pokemon_V2_Pokemonspeciesflavortext_Select_Column": ()=>Pokemon_V2_Pokemonspeciesflavortext_Select_Column,
    "Pokemon_V2_Pokemonspeciesname_Select_Column": ()=>Pokemon_V2_Pokemonspeciesname_Select_Column,
    "Pokemon_V2_Pokemonsprites_Select_Column": ()=>Pokemon_V2_Pokemonsprites_Select_Column,
    "Pokemon_V2_Pokemonstat_Select_Column": ()=>Pokemon_V2_Pokemonstat_Select_Column,
    "Pokemon_V2_Pokemontype_Select_Column": ()=>Pokemon_V2_Pokemontype_Select_Column,
    "Pokemon_V2_Pokemontypepast_Select_Column": ()=>Pokemon_V2_Pokemontypepast_Select_Column,
    "Pokemon_V2_Region_Select_Column": ()=>Pokemon_V2_Region_Select_Column,
    "Pokemon_V2_Regionname_Select_Column": ()=>Pokemon_V2_Regionname_Select_Column,
    "Pokemon_V2_Stat_Select_Column": ()=>Pokemon_V2_Stat_Select_Column,
    "Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_And_Arguments_Columns": ()=>Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_And_Arguments_Columns,
    "Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns": ()=>Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns,
    "Pokemon_V2_Statname_Select_Column": ()=>Pokemon_V2_Statname_Select_Column,
    "Pokemon_V2_Supercontestcombo_Select_Column": ()=>Pokemon_V2_Supercontestcombo_Select_Column,
    "Pokemon_V2_Supercontesteffect_Select_Column": ()=>Pokemon_V2_Supercontesteffect_Select_Column,
    "Pokemon_V2_Supercontesteffectflavortext_Select_Column": ()=>Pokemon_V2_Supercontesteffectflavortext_Select_Column,
    "Pokemon_V2_Type_Select_Column": ()=>Pokemon_V2_Type_Select_Column,
    "Pokemon_V2_Typeefficacy_Select_Column": ()=>Pokemon_V2_Typeefficacy_Select_Column,
    "Pokemon_V2_Typegameindex_Select_Column": ()=>Pokemon_V2_Typegameindex_Select_Column,
    "Pokemon_V2_Typename_Select_Column": ()=>Pokemon_V2_Typename_Select_Column,
    "Pokemon_V2_Version_Select_Column": ()=>Pokemon_V2_Version_Select_Column,
    "Pokemon_V2_Versiongroup_Select_Column": ()=>Pokemon_V2_Versiongroup_Select_Column,
    "Pokemon_V2_Versiongroupmovelearnmethod_Select_Column": ()=>Pokemon_V2_Versiongroupmovelearnmethod_Select_Column,
    "Pokemon_V2_Versiongroupregion_Select_Column": ()=>Pokemon_V2_Versiongroupregion_Select_Column,
    "Pokemon_V2_Versionname_Select_Column": ()=>Pokemon_V2_Versionname_Select_Column
});
let Cursor_Ordering;
(function(Cursor_Ordering) {
    /** ascending ordering of the cursor */ Cursor_Ordering["Asc"] = "ASC";
    /** descending ordering of the cursor */ Cursor_Ordering["Desc"] = "DESC";
})(Cursor_Ordering || (Cursor_Ordering = {}));
let Order_By;
(function(Order_By) {
    /** in ascending order, nulls last */ Order_By["Asc"] = "asc";
    /** in ascending order, nulls first */ Order_By["AscNullsFirst"] = "asc_nulls_first";
    /** in ascending order, nulls last */ Order_By["AscNullsLast"] = "asc_nulls_last";
    /** in descending order, nulls first */ Order_By["Desc"] = "desc";
    /** in descending order, nulls first */ Order_By["DescNullsFirst"] = "desc_nulls_first";
    /** in descending order, nulls last */ Order_By["DescNullsLast"] = "desc_nulls_last";
})(Order_By || (Order_By = {}));
let Pokemon_V2_Ability_Select_Column;
(function(Pokemon_V2_Ability_Select_Column) {
    /** column name */ Pokemon_V2_Ability_Select_Column["GenerationId"] = "generation_id";
    /** column name */ Pokemon_V2_Ability_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Ability_Select_Column["IsMainSeries"] = "is_main_series";
    /** column name */ Pokemon_V2_Ability_Select_Column["Name"] = "name";
})(Pokemon_V2_Ability_Select_Column || (Pokemon_V2_Ability_Select_Column = {}));
let Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function(Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */ Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsMainSeries"] = "is_main_series";
})(Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
let Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function(Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */ Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsMainSeries"] = "is_main_series";
})(Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (Pokemon_V2_Ability_Select_Column_Pokemon_V2_Ability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
let Pokemon_V2_Abilitychange_Select_Column;
(function(Pokemon_V2_Abilitychange_Select_Column) {
    /** column name */ Pokemon_V2_Abilitychange_Select_Column["AbilityId"] = "ability_id";
    /** column name */ Pokemon_V2_Abilitychange_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Abilitychange_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Abilitychange_Select_Column || (Pokemon_V2_Abilitychange_Select_Column = {}));
let Pokemon_V2_Abilitychangeeffecttext_Select_Column;
(function(Pokemon_V2_Abilitychangeeffecttext_Select_Column) {
    /** column name */ Pokemon_V2_Abilitychangeeffecttext_Select_Column["AbilityChangeId"] = "ability_change_id";
    /** column name */ Pokemon_V2_Abilitychangeeffecttext_Select_Column["Effect"] = "effect";
    /** column name */ Pokemon_V2_Abilitychangeeffecttext_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Abilitychangeeffecttext_Select_Column["LanguageId"] = "language_id";
})(Pokemon_V2_Abilitychangeeffecttext_Select_Column || (Pokemon_V2_Abilitychangeeffecttext_Select_Column = {}));
let Pokemon_V2_Abilityeffecttext_Select_Column;
(function(Pokemon_V2_Abilityeffecttext_Select_Column) {
    /** column name */ Pokemon_V2_Abilityeffecttext_Select_Column["AbilityId"] = "ability_id";
    /** column name */ Pokemon_V2_Abilityeffecttext_Select_Column["Effect"] = "effect";
    /** column name */ Pokemon_V2_Abilityeffecttext_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Abilityeffecttext_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Abilityeffecttext_Select_Column["ShortEffect"] = "short_effect";
})(Pokemon_V2_Abilityeffecttext_Select_Column || (Pokemon_V2_Abilityeffecttext_Select_Column = {}));
let Pokemon_V2_Abilityflavortext_Select_Column;
(function(Pokemon_V2_Abilityflavortext_Select_Column) {
    /** column name */ Pokemon_V2_Abilityflavortext_Select_Column["AbilityId"] = "ability_id";
    /** column name */ Pokemon_V2_Abilityflavortext_Select_Column["FlavorText"] = "flavor_text";
    /** column name */ Pokemon_V2_Abilityflavortext_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Abilityflavortext_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Abilityflavortext_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Abilityflavortext_Select_Column || (Pokemon_V2_Abilityflavortext_Select_Column = {}));
let Pokemon_V2_Abilityname_Select_Column;
(function(Pokemon_V2_Abilityname_Select_Column) {
    /** column name */ Pokemon_V2_Abilityname_Select_Column["AbilityId"] = "ability_id";
    /** column name */ Pokemon_V2_Abilityname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Abilityname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Abilityname_Select_Column["Name"] = "name";
})(Pokemon_V2_Abilityname_Select_Column || (Pokemon_V2_Abilityname_Select_Column = {}));
let Pokemon_V2_Berry_Select_Column;
(function(Pokemon_V2_Berry_Select_Column) {
    /** column name */ Pokemon_V2_Berry_Select_Column["BerryFirmnessId"] = "berry_firmness_id";
    /** column name */ Pokemon_V2_Berry_Select_Column["GrowthTime"] = "growth_time";
    /** column name */ Pokemon_V2_Berry_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Berry_Select_Column["ItemId"] = "item_id";
    /** column name */ Pokemon_V2_Berry_Select_Column["MaxHarvest"] = "max_harvest";
    /** column name */ Pokemon_V2_Berry_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Berry_Select_Column["NaturalGiftPower"] = "natural_gift_power";
    /** column name */ Pokemon_V2_Berry_Select_Column["NaturalGiftTypeId"] = "natural_gift_type_id";
    /** column name */ Pokemon_V2_Berry_Select_Column["Size"] = "size";
    /** column name */ Pokemon_V2_Berry_Select_Column["Smoothness"] = "smoothness";
    /** column name */ Pokemon_V2_Berry_Select_Column["SoilDryness"] = "soil_dryness";
})(Pokemon_V2_Berry_Select_Column || (Pokemon_V2_Berry_Select_Column = {}));
let Pokemon_V2_Berryfirmness_Select_Column;
(function(Pokemon_V2_Berryfirmness_Select_Column) {
    /** column name */ Pokemon_V2_Berryfirmness_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Berryfirmness_Select_Column["Name"] = "name";
})(Pokemon_V2_Berryfirmness_Select_Column || (Pokemon_V2_Berryfirmness_Select_Column = {}));
let Pokemon_V2_Berryfirmnessname_Select_Column;
(function(Pokemon_V2_Berryfirmnessname_Select_Column) {
    /** column name */ Pokemon_V2_Berryfirmnessname_Select_Column["BerryFirmnessId"] = "berry_firmness_id";
    /** column name */ Pokemon_V2_Berryfirmnessname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Berryfirmnessname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Berryfirmnessname_Select_Column["Name"] = "name";
})(Pokemon_V2_Berryfirmnessname_Select_Column || (Pokemon_V2_Berryfirmnessname_Select_Column = {}));
let Pokemon_V2_Berryflavor_Select_Column;
(function(Pokemon_V2_Berryflavor_Select_Column) {
    /** column name */ Pokemon_V2_Berryflavor_Select_Column["ContestTypeId"] = "contest_type_id";
    /** column name */ Pokemon_V2_Berryflavor_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Berryflavor_Select_Column["Name"] = "name";
})(Pokemon_V2_Berryflavor_Select_Column || (Pokemon_V2_Berryflavor_Select_Column = {}));
let Pokemon_V2_Berryflavormap_Select_Column;
(function(Pokemon_V2_Berryflavormap_Select_Column) {
    /** column name */ Pokemon_V2_Berryflavormap_Select_Column["BerryFlavorId"] = "berry_flavor_id";
    /** column name */ Pokemon_V2_Berryflavormap_Select_Column["BerryId"] = "berry_id";
    /** column name */ Pokemon_V2_Berryflavormap_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Berryflavormap_Select_Column["Potency"] = "potency";
})(Pokemon_V2_Berryflavormap_Select_Column || (Pokemon_V2_Berryflavormap_Select_Column = {}));
let Pokemon_V2_Berryflavorname_Select_Column;
(function(Pokemon_V2_Berryflavorname_Select_Column) {
    /** column name */ Pokemon_V2_Berryflavorname_Select_Column["BerryFlavorId"] = "berry_flavor_id";
    /** column name */ Pokemon_V2_Berryflavorname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Berryflavorname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Berryflavorname_Select_Column["Name"] = "name";
})(Pokemon_V2_Berryflavorname_Select_Column || (Pokemon_V2_Berryflavorname_Select_Column = {}));
let Pokemon_V2_Characteristic_Select_Column;
(function(Pokemon_V2_Characteristic_Select_Column) {
    /** column name */ Pokemon_V2_Characteristic_Select_Column["GeneMod_5"] = "gene_mod_5";
    /** column name */ Pokemon_V2_Characteristic_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Characteristic_Select_Column["StatId"] = "stat_id";
})(Pokemon_V2_Characteristic_Select_Column || (Pokemon_V2_Characteristic_Select_Column = {}));
let Pokemon_V2_Characteristicdescription_Select_Column;
(function(Pokemon_V2_Characteristicdescription_Select_Column) {
    /** column name */ Pokemon_V2_Characteristicdescription_Select_Column["CharacteristicId"] = "characteristic_id";
    /** column name */ Pokemon_V2_Characteristicdescription_Select_Column["Description"] = "description";
    /** column name */ Pokemon_V2_Characteristicdescription_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Characteristicdescription_Select_Column["LanguageId"] = "language_id";
})(Pokemon_V2_Characteristicdescription_Select_Column || (Pokemon_V2_Characteristicdescription_Select_Column = {}));
let Pokemon_V2_Contestcombo_Select_Column;
(function(Pokemon_V2_Contestcombo_Select_Column) {
    /** column name */ Pokemon_V2_Contestcombo_Select_Column["FirstMoveId"] = "first_move_id";
    /** column name */ Pokemon_V2_Contestcombo_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Contestcombo_Select_Column["SecondMoveId"] = "second_move_id";
})(Pokemon_V2_Contestcombo_Select_Column || (Pokemon_V2_Contestcombo_Select_Column = {}));
let Pokemon_V2_Contesteffect_Select_Column;
(function(Pokemon_V2_Contesteffect_Select_Column) {
    /** column name */ Pokemon_V2_Contesteffect_Select_Column["Appeal"] = "appeal";
    /** column name */ Pokemon_V2_Contesteffect_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Contesteffect_Select_Column["Jam"] = "jam";
})(Pokemon_V2_Contesteffect_Select_Column || (Pokemon_V2_Contesteffect_Select_Column = {}));
let Pokemon_V2_Contesteffecteffecttext_Select_Column;
(function(Pokemon_V2_Contesteffecteffecttext_Select_Column) {
    /** column name */ Pokemon_V2_Contesteffecteffecttext_Select_Column["ContestEffectId"] = "contest_effect_id";
    /** column name */ Pokemon_V2_Contesteffecteffecttext_Select_Column["Effect"] = "effect";
    /** column name */ Pokemon_V2_Contesteffecteffecttext_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Contesteffecteffecttext_Select_Column["LanguageId"] = "language_id";
})(Pokemon_V2_Contesteffecteffecttext_Select_Column || (Pokemon_V2_Contesteffecteffecttext_Select_Column = {}));
let Pokemon_V2_Contesteffectflavortext_Select_Column;
(function(Pokemon_V2_Contesteffectflavortext_Select_Column) {
    /** column name */ Pokemon_V2_Contesteffectflavortext_Select_Column["ContestEffectId"] = "contest_effect_id";
    /** column name */ Pokemon_V2_Contesteffectflavortext_Select_Column["FlavorText"] = "flavor_text";
    /** column name */ Pokemon_V2_Contesteffectflavortext_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Contesteffectflavortext_Select_Column["LanguageId"] = "language_id";
})(Pokemon_V2_Contesteffectflavortext_Select_Column || (Pokemon_V2_Contesteffectflavortext_Select_Column = {}));
let Pokemon_V2_Contesttype_Select_Column;
(function(Pokemon_V2_Contesttype_Select_Column) {
    /** column name */ Pokemon_V2_Contesttype_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Contesttype_Select_Column["Name"] = "name";
})(Pokemon_V2_Contesttype_Select_Column || (Pokemon_V2_Contesttype_Select_Column = {}));
let Pokemon_V2_Contesttypename_Select_Column;
(function(Pokemon_V2_Contesttypename_Select_Column) {
    /** column name */ Pokemon_V2_Contesttypename_Select_Column["Color"] = "color";
    /** column name */ Pokemon_V2_Contesttypename_Select_Column["ContestTypeId"] = "contest_type_id";
    /** column name */ Pokemon_V2_Contesttypename_Select_Column["Flavor"] = "flavor";
    /** column name */ Pokemon_V2_Contesttypename_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Contesttypename_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Contesttypename_Select_Column["Name"] = "name";
})(Pokemon_V2_Contesttypename_Select_Column || (Pokemon_V2_Contesttypename_Select_Column = {}));
let Pokemon_V2_Egggroup_Select_Column;
(function(Pokemon_V2_Egggroup_Select_Column) {
    /** column name */ Pokemon_V2_Egggroup_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Egggroup_Select_Column["Name"] = "name";
})(Pokemon_V2_Egggroup_Select_Column || (Pokemon_V2_Egggroup_Select_Column = {}));
let Pokemon_V2_Egggroupname_Select_Column;
(function(Pokemon_V2_Egggroupname_Select_Column) {
    /** column name */ Pokemon_V2_Egggroupname_Select_Column["EggGroupId"] = "egg_group_id";
    /** column name */ Pokemon_V2_Egggroupname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Egggroupname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Egggroupname_Select_Column["Name"] = "name";
})(Pokemon_V2_Egggroupname_Select_Column || (Pokemon_V2_Egggroupname_Select_Column = {}));
let Pokemon_V2_Encounter_Select_Column;
(function(Pokemon_V2_Encounter_Select_Column) {
    /** column name */ Pokemon_V2_Encounter_Select_Column["EncounterSlotId"] = "encounter_slot_id";
    /** column name */ Pokemon_V2_Encounter_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Encounter_Select_Column["LocationAreaId"] = "location_area_id";
    /** column name */ Pokemon_V2_Encounter_Select_Column["MaxLevel"] = "max_level";
    /** column name */ Pokemon_V2_Encounter_Select_Column["MinLevel"] = "min_level";
    /** column name */ Pokemon_V2_Encounter_Select_Column["PokemonId"] = "pokemon_id";
    /** column name */ Pokemon_V2_Encounter_Select_Column["VersionId"] = "version_id";
})(Pokemon_V2_Encounter_Select_Column || (Pokemon_V2_Encounter_Select_Column = {}));
let Pokemon_V2_Encountercondition_Select_Column;
(function(Pokemon_V2_Encountercondition_Select_Column) {
    /** column name */ Pokemon_V2_Encountercondition_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Encountercondition_Select_Column["Name"] = "name";
})(Pokemon_V2_Encountercondition_Select_Column || (Pokemon_V2_Encountercondition_Select_Column = {}));
let Pokemon_V2_Encounterconditionname_Select_Column;
(function(Pokemon_V2_Encounterconditionname_Select_Column) {
    /** column name */ Pokemon_V2_Encounterconditionname_Select_Column["EncounterConditionId"] = "encounter_condition_id";
    /** column name */ Pokemon_V2_Encounterconditionname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Encounterconditionname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Encounterconditionname_Select_Column["Name"] = "name";
})(Pokemon_V2_Encounterconditionname_Select_Column || (Pokemon_V2_Encounterconditionname_Select_Column = {}));
let Pokemon_V2_Encounterconditionvalue_Select_Column;
(function(Pokemon_V2_Encounterconditionvalue_Select_Column) {
    /** column name */ Pokemon_V2_Encounterconditionvalue_Select_Column["EncounterConditionId"] = "encounter_condition_id";
    /** column name */ Pokemon_V2_Encounterconditionvalue_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Encounterconditionvalue_Select_Column["IsDefault"] = "is_default";
    /** column name */ Pokemon_V2_Encounterconditionvalue_Select_Column["Name"] = "name";
})(Pokemon_V2_Encounterconditionvalue_Select_Column || (Pokemon_V2_Encounterconditionvalue_Select_Column = {}));
let Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function(Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */ Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsDefault"] = "is_default";
})(Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
let Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function(Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */ Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsDefault"] = "is_default";
})(Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (Pokemon_V2_Encounterconditionvalue_Select_Column_Pokemon_V2_Encounterconditionvalue_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
let Pokemon_V2_Encounterconditionvaluemap_Select_Column;
(function(Pokemon_V2_Encounterconditionvaluemap_Select_Column) {
    /** column name */ Pokemon_V2_Encounterconditionvaluemap_Select_Column["EncounterConditionValueId"] = "encounter_condition_value_id";
    /** column name */ Pokemon_V2_Encounterconditionvaluemap_Select_Column["EncounterId"] = "encounter_id";
    /** column name */ Pokemon_V2_Encounterconditionvaluemap_Select_Column["Id"] = "id";
})(Pokemon_V2_Encounterconditionvaluemap_Select_Column || (Pokemon_V2_Encounterconditionvaluemap_Select_Column = {}));
let Pokemon_V2_Encounterconditionvaluename_Select_Column;
(function(Pokemon_V2_Encounterconditionvaluename_Select_Column) {
    /** column name */ Pokemon_V2_Encounterconditionvaluename_Select_Column["EncounterConditionValueId"] = "encounter_condition_value_id";
    /** column name */ Pokemon_V2_Encounterconditionvaluename_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Encounterconditionvaluename_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Encounterconditionvaluename_Select_Column["Name"] = "name";
})(Pokemon_V2_Encounterconditionvaluename_Select_Column || (Pokemon_V2_Encounterconditionvaluename_Select_Column = {}));
let Pokemon_V2_Encountermethod_Select_Column;
(function(Pokemon_V2_Encountermethod_Select_Column) {
    /** column name */ Pokemon_V2_Encountermethod_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Encountermethod_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Encountermethod_Select_Column["Order"] = "order";
})(Pokemon_V2_Encountermethod_Select_Column || (Pokemon_V2_Encountermethod_Select_Column = {}));
let Pokemon_V2_Encountermethodname_Select_Column;
(function(Pokemon_V2_Encountermethodname_Select_Column) {
    /** column name */ Pokemon_V2_Encountermethodname_Select_Column["EncounterMethodId"] = "encounter_method_id";
    /** column name */ Pokemon_V2_Encountermethodname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Encountermethodname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Encountermethodname_Select_Column["Name"] = "name";
})(Pokemon_V2_Encountermethodname_Select_Column || (Pokemon_V2_Encountermethodname_Select_Column = {}));
let Pokemon_V2_Encounterslot_Select_Column;
(function(Pokemon_V2_Encounterslot_Select_Column) {
    /** column name */ Pokemon_V2_Encounterslot_Select_Column["EncounterMethodId"] = "encounter_method_id";
    /** column name */ Pokemon_V2_Encounterslot_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Encounterslot_Select_Column["Rarity"] = "rarity";
    /** column name */ Pokemon_V2_Encounterslot_Select_Column["Slot"] = "slot";
    /** column name */ Pokemon_V2_Encounterslot_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Encounterslot_Select_Column || (Pokemon_V2_Encounterslot_Select_Column = {}));
let Pokemon_V2_Evolutionchain_Select_Column;
(function(Pokemon_V2_Evolutionchain_Select_Column) {
    /** column name */ Pokemon_V2_Evolutionchain_Select_Column["BabyTriggerItemId"] = "baby_trigger_item_id";
    /** column name */ Pokemon_V2_Evolutionchain_Select_Column["Id"] = "id";
})(Pokemon_V2_Evolutionchain_Select_Column || (Pokemon_V2_Evolutionchain_Select_Column = {}));
let Pokemon_V2_Evolutiontrigger_Select_Column;
(function(Pokemon_V2_Evolutiontrigger_Select_Column) {
    /** column name */ Pokemon_V2_Evolutiontrigger_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Evolutiontrigger_Select_Column["Name"] = "name";
})(Pokemon_V2_Evolutiontrigger_Select_Column || (Pokemon_V2_Evolutiontrigger_Select_Column = {}));
let Pokemon_V2_Evolutiontriggername_Select_Column;
(function(Pokemon_V2_Evolutiontriggername_Select_Column) {
    /** column name */ Pokemon_V2_Evolutiontriggername_Select_Column["EvolutionTriggerId"] = "evolution_trigger_id";
    /** column name */ Pokemon_V2_Evolutiontriggername_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Evolutiontriggername_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Evolutiontriggername_Select_Column["Name"] = "name";
})(Pokemon_V2_Evolutiontriggername_Select_Column || (Pokemon_V2_Evolutiontriggername_Select_Column = {}));
let Pokemon_V2_Experience_Select_Column;
(function(Pokemon_V2_Experience_Select_Column) {
    /** column name */ Pokemon_V2_Experience_Select_Column["Experience"] = "experience";
    /** column name */ Pokemon_V2_Experience_Select_Column["GrowthRateId"] = "growth_rate_id";
    /** column name */ Pokemon_V2_Experience_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Experience_Select_Column["Level"] = "level";
})(Pokemon_V2_Experience_Select_Column || (Pokemon_V2_Experience_Select_Column = {}));
let Pokemon_V2_Gender_Select_Column;
(function(Pokemon_V2_Gender_Select_Column) {
    /** column name */ Pokemon_V2_Gender_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Gender_Select_Column["Name"] = "name";
})(Pokemon_V2_Gender_Select_Column || (Pokemon_V2_Gender_Select_Column = {}));
let Pokemon_V2_Generation_Select_Column;
(function(Pokemon_V2_Generation_Select_Column) {
    /** column name */ Pokemon_V2_Generation_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Generation_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Generation_Select_Column["RegionId"] = "region_id";
})(Pokemon_V2_Generation_Select_Column || (Pokemon_V2_Generation_Select_Column = {}));
let Pokemon_V2_Generationname_Select_Column;
(function(Pokemon_V2_Generationname_Select_Column) {
    /** column name */ Pokemon_V2_Generationname_Select_Column["GenerationId"] = "generation_id";
    /** column name */ Pokemon_V2_Generationname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Generationname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Generationname_Select_Column["Name"] = "name";
})(Pokemon_V2_Generationname_Select_Column || (Pokemon_V2_Generationname_Select_Column = {}));
let Pokemon_V2_Growthrate_Select_Column;
(function(Pokemon_V2_Growthrate_Select_Column) {
    /** column name */ Pokemon_V2_Growthrate_Select_Column["Formula"] = "formula";
    /** column name */ Pokemon_V2_Growthrate_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Growthrate_Select_Column["Name"] = "name";
})(Pokemon_V2_Growthrate_Select_Column || (Pokemon_V2_Growthrate_Select_Column = {}));
let Pokemon_V2_Growthratedescription_Select_Column;
(function(Pokemon_V2_Growthratedescription_Select_Column) {
    /** column name */ Pokemon_V2_Growthratedescription_Select_Column["Description"] = "description";
    /** column name */ Pokemon_V2_Growthratedescription_Select_Column["GrowthRateId"] = "growth_rate_id";
    /** column name */ Pokemon_V2_Growthratedescription_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Growthratedescription_Select_Column["LanguageId"] = "language_id";
})(Pokemon_V2_Growthratedescription_Select_Column || (Pokemon_V2_Growthratedescription_Select_Column = {}));
let Pokemon_V2_Item_Select_Column;
(function(Pokemon_V2_Item_Select_Column) {
    /** column name */ Pokemon_V2_Item_Select_Column["Cost"] = "cost";
    /** column name */ Pokemon_V2_Item_Select_Column["FlingPower"] = "fling_power";
    /** column name */ Pokemon_V2_Item_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Item_Select_Column["ItemCategoryId"] = "item_category_id";
    /** column name */ Pokemon_V2_Item_Select_Column["ItemFlingEffectId"] = "item_fling_effect_id";
    /** column name */ Pokemon_V2_Item_Select_Column["Name"] = "name";
})(Pokemon_V2_Item_Select_Column || (Pokemon_V2_Item_Select_Column = {}));
let Pokemon_V2_Itemattribute_Select_Column;
(function(Pokemon_V2_Itemattribute_Select_Column) {
    /** column name */ Pokemon_V2_Itemattribute_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itemattribute_Select_Column["Name"] = "name";
})(Pokemon_V2_Itemattribute_Select_Column || (Pokemon_V2_Itemattribute_Select_Column = {}));
let Pokemon_V2_Itemattributedescription_Select_Column;
(function(Pokemon_V2_Itemattributedescription_Select_Column) {
    /** column name */ Pokemon_V2_Itemattributedescription_Select_Column["Description"] = "description";
    /** column name */ Pokemon_V2_Itemattributedescription_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itemattributedescription_Select_Column["ItemAttributeId"] = "item_attribute_id";
    /** column name */ Pokemon_V2_Itemattributedescription_Select_Column["LanguageId"] = "language_id";
})(Pokemon_V2_Itemattributedescription_Select_Column || (Pokemon_V2_Itemattributedescription_Select_Column = {}));
let Pokemon_V2_Itemattributemap_Select_Column;
(function(Pokemon_V2_Itemattributemap_Select_Column) {
    /** column name */ Pokemon_V2_Itemattributemap_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itemattributemap_Select_Column["ItemAttributeId"] = "item_attribute_id";
    /** column name */ Pokemon_V2_Itemattributemap_Select_Column["ItemId"] = "item_id";
})(Pokemon_V2_Itemattributemap_Select_Column || (Pokemon_V2_Itemattributemap_Select_Column = {}));
let Pokemon_V2_Itemattributename_Select_Column;
(function(Pokemon_V2_Itemattributename_Select_Column) {
    /** column name */ Pokemon_V2_Itemattributename_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itemattributename_Select_Column["ItemAttributeId"] = "item_attribute_id";
    /** column name */ Pokemon_V2_Itemattributename_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Itemattributename_Select_Column["Name"] = "name";
})(Pokemon_V2_Itemattributename_Select_Column || (Pokemon_V2_Itemattributename_Select_Column = {}));
let Pokemon_V2_Itemcategory_Select_Column;
(function(Pokemon_V2_Itemcategory_Select_Column) {
    /** column name */ Pokemon_V2_Itemcategory_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itemcategory_Select_Column["ItemPocketId"] = "item_pocket_id";
    /** column name */ Pokemon_V2_Itemcategory_Select_Column["Name"] = "name";
})(Pokemon_V2_Itemcategory_Select_Column || (Pokemon_V2_Itemcategory_Select_Column = {}));
let Pokemon_V2_Itemcategoryname_Select_Column;
(function(Pokemon_V2_Itemcategoryname_Select_Column) {
    /** column name */ Pokemon_V2_Itemcategoryname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itemcategoryname_Select_Column["ItemCategoryId"] = "item_category_id";
    /** column name */ Pokemon_V2_Itemcategoryname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Itemcategoryname_Select_Column["Name"] = "name";
})(Pokemon_V2_Itemcategoryname_Select_Column || (Pokemon_V2_Itemcategoryname_Select_Column = {}));
let Pokemon_V2_Itemeffecttext_Select_Column;
(function(Pokemon_V2_Itemeffecttext_Select_Column) {
    /** column name */ Pokemon_V2_Itemeffecttext_Select_Column["Effect"] = "effect";
    /** column name */ Pokemon_V2_Itemeffecttext_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itemeffecttext_Select_Column["ItemId"] = "item_id";
    /** column name */ Pokemon_V2_Itemeffecttext_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Itemeffecttext_Select_Column["ShortEffect"] = "short_effect";
})(Pokemon_V2_Itemeffecttext_Select_Column || (Pokemon_V2_Itemeffecttext_Select_Column = {}));
let Pokemon_V2_Itemflavortext_Select_Column;
(function(Pokemon_V2_Itemflavortext_Select_Column) {
    /** column name */ Pokemon_V2_Itemflavortext_Select_Column["FlavorText"] = "flavor_text";
    /** column name */ Pokemon_V2_Itemflavortext_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itemflavortext_Select_Column["ItemId"] = "item_id";
    /** column name */ Pokemon_V2_Itemflavortext_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Itemflavortext_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Itemflavortext_Select_Column || (Pokemon_V2_Itemflavortext_Select_Column = {}));
let Pokemon_V2_Itemflingeffect_Select_Column;
(function(Pokemon_V2_Itemflingeffect_Select_Column) {
    /** column name */ Pokemon_V2_Itemflingeffect_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itemflingeffect_Select_Column["Name"] = "name";
})(Pokemon_V2_Itemflingeffect_Select_Column || (Pokemon_V2_Itemflingeffect_Select_Column = {}));
let Pokemon_V2_Itemflingeffecteffecttext_Select_Column;
(function(Pokemon_V2_Itemflingeffecteffecttext_Select_Column) {
    /** column name */ Pokemon_V2_Itemflingeffecteffecttext_Select_Column["Effect"] = "effect";
    /** column name */ Pokemon_V2_Itemflingeffecteffecttext_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itemflingeffecteffecttext_Select_Column["ItemFlingEffectId"] = "item_fling_effect_id";
    /** column name */ Pokemon_V2_Itemflingeffecteffecttext_Select_Column["LanguageId"] = "language_id";
})(Pokemon_V2_Itemflingeffecteffecttext_Select_Column || (Pokemon_V2_Itemflingeffecteffecttext_Select_Column = {}));
let Pokemon_V2_Itemgameindex_Select_Column;
(function(Pokemon_V2_Itemgameindex_Select_Column) {
    /** column name */ Pokemon_V2_Itemgameindex_Select_Column["GameIndex"] = "game_index";
    /** column name */ Pokemon_V2_Itemgameindex_Select_Column["GenerationId"] = "generation_id";
    /** column name */ Pokemon_V2_Itemgameindex_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itemgameindex_Select_Column["ItemId"] = "item_id";
})(Pokemon_V2_Itemgameindex_Select_Column || (Pokemon_V2_Itemgameindex_Select_Column = {}));
let Pokemon_V2_Itemname_Select_Column;
(function(Pokemon_V2_Itemname_Select_Column) {
    /** column name */ Pokemon_V2_Itemname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itemname_Select_Column["ItemId"] = "item_id";
    /** column name */ Pokemon_V2_Itemname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Itemname_Select_Column["Name"] = "name";
})(Pokemon_V2_Itemname_Select_Column || (Pokemon_V2_Itemname_Select_Column = {}));
let Pokemon_V2_Itempocket_Select_Column;
(function(Pokemon_V2_Itempocket_Select_Column) {
    /** column name */ Pokemon_V2_Itempocket_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itempocket_Select_Column["Name"] = "name";
})(Pokemon_V2_Itempocket_Select_Column || (Pokemon_V2_Itempocket_Select_Column = {}));
let Pokemon_V2_Itempocketname_Select_Column;
(function(Pokemon_V2_Itempocketname_Select_Column) {
    /** column name */ Pokemon_V2_Itempocketname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itempocketname_Select_Column["ItemPocketId"] = "item_pocket_id";
    /** column name */ Pokemon_V2_Itempocketname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Itempocketname_Select_Column["Name"] = "name";
})(Pokemon_V2_Itempocketname_Select_Column || (Pokemon_V2_Itempocketname_Select_Column = {}));
let Pokemon_V2_Itemsprites_Select_Column;
(function(Pokemon_V2_Itemsprites_Select_Column) {
    /** column name */ Pokemon_V2_Itemsprites_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Itemsprites_Select_Column["ItemId"] = "item_id";
    /** column name */ Pokemon_V2_Itemsprites_Select_Column["Sprites"] = "sprites";
})(Pokemon_V2_Itemsprites_Select_Column || (Pokemon_V2_Itemsprites_Select_Column = {}));
let Pokemon_V2_Language_Select_Column;
(function(Pokemon_V2_Language_Select_Column) {
    /** column name */ Pokemon_V2_Language_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Language_Select_Column["Iso639"] = "iso639";
    /** column name */ Pokemon_V2_Language_Select_Column["Iso3166"] = "iso3166";
    /** column name */ Pokemon_V2_Language_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Language_Select_Column["Official"] = "official";
    /** column name */ Pokemon_V2_Language_Select_Column["Order"] = "order";
})(Pokemon_V2_Language_Select_Column || (Pokemon_V2_Language_Select_Column = {}));
let Pokemon_V2_Languagename_Select_Column;
(function(Pokemon_V2_Languagename_Select_Column) {
    /** column name */ Pokemon_V2_Languagename_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Languagename_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Languagename_Select_Column["LocalLanguageId"] = "local_language_id";
    /** column name */ Pokemon_V2_Languagename_Select_Column["Name"] = "name";
})(Pokemon_V2_Languagename_Select_Column || (Pokemon_V2_Languagename_Select_Column = {}));
let Pokemon_V2_Location_Select_Column;
(function(Pokemon_V2_Location_Select_Column) {
    /** column name */ Pokemon_V2_Location_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Location_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Location_Select_Column["RegionId"] = "region_id";
})(Pokemon_V2_Location_Select_Column || (Pokemon_V2_Location_Select_Column = {}));
let Pokemon_V2_Locationarea_Select_Column;
(function(Pokemon_V2_Locationarea_Select_Column) {
    /** column name */ Pokemon_V2_Locationarea_Select_Column["GameIndex"] = "game_index";
    /** column name */ Pokemon_V2_Locationarea_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Locationarea_Select_Column["LocationId"] = "location_id";
    /** column name */ Pokemon_V2_Locationarea_Select_Column["Name"] = "name";
})(Pokemon_V2_Locationarea_Select_Column || (Pokemon_V2_Locationarea_Select_Column = {}));
let Pokemon_V2_Locationareaencounterrate_Select_Column;
(function(Pokemon_V2_Locationareaencounterrate_Select_Column) {
    /** column name */ Pokemon_V2_Locationareaencounterrate_Select_Column["EncounterMethodId"] = "encounter_method_id";
    /** column name */ Pokemon_V2_Locationareaencounterrate_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Locationareaencounterrate_Select_Column["LocationAreaId"] = "location_area_id";
    /** column name */ Pokemon_V2_Locationareaencounterrate_Select_Column["Rate"] = "rate";
    /** column name */ Pokemon_V2_Locationareaencounterrate_Select_Column["VersionId"] = "version_id";
})(Pokemon_V2_Locationareaencounterrate_Select_Column || (Pokemon_V2_Locationareaencounterrate_Select_Column = {}));
let Pokemon_V2_Locationareaname_Select_Column;
(function(Pokemon_V2_Locationareaname_Select_Column) {
    /** column name */ Pokemon_V2_Locationareaname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Locationareaname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Locationareaname_Select_Column["LocationAreaId"] = "location_area_id";
    /** column name */ Pokemon_V2_Locationareaname_Select_Column["Name"] = "name";
})(Pokemon_V2_Locationareaname_Select_Column || (Pokemon_V2_Locationareaname_Select_Column = {}));
let Pokemon_V2_Locationgameindex_Select_Column;
(function(Pokemon_V2_Locationgameindex_Select_Column) {
    /** column name */ Pokemon_V2_Locationgameindex_Select_Column["GameIndex"] = "game_index";
    /** column name */ Pokemon_V2_Locationgameindex_Select_Column["GenerationId"] = "generation_id";
    /** column name */ Pokemon_V2_Locationgameindex_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Locationgameindex_Select_Column["LocationId"] = "location_id";
})(Pokemon_V2_Locationgameindex_Select_Column || (Pokemon_V2_Locationgameindex_Select_Column = {}));
let Pokemon_V2_Locationname_Select_Column;
(function(Pokemon_V2_Locationname_Select_Column) {
    /** column name */ Pokemon_V2_Locationname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Locationname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Locationname_Select_Column["LocationId"] = "location_id";
    /** column name */ Pokemon_V2_Locationname_Select_Column["Name"] = "name";
})(Pokemon_V2_Locationname_Select_Column || (Pokemon_V2_Locationname_Select_Column = {}));
let Pokemon_V2_Machine_Select_Column;
(function(Pokemon_V2_Machine_Select_Column) {
    /** column name */ Pokemon_V2_Machine_Select_Column["GrowthRateId"] = "growth_rate_id";
    /** column name */ Pokemon_V2_Machine_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Machine_Select_Column["ItemId"] = "item_id";
    /** column name */ Pokemon_V2_Machine_Select_Column["MachineNumber"] = "machine_number";
    /** column name */ Pokemon_V2_Machine_Select_Column["MoveId"] = "move_id";
    /** column name */ Pokemon_V2_Machine_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Machine_Select_Column || (Pokemon_V2_Machine_Select_Column = {}));
let Pokemon_V2_Move_Select_Column;
(function(Pokemon_V2_Move_Select_Column) {
    /** column name */ Pokemon_V2_Move_Select_Column["Accuracy"] = "accuracy";
    /** column name */ Pokemon_V2_Move_Select_Column["ContestEffectId"] = "contest_effect_id";
    /** column name */ Pokemon_V2_Move_Select_Column["ContestTypeId"] = "contest_type_id";
    /** column name */ Pokemon_V2_Move_Select_Column["GenerationId"] = "generation_id";
    /** column name */ Pokemon_V2_Move_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Move_Select_Column["MoveDamageClassId"] = "move_damage_class_id";
    /** column name */ Pokemon_V2_Move_Select_Column["MoveEffectChance"] = "move_effect_chance";
    /** column name */ Pokemon_V2_Move_Select_Column["MoveEffectId"] = "move_effect_id";
    /** column name */ Pokemon_V2_Move_Select_Column["MoveTargetId"] = "move_target_id";
    /** column name */ Pokemon_V2_Move_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Move_Select_Column["Power"] = "power";
    /** column name */ Pokemon_V2_Move_Select_Column["Pp"] = "pp";
    /** column name */ Pokemon_V2_Move_Select_Column["Priority"] = "priority";
    /** column name */ Pokemon_V2_Move_Select_Column["SuperContestEffectId"] = "super_contest_effect_id";
    /** column name */ Pokemon_V2_Move_Select_Column["TypeId"] = "type_id";
})(Pokemon_V2_Move_Select_Column || (Pokemon_V2_Move_Select_Column = {}));
let Pokemon_V2_Moveattribute_Select_Column;
(function(Pokemon_V2_Moveattribute_Select_Column) {
    /** column name */ Pokemon_V2_Moveattribute_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Moveattribute_Select_Column["Name"] = "name";
})(Pokemon_V2_Moveattribute_Select_Column || (Pokemon_V2_Moveattribute_Select_Column = {}));
let Pokemon_V2_Moveattributedescription_Select_Column;
(function(Pokemon_V2_Moveattributedescription_Select_Column) {
    /** column name */ Pokemon_V2_Moveattributedescription_Select_Column["Description"] = "description";
    /** column name */ Pokemon_V2_Moveattributedescription_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Moveattributedescription_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Moveattributedescription_Select_Column["MoveAttributeId"] = "move_attribute_id";
})(Pokemon_V2_Moveattributedescription_Select_Column || (Pokemon_V2_Moveattributedescription_Select_Column = {}));
let Pokemon_V2_Moveattributemap_Select_Column;
(function(Pokemon_V2_Moveattributemap_Select_Column) {
    /** column name */ Pokemon_V2_Moveattributemap_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Moveattributemap_Select_Column["MoveAttributeId"] = "move_attribute_id";
    /** column name */ Pokemon_V2_Moveattributemap_Select_Column["MoveId"] = "move_id";
})(Pokemon_V2_Moveattributemap_Select_Column || (Pokemon_V2_Moveattributemap_Select_Column = {}));
let Pokemon_V2_Moveattributename_Select_Column;
(function(Pokemon_V2_Moveattributename_Select_Column) {
    /** column name */ Pokemon_V2_Moveattributename_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Moveattributename_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Moveattributename_Select_Column["MoveAttributeId"] = "move_attribute_id";
    /** column name */ Pokemon_V2_Moveattributename_Select_Column["Name"] = "name";
})(Pokemon_V2_Moveattributename_Select_Column || (Pokemon_V2_Moveattributename_Select_Column = {}));
let Pokemon_V2_Movebattlestyle_Select_Column;
(function(Pokemon_V2_Movebattlestyle_Select_Column) {
    /** column name */ Pokemon_V2_Movebattlestyle_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movebattlestyle_Select_Column["Name"] = "name";
})(Pokemon_V2_Movebattlestyle_Select_Column || (Pokemon_V2_Movebattlestyle_Select_Column = {}));
let Pokemon_V2_Movebattlestylename_Select_Column;
(function(Pokemon_V2_Movebattlestylename_Select_Column) {
    /** column name */ Pokemon_V2_Movebattlestylename_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movebattlestylename_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Movebattlestylename_Select_Column["MoveBattleStyleId"] = "move_battle_style_id";
    /** column name */ Pokemon_V2_Movebattlestylename_Select_Column["Name"] = "name";
})(Pokemon_V2_Movebattlestylename_Select_Column || (Pokemon_V2_Movebattlestylename_Select_Column = {}));
let Pokemon_V2_Movechange_Select_Column;
(function(Pokemon_V2_Movechange_Select_Column) {
    /** column name */ Pokemon_V2_Movechange_Select_Column["Accuracy"] = "accuracy";
    /** column name */ Pokemon_V2_Movechange_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movechange_Select_Column["MoveEffectChance"] = "move_effect_chance";
    /** column name */ Pokemon_V2_Movechange_Select_Column["MoveEffectId"] = "move_effect_id";
    /** column name */ Pokemon_V2_Movechange_Select_Column["MoveId"] = "move_id";
    /** column name */ Pokemon_V2_Movechange_Select_Column["Power"] = "power";
    /** column name */ Pokemon_V2_Movechange_Select_Column["Pp"] = "pp";
    /** column name */ Pokemon_V2_Movechange_Select_Column["TypeId"] = "type_id";
    /** column name */ Pokemon_V2_Movechange_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Movechange_Select_Column || (Pokemon_V2_Movechange_Select_Column = {}));
let Pokemon_V2_Movedamageclass_Select_Column;
(function(Pokemon_V2_Movedamageclass_Select_Column) {
    /** column name */ Pokemon_V2_Movedamageclass_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movedamageclass_Select_Column["Name"] = "name";
})(Pokemon_V2_Movedamageclass_Select_Column || (Pokemon_V2_Movedamageclass_Select_Column = {}));
let Pokemon_V2_Movedamageclassdescription_Select_Column;
(function(Pokemon_V2_Movedamageclassdescription_Select_Column) {
    /** column name */ Pokemon_V2_Movedamageclassdescription_Select_Column["Description"] = "description";
    /** column name */ Pokemon_V2_Movedamageclassdescription_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movedamageclassdescription_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Movedamageclassdescription_Select_Column["MoveDamageClassId"] = "move_damage_class_id";
})(Pokemon_V2_Movedamageclassdescription_Select_Column || (Pokemon_V2_Movedamageclassdescription_Select_Column = {}));
let Pokemon_V2_Movedamageclassname_Select_Column;
(function(Pokemon_V2_Movedamageclassname_Select_Column) {
    /** column name */ Pokemon_V2_Movedamageclassname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movedamageclassname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Movedamageclassname_Select_Column["MoveDamageClassId"] = "move_damage_class_id";
    /** column name */ Pokemon_V2_Movedamageclassname_Select_Column["Name"] = "name";
})(Pokemon_V2_Movedamageclassname_Select_Column || (Pokemon_V2_Movedamageclassname_Select_Column = {}));
let Pokemon_V2_Moveeffect_Select_Column;
(function(Pokemon_V2_Moveeffect_Select_Column) {
    /** column name */ Pokemon_V2_Moveeffect_Select_Column["Id"] = "id";
})(Pokemon_V2_Moveeffect_Select_Column || (Pokemon_V2_Moveeffect_Select_Column = {}));
let Pokemon_V2_Moveeffectchange_Select_Column;
(function(Pokemon_V2_Moveeffectchange_Select_Column) {
    /** column name */ Pokemon_V2_Moveeffectchange_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Moveeffectchange_Select_Column["MoveEffectId"] = "move_effect_id";
    /** column name */ Pokemon_V2_Moveeffectchange_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Moveeffectchange_Select_Column || (Pokemon_V2_Moveeffectchange_Select_Column = {}));
let Pokemon_V2_Moveeffectchangeeffecttext_Select_Column;
(function(Pokemon_V2_Moveeffectchangeeffecttext_Select_Column) {
    /** column name */ Pokemon_V2_Moveeffectchangeeffecttext_Select_Column["Effect"] = "effect";
    /** column name */ Pokemon_V2_Moveeffectchangeeffecttext_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Moveeffectchangeeffecttext_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Moveeffectchangeeffecttext_Select_Column["MoveEffectChangeId"] = "move_effect_change_id";
})(Pokemon_V2_Moveeffectchangeeffecttext_Select_Column || (Pokemon_V2_Moveeffectchangeeffecttext_Select_Column = {}));
let Pokemon_V2_Moveeffecteffecttext_Select_Column;
(function(Pokemon_V2_Moveeffecteffecttext_Select_Column) {
    /** column name */ Pokemon_V2_Moveeffecteffecttext_Select_Column["Effect"] = "effect";
    /** column name */ Pokemon_V2_Moveeffecteffecttext_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Moveeffecteffecttext_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Moveeffecteffecttext_Select_Column["MoveEffectId"] = "move_effect_id";
    /** column name */ Pokemon_V2_Moveeffecteffecttext_Select_Column["ShortEffect"] = "short_effect";
})(Pokemon_V2_Moveeffecteffecttext_Select_Column || (Pokemon_V2_Moveeffecteffecttext_Select_Column = {}));
let Pokemon_V2_Moveflavortext_Select_Column;
(function(Pokemon_V2_Moveflavortext_Select_Column) {
    /** column name */ Pokemon_V2_Moveflavortext_Select_Column["FlavorText"] = "flavor_text";
    /** column name */ Pokemon_V2_Moveflavortext_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Moveflavortext_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Moveflavortext_Select_Column["MoveId"] = "move_id";
    /** column name */ Pokemon_V2_Moveflavortext_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Moveflavortext_Select_Column || (Pokemon_V2_Moveflavortext_Select_Column = {}));
let Pokemon_V2_Movelearnmethod_Select_Column;
(function(Pokemon_V2_Movelearnmethod_Select_Column) {
    /** column name */ Pokemon_V2_Movelearnmethod_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movelearnmethod_Select_Column["Name"] = "name";
})(Pokemon_V2_Movelearnmethod_Select_Column || (Pokemon_V2_Movelearnmethod_Select_Column = {}));
let Pokemon_V2_Movelearnmethoddescription_Select_Column;
(function(Pokemon_V2_Movelearnmethoddescription_Select_Column) {
    /** column name */ Pokemon_V2_Movelearnmethoddescription_Select_Column["Description"] = "description";
    /** column name */ Pokemon_V2_Movelearnmethoddescription_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movelearnmethoddescription_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Movelearnmethoddescription_Select_Column["MoveLearnMethodId"] = "move_learn_method_id";
})(Pokemon_V2_Movelearnmethoddescription_Select_Column || (Pokemon_V2_Movelearnmethoddescription_Select_Column = {}));
let Pokemon_V2_Movelearnmethodname_Select_Column;
(function(Pokemon_V2_Movelearnmethodname_Select_Column) {
    /** column name */ Pokemon_V2_Movelearnmethodname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movelearnmethodname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Movelearnmethodname_Select_Column["MoveLearnMethodId"] = "move_learn_method_id";
    /** column name */ Pokemon_V2_Movelearnmethodname_Select_Column["Name"] = "name";
})(Pokemon_V2_Movelearnmethodname_Select_Column || (Pokemon_V2_Movelearnmethodname_Select_Column = {}));
let Pokemon_V2_Movemeta_Select_Column;
(function(Pokemon_V2_Movemeta_Select_Column) {
    /** column name */ Pokemon_V2_Movemeta_Select_Column["AilmentChance"] = "ailment_chance";
    /** column name */ Pokemon_V2_Movemeta_Select_Column["CritRate"] = "crit_rate";
    /** column name */ Pokemon_V2_Movemeta_Select_Column["Drain"] = "drain";
    /** column name */ Pokemon_V2_Movemeta_Select_Column["FlinchChance"] = "flinch_chance";
    /** column name */ Pokemon_V2_Movemeta_Select_Column["Healing"] = "healing";
    /** column name */ Pokemon_V2_Movemeta_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movemeta_Select_Column["MaxHits"] = "max_hits";
    /** column name */ Pokemon_V2_Movemeta_Select_Column["MaxTurns"] = "max_turns";
    /** column name */ Pokemon_V2_Movemeta_Select_Column["MinHits"] = "min_hits";
    /** column name */ Pokemon_V2_Movemeta_Select_Column["MinTurns"] = "min_turns";
    /** column name */ Pokemon_V2_Movemeta_Select_Column["MoveId"] = "move_id";
    /** column name */ Pokemon_V2_Movemeta_Select_Column["MoveMetaAilmentId"] = "move_meta_ailment_id";
    /** column name */ Pokemon_V2_Movemeta_Select_Column["MoveMetaCategoryId"] = "move_meta_category_id";
    /** column name */ Pokemon_V2_Movemeta_Select_Column["StatChance"] = "stat_chance";
})(Pokemon_V2_Movemeta_Select_Column || (Pokemon_V2_Movemeta_Select_Column = {}));
let Pokemon_V2_Movemetaailment_Select_Column;
(function(Pokemon_V2_Movemetaailment_Select_Column) {
    /** column name */ Pokemon_V2_Movemetaailment_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movemetaailment_Select_Column["Name"] = "name";
})(Pokemon_V2_Movemetaailment_Select_Column || (Pokemon_V2_Movemetaailment_Select_Column = {}));
let Pokemon_V2_Movemetaailmentname_Select_Column;
(function(Pokemon_V2_Movemetaailmentname_Select_Column) {
    /** column name */ Pokemon_V2_Movemetaailmentname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movemetaailmentname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Movemetaailmentname_Select_Column["MoveMetaAilmentId"] = "move_meta_ailment_id";
    /** column name */ Pokemon_V2_Movemetaailmentname_Select_Column["Name"] = "name";
})(Pokemon_V2_Movemetaailmentname_Select_Column || (Pokemon_V2_Movemetaailmentname_Select_Column = {}));
let Pokemon_V2_Movemetacategory_Select_Column;
(function(Pokemon_V2_Movemetacategory_Select_Column) {
    /** column name */ Pokemon_V2_Movemetacategory_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movemetacategory_Select_Column["Name"] = "name";
})(Pokemon_V2_Movemetacategory_Select_Column || (Pokemon_V2_Movemetacategory_Select_Column = {}));
let Pokemon_V2_Movemetacategorydescription_Select_Column;
(function(Pokemon_V2_Movemetacategorydescription_Select_Column) {
    /** column name */ Pokemon_V2_Movemetacategorydescription_Select_Column["Description"] = "description";
    /** column name */ Pokemon_V2_Movemetacategorydescription_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movemetacategorydescription_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Movemetacategorydescription_Select_Column["MoveMetaCategoryId"] = "move_meta_category_id";
})(Pokemon_V2_Movemetacategorydescription_Select_Column || (Pokemon_V2_Movemetacategorydescription_Select_Column = {}));
let Pokemon_V2_Movemetastatchange_Select_Column;
(function(Pokemon_V2_Movemetastatchange_Select_Column) {
    /** column name */ Pokemon_V2_Movemetastatchange_Select_Column["Change"] = "change";
    /** column name */ Pokemon_V2_Movemetastatchange_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movemetastatchange_Select_Column["MoveId"] = "move_id";
    /** column name */ Pokemon_V2_Movemetastatchange_Select_Column["StatId"] = "stat_id";
})(Pokemon_V2_Movemetastatchange_Select_Column || (Pokemon_V2_Movemetastatchange_Select_Column = {}));
let Pokemon_V2_Movename_Select_Column;
(function(Pokemon_V2_Movename_Select_Column) {
    /** column name */ Pokemon_V2_Movename_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movename_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Movename_Select_Column["MoveId"] = "move_id";
    /** column name */ Pokemon_V2_Movename_Select_Column["Name"] = "name";
})(Pokemon_V2_Movename_Select_Column || (Pokemon_V2_Movename_Select_Column = {}));
let Pokemon_V2_Movetarget_Select_Column;
(function(Pokemon_V2_Movetarget_Select_Column) {
    /** column name */ Pokemon_V2_Movetarget_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movetarget_Select_Column["Name"] = "name";
})(Pokemon_V2_Movetarget_Select_Column || (Pokemon_V2_Movetarget_Select_Column = {}));
let Pokemon_V2_Movetargetdescription_Select_Column;
(function(Pokemon_V2_Movetargetdescription_Select_Column) {
    /** column name */ Pokemon_V2_Movetargetdescription_Select_Column["Description"] = "description";
    /** column name */ Pokemon_V2_Movetargetdescription_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movetargetdescription_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Movetargetdescription_Select_Column["MoveTargetId"] = "move_target_id";
})(Pokemon_V2_Movetargetdescription_Select_Column || (Pokemon_V2_Movetargetdescription_Select_Column = {}));
let Pokemon_V2_Movetargetname_Select_Column;
(function(Pokemon_V2_Movetargetname_Select_Column) {
    /** column name */ Pokemon_V2_Movetargetname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Movetargetname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Movetargetname_Select_Column["MoveTargetId"] = "move_target_id";
    /** column name */ Pokemon_V2_Movetargetname_Select_Column["Name"] = "name";
})(Pokemon_V2_Movetargetname_Select_Column || (Pokemon_V2_Movetargetname_Select_Column = {}));
let Pokemon_V2_Nature_Select_Column;
(function(Pokemon_V2_Nature_Select_Column) {
    /** column name */ Pokemon_V2_Nature_Select_Column["DecreasedStatId"] = "decreased_stat_id";
    /** column name */ Pokemon_V2_Nature_Select_Column["GameIndex"] = "game_index";
    /** column name */ Pokemon_V2_Nature_Select_Column["HatesFlavorId"] = "hates_flavor_id";
    /** column name */ Pokemon_V2_Nature_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Nature_Select_Column["IncreasedStatId"] = "increased_stat_id";
    /** column name */ Pokemon_V2_Nature_Select_Column["LikesFlavorId"] = "likes_flavor_id";
    /** column name */ Pokemon_V2_Nature_Select_Column["Name"] = "name";
})(Pokemon_V2_Nature_Select_Column || (Pokemon_V2_Nature_Select_Column = {}));
let Pokemon_V2_Naturebattlestylepreference_Select_Column;
(function(Pokemon_V2_Naturebattlestylepreference_Select_Column) {
    /** column name */ Pokemon_V2_Naturebattlestylepreference_Select_Column["HighHpPreference"] = "high_hp_preference";
    /** column name */ Pokemon_V2_Naturebattlestylepreference_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Naturebattlestylepreference_Select_Column["LowHpPreference"] = "low_hp_preference";
    /** column name */ Pokemon_V2_Naturebattlestylepreference_Select_Column["MoveBattleStyleId"] = "move_battle_style_id";
    /** column name */ Pokemon_V2_Naturebattlestylepreference_Select_Column["NatureId"] = "nature_id";
})(Pokemon_V2_Naturebattlestylepreference_Select_Column || (Pokemon_V2_Naturebattlestylepreference_Select_Column = {}));
let Pokemon_V2_Naturename_Select_Column;
(function(Pokemon_V2_Naturename_Select_Column) {
    /** column name */ Pokemon_V2_Naturename_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Naturename_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Naturename_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Naturename_Select_Column["NatureId"] = "nature_id";
})(Pokemon_V2_Naturename_Select_Column || (Pokemon_V2_Naturename_Select_Column = {}));
let Pokemon_V2_Naturepokeathlonstat_Select_Column;
(function(Pokemon_V2_Naturepokeathlonstat_Select_Column) {
    /** column name */ Pokemon_V2_Naturepokeathlonstat_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Naturepokeathlonstat_Select_Column["MaxChange"] = "max_change";
    /** column name */ Pokemon_V2_Naturepokeathlonstat_Select_Column["NatureId"] = "nature_id";
    /** column name */ Pokemon_V2_Naturepokeathlonstat_Select_Column["PokeathlonStatId"] = "pokeathlon_stat_id";
})(Pokemon_V2_Naturepokeathlonstat_Select_Column || (Pokemon_V2_Naturepokeathlonstat_Select_Column = {}));
let Pokemon_V2_Palpark_Select_Column;
(function(Pokemon_V2_Palpark_Select_Column) {
    /** column name */ Pokemon_V2_Palpark_Select_Column["BaseScore"] = "base_score";
    /** column name */ Pokemon_V2_Palpark_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Palpark_Select_Column["PalParkAreaId"] = "pal_park_area_id";
    /** column name */ Pokemon_V2_Palpark_Select_Column["PokemonSpeciesId"] = "pokemon_species_id";
    /** column name */ Pokemon_V2_Palpark_Select_Column["Rate"] = "rate";
})(Pokemon_V2_Palpark_Select_Column || (Pokemon_V2_Palpark_Select_Column = {}));
let Pokemon_V2_Palparkarea_Select_Column;
(function(Pokemon_V2_Palparkarea_Select_Column) {
    /** column name */ Pokemon_V2_Palparkarea_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Palparkarea_Select_Column["Name"] = "name";
})(Pokemon_V2_Palparkarea_Select_Column || (Pokemon_V2_Palparkarea_Select_Column = {}));
let Pokemon_V2_Palparkareaname_Select_Column;
(function(Pokemon_V2_Palparkareaname_Select_Column) {
    /** column name */ Pokemon_V2_Palparkareaname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Palparkareaname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Palparkareaname_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Palparkareaname_Select_Column["PalParkAreaId"] = "pal_park_area_id";
})(Pokemon_V2_Palparkareaname_Select_Column || (Pokemon_V2_Palparkareaname_Select_Column = {}));
let Pokemon_V2_Pokeathlonstat_Select_Column;
(function(Pokemon_V2_Pokeathlonstat_Select_Column) {
    /** column name */ Pokemon_V2_Pokeathlonstat_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokeathlonstat_Select_Column["Name"] = "name";
})(Pokemon_V2_Pokeathlonstat_Select_Column || (Pokemon_V2_Pokeathlonstat_Select_Column = {}));
let Pokemon_V2_Pokeathlonstatname_Select_Column;
(function(Pokemon_V2_Pokeathlonstatname_Select_Column) {
    /** column name */ Pokemon_V2_Pokeathlonstatname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokeathlonstatname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Pokeathlonstatname_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Pokeathlonstatname_Select_Column["PokeathlonStatId"] = "pokeathlon_stat_id";
})(Pokemon_V2_Pokeathlonstatname_Select_Column || (Pokemon_V2_Pokeathlonstatname_Select_Column = {}));
let Pokemon_V2_Pokedex_Select_Column;
(function(Pokemon_V2_Pokedex_Select_Column) {
    /** column name */ Pokemon_V2_Pokedex_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokedex_Select_Column["IsMainSeries"] = "is_main_series";
    /** column name */ Pokemon_V2_Pokedex_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Pokedex_Select_Column["RegionId"] = "region_id";
})(Pokemon_V2_Pokedex_Select_Column || (Pokemon_V2_Pokedex_Select_Column = {}));
let Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function(Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */ Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsMainSeries"] = "is_main_series";
})(Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
let Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function(Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */ Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsMainSeries"] = "is_main_series";
})(Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (Pokemon_V2_Pokedex_Select_Column_Pokemon_V2_Pokedex_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
let Pokemon_V2_Pokedexdescription_Select_Column;
(function(Pokemon_V2_Pokedexdescription_Select_Column) {
    /** column name */ Pokemon_V2_Pokedexdescription_Select_Column["Description"] = "description";
    /** column name */ Pokemon_V2_Pokedexdescription_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokedexdescription_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Pokedexdescription_Select_Column["PokedexId"] = "pokedex_id";
})(Pokemon_V2_Pokedexdescription_Select_Column || (Pokemon_V2_Pokedexdescription_Select_Column = {}));
let Pokemon_V2_Pokedexname_Select_Column;
(function(Pokemon_V2_Pokedexname_Select_Column) {
    /** column name */ Pokemon_V2_Pokedexname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokedexname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Pokedexname_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Pokedexname_Select_Column["PokedexId"] = "pokedex_id";
})(Pokemon_V2_Pokedexname_Select_Column || (Pokemon_V2_Pokedexname_Select_Column = {}));
let Pokemon_V2_Pokedexversiongroup_Select_Column;
(function(Pokemon_V2_Pokedexversiongroup_Select_Column) {
    /** column name */ Pokemon_V2_Pokedexversiongroup_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokedexversiongroup_Select_Column["PokedexId"] = "pokedex_id";
    /** column name */ Pokemon_V2_Pokedexversiongroup_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Pokedexversiongroup_Select_Column || (Pokemon_V2_Pokedexversiongroup_Select_Column = {}));
let Pokemon_V2_Pokemon_Select_Column;
(function(Pokemon_V2_Pokemon_Select_Column) {
    /** column name */ Pokemon_V2_Pokemon_Select_Column["BaseExperience"] = "base_experience";
    /** column name */ Pokemon_V2_Pokemon_Select_Column["Height"] = "height";
    /** column name */ Pokemon_V2_Pokemon_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemon_Select_Column["IsDefault"] = "is_default";
    /** column name */ Pokemon_V2_Pokemon_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Pokemon_Select_Column["Order"] = "order";
    /** column name */ Pokemon_V2_Pokemon_Select_Column["PokemonSpeciesId"] = "pokemon_species_id";
    /** column name */ Pokemon_V2_Pokemon_Select_Column["Weight"] = "weight";
})(Pokemon_V2_Pokemon_Select_Column || (Pokemon_V2_Pokemon_Select_Column = {}));
let Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function(Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */ Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsDefault"] = "is_default";
})(Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
let Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function(Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */ Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsDefault"] = "is_default";
})(Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (Pokemon_V2_Pokemon_Select_Column_Pokemon_V2_Pokemon_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
let Pokemon_V2_Pokemonability_Select_Column;
(function(Pokemon_V2_Pokemonability_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonability_Select_Column["AbilityId"] = "ability_id";
    /** column name */ Pokemon_V2_Pokemonability_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonability_Select_Column["IsHidden"] = "is_hidden";
    /** column name */ Pokemon_V2_Pokemonability_Select_Column["PokemonId"] = "pokemon_id";
    /** column name */ Pokemon_V2_Pokemonability_Select_Column["Slot"] = "slot";
})(Pokemon_V2_Pokemonability_Select_Column || (Pokemon_V2_Pokemonability_Select_Column = {}));
let Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function(Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */ Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsHidden"] = "is_hidden";
})(Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
let Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function(Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */ Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsHidden"] = "is_hidden";
})(Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (Pokemon_V2_Pokemonability_Select_Column_Pokemon_V2_Pokemonability_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
let Pokemon_V2_Pokemoncolor_Select_Column;
(function(Pokemon_V2_Pokemoncolor_Select_Column) {
    /** column name */ Pokemon_V2_Pokemoncolor_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemoncolor_Select_Column["Name"] = "name";
})(Pokemon_V2_Pokemoncolor_Select_Column || (Pokemon_V2_Pokemoncolor_Select_Column = {}));
let Pokemon_V2_Pokemoncolorname_Select_Column;
(function(Pokemon_V2_Pokemoncolorname_Select_Column) {
    /** column name */ Pokemon_V2_Pokemoncolorname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemoncolorname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Pokemoncolorname_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Pokemoncolorname_Select_Column["PokemonColorId"] = "pokemon_color_id";
})(Pokemon_V2_Pokemoncolorname_Select_Column || (Pokemon_V2_Pokemoncolorname_Select_Column = {}));
let Pokemon_V2_Pokemondexnumber_Select_Column;
(function(Pokemon_V2_Pokemondexnumber_Select_Column) {
    /** column name */ Pokemon_V2_Pokemondexnumber_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemondexnumber_Select_Column["PokedexId"] = "pokedex_id";
    /** column name */ Pokemon_V2_Pokemondexnumber_Select_Column["PokedexNumber"] = "pokedex_number";
    /** column name */ Pokemon_V2_Pokemondexnumber_Select_Column["PokemonSpeciesId"] = "pokemon_species_id";
})(Pokemon_V2_Pokemondexnumber_Select_Column || (Pokemon_V2_Pokemondexnumber_Select_Column = {}));
let Pokemon_V2_Pokemonegggroup_Select_Column;
(function(Pokemon_V2_Pokemonegggroup_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonegggroup_Select_Column["EggGroupId"] = "egg_group_id";
    /** column name */ Pokemon_V2_Pokemonegggroup_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonegggroup_Select_Column["PokemonSpeciesId"] = "pokemon_species_id";
})(Pokemon_V2_Pokemonegggroup_Select_Column || (Pokemon_V2_Pokemonegggroup_Select_Column = {}));
let Pokemon_V2_Pokemonevolution_Select_Column;
(function(Pokemon_V2_Pokemonevolution_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["EvolutionItemId"] = "evolution_item_id";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["EvolutionTriggerId"] = "evolution_trigger_id";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["EvolvedSpeciesId"] = "evolved_species_id";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["GenderId"] = "gender_id";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["HeldItemId"] = "held_item_id";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["KnownMoveId"] = "known_move_id";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["KnownMoveTypeId"] = "known_move_type_id";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["LocationId"] = "location_id";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["MinAffection"] = "min_affection";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["MinBeauty"] = "min_beauty";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["MinHappiness"] = "min_happiness";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["MinLevel"] = "min_level";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["NeedsOverworldRain"] = "needs_overworld_rain";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["PartySpeciesId"] = "party_species_id";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["PartyTypeId"] = "party_type_id";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["RelativePhysicalStats"] = "relative_physical_stats";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["TimeOfDay"] = "time_of_day";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["TradeSpeciesId"] = "trade_species_id";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column["TurnUpsideDown"] = "turn_upside_down";
})(Pokemon_V2_Pokemonevolution_Select_Column || (Pokemon_V2_Pokemonevolution_Select_Column = {}));
let Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function(Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["NeedsOverworldRain"] = "needs_overworld_rain";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["TurnUpsideDown"] = "turn_upside_down";
})(Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
let Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function(Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["NeedsOverworldRain"] = "needs_overworld_rain";
    /** column name */ Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["TurnUpsideDown"] = "turn_upside_down";
})(Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (Pokemon_V2_Pokemonevolution_Select_Column_Pokemon_V2_Pokemonevolution_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
let Pokemon_V2_Pokemonform_Select_Column;
(function(Pokemon_V2_Pokemonform_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonform_Select_Column["FormName"] = "form_name";
    /** column name */ Pokemon_V2_Pokemonform_Select_Column["FormOrder"] = "form_order";
    /** column name */ Pokemon_V2_Pokemonform_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonform_Select_Column["IsBattleOnly"] = "is_battle_only";
    /** column name */ Pokemon_V2_Pokemonform_Select_Column["IsDefault"] = "is_default";
    /** column name */ Pokemon_V2_Pokemonform_Select_Column["IsMega"] = "is_mega";
    /** column name */ Pokemon_V2_Pokemonform_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Pokemonform_Select_Column["Order"] = "order";
    /** column name */ Pokemon_V2_Pokemonform_Select_Column["PokemonId"] = "pokemon_id";
    /** column name */ Pokemon_V2_Pokemonform_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Pokemonform_Select_Column || (Pokemon_V2_Pokemonform_Select_Column = {}));
let Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function(Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */ Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsBattleOnly"] = "is_battle_only";
    /** column name */ Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsDefault"] = "is_default";
    /** column name */ Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsMega"] = "is_mega";
})(Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
let Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function(Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */ Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsBattleOnly"] = "is_battle_only";
    /** column name */ Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsDefault"] = "is_default";
    /** column name */ Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsMega"] = "is_mega";
})(Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (Pokemon_V2_Pokemonform_Select_Column_Pokemon_V2_Pokemonform_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
let Pokemon_V2_Pokemonformgeneration_Select_Column;
(function(Pokemon_V2_Pokemonformgeneration_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonformgeneration_Select_Column["GameIndex"] = "game_index";
    /** column name */ Pokemon_V2_Pokemonformgeneration_Select_Column["GenerationId"] = "generation_id";
    /** column name */ Pokemon_V2_Pokemonformgeneration_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonformgeneration_Select_Column["PokemonFormId"] = "pokemon_form_id";
})(Pokemon_V2_Pokemonformgeneration_Select_Column || (Pokemon_V2_Pokemonformgeneration_Select_Column = {}));
let Pokemon_V2_Pokemonformname_Select_Column;
(function(Pokemon_V2_Pokemonformname_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonformname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonformname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Pokemonformname_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Pokemonformname_Select_Column["PokemonFormId"] = "pokemon_form_id";
    /** column name */ Pokemon_V2_Pokemonformname_Select_Column["PokemonName"] = "pokemon_name";
})(Pokemon_V2_Pokemonformname_Select_Column || (Pokemon_V2_Pokemonformname_Select_Column = {}));
let Pokemon_V2_Pokemonformsprites_Select_Column;
(function(Pokemon_V2_Pokemonformsprites_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonformsprites_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonformsprites_Select_Column["PokemonFormId"] = "pokemon_form_id";
    /** column name */ Pokemon_V2_Pokemonformsprites_Select_Column["Sprites"] = "sprites";
})(Pokemon_V2_Pokemonformsprites_Select_Column || (Pokemon_V2_Pokemonformsprites_Select_Column = {}));
let Pokemon_V2_Pokemonformtype_Select_Column;
(function(Pokemon_V2_Pokemonformtype_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonformtype_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonformtype_Select_Column["PokemonFormId"] = "pokemon_form_id";
    /** column name */ Pokemon_V2_Pokemonformtype_Select_Column["Slot"] = "slot";
    /** column name */ Pokemon_V2_Pokemonformtype_Select_Column["TypeId"] = "type_id";
})(Pokemon_V2_Pokemonformtype_Select_Column || (Pokemon_V2_Pokemonformtype_Select_Column = {}));
let Pokemon_V2_Pokemongameindex_Select_Column;
(function(Pokemon_V2_Pokemongameindex_Select_Column) {
    /** column name */ Pokemon_V2_Pokemongameindex_Select_Column["GameIndex"] = "game_index";
    /** column name */ Pokemon_V2_Pokemongameindex_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemongameindex_Select_Column["PokemonId"] = "pokemon_id";
    /** column name */ Pokemon_V2_Pokemongameindex_Select_Column["VersionId"] = "version_id";
})(Pokemon_V2_Pokemongameindex_Select_Column || (Pokemon_V2_Pokemongameindex_Select_Column = {}));
let Pokemon_V2_Pokemonhabitat_Select_Column;
(function(Pokemon_V2_Pokemonhabitat_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonhabitat_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonhabitat_Select_Column["Name"] = "name";
})(Pokemon_V2_Pokemonhabitat_Select_Column || (Pokemon_V2_Pokemonhabitat_Select_Column = {}));
let Pokemon_V2_Pokemonhabitatname_Select_Column;
(function(Pokemon_V2_Pokemonhabitatname_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonhabitatname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonhabitatname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Pokemonhabitatname_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Pokemonhabitatname_Select_Column["PokemonHabitatId"] = "pokemon_habitat_id";
})(Pokemon_V2_Pokemonhabitatname_Select_Column || (Pokemon_V2_Pokemonhabitatname_Select_Column = {}));
let Pokemon_V2_Pokemonitem_Select_Column;
(function(Pokemon_V2_Pokemonitem_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonitem_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonitem_Select_Column["ItemId"] = "item_id";
    /** column name */ Pokemon_V2_Pokemonitem_Select_Column["PokemonId"] = "pokemon_id";
    /** column name */ Pokemon_V2_Pokemonitem_Select_Column["Rarity"] = "rarity";
    /** column name */ Pokemon_V2_Pokemonitem_Select_Column["VersionId"] = "version_id";
})(Pokemon_V2_Pokemonitem_Select_Column || (Pokemon_V2_Pokemonitem_Select_Column = {}));
let Pokemon_V2_Pokemonmove_Select_Column;
(function(Pokemon_V2_Pokemonmove_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonmove_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonmove_Select_Column["Level"] = "level";
    /** column name */ Pokemon_V2_Pokemonmove_Select_Column["MoveId"] = "move_id";
    /** column name */ Pokemon_V2_Pokemonmove_Select_Column["MoveLearnMethodId"] = "move_learn_method_id";
    /** column name */ Pokemon_V2_Pokemonmove_Select_Column["Order"] = "order";
    /** column name */ Pokemon_V2_Pokemonmove_Select_Column["PokemonId"] = "pokemon_id";
    /** column name */ Pokemon_V2_Pokemonmove_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Pokemonmove_Select_Column || (Pokemon_V2_Pokemonmove_Select_Column = {}));
let Pokemon_V2_Pokemonshape_Select_Column;
(function(Pokemon_V2_Pokemonshape_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonshape_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonshape_Select_Column["Name"] = "name";
})(Pokemon_V2_Pokemonshape_Select_Column || (Pokemon_V2_Pokemonshape_Select_Column = {}));
let Pokemon_V2_Pokemonshapename_Select_Column;
(function(Pokemon_V2_Pokemonshapename_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonshapename_Select_Column["AwesomeName"] = "awesome_name";
    /** column name */ Pokemon_V2_Pokemonshapename_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonshapename_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Pokemonshapename_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Pokemonshapename_Select_Column["PokemonShapeId"] = "pokemon_shape_id";
})(Pokemon_V2_Pokemonshapename_Select_Column || (Pokemon_V2_Pokemonshapename_Select_Column = {}));
let Pokemon_V2_Pokemonspecies_Select_Column;
(function(Pokemon_V2_Pokemonspecies_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["BaseHappiness"] = "base_happiness";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["CaptureRate"] = "capture_rate";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["EvolutionChainId"] = "evolution_chain_id";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["EvolvesFromSpeciesId"] = "evolves_from_species_id";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["FormsSwitchable"] = "forms_switchable";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["GenderRate"] = "gender_rate";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["GenerationId"] = "generation_id";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["GrowthRateId"] = "growth_rate_id";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["HasGenderDifferences"] = "has_gender_differences";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["HatchCounter"] = "hatch_counter";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["IsBaby"] = "is_baby";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["IsLegendary"] = "is_legendary";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["IsMythical"] = "is_mythical";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["Order"] = "order";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["PokemonColorId"] = "pokemon_color_id";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["PokemonHabitatId"] = "pokemon_habitat_id";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column["PokemonShapeId"] = "pokemon_shape_id";
})(Pokemon_V2_Pokemonspecies_Select_Column || (Pokemon_V2_Pokemonspecies_Select_Column = {}));
let Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function(Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["FormsSwitchable"] = "forms_switchable";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["HasGenderDifferences"] = "has_gender_differences";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsBaby"] = "is_baby";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsLegendary"] = "is_legendary";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsMythical"] = "is_mythical";
})(Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
let Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function(Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["FormsSwitchable"] = "forms_switchable";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["HasGenderDifferences"] = "has_gender_differences";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsBaby"] = "is_baby";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsLegendary"] = "is_legendary";
    /** column name */ Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsMythical"] = "is_mythical";
})(Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (Pokemon_V2_Pokemonspecies_Select_Column_Pokemon_V2_Pokemonspecies_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
let Pokemon_V2_Pokemonspeciesdescription_Select_Column;
(function(Pokemon_V2_Pokemonspeciesdescription_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonspeciesdescription_Select_Column["Description"] = "description";
    /** column name */ Pokemon_V2_Pokemonspeciesdescription_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonspeciesdescription_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Pokemonspeciesdescription_Select_Column["PokemonSpeciesId"] = "pokemon_species_id";
})(Pokemon_V2_Pokemonspeciesdescription_Select_Column || (Pokemon_V2_Pokemonspeciesdescription_Select_Column = {}));
let Pokemon_V2_Pokemonspeciesflavortext_Select_Column;
(function(Pokemon_V2_Pokemonspeciesflavortext_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonspeciesflavortext_Select_Column["FlavorText"] = "flavor_text";
    /** column name */ Pokemon_V2_Pokemonspeciesflavortext_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonspeciesflavortext_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Pokemonspeciesflavortext_Select_Column["PokemonSpeciesId"] = "pokemon_species_id";
    /** column name */ Pokemon_V2_Pokemonspeciesflavortext_Select_Column["VersionId"] = "version_id";
})(Pokemon_V2_Pokemonspeciesflavortext_Select_Column || (Pokemon_V2_Pokemonspeciesflavortext_Select_Column = {}));
let Pokemon_V2_Pokemonspeciesname_Select_Column;
(function(Pokemon_V2_Pokemonspeciesname_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonspeciesname_Select_Column["Genus"] = "genus";
    /** column name */ Pokemon_V2_Pokemonspeciesname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonspeciesname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Pokemonspeciesname_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Pokemonspeciesname_Select_Column["PokemonSpeciesId"] = "pokemon_species_id";
})(Pokemon_V2_Pokemonspeciesname_Select_Column || (Pokemon_V2_Pokemonspeciesname_Select_Column = {}));
let Pokemon_V2_Pokemonsprites_Select_Column;
(function(Pokemon_V2_Pokemonsprites_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonsprites_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonsprites_Select_Column["PokemonId"] = "pokemon_id";
    /** column name */ Pokemon_V2_Pokemonsprites_Select_Column["Sprites"] = "sprites";
})(Pokemon_V2_Pokemonsprites_Select_Column || (Pokemon_V2_Pokemonsprites_Select_Column = {}));
let Pokemon_V2_Pokemonstat_Select_Column;
(function(Pokemon_V2_Pokemonstat_Select_Column) {
    /** column name */ Pokemon_V2_Pokemonstat_Select_Column["BaseStat"] = "base_stat";
    /** column name */ Pokemon_V2_Pokemonstat_Select_Column["Effort"] = "effort";
    /** column name */ Pokemon_V2_Pokemonstat_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemonstat_Select_Column["PokemonId"] = "pokemon_id";
    /** column name */ Pokemon_V2_Pokemonstat_Select_Column["StatId"] = "stat_id";
})(Pokemon_V2_Pokemonstat_Select_Column || (Pokemon_V2_Pokemonstat_Select_Column = {}));
let Pokemon_V2_Pokemontype_Select_Column;
(function(Pokemon_V2_Pokemontype_Select_Column) {
    /** column name */ Pokemon_V2_Pokemontype_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemontype_Select_Column["PokemonId"] = "pokemon_id";
    /** column name */ Pokemon_V2_Pokemontype_Select_Column["Slot"] = "slot";
    /** column name */ Pokemon_V2_Pokemontype_Select_Column["TypeId"] = "type_id";
})(Pokemon_V2_Pokemontype_Select_Column || (Pokemon_V2_Pokemontype_Select_Column = {}));
let Pokemon_V2_Pokemontypepast_Select_Column;
(function(Pokemon_V2_Pokemontypepast_Select_Column) {
    /** column name */ Pokemon_V2_Pokemontypepast_Select_Column["GenerationId"] = "generation_id";
    /** column name */ Pokemon_V2_Pokemontypepast_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Pokemontypepast_Select_Column["PokemonId"] = "pokemon_id";
    /** column name */ Pokemon_V2_Pokemontypepast_Select_Column["Slot"] = "slot";
    /** column name */ Pokemon_V2_Pokemontypepast_Select_Column["TypeId"] = "type_id";
})(Pokemon_V2_Pokemontypepast_Select_Column || (Pokemon_V2_Pokemontypepast_Select_Column = {}));
let Pokemon_V2_Region_Select_Column;
(function(Pokemon_V2_Region_Select_Column) {
    /** column name */ Pokemon_V2_Region_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Region_Select_Column["Name"] = "name";
})(Pokemon_V2_Region_Select_Column || (Pokemon_V2_Region_Select_Column = {}));
let Pokemon_V2_Regionname_Select_Column;
(function(Pokemon_V2_Regionname_Select_Column) {
    /** column name */ Pokemon_V2_Regionname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Regionname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Regionname_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Regionname_Select_Column["RegionId"] = "region_id";
})(Pokemon_V2_Regionname_Select_Column || (Pokemon_V2_Regionname_Select_Column = {}));
let Pokemon_V2_Stat_Select_Column;
(function(Pokemon_V2_Stat_Select_Column) {
    /** column name */ Pokemon_V2_Stat_Select_Column["GameIndex"] = "game_index";
    /** column name */ Pokemon_V2_Stat_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Stat_Select_Column["IsBattleOnly"] = "is_battle_only";
    /** column name */ Pokemon_V2_Stat_Select_Column["MoveDamageClassId"] = "move_damage_class_id";
    /** column name */ Pokemon_V2_Stat_Select_Column["Name"] = "name";
})(Pokemon_V2_Stat_Select_Column || (Pokemon_V2_Stat_Select_Column = {}));
let Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function(Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */ Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsBattleOnly"] = "is_battle_only";
})(Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
let Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function(Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */ Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsBattleOnly"] = "is_battle_only";
})(Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (Pokemon_V2_Stat_Select_Column_Pokemon_V2_Stat_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
let Pokemon_V2_Statname_Select_Column;
(function(Pokemon_V2_Statname_Select_Column) {
    /** column name */ Pokemon_V2_Statname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Statname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Statname_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Statname_Select_Column["StatId"] = "stat_id";
})(Pokemon_V2_Statname_Select_Column || (Pokemon_V2_Statname_Select_Column = {}));
let Pokemon_V2_Supercontestcombo_Select_Column;
(function(Pokemon_V2_Supercontestcombo_Select_Column) {
    /** column name */ Pokemon_V2_Supercontestcombo_Select_Column["FirstMoveId"] = "first_move_id";
    /** column name */ Pokemon_V2_Supercontestcombo_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Supercontestcombo_Select_Column["SecondMoveId"] = "second_move_id";
})(Pokemon_V2_Supercontestcombo_Select_Column || (Pokemon_V2_Supercontestcombo_Select_Column = {}));
let Pokemon_V2_Supercontesteffect_Select_Column;
(function(Pokemon_V2_Supercontesteffect_Select_Column) {
    /** column name */ Pokemon_V2_Supercontesteffect_Select_Column["Appeal"] = "appeal";
    /** column name */ Pokemon_V2_Supercontesteffect_Select_Column["Id"] = "id";
})(Pokemon_V2_Supercontesteffect_Select_Column || (Pokemon_V2_Supercontesteffect_Select_Column = {}));
let Pokemon_V2_Supercontesteffectflavortext_Select_Column;
(function(Pokemon_V2_Supercontesteffectflavortext_Select_Column) {
    /** column name */ Pokemon_V2_Supercontesteffectflavortext_Select_Column["FlavorText"] = "flavor_text";
    /** column name */ Pokemon_V2_Supercontesteffectflavortext_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Supercontesteffectflavortext_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Supercontesteffectflavortext_Select_Column["SuperContestEffectId"] = "super_contest_effect_id";
})(Pokemon_V2_Supercontesteffectflavortext_Select_Column || (Pokemon_V2_Supercontesteffectflavortext_Select_Column = {}));
let Pokemon_V2_Type_Select_Column;
(function(Pokemon_V2_Type_Select_Column) {
    /** column name */ Pokemon_V2_Type_Select_Column["GenerationId"] = "generation_id";
    /** column name */ Pokemon_V2_Type_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Type_Select_Column["MoveDamageClassId"] = "move_damage_class_id";
    /** column name */ Pokemon_V2_Type_Select_Column["Name"] = "name";
})(Pokemon_V2_Type_Select_Column || (Pokemon_V2_Type_Select_Column = {}));
let Pokemon_V2_Typeefficacy_Select_Column;
(function(Pokemon_V2_Typeefficacy_Select_Column) {
    /** column name */ Pokemon_V2_Typeefficacy_Select_Column["DamageFactor"] = "damage_factor";
    /** column name */ Pokemon_V2_Typeefficacy_Select_Column["DamageTypeId"] = "damage_type_id";
    /** column name */ Pokemon_V2_Typeefficacy_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Typeefficacy_Select_Column["TargetTypeId"] = "target_type_id";
})(Pokemon_V2_Typeefficacy_Select_Column || (Pokemon_V2_Typeefficacy_Select_Column = {}));
let Pokemon_V2_Typegameindex_Select_Column;
(function(Pokemon_V2_Typegameindex_Select_Column) {
    /** column name */ Pokemon_V2_Typegameindex_Select_Column["GameIndex"] = "game_index";
    /** column name */ Pokemon_V2_Typegameindex_Select_Column["GenerationId"] = "generation_id";
    /** column name */ Pokemon_V2_Typegameindex_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Typegameindex_Select_Column["TypeId"] = "type_id";
})(Pokemon_V2_Typegameindex_Select_Column || (Pokemon_V2_Typegameindex_Select_Column = {}));
let Pokemon_V2_Typename_Select_Column;
(function(Pokemon_V2_Typename_Select_Column) {
    /** column name */ Pokemon_V2_Typename_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Typename_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Typename_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Typename_Select_Column["TypeId"] = "type_id";
})(Pokemon_V2_Typename_Select_Column || (Pokemon_V2_Typename_Select_Column = {}));
let Pokemon_V2_Version_Select_Column;
(function(Pokemon_V2_Version_Select_Column) {
    /** column name */ Pokemon_V2_Version_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Version_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Version_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Version_Select_Column || (Pokemon_V2_Version_Select_Column = {}));
let Pokemon_V2_Versiongroup_Select_Column;
(function(Pokemon_V2_Versiongroup_Select_Column) {
    /** column name */ Pokemon_V2_Versiongroup_Select_Column["GenerationId"] = "generation_id";
    /** column name */ Pokemon_V2_Versiongroup_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Versiongroup_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Versiongroup_Select_Column["Order"] = "order";
})(Pokemon_V2_Versiongroup_Select_Column || (Pokemon_V2_Versiongroup_Select_Column = {}));
let Pokemon_V2_Versiongroupmovelearnmethod_Select_Column;
(function(Pokemon_V2_Versiongroupmovelearnmethod_Select_Column) {
    /** column name */ Pokemon_V2_Versiongroupmovelearnmethod_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Versiongroupmovelearnmethod_Select_Column["MoveLearnMethodId"] = "move_learn_method_id";
    /** column name */ Pokemon_V2_Versiongroupmovelearnmethod_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Versiongroupmovelearnmethod_Select_Column || (Pokemon_V2_Versiongroupmovelearnmethod_Select_Column = {}));
let Pokemon_V2_Versiongroupregion_Select_Column;
(function(Pokemon_V2_Versiongroupregion_Select_Column) {
    /** column name */ Pokemon_V2_Versiongroupregion_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Versiongroupregion_Select_Column["RegionId"] = "region_id";
    /** column name */ Pokemon_V2_Versiongroupregion_Select_Column["VersionGroupId"] = "version_group_id";
})(Pokemon_V2_Versiongroupregion_Select_Column || (Pokemon_V2_Versiongroupregion_Select_Column = {}));
let Pokemon_V2_Versionname_Select_Column;
(function(Pokemon_V2_Versionname_Select_Column) {
    /** column name */ Pokemon_V2_Versionname_Select_Column["Id"] = "id";
    /** column name */ Pokemon_V2_Versionname_Select_Column["LanguageId"] = "language_id";
    /** column name */ Pokemon_V2_Versionname_Select_Column["Name"] = "name";
    /** column name */ Pokemon_V2_Versionname_Select_Column["VersionId"] = "version_id";
})(Pokemon_V2_Versionname_Select_Column || (Pokemon_V2_Versionname_Select_Column = {}));
const PokemonListDocument = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "OperationDefinition",
            "operation": "query",
            "name": {
                "kind": "Name",
                "value": "PokemonList"
            },
            "variableDefinitions": [
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "where"
                        }
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "pokemon_v2_pokemonspecies_bool_exp"
                        }
                    }
                },
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "offset"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int"
                            }
                        }
                    }
                },
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "limit"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int"
                            }
                        }
                    }
                }
            ],
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "alias": {
                            "kind": "Name",
                            "value": "list"
                        },
                        "name": {
                            "kind": "Name",
                            "value": "pokemon_v2_pokemonspecies"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "offset"
                                    }
                                }
                            },
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "limit"
                                    }
                                }
                            },
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "order_by"
                                },
                                "value": {
                                    "kind": "ObjectValue",
                                    "fields": [
                                        {
                                            "kind": "ObjectField",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "value": {
                                                "kind": "EnumValue",
                                                "value": "asc"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "where"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "where"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "alias": {
                                        "kind": "Name",
                                        "value": "pokemons"
                                    },
                                    "name": {
                                        "kind": "Name",
                                        "value": "pokemon_v2_pokemons"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "height"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "weight"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "alias": {
                                                    "kind": "Name",
                                                    "value": "types"
                                                },
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "pokemon_v2_pokemontypes"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "alias": {
                                                                "kind": "Name",
                                                                "value": "type"
                                                            },
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "pokemon_v2_type"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "id"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "name"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "alias": {
                            "kind": "Name",
                            "value": "aggregate"
                        },
                        "name": {
                            "kind": "Name",
                            "value": "pokemon_v2_pokemonspecies_aggregate"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "where"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "where"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "aggregate"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "count"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
const PokemonDocument = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "OperationDefinition",
            "operation": "query",
            "name": {
                "kind": "Name",
                "value": "Pokemon"
            },
            "variableDefinitions": [
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "name"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                }
            ],
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "alias": {
                            "kind": "Name",
                            "value": "pokemon"
                        },
                        "name": {
                            "kind": "Name",
                            "value": "pokemon_v2_pokemon"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "where"
                                },
                                "value": {
                                    "kind": "ObjectValue",
                                    "fields": [
                                        {
                                            "kind": "ObjectField",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "value": {
                                                "kind": "ObjectValue",
                                                "fields": [
                                                    {
                                                        "kind": "ObjectField",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "_eq"
                                                        },
                                                        "value": {
                                                            "kind": "Variable",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "height"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "weight"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "alias": {
                                        "kind": "Name",
                                        "value": "species"
                                    },
                                    "name": {
                                        "kind": "Name",
                                        "value": "pokemon_v2_pokemonspecy"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "alias": {
                                                    "kind": "Name",
                                                    "value": "descriptions"
                                                },
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "pokemon_v2_pokemonspeciesflavortexts"
                                                },
                                                "arguments": [
                                                    {
                                                        "kind": "Argument",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "where"
                                                        },
                                                        "value": {
                                                            "kind": "ObjectValue",
                                                            "fields": [
                                                                {
                                                                    "kind": "ObjectField",
                                                                    "name": {
                                                                        "kind": "Name",
                                                                        "value": "pokemon_v2_language"
                                                                    },
                                                                    "value": {
                                                                        "kind": "ObjectValue",
                                                                        "fields": [
                                                                            {
                                                                                "kind": "ObjectField",
                                                                                "name": {
                                                                                    "kind": "Name",
                                                                                    "value": "name"
                                                                                },
                                                                                "value": {
                                                                                    "kind": "ObjectValue",
                                                                                    "fields": [
                                                                                        {
                                                                                            "kind": "ObjectField",
                                                                                            "name": {
                                                                                                "kind": "Name",
                                                                                                "value": "_eq"
                                                                                            },
                                                                                            "value": {
                                                                                                "kind": "StringValue",
                                                                                                "value": "en",
                                                                                                "block": false
                                                                                            }
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ],
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "id"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "alias": {
                                                                "kind": "Name",
                                                                "value": "description"
                                                            },
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "flavor_text"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "alias": {
                                                    "kind": "Name",
                                                    "value": "evolutionChain"
                                                },
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "pokemon_v2_evolutionchain"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "alias": {
                                                                "kind": "Name",
                                                                "value": "species"
                                                            },
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "pokemon_v2_pokemonspecies"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "id"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "name"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "alias": {
                                                                            "kind": "Name",
                                                                            "value": "pokemons"
                                                                        },
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "pokemon_v2_pokemons"
                                                                        },
                                                                        "selectionSet": {
                                                                            "kind": "SelectionSet",
                                                                            "selections": [
                                                                                {
                                                                                    "kind": "Field",
                                                                                    "alias": {
                                                                                        "kind": "Name",
                                                                                        "value": "types"
                                                                                    },
                                                                                    "name": {
                                                                                        "kind": "Name",
                                                                                        "value": "pokemon_v2_pokemontypes"
                                                                                    },
                                                                                    "selectionSet": {
                                                                                        "kind": "SelectionSet",
                                                                                        "selections": [
                                                                                            {
                                                                                                "kind": "Field",
                                                                                                "alias": {
                                                                                                    "kind": "Name",
                                                                                                    "value": "type"
                                                                                                },
                                                                                                "name": {
                                                                                                    "kind": "Name",
                                                                                                    "value": "pokemon_v2_type"
                                                                                                },
                                                                                                "selectionSet": {
                                                                                                    "kind": "SelectionSet",
                                                                                                    "selections": [
                                                                                                        {
                                                                                                            "kind": "Field",
                                                                                                            "name": {
                                                                                                                "kind": "Name",
                                                                                                                "value": "id"
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            "kind": "Field",
                                                                                                            "name": {
                                                                                                                "kind": "Name",
                                                                                                                "value": "name"
                                                                                                            }
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "alias": {
                                        "kind": "Name",
                                        "value": "stats"
                                    },
                                    "name": {
                                        "kind": "Name",
                                        "value": "pokemon_v2_pokemonstats"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "alias": {
                                                    "kind": "Name",
                                                    "value": "stat"
                                                },
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "pokemon_v2_stat"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "id"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "base_stat"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "alias": {
                                        "kind": "Name",
                                        "value": "abilities"
                                    },
                                    "name": {
                                        "kind": "Name",
                                        "value": "pokemon_v2_pokemonabilities"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "alias": {
                                                    "kind": "Name",
                                                    "value": "ability"
                                                },
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "pokemon_v2_ability"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "id"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "alias": {
                                        "kind": "Name",
                                        "value": "types"
                                    },
                                    "name": {
                                        "kind": "Name",
                                        "value": "pokemon_v2_pokemontypes"
                                    },
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "alias": {
                                                    "kind": "Name",
                                                    "value": "type"
                                                },
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "pokemon_v2_type"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "id"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "alias": {
                                                                "kind": "Name",
                                                                "value": "typeEfficacies"
                                                            },
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "pokemon_v2_typeefficacies"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "damage_factor"
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "alias": {
                                                                            "kind": "Name",
                                                                            "value": "type"
                                                                        },
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "pokemon_v2_type"
                                                                        },
                                                                        "selectionSet": {
                                                                            "kind": "SelectionSet",
                                                                            "selections": [
                                                                                {
                                                                                    "kind": "Field",
                                                                                    "name": {
                                                                                        "kind": "Name",
                                                                                        "value": "name"
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        "kind": "Field",
                                                                        "alias": {
                                                                            "kind": "Name",
                                                                            "value": "target"
                                                                        },
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "pokemonV2TypeByTargetTypeId"
                                                                        },
                                                                        "selectionSet": {
                                                                            "kind": "SelectionSet",
                                                                            "selections": [
                                                                                {
                                                                                    "kind": "Field",
                                                                                    "name": {
                                                                                        "kind": "Name",
                                                                                        "value": "name"
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};

})()),
"[project]/src/graphql/gql/gql.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/* eslint-disable */ __turbopack_esm__({
    "graphql": ()=>graphql
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$gql$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/gql/graphql.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */ const documents = {
    "\n  query PokemonList(\n    $where: pokemon_v2_pokemonspecies_bool_exp\n    $offset: Int!\n    $limit: Int!\n  ) {\n    list: pokemon_v2_pokemonspecies(\n      offset: $offset\n      limit: $limit\n      order_by: { id: asc }\n      where: $where\n    ) {\n      name\n      id\n      pokemons: pokemon_v2_pokemons {\n        height\n        weight\n        types: pokemon_v2_pokemontypes {\n          type: pokemon_v2_type {\n            id\n            name\n          }\n        }\n      }\n    }\n    aggregate: pokemon_v2_pokemonspecies_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$gql$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.PokemonListDocument,
    "\n  query Pokemon($name: String!) {\n    pokemon: pokemon_v2_pokemon(where: { name: { _eq: $name } }) {\n      name\n      id\n      height\n      weight\n      species: pokemon_v2_pokemonspecy {\n        descriptions: pokemon_v2_pokemonspeciesflavortexts(\n          where: { pokemon_v2_language: { name: { _eq: \"en\" } } }\n        ) {\n          id\n          description: flavor_text\n        }\n\n        evolutionChain: pokemon_v2_evolutionchain {\n          species: pokemon_v2_pokemonspecies {\n            id\n            name\n            pokemons: pokemon_v2_pokemons {\n              types: pokemon_v2_pokemontypes {\n                type: pokemon_v2_type {\n                  id\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n      stats: pokemon_v2_pokemonstats {\n        stat: pokemon_v2_stat {\n          id\n          name\n        }\n        base_stat\n      }\n      abilities: pokemon_v2_pokemonabilities {\n        ability: pokemon_v2_ability {\n          id\n          name\n        }\n      }\n      types: pokemon_v2_pokemontypes {\n        type: pokemon_v2_type {\n          id\n          name\n          typeEfficacies: pokemon_v2_typeefficacies {\n            damage_factor\n            type: pokemon_v2_type {\n              name\n            }\n            target: pokemonV2TypeByTargetTypeId {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$gql$2f$graphql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.PokemonDocument
};
function graphql(source) {
    return documents[source] ?? {};
}

})()),
"[project]/src/graphql/gql/index.ts [app-ssr] (ecmascript) {locals}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;
;

})()),
"[project]/src/graphql/gql/fragment-masking.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "isFragmentReady": ()=>isFragmentReady,
    "makeFragmentData": ()=>makeFragmentData,
    "useFragment": ()=>useFragment
});
function useFragment(_documentNode, fragmentType) {
    return fragmentType;
}
function makeFragmentData(data, _fragment) {
    return data;
}
function isFragmentReady(queryNode, fragmentNode, data) {
    const deferredFields = queryNode.__meta__?.deferredFields;
    if (!deferredFields) return true;
    const fragDef = fragmentNode.definitions[0];
    const fragName = fragDef?.name?.value;
    const fields = fragName && deferredFields[fragName] || [];
    return fields.length > 0 && fields.every((field)=>data && field in data);
}

})()),
"[project]/src/graphql/gql/index.ts [app-ssr] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$gql$2f$fragment$2d$masking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/gql/fragment-masking.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$gql$2f$gql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/gql/gql.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$gql$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/src/graphql/gql/index.ts [app-ssr] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/src/graphql/queries/pokemon-list.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PokemonListQueryDocument": ()=>PokemonListQueryDocument
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$gql$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/src/graphql/gql/index.ts [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$gql$2f$gql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/gql/gql.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const PokemonListQueryDocument = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$gql$2f$gql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphql"](/* GraphQL */ `
  query PokemonList(
    $where: pokemon_v2_pokemonspecies_bool_exp
    $offset: Int!
    $limit: Int!
  ) {
    list: pokemon_v2_pokemonspecies(
      offset: $offset
      limit: $limit
      order_by: { id: asc }
      where: $where
    ) {
      name
      id
      pokemons: pokemon_v2_pokemons {
        height
        weight
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            id
            name
          }
        }
      }
    }
    aggregate: pokemon_v2_pokemonspecies_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`);

})()),
"[project]/src/graphql/queries/pokemon.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PokemonQueryDocument": ()=>PokemonQueryDocument
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$gql$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/src/graphql/gql/index.ts [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$gql$2f$gql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/gql/gql.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const PokemonQueryDocument = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$gql$2f$gql$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["graphql"](/* GraphQL */ `
  query Pokemon($name: String!) {
    pokemon: pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
      name
      id
      height
      weight
      species: pokemon_v2_pokemonspecy {
        descriptions: pokemon_v2_pokemonspeciesflavortexts(
          where: { pokemon_v2_language: { name: { _eq: "en" } } }
        ) {
          id
          description: flavor_text
        }

        evolutionChain: pokemon_v2_evolutionchain {
          species: pokemon_v2_pokemonspecies {
            id
            name
            pokemons: pokemon_v2_pokemons {
              types: pokemon_v2_pokemontypes {
                type: pokemon_v2_type {
                  id
                  name
                }
              }
            }
          }
        }
      }
      stats: pokemon_v2_pokemonstats {
        stat: pokemon_v2_stat {
          id
          name
        }
        base_stat
      }
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          id
          name
        }
      }
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          id
          name
          typeEfficacies: pokemon_v2_typeefficacies {
            damage_factor
            type: pokemon_v2_type {
              name
            }
            target: pokemonV2TypeByTargetTypeId {
              name
            }
          }
        }
      }
    }
  }
`);

})()),
"[project]/src/services/pokemon.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getAllPokemon": ()=>getAllPokemon,
    "getPokemon": ()=>getPokemon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/graphql-request/build/esm/index.js [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__$5f$_TURBOPACK_$5f$default_$5f$export_$5f$__as__default$7d$__ = __turbopack_import__("[project]/node_modules/graphql-request/build/esm/index.js [app-ssr] (ecmascript) {export __TURBOPACK__default__export__ as default}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$pokemon$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/queries/pokemon.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$pokemon$2d$list$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/queries/pokemon-list.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const baseUrl = "https://beta.pokeapi.co/graphql/v1beta";
async function getAllPokemon({ page, query }) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__$5f$_TURBOPACK_$5f$default_$5f$export_$5f$__as__default$7d$__["default"](baseUrl, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$pokemon$2d$list$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PokemonListQueryDocument"], {
        ...query && {
            where: isNaN(Number(query)) ? {
                name: {
                    _ilike: `%${query}%`
                }
            } : {
                id: {
                    _eq: Number(query)
                }
            }
        },
        offset: (page - 1) * 9,
        limit: 9
    });
}
async function getPokemon({ name }) {
    const { pokemon: [pokemon] } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$request$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__$5f$_TURBOPACK_$5f$default_$5f$export_$5f$__as__default$7d$__["default"](baseUrl, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$pokemon$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PokemonQueryDocument"], {
        name
    });
    return pokemon || null;
}

})()),
"[project]/src/lib/react-query.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "QueryClientProvider": ()=>QueryClientProvider,
    "queryClient": ()=>queryClient,
    "queryKeys": ()=>queryKeys
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            staleTime: Infinity
        }
    }
});
function QueryClientProvider({ children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/lib/react-query.tsx>",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
const queryKeys = {
    pokemonSearch: (q, page)=>[
            "pokemonSearch",
            {
                q,
                page
            }
        ]
};

})()),
"[project]/src/hooks/use-pokemon-list-query.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "usePokemonListQuery": ()=>usePokemonListQuery
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useSuspenseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/react-query.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$pokemon$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/pokemon.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function usePokemonListQuery({ query, page }) {
    const queryKey = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$react$2d$query$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].pokemonSearch(query, page);
    const { data: pokemonList, ...rest } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useSuspenseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSuspenseQuery"]({
        queryKey,
        queryFn: async ()=>await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$pokemon$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllPokemon"]({
                page,
                query
            })
    });
    const totalPages = Math.ceil((pokemonList?.aggregate.aggregate?.count ?? 1) / 9);
    return {
        queryKey,
        pokemonList,
        totalPages,
        ...rest
    };
}

})()),
"[project]/src/hooks/use-pokemon-list.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "usePokemonList": ()=>usePokemonList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/usehooks-ts/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zod/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const searchParamsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
    q: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string().nullable().transform((value)=>value ?? ""),
    page: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].coerce.number().positive().catch(1).nullable().transform((value)=>value || 1)
});
function usePokemonList() {
    const searchParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"]();
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"]();
    const { page, q } = searchParamsSchema.parse({
        q: searchParams.get("q"),
        page: searchParams.get("page")
    });
    const [query, setQuery] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](q);
    const debouncedQuery = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebounce"](query, 500);
    function onChangeQuery(e) {
        const newQuery = e.target.value;
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete("page");
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateURLParams"]({
            currentParams: newSearchParams,
            key: "q",
            value: newQuery,
            condition: !newQuery,
            path: "/",
            router
        });
        setQuery(newQuery);
    }
    return {
        page,
        query,
        debouncedQuery,
        onChangeQuery
    };
}

})()),
"[project]/src/components/pokemon-section.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PokemonSection": ()=>PokemonSection,
    "PokemonSectionContent": ()=>PokemonSectionContent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$pokemon$2d$list$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-pokemon-list.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$pokemon$2d$list$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/use-pokemon-list-query.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/pokemon-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$list$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/pokemon-list-skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/pokemon-pagination.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$pagination$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/pokemon-pagination-skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$search$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/pokemon-search.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
function PokemonSection() {
    const { query, onChangeQuery, page, debouncedQuery } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$pokemon$2d$list$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePokemonList"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
        className: "container max-w-screen-md motion-safe:animate-fade-up motion-safe:animate-delay-700 lg:py-12",
        id: "list",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$search$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PokemonSearch"], {
                query: query,
                onChange: onChangeQuery
            }, void 0, false, {
                fileName: "<[project]/src/components/pokemon-section.tsx>",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](PokemonSectionContentSkeleton, {}, void 0, false, {
                    fileName: "<[project]/src/components/pokemon-section.tsx>",
                    lineNumber: 23,
                    columnNumber: 27
                }, void 0),
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](PokemonSectionContent, {
                    page: page,
                    query: debouncedQuery
                }, void 0, false, {
                    fileName: "<[project]/src/components/pokemon-section.tsx>",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/pokemon-section.tsx>",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/pokemon-section.tsx>",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
function PokemonSectionContent({ query, page }) {
    const { pokemonList, queryKey, totalPages } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$pokemon$2d$list$2d$query$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePokemonListQuery"]({
        query,
        page
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PokemonList"], {
                data: pokemonList
            }, JSON.stringify(queryKey), false, {
                fileName: "<[project]/src/components/pokemon-section.tsx>",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$pagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PokemonPagination"], {
                page: page,
                totalPages: totalPages
            }, void 0, false, {
                fileName: "<[project]/src/components/pokemon-section.tsx>",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function PokemonSectionContentSkeleton() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$list$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PokemonListSkeleton"], {}, void 0, false, {
                fileName: "<[project]/src/components/pokemon-section.tsx>",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pokemon$2d$pagination$2d$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PokemonPaginationSkeleton"], {}, void 0, false, {
                fileName: "<[project]/src/components/pokemon-section.tsx>",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}

})()),

};

//# sourceMappingURL=src_169274._.js.map