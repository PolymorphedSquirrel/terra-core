import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const CheckMarkCellExample = () => (
  <React.Fragment>
    <Table
      rowStyle="toggle"
      checkStyle="none"
      headerData={{
        cells: [{ id: 'test1', key: 'test1', children: ['test'] }],
      }}
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              checkAlignment: 2,
              cells: [{
                key: 'key-0',
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
    />
    <Table
      rowStyle="disclose"
      checkStyle="toggle"
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              checkAlignment: 2,
              cells: [{
                key: 'key-0',
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
    />
    <Table
      rowStyle="disclose"
      checkStyle="toggle"
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              cells: [{
                key: 'key-0',
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
    />
    <Table
      rowStyle="toggle"
      checkStyle="readOnly"
      headerData={{
        cells: [{ id: 'test2', key: 'test1', children: ['test'] }],
      }}
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              cells: [{
                key: 'key-0',
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
    />
    <Table
      rowStyle="disclose"
      checkStyle="toggle"
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              isToggled: true,
              cells: [{
                key: 'key-0',
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
    />
    <Table
      rowStyle="toggle"
      checkStyle="readOnly"
      headerData={{
        cells: [{ id: 'test3', key: 'test1', children: ['test'] }],
      }}
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              isToggled: true,
              cells: [{
                key: 'key-0',
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
    />
    <Table
      rowStyle="disclose"
      checkStyle="toggle"
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              isDisabled: true,
              isToggled: true,
              cells: [{
                key: 'key-0',
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
    />
    <Table
      rowStyle="toggle"
      checkStyle="readOnly"
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              isDisabled: true,
              isToggled: true,
              cells: [{
                key: 'key-0',
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
    />
  </React.Fragment>
);

export default CheckMarkCellExample;