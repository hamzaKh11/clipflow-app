import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">
          Last updated: November 2025
        </p>

        <div className="space-y-8 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              ClipFlow ("we", "us", "our", or "Company") operates the
              myclipflow.com website (the "Service"). This page informs you of
              our policies regarding the collection, use, and disclosure of
              personal data when you use our Service and the choices you have
              associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Information Collection and Use
            </h2>
            <p className="mb-4">
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>

            <h3 className="text-xl font-semibold mb-3">
              Types of Data Collected:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Personal Data:</strong> While using our Service, we may
                ask you to provide us with certain personally identifiable
                information ("Personal Data") such as email address (optional
                for contact forms).
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect
                information about how the Service is accessed and used ("Usage
                Data"). This may include information such as your browser type,
                the pages you visit, the time and duration of your visits, and
                other diagnostic data.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies and similar tracking technologies to track activity on
                our Service and hold certain information. Cookies are files with
                small amounts of data which may include an anonymous unique
                identifier. You can instruct your browser to refuse all cookies
                or to indicate when a cookie is being sent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Third-Party Vendors
            </h2>
            <p className="mb-4">
              We use third-party services to support and improve our Service:
            </p>

            <h3 className="text-xl font-semibold mb-3">Google AdSense</h3>
            <p className="mb-2">
              ClipFlow displays advertisements through Google AdSense. Google
              uses cookies and web beacons to serve ads based on prior visits to
              our website and other websites on the Internet. Google processes
              this data to provide relevant advertising.
            </p>
            <p>
              For more information about Google's advertising practices and to
              opt out of personalized ads, visit
              <a
                href="https://policies.google.com/technologies/ads"
                className="text-primary hover:underline"
              >
                {" "}
                Google's Advertising Policies
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">Analytics</h3>
            <p>
              We may use analytics services to understand how users interact
              with our Service. These services may collect and process Usage
              Data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Use of Data</h2>
            <p>ClipFlow uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer care and support</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our Service
              </li>
              <li>To monitor the usage of our Service</li>
              <li>
                To detect, prevent and address technical issues and fraudulent
                activity
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              6. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date at the top of this Privacy
              Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at
              <a
                href="mailto:support@myclipflow.com"
                className="text-primary hover:underline"
              >
                {" "}
                support@myclipflow.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
