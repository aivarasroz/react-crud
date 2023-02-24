import React from 'react';
import ApiService from 'services/api-service';

const useTeam = (id: string | undefined) => {
  const [team, setTeam] = React.useState<undefined | TeamModel>(undefined);
  const [loading, setLoading] = React.useState<boolean>(id !== undefined)

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedTeam = await ApiService.fetchTeam(id);
        setTeam(fetchedTeam);
        setLoading(false);
      })();
    }
  }, []);

  return [team, loading] as const;
};

export default useTeam;