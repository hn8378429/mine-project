export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">
        About Beauty Experts
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        We’re Beauty Experts! Ghana’s premier all in one shopping destination for all things beauty.
      </p>

      {/* Vision */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          To be your go-to store for a wide range of products sourced ethically from manufacturers
          or trusted distributors. We want our customers to think beauty — think Beauty Experts©.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Since day one, our mission has been to put self-care within reach of our valued customers
          with reasonable pricing and maximum accessibility.
        </p>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>

        <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-2">
          <li>Customer Satisfaction</li>
          <li>Product Education</li>
          <li>Promptness</li>
        </ul>
      </section>
    </div>
  );
}
