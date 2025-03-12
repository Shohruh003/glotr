import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../hooks/useStores';
import { CircularProgress, Container, Typography, Paper, Box } from '@mui/material';
import styles from './ProfileComponent/styles';
import useLocale from '../../hooks/useLocale';
import Locale from './ProfileComponent/locale';

const Profile: FC = observer(() => {
  const { userStore } = useStores();
  const locale = useLocale(Locale);

  useEffect(() => {
    userStore.fetchUserData();
  }, [userStore]);

  if (userStore.loading) {
    return (
      <Container
        sx={styles.container}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          {locale.title}
        </Typography>
        <Typography variant="body1">
          {locale.description}
        </Typography>
        <Box sx={{ marginBottom: 2, marginTop: 2 }}>
          <Typography variant="h6" color="textSecondary">
            {locale.name} <strong>{userStore.user.name}</strong>
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="textSecondary">
            {locale.age} <strong>{userStore.user.age}</strong>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
});

export default Profile;