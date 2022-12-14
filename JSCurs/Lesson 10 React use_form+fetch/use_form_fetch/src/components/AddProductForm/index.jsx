import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import s from "./index.module.css";
import { Context } from "../../context";
import { addProduct } from "../../request/products";

export default function AddProductForm() {
  const { createNewProduct } = useContext(Context);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    addProduct(data, createNewProduct);
    reset();
  };

  const titleRegister = register("title", {
    required: 'The field "email" is requaired',
    message: "*Title requaired",
  });
  const descriptionRegister = register("description", {  required: 'The field "email" is requaired',
  message: "*description requaired",
});
  const priceRegister = register("price", {  required: 'The field "email" is requaired',
  message: "* price requaired",
});

  return (
    <form className={s.add_product_form} onSubmit={handleSubmit(submit)}>



      <input type="text" name="title" placeholder="Title" {...titleRegister} />
      <input
        type="text"
        name="description"
        placeholder="Description"
        {...descriptionRegister}
      />
      <input type="text" name="price" placeholder="Price" {...priceRegister} />
      <button>Add product</button>
      {errors.title && <p style={{color: 'red'}}>{errors.title?.message}</p>}
      {errors.description && <p style={{color: 'red'}}>{errors.description?.message}</p>}
      {errors.price && <p style={{color: 'red'}}>{errors.price?.message}</p>}
    </form>
  );
}
