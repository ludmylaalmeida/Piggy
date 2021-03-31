import { BaseLayout } from "./components/layouts";
import { LightTheme } from "./theme";
import React from "react";

export const wrapWithProvider = ({ element }) => {
  return <BaseLayout theme={LightTheme}>{element}</BaseLayout>;
};