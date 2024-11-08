"use client"
import CheckoutForm from '../../components/checkoutForm';

const CheckoutPage = () => {
  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch('/api/saveOrder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Order saved successfully!");
      } else {
        console.error("Error saving order:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="checkout-page">
      <CheckoutForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CheckoutPage;
