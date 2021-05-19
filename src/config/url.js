const url = {
  base: process.env.REACT_APP_BASE_URL,
  meProfile: '/pri/showProfile',
  meEditProfile: '/pri/editProfile',
  meDeleteProfile: '/pri/deleteProfile',
  meLogros: '/pri/MyAchievements',
  meDeleteProfile: '/pri/deleteProfile',
  register: '/pub/register',
  login: '/pub/login',
  logros: 'pri/AllAchievements',
  addLogros: '/pri/addAchievement',
  deleteAchievement: '/pri/deleteAchievement',
  deleteAchievements: '/pri/deleteAchievements',
  caminos: '/pri/allPaths',
  addActivePath: '/pri/addActivePath',
  activePath: '/pri/getActivePath',
  caminoActual: '/pri/getActivePath',
  archivePath: '/pri/archivePath',
  etapasRealizadas: '/pri/getEtapasRealizadas',
  csvDownload: '/pub/csv_download',
};

export default url;
