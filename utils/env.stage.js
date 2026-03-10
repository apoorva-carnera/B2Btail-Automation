export const B2BEnvironmentName = process.env.ENV || "stg";
export const environment = B2BEnvironmentName.toLowerCase();
export const environmentVars = {
  STG: {
    LANDING_PAGE_URL: "https://app-dev.b2btail.com/login",
    USER_NAME: "apoorva@getcarnera.com",
    PASSWORD: "Admin@123",
  },
  PRD: {},
};
/* export const getEnvironmentVars = () => {
  return environmentVars[B2BEnvironmentName.toUpperCase()];
};*/
export const getEnvironmentVar = (key) => {
  return environmentVars[B2BEnvironmentName.toUpperCase()][key];
};