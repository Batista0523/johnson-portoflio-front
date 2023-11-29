const URL = import.meta.env.VITE_LOCAL;

const getAllItems = () => {
  return fetch(URL)
    .then((res) => res.json())
    .then((json) => {
      if (json.success && json.data && json.data.payload) {
        return json.data.payload;
      } else {
        console.error("Unexpected response format:", json);
        throw new Error("Unexpected response format");
      }
    })
    .catch((err) => console.error(err));
};

const getItem = (id) => {
  return fetch(`${URL}/${id}`)
    .then((res) => res.json())
    .then((json) => {
      if (json.id) {
        return json;
      } else {
        console.error("Unexpected response format:", json);
        throw new Error("Unexpected response format");
      }
    })
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
    .then((json) => {
      if (json.success && json.data) {
        return json.data;
      } else {
        console.error("Unexpected response format:", json);
        throw new Error("Unexpected response format");
      }
    })
    .catch((err) => console.error(err));
};

const updateItem = (id, data) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`${URL}/${id}`, options)
    .then((res) => res.json())
    .then((json) => {
      if (json.id) {
        return json;
      } else {
        console.error("Unexpected response format:", json);
        throw new Error("Unexpected response format");
      }
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

const deleteItem = (id) => {
  const options = {
    method: "DELETE",
  };

  return fetch(`${URL}/${id}`, options)
    .then((res) => res.json())
    .then((json) => {
      if (json.success && json.data && json.data.id) {
        return true;
      } else {
        console.error("Unexpected response format:", json);
        throw new Error("Unexpected response format");
      }
    })
    .catch((err) => console.error(err));
};

export { getAllItems, getItem, deleteItem, updateItem, addItem };
