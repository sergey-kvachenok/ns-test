// libraries
import { FC, useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, TableSortLabel } from '@mui/material';
// components
import MainLayout from '../../components/layout/MainLayout';
// constants
import { ORDER } from '../../constants';
import { OrderType, ServerType } from '../../types/login.types';
// helpers
import { sortByDistanceHelper, sortByNameHelper } from './helpers';
// styles
import { tableContainerStyles, tableLabelStyles, tableRowStyles } from './ServerList.styles';

type ServerListPropsType = {
  data: ServerType[];
  setData: (data: ServerType[]) => void;
};

const ServerList: FC<ServerListPropsType> = ({ data, setData }) => {
  const [distanceOrder, setDistanceOrder] = useState<OrderType>(ORDER.asc as OrderType);
  const [nameOrder, setNameOrder] = useState<OrderType>(ORDER.asc as OrderType);

  const sortByDistance = () => {
    const newOrder = (distanceOrder === ORDER.asc ? ORDER.desc : ORDER.asc) as OrderType;
    setDistanceOrder(newOrder);
    const sorted = sortByDistanceHelper(data, nameOrder, newOrder);
    setData(sorted);
  };

  const sortByName = () => {
    const newOrder = (nameOrder === ORDER.asc ? ORDER.desc : ORDER.asc) as OrderType;
    setNameOrder(newOrder);

    const sorted = sortByNameHelper(data, distanceOrder, newOrder);
    setData(sorted);
  };

  return (
    <MainLayout title="Servers">
      <TableContainer component={Paper} sx={tableContainerStyles}>
        <Table aria-label="servers table">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  direction={nameOrder}
                  onClick={sortByName}
                  sx={tableLabelStyles}
                  data-testid="server-column-label"
                >
                  Server
                </TableSortLabel>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  data-testid="distance-column-label"
                  direction={distanceOrder}
                  onClick={sortByDistance}
                  sx={tableLabelStyles}
                >
                  Distance
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(({ name, distance }) => (
              <TableRow key={`${name}-${distance}`} sx={tableRowStyles}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell data-testid="distance">{distance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainLayout>
  );
};

export default ServerList;
