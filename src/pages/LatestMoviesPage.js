import React from "react";

import { Text, LatestMoviesSection } from "../components";
import { DefaultLayout } from "../layouts";

export default function LatestMoviesPage() {
  return (
    <DefaultLayout title="Latest Movies">
      <Text variant="h2">Latest movies</Text>
      <LatestMoviesSection />
    </DefaultLayout>
  );
}
