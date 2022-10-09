export const getApi = async (data) => {
  const res = await fetch(process.env.POST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};
