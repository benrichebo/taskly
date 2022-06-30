/**
 * 1. Read data from the backend that comes through this http request function
 * 2. Functions: resolve()
 * 3. Parameters: url, data
 **/

export const GET = async (url) => {
  const sessionData = sessionStorage.getItem("user");
  const token = JSON.parse(sessionData);
  const authToken = token?.authToken;

  const config = {
    method: "GET",
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${sessionData && authToken}`,
    },
    timeout: 5000,
  };

  //2. return response and error
  try {
    const resp = await fetch(url, config);
    console.log("resp", await resp.json());
    return resp.json();
  } catch (error) {
    return error.message;
  }
};
