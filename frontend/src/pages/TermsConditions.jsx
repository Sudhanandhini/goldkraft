export default function TermsConditions() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gray-900 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Terms &amp; Conditions</h1>
        <p className="text-gray-400 mt-2 text-sm">Last updated: June 2024</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 text-gray-700 space-y-10">

        <section>
          <p className="text-base leading-relaxed">
            Welcome to the Goldkraft Enterprises website. By accessing or using this website, you agree to the following terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-yellow-500">Services</h2>
          <p className="leading-relaxed">
            Goldkraft Enterprises provides bird proofing services and solutions for residential, commercial, and industrial spaces.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-yellow-500">Quotations &amp; Pricing</h2>
          <p className="leading-relaxed">
            All quotations provided are subject to site inspection, project requirements, and material specifications.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-yellow-500">Installation &amp; Warranty</h2>
          <p className="leading-relaxed">
            Service warranty, where applicable, will be based on the agreed project scope and installation conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-yellow-500">Website Usage</h2>
          <p className="leading-relaxed">
            Users shall not misuse, copy, or reproduce website content, images, or branding materials without prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-yellow-500">External Factors</h2>
          <p className="leading-relaxed">
            Goldkraft Enterprises is not responsible for damages caused due to structural issues, third-party modifications, natural conditions, or improper maintenance after installation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-yellow-500">Changes to Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to update or modify these terms at any time without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-yellow-500">Contact Information</h2>
          <div className="text-gray-600 space-y-1">
            <p className="font-semibold text-gray-800">Goldkraft Enterprises</p>
            <p>No. 4, 1st Cross, 2nd Stage, Peenya Industrial Area, Bengaluru – 560058</p>
            <p>Email: <a href="mailto:sales@goldkraft.in" className="text-yellow-600 hover:underline">sales@goldkraft.in</a></p>
            <p>Phone: <a href="tel:9449065735" className="text-yellow-600 hover:underline">94490 65735</a></p>
          </div>
        </section>

      </div>
    </div>
  );
}
