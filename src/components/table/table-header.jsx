import React from 'react';
import Header from "@cloudscape-design/components/header";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Icon from "@cloudscape-design/components/icon";


const TableHeader = ({selectedItems, tableData}) => {
    return (
        <Header
        counter={
          selectedItems.length ? `(${selectedItems.length}/${tableData.length})` : `(${tableData.length})`
        }
        actions={
          <SpaceBetween
            direction="horizontal"
            size="xs"
          >
            <ButtonDropdown
              disabled={selectedItems.length === 0}
              items={[
                  {
                    text: "View details",
                    id: "rm",
                    disabled: selectedItems.length > 1
                  },
                  {
                    text: "Edit",
                    id: "mv",
                    disabled: selectedItems.length > 1
                  },
                  {
                    text: "Delete",
                    id: "rn",
                    disabled: false
                  }
                ]}
            > Actions
            </ButtonDropdown>
            <Button>
              <Icon name="refresh" />
            </Button>
            <Button variant="primary">
              Create transaction
            </Button>
          </SpaceBetween>
        }
      > Transactions Table
      </Header>
    );
}

export default TableHeader;