import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import FixedNode from '../common/FixedNode';

const HeaderFooterExample = () => (
  <Table
    headerNode={<FixedNode title="Header" />}
    footerNode={<FixedNode title="Footer" />}
    paddingStyle="standard"
    headerData={{
      cells: [
        {
          children: ['Name'],
        },
        {
          children: ['Address'],
        },
        {
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

export default HeaderFooterExample;
