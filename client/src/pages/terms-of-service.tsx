import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-4">
          Last updated: November 2025
        </p>

        <div className="space-y-8 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing and using ClipFlow (myclipflow.com), you accept and
              agree to be bound by the terms and provision of this agreement. If
              you do not agree to abide by the above, please do not use this
              service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on ClipFlow for personal,
              non-commercial transitory viewing only.
            </p>

            <p className="mb-4">
              This is the grant of a license, not a transfer of title, and under
              this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on ClipFlow
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any other server
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Personal Use Only
            </h2>
            <p className="mb-4">
              <strong>
                ClipFlow is a tool provided for personal use only.
              </strong>{" "}
              Users are entirely responsible for compliance with all applicable
              laws, regulations, and the terms of service of any platforms from
              which content is sourced (including but not limited to YouTube,
              TikTok, Instagram, etc.).
            </p>

            <p className="mb-4">
              <strong>Copyright Compliance:</strong> You are solely responsible
              for ensuring that your use of downloaded or edited content
              complies with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>YouTube's Terms of Service and Community Guidelines</li>
              <li>Copyright and intellectual property laws</li>
              <li>Fair use doctrine requirements (where applicable)</li>
              <li>
                Platform-specific content policies (TikTok, Instagram, etc.)
              </li>
            </ul>

            <p className="mt-4">
              ClipFlow assumes no liability for any misuse of the tool or
              violation of third-party rights by users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Disclaimer</h2>
            <p className="mb-4">
              The materials on ClipFlow are provided on an 'as is' basis.
              ClipFlow makes no warranties, expressed or implied, and hereby
              disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>

            <p>
              Further, ClipFlow does not warrant or make any representations
              concerning the accuracy, likely results, or reliability of the use
              of the materials on its website or otherwise relating to such
              materials or on any sites linked to this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Limitations</h2>
            <p>
              In no event shall ClipFlow or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on ClipFlow, even if ClipFlow or
              a ClipFlow authorized representative has been notified orally or
              in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              6. Accuracy of Materials
            </h2>
            <p>
              The materials appearing on ClipFlow could include technical,
              typographical, or photographic errors. ClipFlow does not warrant
              that any of the materials on its website are accurate, complete,
              or current. ClipFlow may make changes to the materials contained
              on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Links</h2>
            <p>
              ClipFlow has not reviewed all of the sites linked to its website
              and is not responsible for the contents of any such linked site.
              The inclusion of any link does not imply endorsement by ClipFlow
              of the site. Use of any such linked website is at the user's own
              risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
            <p>
              ClipFlow may revise these terms of service for its website at any
              time without notice. By using this website, you are agreeing to be
              bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of the jurisdiction in which ClipFlow
              operates, and you irrevocably submit to the exclusive jurisdiction
              of the courts located in that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              10. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
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
