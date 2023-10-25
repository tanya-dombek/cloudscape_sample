import {StatusIndicator} from "@cloudscape-design/components"

const statusMap = {
    'Canceled': 'error',
    'In-progress': 'in-progress',
    'Bill': 'pending',
    'Completed': 'success'
};

export const rawColumns = [
    {
        id: "email",
        header: "Email",
        cell: e => e.email,
        isRowHeader: true,
        sortingField: "email",
        key: 0,
    },
    {
        id: "domain",
        header: "Domain",
        cell: e => e.domain,
        sortingField: "domain",
        key: 1,
    },
    {
        id: "amount",
        header: "Amount",
        cell: e => (`${e.amount} ${e.currency}`),
        sortingField: "amount",
        key: 2,
    },
    {
        id: "openedDate",
        header: "Opened Date",
        cell: e => e.openedDate,
        sortingField: "openedDate",
        key: 3,
    },
    {
        id: "completedDate",
        header: "Completed Date",
        cell: e => e.completedDate,
        sortingField: "completedDate",
        key: 4,
    },
    {
        id: "status",
        header: "Status",
        cell: item => (
            <StatusIndicator type={statusMap[item.status]}>{item.status}</StatusIndicator>
        ),
        sortingField: "status",
        key: 5,
    },
]

export function createTableSortLabelFn(column) {
    if (!column.sortingField && !column.sortingComparator && !column.ariaLabel) {
      return;
    }
    return ({ sorted, descending }) => {
      return `${column.header}, ${sorted ? `sorted ${descending ? 'descending' : 'ascending'}` : 'not sorted'}.`;
    };
}

export const COLUMN_DEFINITIONS = rawColumns.map(column => ({ ...column, ariaLabel: createTableSortLabelFn(column) }));

export const columnDisplay = [
    { id: "email", visible: true, key: 0 },
    { id: "domain", visible: true, key: 1 },
    { id: "amount", visible: true, key: 2 },
    { id: "openedDate", visible: true, key: 3 },
    { id: "completedDate", visible: true, key: 4 },
    { id: "status", visible: true, key: 5 }
]
