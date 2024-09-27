import axios from "axios";

const ACTIONS_URL = "https://fakestoreapi.com";

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${ACTIONS_URL}/products/${id}`);

    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await axios.put(
      `${ACTIONS_URL}/products/${id}`,
      updatedProduct,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
