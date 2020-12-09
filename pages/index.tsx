import React from "react";
import { Body, H4, Landing } from "@dvargas92495/ui";
import Layout from "../components/Layout";
import LandingUndraw from "../components/svg/LandingUndraw.svg";
import Head from "next/head";

const HomePage = () => (
  <Layout>
    <Landing
      Logo={LandingUndraw}
      title={"Become A Roam Power User"}
      subtitle={
        "Install RoamJS plugins to your Roam DB to fully customize and empower your Roam Experience"
      }
      primaryHref={"docs"}
      secondaryHref={"queue"}
      breakHeader={"RoamJS adds the features you need natively to Roam"}
      breakCards={[
        {
          title: "New UI Components",
          description:
            "Overlay components to help navigate your Roam database, consistent with Roam's UI.",
          image: "images/landingUI.png",
        },
        {
          title: "Third-Party Integrations",
          description:
            "Integrate the data from the rest of the services you use directly into your second brain.",
          image: "images/landingThirdParty.png",
        },
        {
          title: "Automated Workflows",
          description:
            "Add new keyboard shortcuts and menu options to speed up your most common workflows.",
          image: "images/landingAutomated.png",
        },
      ]}
      statHeader={"The Most Expansive Roam Plugin Library Available"}
      statSubheader={
        "With so many different plugins free to install, there's something that could help every type of Roam user."
      }
      stats={[
        {
          value: "23",
          label: "Extensions",
        },
        {
          value: "6,000+",
          label: "Daily Downloads",
        },
        {
          value: "100+",
          label: "Subscribers",
        },
      ]}
    >
      <Head>
        <script
          async
          src="https://prodigious-trader-7332.ck.page/a85e477729/index.js"
        />
      </Head>
      <H4>ROAMJS DIGEST</H4>
      <Body>
        Add your email below to stay up to date on all RoamJS features, fixes,
        and news!
      </Body>
      <script data-uid="a85e477729" />
    </Landing>
  </Layout>
);

export default HomePage;
