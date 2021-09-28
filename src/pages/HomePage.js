import React from "react";

import { Text, PopularMoviesSection, LatestMoviesSection } from "../components";
import { DefaultLayout } from "../layouts";

export default function HomePage() {
  return (
    <DefaultLayout title="Home">
      <Text variant="h2">What's popular</Text>
      <PopularMoviesSection />
      <Text variant="h2">What's new</Text>
      <LatestMoviesSection />
    </DefaultLayout>
  );
}
