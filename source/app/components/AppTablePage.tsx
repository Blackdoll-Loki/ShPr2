import { Badge, Button, Card, Checkbox, IndexTable, Link, useBreakpoints, useIndexResourceState, Text, Icon } from '@shopify/polaris';
import React, { FC, Fragment, useCallback, useMemo, useState } from 'react';
import type { NonEmptyArray } from '@shopify/polaris/build/ts/src/types';
import { IndexTableHeading } from '@shopify/polaris/build/ts/src/components/IndexTable/IndexTable';

import { ChevronLeftIcon, ChevronRightIcon } from '@shopify/polaris-icons';

interface Customer {
  fullName: String;
  orders: Number;
  returns: Number
  returnPercentage: Number;
  costOfReturns: String;
  email: String;
}

export default function AppTablePage(): any {
  const headings: NonEmptyArray<IndexTableHeading> = useMemo(() => ([
    { title: 'Name' },
    { title: 'Orders' },
    { title: 'Returns' },
    { title: 'Return percentage' },
    { title: 'Cost of returns' },
    { title: 'email' },
  ]), []);

  const fakeDataArr = [
    {
      id: '1',
      fullName: 'Ayumu Hirano',
      orders: 7,
      returns: 3,
      returnPercentage: 43,
      costOfReturns: '$2,564,70',
      email: 'ayumu.hirano@example.com'
    },
    {
      id: '2',
      fullName: 'Russel Winfield',
      orders: 4,
      returns: 2,
      returnPercentage: 50,
      costOfReturns: '$2,329,85',
      email: 'russel.winfield@example.com'
    },
    {
      id: '3',
      fullName: 'test test',
      orders: 1,
      returns: 1,
      returnPercentage: 100,
      costOfReturns: '$629,95',
      email: 'test@test.com'
    },
    {
      id: '4',
      fullName: 'Adam Liu',
      orders: 2,
      returns: 1,
      returnPercentage: 50,
      costOfReturns: '$700,00',
      email: 'christopher69@gmail.com'
    },
    {
      id: '5',
      fullName: 'Adriana Chen',
      orders: 2,
      returns: 1,
      returnPercentage: 50,
      costOfReturns: '$729,95',
      email: 'careylori@parks.com'
    },
    {
      id: '6',
      fullName: 'Test1 Test1',
      orders: 4,
      returns: 1,
      returnPercentage: 25,
      costOfReturns: '$1,515,90',
      email: 'test1@test.com'
    },
    {
      id: '7',
      fullName: 'Aaron Martinez',
      orders: 2,
      returns: 0,
      returnPercentage: 'N/A',
      costOfReturns: 'N/A',
      email: 'bonnie59dsdsadasdasdasd@gmail.com'
    },
    {
      id: '8',
      fullName: 'Aaron Morris',
      orders: 1,
      returns: 0,
      returnPercentage: 'N/A',
      costOfReturns: 'N/A',
      email: 'kwarren@yahoo.com'
    },
    {
      id: '9',
      fullName: 'test test',
      orders: 3,
      returns: 0,
      returnPercentage: 'N/A',
      costOfReturns: 'N/A',
      email: 'slava.adm.devit@gmail.com'
    },
    {
      id: '10',
      fullName: 'test test',
      orders: 1,
      returns: 0,
      returnPercentage: 'N/A',
      costOfReturns: 'N/A',
      email: 'badaev.dev@ukr.net'
    },
    {
      id: '11',
      fullName: 'Jacqueline Brown',
      orders: 1,
      returns: 0,
      returnPercentage: 'N/A',
      costOfReturns: 'N/A',
      email: 'sandra00@hotmail.com'
    },
  ]

  const resourceName = {
    singular: 'customer',
    plural: 'customers',
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const { selectedResources, allResourcesSelected, handleSelectionChange } = useIndexResourceState(fakeDataArr);


  const rowMarkup = fakeDataArr.map(
    (
      { id, fullName, orders, returns, returnPercentage, costOfReturns, email },
      index,
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>{fullName}</IndexTable.Cell>
        <IndexTable.Cell>{orders}</IndexTable.Cell>
        <IndexTable.Cell>{returns}</IndexTable.Cell>
        <IndexTable.Cell>
          <Badge>{String(returnPercentage)}</Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>{costOfReturns}</IndexTable.Cell>
        <IndexTable.Cell>{email}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <Fragment>
      <IndexTable
        condensed={useBreakpoints().smDown}
        resourceName={resourceName}
        selectable={true}
        headings={headings}
        itemCount={fakeDataArr.length}
        selectedItemsCount={
          allResourcesSelected ? 'All' : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}>
        {rowMarkup}
      </IndexTable>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3px' }}>
          <Button
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            icon={<Icon source={ChevronLeftIcon} />}></Button>
          <Button
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            icon={<Icon source={ChevronRightIcon} />}
          ></Button>
        </div>
        <Text as="span">Page {currentPage} of {totalPages}</Text>
      </div>
    </Fragment>
  );
};