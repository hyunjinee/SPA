const RAW_PATHNAMES = {
  HOME: '/',
  OVERVIEW: '/overview',
  STATIONS: '/stations',
  LINES: '/lines',
  SECTIONS: '/sections',
  LOGIN: '/login',
  SIGN_UP: '/sign-up',
  LOGOUT: '/logout',
};

const RAW_PATHNAMES_ENTRIES = Object.entries(RAW_PATHNAMES);
// const PATHNAME_ENTRIES = RAW_PATHNAMES_ENTRIES.map(([key, route]) => [key, `${}${route}`])

export const PATHNAMES = Object.freeze(
  Object.fromEntries(RAW_PATHNAMES_ENTRIES)
);

console.log(PATHNAMES);
