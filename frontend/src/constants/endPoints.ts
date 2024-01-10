const baseUrl = process.env.REACT_APP_BACKEND_URL;
export const endPoints = {
  calculateExpression: baseUrl + "calculator",
  getAllExpressions: baseUrl + "calculator/get-all-calculations",
};
