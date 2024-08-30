//Just the Simple parent test component to test the integration testing, will delete it later
import React, { useState } from 'react';
import { Picklist } from 'components';

export const SimpleParentComponent = () => {
  return (
    <div>
      <Picklist
        items={[
          {
            id: "new_item_de738959-fd13-4ffb-963b-75967f327b73",
            label: "apple",
          },
          {
            id: "new_item_49219d61-b26f-40fb-8b58-e000bb715a89",
            label: "banana",
          },
          {
            id: "new_item_pm738959-fd13-4ffb-963b-75967f328b73",
            label: "mango",
          },
          {
            id: "new_item_cd219d61-b26f-40fb-8b58-e000bb715a89",
            label: "orange",
          },
        ]}
        identifier={"id"}
        selectedItems={[]}
        searchKeys={["label"]}
        showFields={["label"]}
        fieldsSeperator={["-"]}
        disable={false}
        placeholder={"Search for"}
        allowMultipleSelections={true}
        allowAddingItems={true}
        validMinimum={0}
        validMaximum={5}
      />
      Parent component is rendered.
    </div>
  );
};


