export default function DeliveryPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      
      <h1 className="text-3xl font-bold mb-6 text-pink-600">
        Delivery Information
      </h1>

      {/* CARRIERS */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Carriers</h2>
        <p className="text-gray-700 leading-relaxed">
          We currently use the Beauty Experts delivery team, FedEx, or transport companies for delivering all orders.
        </p>
      </section>

      {/* DELIVERY TIMEFRAME */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Delivery Timeframe</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            Within Accra / Tema and Surrounding Accra
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Orders placed by 11 AM – Delivered the same working day (Mon to Sat)</li>
            <li>Orders placed after 11 AM – Delivered the next working day</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            Outside Accra / Tema
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Delivered within 1–3 working days.
          </p>
        </div>
      </section>

      {/* ORDER CONFIRMATION */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Order Confirmation</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Once your order has been confirmed, you will receive confirmation via email stating the details of your order.
        </p>
        <p className="text-gray-700 leading-relaxed">
          You may also be contacted via SMS or phone call for further confirmation.
        </p>
      </section>

      {/* DELIVERY FEE */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Delivery Fee</h2>
        <p className="text-gray-700 leading-relaxed">
          For orders outside Accra, the delivery fee includes the cost of local delivery within Accra, 
          as well as charges from the shipping provider, parcel office, or transport company.
        </p>
      </section>
    </div>
  );
}
