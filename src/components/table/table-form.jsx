import * as React from "react";
import {Table, Box, SpaceBetween, Button, TextFilter, Pagination} from "@cloudscape-design/components";
import { useCollection } from '@cloudscape-design/collection-hooks';

import { COLUMN_DEFINITIONS, columnDisplay } from "../../utilities/table-utilities";
import { clientsData } from "../../utilities/clients-data";
import TableHeader from "./table-header";

const REC_PER_PAGE = 5;

const TableForm = () => {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [tableData, setTableData] = React.useState(clientsData);
  const [filteringText, setFilteringText] = React.useState("");

  const { items, collectionProps, paginationProps } = useCollection(
    tableData,
    {
      filtering: {
        empty: <Box
            margin={{ vertical: "xs" }}
            textAlign="center"
            color="inherit"
        >
            <SpaceBetween size="m">
            <b>No transactions</b>
            <Button>Create transaction</Button>
            </SpaceBetween>
        </Box>,
      },
      pagination: { pageSize: REC_PER_PAGE },
      sorting: { defaultState: { sortingColumn: COLUMN_DEFINITIONS[0] } },
      selection: {},
    }
  );

  const filterTable = (filteringText) => {
    setFilteringText(filteringText);
    const filteredItems = clientsData.filter(item => 
        item.email.toLowerCase().includes(filteringText.toLowerCase())
    );
    setTableData(filteredItems);
  }

  return (
    <Table
    {...collectionProps}
      onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
      selectedItems={selectedItems}
      columnDefinitions={COLUMN_DEFINITIONS}
      columnDisplay={columnDisplay}
      items={items}
      loadingText="Loading transactions"
      selectionType="multi"
      trackBy="email"
      filter={
        <TextFilter
          filteringPlaceholder="Find transaction"
          filteringText={filteringText}
          onChange={({ detail }) => filterTable(detail.filteringText)}
          countText={`Matches: ${tableData.length}`}
        />
      }
      header={<TableHeader selectedItems={selectedItems} tableData={tableData} />}
      pagination={
        <Pagination {...paginationProps}/>
      }
    />
  );
}

export default TableForm;