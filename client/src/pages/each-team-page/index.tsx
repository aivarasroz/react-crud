import React, { useRef, useState } from "react";
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import ApiService from 'services/api-service';
import routes from 'navigation/routes';
import { Box, styled } from '@mui/material';
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Img from 'components/ui/img';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { SwiperStyle } from "./styles";

const StyledSwiper = styled(Swiper)({
  width: '60%',
  height: '60%',
  margin: 'auto'
})

const EachTeamPage = () => {
  const { id } = useParams();
  const [team, setTeam] = React.useState<undefined | TeamModel>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedTeam = await ApiService.fetchTeam(id);
        setTeam(fetchedTeam);
      })();
   
    }

  }, []);

  if (id === undefined) return <Navigate to={routes.HomePage}/>;
  if (team === undefined) return null


  return (
  <Box component="pre">
    {JSON.stringify(team, null, 4)}
      <StyledSwiper
      sx={SwiperStyle}
      navigation={true}
      modules={[Navigation]}
      >
        {team.images.map(img => (
          <SwiperSlide>
            <Img src={img} sx={{ width: 1, height: '100%'}} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
  </Box>
  )
}

export default EachTeamPage