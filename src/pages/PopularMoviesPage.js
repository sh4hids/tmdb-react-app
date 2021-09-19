import React from "react";

import { Text, PopularMoviesSection } from "../components";
import { DefaultLayout } from "../layouts";

export default function PopularMoviesPage() {
  return (
    <DefaultLayout>
      <Text variant="h2">Popular movies</Text>
      <PopularMoviesSection />
    </DefaultLayout>
  );
}
