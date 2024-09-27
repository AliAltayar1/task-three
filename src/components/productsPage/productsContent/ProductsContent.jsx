import { useEffect, useState, useContext } from "react";
import styles from "./ProductsContent.module.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { deleteProduct, updateProduct } from "../../../actionsService";
// import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import PopupMsg from "../../popupMsg/popupMsg";
import ConfirmationPopup from "../../confirmationPopup/confirmationPopup";
import { CartContext } from "../../../CartContext";

const ProductsContent = () => {
  const { t } = useTranslation();
  const { setCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [showDelMsg, setShowDelMsg] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false); // Changed to false
  const [showEditFormMsg, setShowEditFormMsg] = useState(false);
  const [productId, setProductId] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isConfirmDel, setIsConfirmDel] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const [updatedProduct, setUpdatedProduct] = useState({
    image: "",
    title: "",
    price: "",
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (isConfirmDel) deleteProductWithMsg(productId);
  }, [isConfirmDel]);

  const deleteProductWithMsg = async (id) => {
    try {
      const response = await deleteProduct(id);
      if (response.status === 200) {
        setShowDelMsg(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editProduct = async (id) => {
    try {
      const response = await updateProduct(id, updatedProduct);
      if (response.status === 200) {
        setIsSuccess(true);
        setShowEditFormMsg(true);
      } else {
        setIsSuccess(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteProduct = (id) => {
    setProductId(id);
    setShowConfirmDelete(true);
  };

  return (
    <>
      <div className={styles.productContentContanier}>
        <h1>{t("products-head")}</h1>
        <div className={`${styles.productsWrapper} wrapper`}>
          {products.length === 0 ? (
            <p className={styles.loading}>Loading products...</p>
          ) : (
            products.map((item) => (
              <div className={styles.card} key={item.id}>
                <div className={styles.imgContanier}>
                  <img src={`${item.image}`} loading="lazy" alt="plant 4" />
                  <a href="/">{t("seeMore")}</a>
                </div>
                <p className={styles.titleItem}>{item.title}</p>
                <div className={styles.price}>{item.price}$</div>

                <div className={styles.actions}>
                  <span
                    className={styles.del}
                    onClick={() => handleDeleteProduct(item.id)}
                  >
                    Delete
                  </span>

                  <span
                    onClick={() =>
                      setCart((prevCart) => [
                        ...prevCart,
                        {
                          image: item.image,
                          title: item.title,
                          price: item.price,
                        },
                      ])
                    }
                    className={styles.add}
                  >
                    Add to cart
                  </span>

                  <span
                    className={styles.edit}
                    onClick={() => {
                      setProductId(item.id);
                      setShowEditForm(true);
                      setUpdatedProduct({
                        image: item.image,
                        title: item.title,
                        price: item.price,
                      }); // Populate the form with current values
                    }}
                  >
                    Edit
                  </span>
                </div>
              </div>
            ))
          )}

          <PopupMsg
            Msg={"The product was deleted successfully."}
            showMsg={showDelMsg}
            setShowMsg={setShowDelMsg}
          />

          <div
            className={styles.editForm}
            style={{ display: showEditForm ? "block" : "none" }}
          >
            <h2>Update product details</h2>
            <div className={styles.editInputs}>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    image: e.target.value,
                  })
                }
              />

              <input
                type="text"
                name="title"
                placeholder="Title"
                value={updatedProduct.title}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    title: e.target.value,
                  })
                }
              />

              <input
                type="text"
                name="price"
                placeholder="Price"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.editBtn}>
              <button
                onClick={() => {
                  editProduct(productId);
                  setUpdatedProduct({
                    image: "",
                    title: "",
                    price: "",
                  });

                  setProductId(null);
                  setShowEditForm(false);
                }}
              >
                save
              </button>
              <button
                onClick={() => {
                  setShowEditForm(false);
                }}
              >
                cancel
              </button>
            </div>
          </div>

          {isSuccess && (
            <PopupMsg
              Msg={"The product was updated successfully."}
              showMsg={showEditFormMsg}
              setShowMsg={setShowEditFormMsg}
            />
          )}

          {showConfirmDelete && (
            <ConfirmationPopup
              setIsConfirmDel={setIsConfirmDel}
              setShowConfirmDelete={setShowConfirmDelete}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsContent;
