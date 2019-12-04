import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableExample = () => (
  <Table
    headerData={{
      cells: [
        {
          id: 'header-name',
          key: 'name',
          children: ['Name'],
        },
        {
          id: 'header-address',
          key: 'address',
          children: ['Address'],
        },
        {
          id: 'header-phone_number',
          key: 'phone_number',
          children: ['Phone Number'],
        },
      ],
    }}
    sectionData={[
      {
        rows: [
          {
            key: 'row-0',
            cells: [
              {
                key: 'cell-0',
                children: [
                  'John Smith',
                ],
              },
              {
                key: 'cell-1',
                children: [
                  '123 Adams Drive',
                ],
              },
              {
                key: 'cell-2',
                children: [
                  '111-222-3333',
                ],
              },
            ],
          },
          {
            key: 'row-1',
            cells: [
              {
                key: 'cell-0',
                children: [
                  'Jane Smith',
                ],
              },
              {
                key: 'cell-1',
                children: [
                  '321 Drive Street',
                ],
              },
              {
                key: 'cell-2',
                children: [
                  '111-222-3333',
                ],
              },
            ],
          },
          {
            key: 'row-2',
            cells: [
              {
                key: 'cell-0',
                children: [
                  'Dave Smith',
                ],
              },
              {
                key: 'cell-1',
                children: [
                  '213 Raymond Road',
                ],
              },
              {
                key: 'cell-2',
                children: [
                  '111-222-3333',
                ],
              },
            ],
          },
        ],
      }
    ]}
  />
);

export default TableExample;