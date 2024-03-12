(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_c7f5bf._.js", {

"[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Tooltip": ()=>Tooltip
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/mizuhara/dist/utils/index.mjs [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__t__as__cn$7d$__ = __turbopack_import__("[project]/node_modules/mizuhara/dist/utils/index.mjs [app-client] (ecmascript) {export t as cn}");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
function TooltipRoot({ skipDelayDuration, ...props }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Provider, {
        skipDelayDuration: skipDelayDuration,
        ...props,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root, {
            ...props
        }, void 0, false, {
            fileName: "<[project]/src/components/ui/tooltip.tsx>",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/tooltip.tsx>",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = TooltipRoot;
const TooltipContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content, {
        ref: ref,
        sideOffset: sideOffset,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__t__as__cn$7d$__["cn"]("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/tooltip.tsx>",
        lineNumber: 25,
        columnNumber: 3
    }, this));
_c2 = TooltipContent;
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Content.displayName;
const Tooltip = Object.assign(TooltipRoot, {
    Content: TooltipContent,
    Trigger: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Trigger,
    Arrow: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Arrow
});
_c3 = Tooltip;
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "TooltipRoot");
__turbopack_refresh__.register(_c1, "TooltipContent$forwardRef");
__turbopack_refresh__.register(_c2, "TooltipContent");
__turbopack_refresh__.register(_c3, "Tooltip");

})()),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Badge": ()=>Badge,
    "BadgeStyles": ()=>BadgeStyles
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mizuhara$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/mizuhara/dist/utils/index.mjs [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-variants/dist/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const BadgeStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"]({
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
const Badge = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
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
_c1 = Badge;
Badge.displayName = "Badge";
var _c, _c1;
__turbopack_refresh__.register(_c, "Badge$forwardRef");
__turbopack_refresh__.register(_c1, "Badge");

})()),
"[project]/src/components/icons.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Icons": ()=>Icons
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircleIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript) {export default as AlertCircleIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CheckIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) {export default as CheckIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronLeftIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) {export default as ChevronLeftIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronRightIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) {export default as ChevronRightIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CircleIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) {export default as CircleIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__InfoIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) {export default as InfoIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__LaptopIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [app-client] (ecmascript) {export default as LaptopIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MoonIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) {export default as MoonIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$more$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MoreHorizontalIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/more-horizontal.js [app-client] (ecmascript) {export default as MoreHorizontalIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__RulerIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) {export default as RulerIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__SearchIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) {export default as SearchIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__SunIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) {export default as SunIcon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Volume2Icon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) {export default as Volume2Icon}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$weight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__WeightIcon$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/weight.js [app-client] (ecmascript) {export default as WeightIcon}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const Icons = {
    Logo: (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
            width: "153",
            height: "56",
            viewBox: "0 0 153 56",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("g", {
                    clipPath: "url(#clip0_235_917)",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                            d: "M84.9083 3.24249e-05L82.3539 1.31838L71.8453 13.3464L73.6923 15.5252L71.6863 16.5918L63.077 8.96719L63.0742 8.97238L60.515 10.3578L60.0231 11.2887L60.0668 9.20056L46.0705 13.6636L46.0708 13.671L43.4911 15.0526L43.8577 22.5236L46.2719 21.9143L46.4226 23.5729C44.3836 23.2838 42.2059 23.5741 40.1382 24.446C39.2394 24.837 38.4014 25.3174 37.6292 25.8762C38.1539 23.5588 38.0294 21.2744 37.1448 19.237C36.1001 16.8296 34.2618 14.8401 32.0077 13.5848C30.4275 12.5341 28.5439 11.8795 26.5732 11.6568C21.73 10.8118 15.9143 11.6793 10.1905 14.1133C8.08626 15.0093 6.12351 16.026 4.35316 17.1515L2.11553 18.568L2.11703 18.5709L0 20.7178L6.82823 32.2226L9.39697 31.122L20.387 56L30.8278 52.6382L33.3275 50.9613L33.3977 50.939L32.7459 48.4285L31.2049 42.5237C32.025 44.121 33.2519 45.2946 33.2519 45.2946C34.3613 46.377 35.7211 47.1647 37.2382 47.6068C40.1561 48.4449 43.4493 47.8986 46.2763 46.0993C46.9039 45.7029 47.7195 45.1049 48.3296 44.5722L48.6795 48.4234L58.5157 46.9711L61.1427 45.5967L61.1474 45.5961L61.1366 39.39L79.2092 48.3255L81.7767 46.9416L81.7636 46.9347V38.4528L81.7676 38.4737C83.8809 38.1598 85.6948 37.3791 87.4782 36.3092C87.5091 36.2909 87.5405 36.2701 87.5715 36.2513L86.7951 40.9625L97.9328 42.7416L100.072 41.5915L101.435 44.1056L103.451 42.9999L103.852 46.314L116.505 48.5537L119.033 47.1659L118.931 47.1363L119.041 47.1557L118.553 44.0698C119.426 43.9711 120.334 43.8539 121.116 43.5762C121.427 43.4697 121.864 43.2956 122.332 43.0903L121.83 47.5336L130.218 48.7392L130.299 52.149L139.002 54.9176L141.592 53.5473L141.585 53.5415L141.604 53.5475L153 19.2639L141.133 16.385L141.129 16.4031L139.269 17.3922L138.964 15.8871L125.02 12.8236V12.823L122.445 14.2103L122.531 21.259C121.081 21.2253 119.586 21.4758 118.135 22.0232C117.115 22.4125 116.168 22.9242 115.31 23.5464L113.206 10.2919H103.979L103.977 10.2824L103.959 10.2919H103.932L103.929 10.3075L101.382 11.6756L101.357 11.8161H93.9159L93.9021 11.9002L93.9033 11.8036L91.3704 13.1947L90.8421 16.4014C88.5756 14.2814 85.6202 13.1216 82.3987 13.0543L90.6861 8.6083L84.9074 0.000557663L84.9011 0.00771475L84.9083 3.24249e-05ZM84.4624 3.82325L87.5182 7.9665L78.7817 12.2893L78.1784 11.3742L84.4624 3.82325ZM106.376 12.8578H111.099L113.059 25.5739C110.565 28.4098 109.353 32.2221 110.186 35.7097C110.831 38.4135 112.496 40.5909 114.882 41.8627C115.122 41.9834 115.371 42.1028 115.628 42.206L115.877 43.8545L108.912 42.7927L107.058 30.5314L104.436 37.2953L100.509 28.8414H100.464L98.9126 38.6315L92.3676 37.4948L93.288 32.0317C93.535 31.7999 93.7781 31.5675 94.0172 31.3221L96.1385 29.1418L94.0766 27.2991L96.2673 14.2886H102.871L104.523 23.2951L106.376 12.8578ZM63.9963 13.0311L70.1207 18.853L61.5557 27.8595L69.6026 31.0364C70.5014 32.7366 71.8724 34.1813 73.5928 35.2456C75.2559 36.2702 77.1614 36.8759 79.177 37.0748L79.1782 42.835L58.7066 32.6154L58.7249 38.0117L58.576 38.1239L58.7255 38.1978L58.7428 43.323L53.4473 44.0439L53.0782 39.6301C54.7134 36.8316 55.3113 33.534 54.4579 30.51C53.9895 28.8478 53.1242 27.405 51.9483 26.2489L51.1887 17.2498L48.8106 17.8654L48.7057 15.5899L57.2098 13.0624L57.3999 16.2542L57.3882 16.2762L57.4011 16.2722L57.7313 21.817L63.9963 13.0311ZM22.7893 14.0762C23.9484 14.0785 25.0549 14.173 26.0961 14.3566C27.5695 14.5221 29.1291 14.9557 30.4952 15.8608C32.3694 16.9143 33.8031 18.4139 34.6298 20.3238C36.646 24.9743 33.2779 31.6667 26.6116 35.7732L30.0971 49.1222L24.4555 50.9211L12.8792 25.1161C12.2495 25.4465 11.0865 26.0005 10.0185 26.523L5.82656 19.4549C7.49357 18.3923 9.32177 17.4504 11.2664 16.6303C15.3596 14.8927 19.312 14.0694 22.7893 14.0762ZM81.9827 15.7003C85.2583 15.6614 88.0757 16.9988 89.9627 19.3099L81.438 28.3666C82.016 28.4754 82.9352 28.3241 83.6138 28.162C84.8361 27.8645 85.7332 27.3554 86.4729 26.7422C86.4654 26.7522 86.4572 26.7618 86.4502 26.7721C86.4894 26.7363 86.5276 26.705 86.568 26.6721L86.5639 26.6675C87.0149 26.282 87.4076 25.8581 87.7813 25.4205L91.188 28.4795L92.2201 29.4101C91.7727 29.872 91.3028 30.308 90.827 30.7064C88.8625 32.3283 86.6231 33.3857 83.6644 34.0992C83.0177 34.2471 82.3838 34.3547 81.7638 34.4091C77.0677 34.8698 73.1279 32.7177 71.6329 29.2267C71.4467 28.8039 71.303 28.3758 71.1945 27.919C70.503 24.9789 71.0936 22.3512 72.5488 20.2923C72.9679 19.6916 73.4652 19.144 74.0239 18.6509C75.3945 17.4302 77.1443 16.5427 79.1338 16.0655C80.1124 15.83 81.0657 15.7114 81.9829 15.7005L81.9827 15.7003ZM127.493 16.0478L136.59 17.8726L139.648 32.3503L142.785 19.3705L149.705 20.8967L139.959 50.3544L135.905 49.1488L135.11 48.5343L134.697 31.1056L132.263 44.8448L126.983 44.0036L127.361 40.048C130.809 37.1402 132.637 32.553 131.635 28.3961C131.195 26.5554 130.247 24.9526 128.91 23.7342L129.356 19.069L127.36 18.5386L127.493 16.0478ZM122.233 23.5698C123.947 23.5425 125.529 24.0242 126.781 24.9228C127.518 25.4442 128.13 26.1078 128.612 26.8791C128.977 27.4883 129.261 28.1597 129.433 28.893C130.047 31.4308 129.316 34.1489 127.712 36.3387C127.025 37.2721 126.188 38.1108 125.222 38.7976C124.5 39.3105 123.706 39.7463 122.852 40.0608C121.166 40.7018 119.49 40.835 117.996 40.5386C116.954 40.3335 116.005 39.9283 115.179 39.3417C113.865 38.393 112.898 36.9921 112.471 35.233C111.974 33.1197 112.432 30.8632 113.571 28.8865C114.139 27.9202 114.867 27.0121 115.729 26.2295C116.69 25.3692 117.805 24.6648 119.045 24.1887C120.127 23.7858 121.204 23.5863 122.233 23.5698ZM68.3556 24.357C68.242 25.5391 68.3005 26.7754 68.5486 28.0289L65.7011 26.9322L65.7014 26.9319L68.3556 24.357ZM45.0574 25.5551C46.6721 25.5707 48.1695 26.0299 49.394 26.8603C50.7385 27.7705 51.7638 29.139 52.2424 30.8539C52.3026 31.0358 52.3423 31.227 52.3826 31.414C52.5194 32.0674 52.5745 32.7373 52.5484 33.3975C52.4837 35.385 51.7525 37.3765 50.5283 39.0613C49.3638 40.6906 47.737 42.0354 45.823 42.8577C40.9287 44.9273 36.0345 42.8576 34.7269 38.2196C33.4601 33.7351 36.4075 28.3968 41.1496 26.3577C42.4746 25.7994 43.8015 25.543 45.0574 25.5551ZM48.317 44.4322L48.3179 44.4409C48.3046 44.4455 48.291 44.4504 48.2773 44.4552C48.2904 44.4474 48.3039 44.4401 48.317 44.4322L48.317 44.4322Z",
                            fill: "#1d4ed8"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/icons.tsx>",
                            lineNumber: 31,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                            d: "M30.1704 25.1959C29.6599 22.462 26.0784 20.9551 22.5274 22.8882L23.4427 26.0171L24.8826 30.6409L25.5395 32.7469C28.2036 31.0371 30.8812 28.9827 30.1704 25.1959ZM26.6433 29.3998C26.2555 28.1366 25.405 25.409 25.405 25.409C25.409 25.4214 25.2375 24.8253 25.0342 24.1429C25.7871 24.0086 26.5104 24.063 27.1055 24.3486C27.4382 24.5068 28.023 24.8757 28.1508 25.575C28.4449 27.1471 27.914 28.2692 26.6433 29.3998Z",
                            fill: "#1d4ed8"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/icons.tsx>",
                            lineNumber: 35,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                            d: "M83.9026 20.8582C81.9176 19.0407 78.8323 19.1819 77.0216 21.1614C75.2002 23.1376 75.3433 26.2188 77.3311 28.0289C77.4929 28.1848 77.6678 28.3123 77.8438 28.4375L84.2467 21.1999C84.1337 21.0821 84.0201 20.9648 83.9026 20.8582ZM77.8569 25.9491C77.2306 24.8015 77.3572 23.3444 78.2935 22.3232C79.194 21.3439 80.5737 21.0651 81.7501 21.5179L77.8569 25.9491Z",
                            fill: "#1d4ed8"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/icons.tsx>",
                            lineNumber: 39,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                            d: "M125.337 27.3698C125.391 27.5846 125.419 27.7971 125.412 28.0233C125.353 29.3755 124.08 30.4194 122.561 30.3485C121.044 30.2964 119.853 29.1471 119.912 27.7983C119.963 26.5339 121.092 25.5331 122.486 25.4691C122.221 25.4095 121.945 25.3784 121.656 25.3682C119.117 25.2588 117.041 27.0542 116.953 29.2893C116.856 31.6797 118.775 33.6287 121.275 33.7369C123.818 33.8384 125.893 32.0368 125.994 29.6577C126.023 28.8331 125.779 28.0425 125.337 27.3698Z",
                            fill: "#1d4ed8"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/icons.tsx>",
                            lineNumber: 43,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
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
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("clipPath", {
                        id: "clip0_235_917",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("rect", {
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
    Pokeball: (props)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
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
    ChevronLeft: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronLeftIcon$7d$__["ChevronLeftIcon"],
    ChevronRight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronRightIcon$7d$__["ChevronRightIcon"],
    MoreHorizontal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$more$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MoreHorizontalIcon$7d$__["MoreHorizontalIcon"],
    Check: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CheckIcon$7d$__["CheckIcon"],
    Circle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CircleIcon$7d$__["CircleIcon"],
    Moon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__MoonIcon$7d$__["MoonIcon"],
    Sun: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__SunIcon$7d$__["SunIcon"],
    Laptop: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__LaptopIcon$7d$__["LaptopIcon"],
    Search: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__SearchIcon$7d$__["SearchIcon"],
    Weight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$weight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__WeightIcon$7d$__["WeightIcon"],
    Length: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__RulerIcon$7d$__["RulerIcon"],
    Info: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__InfoIcon$7d$__["InfoIcon"],
    Volume2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Volume2Icon$7d$__["Volume2Icon"],
    Alert: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircleIcon$7d$__["AlertCircleIcon"]
};

})()),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/components/pokemon-details.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PokemonDetails": ()=>PokemonDetails
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
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
function PokemonDetails({ pokemon }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "motion-safe:animate-fade motion-safe:animate-delay-300",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                        className: "text-2xl font-semibold tracking-tight text-black",
                        children: "Description"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "text-black",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomItem"](pokemon.species?.descriptions ?? []).description.replace("\f", " ")
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/pokemon-details.tsx>",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "h-0.5 w-full rounded bg-blue-700"
            }, void 0, false, {
                fileName: "<[project]/src/components/pokemon-details.tsx>",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "motion-safe:animate-fade motion-safe:animate-delay-500",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                        className: "text-2xl font-semibold tracking-tight text-black",
                        children: "Abilities"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                        className: "ml-6 list-disc [&>li]:mt-2",
                        children: pokemon.abilities.map(({ ability })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                className: "capitalize text-black",
                                children: ability?.name
                            }, ability?.id, false, {
                                fileName: "<[project]/src/components/pokemon-details.tsx>",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/pokemon-details.tsx>",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "h-0.5 w-full rounded bg-blue-700"
            }, void 0, false, {
                fileName: "<[project]/src/components/pokemon-details.tsx>",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "motion-safe:animate-fade motion-safe:animate-delay-700",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                        className: "text-2xl font-semibold tracking-tight text-black",
                        children: "Weakness"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "mt-2 flex flex-wrap items-center gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPokemonWeakness"](pokemon.types.map(({ type })=>type?.name))?.map(({ type, damageFactor })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                type: type,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "capitalize",
                                        children: type
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    damageFactor > 200 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"].Trigger, {
                                                asChild: true,
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].Alert, {
                                                    className: "ml-1 size-4"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/pokemon-details.tsx>",
                                                    lineNumber: 67,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/pokemon-details.tsx>",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"].Content, {
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    children: "Deals 4x damage"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/pokemon-details.tsx>",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/pokemon-details.tsx>",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, type, true, {
                                fileName: "<[project]/src/components/pokemon-details.tsx>",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/pokemon-details.tsx>",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "h-0.5 w-full rounded bg-blue-700"
            }, void 0, false, {
                fileName: "<[project]/src/components/pokemon-details.tsx>",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "motion-safe:animate-fade motion-safe:animate-delay-1000",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                        className: "text-2xl font-semibold tracking-tight text-black",
                        children: "Evolutions"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    pokemon.species?.evolutionChain?.species.length === 1 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "text-black",
                        children: "This Pokémon does not evolve."
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "mt-4 flex max-w-[calc(100vw-4rem)] items-center gap-4 overflow-x-auto py-4 sm:py-0",
                        children: pokemon.species?.evolutionChain?.species.map((species, index, { length })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "flex w-44 flex-col gap-4 rounded-md border px-6 py-4",
                                        href: `/${species.name}`,
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPokemonSprite"](species.id),
                                                alt: pokemon.name,
                                                width: 64,
                                                height: 64,
                                                className: "self-center rendering-pixelated"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/pokemon-details.tsx>",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "text-center text-xl font-semibold capitalize leading-none tracking-tight text-black",
                                                children: species.name
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/pokemon-details.tsx>",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center justify-center gap-2",
                                                children: species.pokemons[0].types.map(({ type })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        className: "capitalize",
                                                        type: type?.name,
                                                        children: type?.name
                                                    }, type?.name, false, {
                                                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                                                        lineNumber: 106,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/pokemon-details.tsx>",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this),
                                    index !== length - 1 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].ChevronRight, {
                                        className: "size-6 "
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, species?.id, true, {
                                fileName: "<[project]/src/components/pokemon-details.tsx>",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/src/components/pokemon-details.tsx>",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/pokemon-details.tsx>",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/pokemon-details.tsx>",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = PokemonDetails;
var _c;
__turbopack_refresh__.register(_c, "PokemonDetails");

})()),
}]);

//# sourceMappingURL=src_c7f5bf._.js.map