export const getApi = async (data) => {
  const res = await fetch(process.env.REACT_APP_POST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
    referrerPolicy: "no-referrer-when-downgrade",
  });
};
