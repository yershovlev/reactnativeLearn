import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import useLocation from "../hook/useLocation";
import listingsApi from "../api/listings";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
  FormImagePicker,
} from "../component/forms";
import CategoryPickerItemComponent from "../component/CategoryPickerItemComponent";
import Screen from "../component/Screen";
import { useSelector, useDispatch } from "react-redux";
import { addListing } from "../store/actions/listingActions";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1).label("Images"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "red",
    icon: "email",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "green",
    icon: "email",
  },
  {
    label: "Camera",
    value: 3,
    backgroundColor: "blue",
    icon: "email",
  },
  {
    label: "Furniture 2",
    value: 4,
    backgroundColor: "green",
    icon: "email",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "blue",
    icon: "email",
  },
  {
    label: "Camera",
    value: 6,
    backgroundColor: "red",
    icon: "email",
  },
];

function ListingEditScreen() {
  const location = useLocation();

  const dispatch = useDispatch();
  const fetchMovies = (listing) => dispatch(addListing(listing));

  const handleSubmit = async (values) => {
    dispatch(addListing({ ...values, location }));
    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          width={"50%"}
          placeholder="Category"
          PickerItemComponent={CategoryPickerItemComponent}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
