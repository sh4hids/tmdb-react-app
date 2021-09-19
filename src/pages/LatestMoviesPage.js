import React from "react";

import { Text, LatestMoviesSection } from "../components";
import { DefaultLayout } from "../layouts";

export default function LatestMoviesPage() {
  return (
    <DefaultLayout>
      <Text variant="h2">Latest movies</Text>
      <LatestMoviesSection />
    </DefaultLayout>
  );
}
