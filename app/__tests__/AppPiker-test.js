import React from "react";
import renderer from "react-test-renderer";
import AppPicker from "../component/AppPicker";

test("renders correctly", () => {
  const tree = renderer.create(<AppPicker />).toJSON();
  expect(tree).toMatchSnapshot();
});
