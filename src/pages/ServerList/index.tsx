// libraries
import { useEffect, useState } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableSortLabel,
  CircularProgress,
  Box,
} from '@mui/material';
// components
import MainLayout from '../../components/layout/MainLayout';
// constants
import { ORDER } from '../../constants';
import { OrderType, ServerType } from '../../types/login.types';
// api
import { useGetServersQuery } from '../../store/queries/servers';
// helpers
import { sortByDistanceHelper, sortByNameHelper } from './helpers';
// styles
import { tableContainerStyles, tableLabelStyles, tableRowStyles } from './ServerList.styles';

const ServerList = () => {
  const { data = [], isLoading } = useGetServersQuery();

  const [sortedData, setSortedData] = useState<ServerType[]>([]);
  const [distanceOrder, setDistanceOrder] = useState<OrderType>(ORDER.asc as OrderType);
  const [nameOrder, setNameOrder] = useState<OrderType>(ORDER.asc as OrderType);

  useEffect(() => {
    setSortedData(data);
  }, [isLoading]);

  const sortByDistance = () => {
    const newOrder = (distanceOrder === ORDER.asc ? ORDER.desc : ORDER.asc) as OrderType;
    setDistanceOrder(newOrder);

    const sorted = sortByDistanceHelper(data, nameOrder, newOrder);
    setSortedData(sorted);
  };

  const sortByName = () => {
    const newOrder = (nameOrder === ORDER.asc ? ORDER.desc : ORDER.asc) as OrderType;
    setNameOrder(newOrder);

    const sorted = sortByNameHelper(data, distanceOrder, newOrder);
    setSortedData(sorted);
  };

  if (isLoading) {
    return (
      <Box sx={{ height: '100vh', display: 'flex' }}>
        <CircularProgress size={50} sx={{ margin: 'auto' }} />
      </Box>
    );
  }

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
            {sortedData.map(({ name, distance }) => (
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
