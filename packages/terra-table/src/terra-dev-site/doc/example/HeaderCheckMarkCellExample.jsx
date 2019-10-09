import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { HeaderRow, HeaderCheckMarkCell } from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const HeaderCheckMarkCellExample = () => (
  <Table
    headerRow={(
      <HeaderRow>
        <HeaderCheckMarkCell />
        <HeaderCheckMarkCell isSelectable alignmentPadding="2" />
        <HeaderCheckMarkCell isSelectable />
        <HeaderCheckMarkCell isSelectable isSelected />
        <HeaderCheckMarkCell isSelectable isSelected isIntermediate />
        <HeaderCheckMarkCell isPadded />
      </HeaderRow>
    )}
  />
);

export default HeaderCheckMarkCellExample;