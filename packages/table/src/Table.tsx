import React, {useRef, useEffect, useState} from 'react';
import { ColorNames } from '@heathmont/moon-themes';
import {
  useTable,
  useResizeColumns,
  useExpanded,
  useBlockLayout,
  useFlexLayout,
  useSortBy,
  TableInstance,
  PluginHook,
  Column,
  Row,
  HeaderGroup,
  UseResizeColumnsColumnProps,
  UseSortByColumnProps,
} from 'react-table';
import { useSticky } from 'react-table-sticky';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderTR from './components/HeaderTR';
import HiddenTR from './components/HiddenTR';
import Minimap from './components/Minimap';
import OuterWrapper from './components/OuterWrapper';
import TableWrapper from './components/TableWrapper';
import TH from './components/TH';
import useRowSpan, { RowSpanHeader } from './hooks/useRowSpan';
import useScrollState from './hooks/useScrollState';
import renderRows from './utils/renderRows';
import renderSpanRows from './utils/renderSpanRows';

export type TableLayout = 'block';

export type TableVariant = 'calendar';

export type RowSubComponentProps<D extends object = {}> = {
  row: Row<D>;
  backgroundColor: ColorNames;
};

export type TableProps<D extends object = {}> = {
  columns: ReadonlyArray<Column<D>>;
  data: readonly D[];
  defaultColumn?: Partial<Column<D>>;
  width?: string | number;
  height?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  variant?: TableVariant;
  layout?: TableLayout;
  withFooter?: boolean;
  withMinimap?: boolean;
  expandedByDefault?: boolean;
  defaultRowBackgroundColor?: ColorNames;
  evenRowBackgroundColor?: ColorNames;
  headerBackgroundColor?: ColorNames;
  isSticky?: boolean;
  isSorting?: boolean;
  selectable?: boolean;
  useCheckbox?: boolean;
  renderRowSubComponent?: (props: RowSubComponentProps) => JSX.Element;
  getOnRowClickHandler?: (row: Row<D>) => (row: Row<D>) => void | (() => void);
  getOnRowSelect?: () => (rows: Row<D>[]) => void | (() => void);
};

const Table: React.FC<TableProps> = ({
 columns,
 data,
 defaultColumn,
 width,
 height,
 maxWidth,
 maxHeight,
 variant,
 layout,
 withFooter = false,
 withMinimap = false,
 expandedByDefault,
 defaultRowBackgroundColor = 'gohan.100',
 evenRowBackgroundColor = 'gohan.80',
 headerBackgroundColor = 'goku.100',
 isSticky = true,
 isSorting = false,
 selectable = false,
 useCheckbox = false,
 renderRowSubComponent,
 getOnRowClickHandler = () => undefined,
 getOnRowSelect = () => undefined
}) => {
  const plugins = [
    layout === 'block' ? useBlockLayout : useFlexLayout,
    variant === 'calendar' ? useRowSpan : undefined,
    useResizeColumns,
    isSticky ? useSticky : undefined,
    isSorting ? useSortBy : undefined,
    useExpanded,
  ].filter((plugin) => !!plugin) as PluginHook<{}>[];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    visibleColumns,
    toggleAllRowsExpanded,
    rowSpanHeaders,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    ...plugins
  ) as TableInstance<object> & {
    toggleAllRowsExpanded: (isExpanded?: boolean) => void;
    rowSpanHeaders: RowSpanHeader[];
  };
  const lastHeaderGroup = headerGroups[headerGroups.length - 1];
  const tableRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const onRowSelectHandler = getOnRowSelect
    ? getOnRowSelect()
    : () => undefined;

  const { scrollState, handleScroll } = useScrollState(tableRef);
  const [ selectedRows, setSelectedRows ] = useState<Row<{}>[]>([]);

  useEffect(() => {
    if (expandedByDefault === undefined || !data || !data.length) return;
    toggleAllRowsExpanded(expandedByDefault);
  }, [expandedByDefault, data, toggleAllRowsExpanded]);

  useEffect(() => {
    if (onRowSelectHandler) onRowSelectHandler(selectedRows);
  }, [selectedRows]);

  useEffect(() => {
    setSelectedRows(rows?.length
      ? rows.filter((row: Row<{ isSelected?: boolean }>) => {
        return row.original?.isSelected;
      }) : []);
  }, []);

  const getHeaderRowWhenSorting = (column: HeaderGroup<object>) => {
    const sortingColumn = column as unknown as UseSortByColumnProps<object>;
    const resizingColumn =
      column as unknown as UseResizeColumnsColumnProps<object>;
    return (
      <TH
        {...column.getHeaderProps(sortingColumn.getSortByToggleProps())}
        headerBackgroundColor={headerBackgroundColor}
      >
        {column.render('Header')}
        <div
          {...resizingColumn.getResizerProps()}
          className={`resizer ${resizingColumn.isResizing ? 'isResizing' : ''}`}
        />
      </TH>
    );
  };

  const getHeaderRowWhenResizing = (column: HeaderGroup<object>) => {
    const resizingColumn =
      column as unknown as UseResizeColumnsColumnProps<object>;
    return (
      <TH
        {...column.getHeaderProps()}
        headerBackgroundColor={headerBackgroundColor}
      >
        {column.render('Header')}
        <div
          {...resizingColumn.getResizerProps()}
          className={`resizer ${resizingColumn.isResizing ? 'isResizing' : ''}`}
        />
      </TH>
    );
  };

  const getFooterRowWhenResizing = (column: HeaderGroup<object>) => {
    const resizingColumn =
      column as unknown as UseResizeColumnsColumnProps<object>;
    return (
      <TH
        {...column.getHeaderProps()}
        headerBackgroundColor={headerBackgroundColor}
      >
        {column.render('Footer')}

        <div
          {...resizingColumn.getResizerProps()}
          className={`resizer ${resizingColumn.isResizing ? 'isResizing' : ''}`}
        />
      </TH>
    );
  };

  const renderTableComponent = () => (
    <TableWrapper
      {...getTableProps()}
      ref={tableRef}
      onScroll={handleScroll}
      className={isSticky ? 'sticky' : undefined}
      isScrolledToLeft={scrollState.scrolledToLeft}
      isScrolledToRight={scrollState.scrolledToRight}
      style={{
        width,
        height,
        maxWidth,
        maxHeight,
      }}
      variant={variant}
      defaultRowBackgroundColor={defaultRowBackgroundColor}
      evenRowBackgroundColor={evenRowBackgroundColor}
      headerBackgroundColor={headerBackgroundColor}
    >
      <Header selectable={useCheckbox} headerBackgroundColor={headerBackgroundColor}>
        {headerGroups.map((headerGroup: HeaderGroup<object>) => (
          <HeaderTR {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: HeaderGroup<object>) => {
              const element = isSorting
                ? getHeaderRowWhenSorting(column)
                : getHeaderRowWhenResizing(column);

              return element;
            })}
          </HeaderTR>
        ))}
        <HiddenTR lastHeaderGroup={lastHeaderGroup} />
      </Header>

      <Body {...getTableBodyProps()}>
        {variant === 'calendar'
          ? renderSpanRows({
            rows,
            prepareRow,
            getOnRowClickHandler,
            evenRowBackgroundColor,
            defaultRowBackgroundColor,
            rowSpanHeaders,
            selectable,
            useCheckbox
          })
          : renderRows({
            rows,
            prepareRow,
            getOnRowClickHandler,
            getOnRowSelectHandler: (row) => () => {
              let alreadySelectedRows = [...selectedRows];
              const alreadySelectedRow = alreadySelectedRows.filter((selectedRow) => row.id === selectedRow.id)[0];

              if (alreadySelectedRow) {
                alreadySelectedRows = alreadySelectedRows.filter((selectedRow) => row.id !== selectedRow.id)
              } else {
                alreadySelectedRows.push(row);
              }

              setSelectedRows(alreadySelectedRows);
            },
            evenRowBackgroundColor,
            defaultRowBackgroundColor,
            renderRowSubComponent,
            selectable,
            useCheckbox
          })
        }
      </Body>

      {withFooter && (
        <Footer ref={footerRef} selectable={useCheckbox} headerBackgroundColor={headerBackgroundColor}>
          {footerGroups.map((footerGroup: HeaderGroup<object>) => (
            <HeaderTR {...footerGroup.getHeaderGroupProps()}>
              {footerGroup.headers.map((column: HeaderGroup<object>) =>
                getFooterRowWhenResizing(column)
              )}
            </HeaderTR>
          ))}
        </Footer>
      )}
    </TableWrapper>
  );

  if (withMinimap) {
    return (
      <OuterWrapper>
        {renderTableComponent()}
        <Minimap
          numberOfColumns={visibleColumns.length}
          tableRef={tableRef}
          footerRef={footerRef}
        />
      </OuterWrapper>
    );
  } else {
    return renderTableComponent();
  }
};

export default Table;
