import React from "react";
import renderer from "react-test-renderer";
import MainButton from "../component/MainButton";

test("renders correctly", () => {
  const tree = renderer.create(<MainButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
