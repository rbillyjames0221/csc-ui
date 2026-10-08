'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react';
import { Badge } from './badge';
import { Button } from './button';
import { cn } from './cn';
import { sampleRows } from './sample';
const tone = (status) => (status === 'Approved' ? 'green' : status === 'Pending' ? 'amber' : 'blue');
export function DataTable({ variant = 'standard' }) {
    const [sorting, setSorting] = React.useState([]);
    const [global, setGlobal] = React.useState('');
    const [rowSelection, setRowSelection] = React.useState({});
    const columns = React.useMemo(() => [
        { id: 'select', header: ({ table }) => _jsx("input", { type: "checkbox", "aria-label": "Select all", checked: table.getIsAllPageRowsSelected(), onChange: table.getToggleAllPageRowsSelectedHandler() }), cell: ({ row }) => _jsx("input", { type: "checkbox", "aria-label": `Select ${row.original.name}`, checked: row.getIsSelected(), onChange: row.getToggleSelectedHandler() }) },
        { accessorKey: 'name', header: 'Applicant' },
        { accessorKey: 'id', header: 'Reference' },
        { accessorKey: 'office', header: 'Office' },
        { accessorKey: 'status', header: 'Status', cell: ({ getValue }) => _jsx(Badge, { tone: tone(String(getValue())), children: String(getValue()) }) },
    ], []);
    const table = useReactTable({
        data: sampleRows,
        columns,
        state: { sorting, globalFilter: global, rowSelection },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobal,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        enableRowSelection: true,
    });
    const rows = table.getRowModel().rows;
    function exportCsv() {
        const csv = ['Applicant,Reference,Office,Status', ...rows.map((row) => [row.original.name, row.original.id, row.original.office, row.original.status].join(','))].join('\n');
        const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'csc-sample.csv';
        link.click();
        URL.revokeObjectURL(url);
    }
    return (_jsxs("div", { className: cn('data-table', `data-table-${variant}`), children: [_jsx("p", { className: "demo-note", children: "Demonstration data only." }), _jsxs("div", { className: "table-tools", children: [_jsx("input", { className: "input", "aria-label": "Search sample records", placeholder: "Search records", value: global, onChange: (event) => setGlobal(event.target.value) }), _jsx(Button, { variant: "outline", onClick: exportCsv, children: "Export CSV" })] }), variant === 'cards' ? (_jsxs("div", { className: "table-cards", children: [rows.map((row) => (_jsxs("article", { className: "csc-card", children: [_jsx("strong", { children: row.original.name }), _jsxs("p", { children: [row.original.id, " \u00B7 ", row.original.office] }), _jsx(Badge, { tone: tone(row.original.status), children: row.original.status })] }, row.id))), !rows.length && _jsx("p", { className: "muted", children: "No matching sample records." })] })) : (_jsx("div", { className: "table-scroll", children: _jsxs("table", { children: [_jsx("thead", { children: table.getHeaderGroups().map((group) => (_jsx("tr", { children: group.headers.map((header) => (_jsx("th", { children: header.column.getCanSort() ? (_jsxs("button", { type: "button", onClick: header.column.getToggleSortingHandler(), children: [String(header.column.columnDef.header), header.column.getIsSorted() === 'asc' ? ' ↑' : header.column.getIsSorted() === 'desc' ? ' ↓' : ''] })) : header.isPlaceholder ? null : typeof header.column.columnDef.header === 'function' ? header.column.columnDef.header(header.getContext()) : null }, header.id))) }, group.id))) }), _jsxs("tbody", { children: [rows.map((row) => (_jsx("tr", { children: row.getVisibleCells().map((cell) => _jsx("td", { children: typeof cell.column.columnDef.cell === 'function' ? cell.column.columnDef.cell(cell.getContext()) : String(cell.getValue() ?? '') }, cell.id)) }, row.id))), !rows.length && _jsx("tr", { children: _jsx("td", { colSpan: 5, children: "No matching sample records." }) })] })] }) })), _jsxs("div", { className: "pager", children: [_jsx(Button, { variant: "outline", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: "Previous" }), _jsxs("span", { className: "muted", children: ["Page ", table.getState().pagination.pageIndex + 1] }), _jsx(Button, { variant: "outline", onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: "Next" })] })] }));
}
