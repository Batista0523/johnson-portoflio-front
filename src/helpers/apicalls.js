const URL = import.meta.env.VITE_LOCAL;

const getAllItems = () => {
  return fetch(URL)
    .then((res) => res, json())
    .then((json) => json.formData.payload)
    .catch((err) => console.error(err));
};

const getItem = (id) => {
  return fetch(`${URL}/${id}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const addItem = (data) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  };
  return fetch(URL, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const updateItem = (id, data) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`${URL}/${id}`, options);
};

const deleteItem = (id) => {
  const options = {
    method: "delete",
  };

  return fetch(`${URL}/${id}, options`)
    .then((res) => res.json())
    .then((json) => {
      return json.payload.data.id ? true : false;
    })
    .catch((err) => console.error(err));
};

export { getAllItems, getItem, deleteItem, updateItem, addItem };
