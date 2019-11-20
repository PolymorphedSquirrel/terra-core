import React from 'react';
import Table from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const createCell = cell => ({ key: cell.key, children: [cell.title] });

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createRow = rowData => (
  {
    key: rowData.key,
    cells: createCellsForRow(rowData.cells),
  }
);

const createRows = data => data.map(childItem => createRow(childItem));

const PercentageWidthTable = () => (
  <Table
    paddingStyle="standard"
    columnWidths={[
      { percentage: 20 },
      { percentage: 40 },
      { percentage: 10 },
      { percentage: 30 },
    ]}
    headerData={{
      cells: [
        { key: 'cell-0', id: `unique-cell-0`, children: ['20%'] },
        { key: 'cell-1', id: `unique-cell-1`, children: ['40%'] },
        { key: 'cell-2', id: `unique-cell-2`, children: ['10%'] },
        { key: 'cell-3', id: `unique-cell-3`, children: ['30%'] },
      ],
    }}
    sectionData={[{
      rows: createRows(mockData),
    }]}
  />
);

export default PercentageWidthTable;
