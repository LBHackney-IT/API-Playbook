import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={siteConfig.link} description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.hero)}>
        <div className={clsx("container", styles.narrowContainer)}>
          <img alt="API Playbook Logo" src={useBaseUrl("/img/api_playbook_logo.png")} />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main className="container">
        <section className={styles.features}>
          <div>
            <h3>Made For Developers</h3>
            <p>
              APIs have become an essential part of Hackney’s digital Transformation.
              Our Playbook provides a consistent standard of implementation.
            </p>
            <Link
              className={clsx("button button--primary", styles.getStarted)}
              to={useBaseUrl("introduction")}
            >
              Get started
            </Link>
          </div>

          <div>
            <h3>Made For Developers</h3>
            <p>
              It is primarily used to onboard new developers, but also for external members willing to understand of the way that we implement APIs within the Organisation.
            </p>
            <Link
              className={clsx("button button--primary", styles.getStarted)}
              to={useBaseUrl("introduction")}
            >
              Get Started
            </Link>
          </div>

          <div>
            <h3>Give Feedback</h3>
            <p>
              We are always looking at ways we can improve. If you have any ideas or suggestions please share your feedback on our playbook <a href='https://github.com/LBHackney-IT/API-Playbook/issues'>GitHub Repo</a>.
            </p>
            <Link
              className={clsx("button button--secondary", styles.getStarted)}
              to={useBaseUrl("contact_us")}
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;