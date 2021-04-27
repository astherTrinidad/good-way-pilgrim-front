import styled from 'styled-components';
import colors from '../../../assets/colors';
import bgheaderUsersProfile from '../../../assets/images/bg-header-user-perfil.jpg';
import bgHeaderShowProfileMobile from '../../../assets/images/bgHeaderShowProfileMobile-min.jpg';
import profilePhoto from '../../../assets/images/photo-profile-generic.png';

export const Header = styled.div`
  background: url(${bgheaderUsersProfile});
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  justify-content: center;
  margin-top: -120px;

  @media screen and (max-width: 960px) {
    background: url(${bgHeaderShowProfileMobile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 60px;
    height: 300px;
  }
`;

export const PhotoProfile = styled.div`
  height: 150px;
  width: 150px;
  background: url(${profilePhoto});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: -75px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
`;

export const ContainerName = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NameProfile = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${colors.darkGrey};
  padding: 1.5rem 0.5rem;
`;

export const SurnameProfile = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${colors.darkGrey};
  padding: 1.5rem 0.5rem;
`;
