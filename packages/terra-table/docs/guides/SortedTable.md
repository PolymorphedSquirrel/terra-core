# Terra Table - Implementing a Sorted Table

As table cell content is dynamic and the types of sorting can vary, consumers need to handle the state of their own sorting. The following guide lays out an example of managing sorting and state within a table implementation. There are further optimizations that can be made given an individual implementation of a data set, but this should serve as a framework for that.

## State Management
The state of the sort column needs to be managed for the table in a HOC. In this example we are going to be an object containing a unique key for the column and current sort direction.

 First defaulting our state to null with the useState hook.
```diff
+ const [sortColumn, setSortColumn] = useState(null);
```
Next creating an event handler callback method to pass to the table row's `onSelect` prop. The `onSelect` will return the metaData prop passed it each header cell.
```diff
+  const handleSortClick = (event, metaData) => {

+  }
```
As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.
```diff
  const handleSortClick = (event, metaData) => {
+   event.preventDefault();
  }
```
In this example only one column will be sorted upon, so we'll need to keep track of which column was selected and the current state of sorting for the column. 3 states of column state will be handled, unsorted, sort ascending, and sort descending. A key was sent with the metaData, but an index could have also been used in an implementation where there is no possibility of the columns being rearranged.
```diff
  const handleSortClick = (event, metaData) => {
    event.preventDefault();
+   if (!sortColumn || sortColumn.key !== metaData.key) {
+     setSortColumn({ key: metaData.key, direction: 'asc' });
+   } else if (sortColumn.direction === 'asc') {
+     setSortColumn({ key: metaData.key, direction: 'desc' });
+   } else {
+     setSortColumn(null);
+   }
  };
```
Settting state will trigger another render. So in the render method we need generate our head cells with the updated sort props. Each header cell while need a unique key.
```diff
+  const createHeaderCell = (key, title) => {
+    return (
+      <HeaderCell
+        key={rowData.key}
+        isPadded
+      >
+        {title}
+      </HeaderCell>
+    );
+  }
```
Next we need to set up our metaData object with our key value, and attach the `onSelect` to our handler.
```diff
  const createHeaderCell = (key, title) => {
    return (
      <HeaderCell
        key={key}
        isPadded
+       metaData={{ key }}
+       onSelect={handleSortClick}
      >
        {title}
      </HeaderCell>
    );
  };
```
For the ability to toggle sorting we set `isSelectable` for all header cells.
```diff
  const createHeaderCell = (key, title) => {
    return (
      <HeaderCell
        key={key}
        isPadded
+       isSelectable
        metaData={{ key }}
        onSelect={handleSortClick}
      >
        {title}
      </HeaderCell>
    );
  };
```
Finally we need to check if the header cell matches the sortColumn.key in state. In the case the header cell isn't sorted no sort indicator value should be passed.
```diff
  const createHeaderCell = (key, title) => {
+    let sort;
+    if (this.state.sortColumn && this.state.sortColumn.key === key) {
+      sort = this.state.sortColumn.direction;
+    }
+  
    return (
      <HeaderCell
        key={key}
        isPadded
        isSelectable
+       sort={sort}
        metaData={{ key }}
        onSelect={handleSortClick}
      >
         {title}
      </HeaderCell>
    );
  };
```
In this example a simple object sort is parses the data, followed by a check for reversal.
```diff
+ const sortData = (data, sortColumn) => {
+   if (!sortColumn) {
+     return data;
+   }
+
+   const dataCopy = Object.assign([], data);
+   dataCopy.sort((a, b) => {
+    const x = a.cells[columns.indexOf(sortColumn.key)].title.toLowerCase();
+    const y = b.cells[columns.indexOf(sortColumn.key)].title.toLowerCase();
+    if (x < y) { return -1; }
+    if (x > y) { return 1; }
+      return 0;
+    });

+   return sortColumn.direction === 'asc' ? dataCopy : dataCopy.reverse();
+ };
```
Next we fill in the static methods for the example table rows.
```diff
+ const columns = ['column-0', 'column-1', 'column-2'];

+ const createCell = cell => (
+   <Cell isPadded key={cell.key}>
+     {cell.title}
+   </Cell>
+ );

+ const createCellsForRow = cells => cells.map(cell => createCell(cell));

+ const createRow = rowData => <Row key={rowData.key}>{createCellsForRow(rowData.cells)}</Row>;
```
Then we can implement a method to loop through our data and create the table rows with our methods and call it from our render method. 
```diff
+ const createRows = (data) => {
+   const sortedData = sortData(data, sortColumn);
+   return sortedData.map(childItem => createRow(childItem));
+ };

  return (
+   <Table
+     paddingStyle="standard"
+     headerRow={(
+       <HeaderRow>
+         {this.createHeaderCell('column-0', 'Breakfast')}
+         {this.createHeaderCell('column-1', 'Animals')}
+         {this.createHeaderCell('column-2', 'Flatware')}
+       </HeaderRow>
+     )}
+   >
+     {this.createRows(mockData)}
+   </Table>
  );
```
Using these steps we get the following example: