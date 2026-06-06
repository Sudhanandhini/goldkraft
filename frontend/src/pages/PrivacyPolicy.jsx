export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gray-900 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="text-gray-400 mt-2 text-sm">Last updated: June 2024</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 text-gray-700 space-y-10">

        <section>
          <p className="text-base leading-relaxed">
            At Goldkraft Enterprises, we value your privacy and are committed to protecting the information shared with us through our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-yellow-500">Information We Collect</h2>
          <p className="mb-3">We may collect basic information such as:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Business or site details shared through contact forms or inquiries</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-yellow-500">How We Use Information</h2>
          <p className="mb-3">The information collected is used only for:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Responding to inquiries</li>
            <li>Providing quotations and services</li>
            <li>Customer communication and support</li>
            <li>Improving our services and website experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-yellow-500">Information Protection</h2>
          <p className="leading-relaxed">
            We do not sell, rent, or share customer information with third parties except when required for service-related communication or legal compliance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-yellow-500">Website Content</h2>
          <p className="leading-relaxed">
            All images, designs, service descriptions, and content displayed on this website are the property of Goldkraft Enterprises and should not be copied or reproduced without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-yellow-500">Contact</h2>
          <p className="mb-3">For any privacy-related concerns, please contact:</p>
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
