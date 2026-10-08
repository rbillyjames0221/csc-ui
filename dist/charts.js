import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { sampleSeries } from './sample';
export function BarChart() {
    const max = Math.max(...sampleSeries.map((item) => item.value));
    return (_jsxs("figure", { className: "chart", children: [_jsx("figcaption", { children: "Sample applications by month" }), _jsx("svg", { viewBox: "0 0 360 160", role: "img", "aria-label": "Bar chart of sample monthly counts", children: sampleSeries.map((item, index) => {
                    const height = (item.value / max) * 110;
                    const x = 24 + index * 56;
                    return (_jsxs("g", { children: [_jsx("rect", { x: x, y: 130 - height, width: "28", height: height, rx: "4", fill: "#2A338F" }), _jsx("text", { x: x + 14, y: "148", textAnchor: "middle", fontSize: "11", fill: "#64748b", children: item.label })] }, item.label));
                }) })] }));
}
export function LineChart() {
    const max = Math.max(...sampleSeries.map((item) => item.value));
    const points = sampleSeries.map((item, index) => `${24 + index * 56},${130 - (item.value / max) * 110}`).join(' ');
    return (_jsxs("figure", { className: "chart", children: [_jsx("figcaption", { children: "Sample trend" }), _jsxs("svg", { viewBox: "0 0 360 160", role: "img", "aria-label": "Line chart of sample monthly counts", children: [_jsx("polyline", { fill: "none", stroke: "#2A338F", strokeWidth: "3", points: points }), sampleSeries.map((item, index) => _jsx("text", { x: 24 + index * 56, y: "148", textAnchor: "middle", fontSize: "11", fill: "#64748b", children: item.label }, item.label))] })] }));
}
export function Chart({ variant = 'bar' }) {
    return variant === 'line' ? _jsx(LineChart, {}) : _jsx(BarChart, {});
}
