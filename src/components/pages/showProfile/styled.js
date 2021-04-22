import styled from 'styled-components';
import bgHeaderShowProfile from '../../../assets/images/bg-header-show-profile-min.jpg';

export const Header = styled.div`
  background: url(${bgHeaderShowProfile});
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  justify-content: center;
  margin-top: -120px;
`;

export const PhotoProfile = styled.div`
  height: 150px;
  width: 150px;
  background-color: yellow;
  position: absolute;
  margin-top: -75px;
  margin-right: auto;
  margin-left: auto;
  display: block;
  border-radius: 50%;
`;
