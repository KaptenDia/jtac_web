import styles from "./Legal.module.css";

export default function TermsOfUse() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Use</h1>
        <p className={styles.lastUpdated}>Last updated: March 2026</p>

        <p className={styles.intro}>
          These Terms of Use govern access to and use of the website, digital
          platforms, and services provided by JTAC Immersive Technology Pte. Ltd
          (&quot;JTAC&quot;). By accessing this website or interacting with JTAC
          products and services, users acknowledge that they have read,
          understood, and agree to comply with these Terms of Use.
        </p>

        <h2 className={styles.sectionTitle}>1. Use of the Website</h2>
        <p className={styles.text}>
          The JTAC website is intended to provide information about the company,
          its immersive technology solutions, simulation systems, and related
          services. Visitors may access and use the website for informational
          purposes and to learn more about JTAC products and offerings.
        </p>
        <p className={styles.text}>
          Users agree to use the website in a lawful and responsible manner. Any
          activity that interferes with the normal functioning of the website,
          attempts to gain unauthorized access to systems, or introduces
          malicious software or harmful digital content is strictly prohibited.
        </p>

        <h2 className={styles.sectionTitle}>2. Intellectual Property</h2>
        <p className={styles.text}>
          All materials available on this website, including written content,
          graphics, images, product descriptions, simulation concepts, software
          elements, and other visual or digital materials, are the intellectual
          property of JTAC or its licensors unless otherwise stated.
        </p>
        <p className={styles.text}>
          These materials are protected by applicable intellectual property
          laws, including copyright, trademark, and other proprietary rights.
          Users may access website content for informational purposes but may
          not reproduce, distribute, modify, or publicly display such materials
          without prior written permission from JTAC.
        </p>

        <h2 className={styles.sectionTitle}>
          3. Product and Technology Information
        </h2>
        <p className={styles.text}>
          Information about JTAC products, immersive technology platforms, and
          simulation systems provided on this website is intended for general
          informational purposes. While JTAC strives to ensure that product
          descriptions and technical information are accurate and up to date,
          specifications, system features, and capabilities may evolve as part
          of ongoing product development and technological innovation.
        </p>
        <p className={styles.text}>
          JTAC therefore reserves the right to modify product details, system
          configurations, or technical descriptions without prior notice.
        </p>

        <h2 className={styles.sectionTitle}>
          4. Simulation and Training Systems
        </h2>
        <p className={styles.text}>
          Some JTAC products involve immersive simulation environments designed
          to support professional training in fields such as aviation, defense,
          and operational environments. These systems are intended to be used
          within structured training programs and may require specific
          operational procedures, technical infrastructure, or institutional
          agreements.
        </p>
        <p className={styles.text}>
          The information provided on this website should not be interpreted as
          operational guidance or certification for the use of simulation
          systems. The deployment and use of such systems may be governed by
          separate contractual agreements between JTAC and client organizations.
        </p>

        <h2 className={styles.sectionTitle}>5. Limitation of Liability</h2>
        <p className={styles.text}>
          To the fullest extent permitted by law, JTAC shall not be liable for
          any direct or indirect damages arising from the use of this website or
          reliance on information presented on the website. This includes, but
          is not limited to, situations involving temporary service
          interruptions, technical errors, or unauthorized access to digital
          systems.
        </p>

        <h2 className={styles.sectionTitle}>6. External Links</h2>
        <p className={styles.text}>
          The JTAC website may include links to third-party websites or external
          resources for informational purposes. JTAC does not control or endorse
          the content of these external sites and is not responsible for their
          availability, policies, or practices.
        </p>

        <h2 className={styles.sectionTitle}>7. Modifications to Terms</h2>
        <p className={styles.text}>
          JTAC reserves the right to update or revise these Terms of Use at any
          time. When changes are made, the updated version will be published on
          this page with the revised effective date. Continued use of the
          website after any updates have been published will be considered
          acceptance of the revised terms.
        </p>

        <h2 className={styles.sectionTitle}>8. Governing Law</h2>
        <p className={styles.text}>
          These Terms of Use shall be governed and interpreted in accordance
          with the laws of the Republic of Singapore. Any disputes relating to
          the use of this website shall fall under the jurisdiction of the
          courts of Singapore.
        </p>

        <h2 className={styles.sectionTitle}>9. Contact Information</h2>
        <div className={styles.contact}>
          <p className={styles.contactTitle}>
            JTAC Immersive Technology Pte. Ltd
          </p>
          <p className={styles.contactText}>
            For questions regarding these Terms of Use, please contact us
            through our website.
          </p>
        </div>
      </div>
    </div>
  );
}
