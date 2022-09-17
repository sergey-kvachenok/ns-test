// libraries
import { useEffect, useState } from 'react';
import { CircularProgress, Box, Alert } from '@mui/material';
// constants
import { ServerType } from '../../types/login.types';
// styles
import { createServers } from '../../api/server';
import ServerList from '../../components/ServerList';

const ServerListPage = () => {
  const [data, setData] = useState<ServerType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const api = createServers();

    const getData = async () => {
      try {
        setIsLoading(true);
        const result = await api.getServers();
        setData(result);
      } catch (e: any) {
        setError(e?.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ height: '100vh', display: 'flex' }}>
        <CircularProgress size={50} sx={{ margin: 'auto' }} />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return <ServerList data={data} setData={setData} />;
};

export default ServerListPage;
