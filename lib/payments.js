import { loadStripe } from '@stripe/stripe-js'

const sptripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY)

export const initCheckout = async ({ lineItems } = {}) => {
  const stripe = await sptripePromise

  await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}/?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: 'localhost:3000',
  })
}
