const Terms = () => {
  return (
    <div className="mt-6 max-w-5xl mx-auto px-4 lg:px-8 mb-11">
      <div className="max-w-4xl mx-auto p-6 border rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">
          Terms and Conditions
        </h1>
        <p className="mb-6">
          Welcome to World Atlas. These Terms and Conditions govern your use of
          our website and services.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By accessing or using World Atlas, you agree to comply with these
          terms. If you do not agree, please refrain from using our services.
        </p>
        {/* Add more sections similarly */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. Changes to Terms
        </h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. We will notify
          users of significant changes via email or a prominent notice on our
          site.
        </p>
        {/* Continue with the rest of the sections */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Governing Law</h2>
        <p className="mb-4">
          These terms are governed by the laws of [Your Country/State].
        </p>
      </div>
    </div>
  );
};

export default Terms;
