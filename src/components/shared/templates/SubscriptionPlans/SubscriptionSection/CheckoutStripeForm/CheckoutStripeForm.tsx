/* eslint-disable no-nested-ternary */
import { FC } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { Text } from '../../../../atoms/Text/Text';
import { StyledStripePaymentMethod } from './CheckoutStripeForm.styled';
import { ButtonMolecule, ButtonState } from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { SubscriptionSectionItemsProps } from '../SubscriptionSection.interface';

export const StripeForm: FC<SubscriptionSectionItemsProps> = ({
  setShowCard,
  setPlanNameSelected,
  planNameSelected,
}) => {
  // const [message, setMessage] = useState('');
  // const [loading, setLoading] = useState(false);
  console.log(planNameSelected);
  const stripe = useStripe();
  const elements = useElements();

  // useEffect(() => {
  //   if (!stripe) {
  //     return;
  //   }

  //   const clientSecret = new URLSearchParams(window.location.search).get(
  //     'payment_intent_client_secret',
  //   );

  //   if (!clientSecret) {
  //     return;
  //   }

  //   stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //     switch (paymentIntent?.status) {
  //       case 'succeeded':
  //         setMessage('El pago se ha realizado con éxito.');
  //         break;
  //       case 'processing':
  //         setMessage('El pago está siendo procesado.');
  //         break;
  //       case 'requires_payment_method':
  //         setMessage(
  //           'El pago no se ha podido realizar, por favor intente nuevamente.',
  //         );
  //         break;
  //       default:
  //         setMessage('Algo anduvo mal.');
  //         break;
  //     }
  //   });
  // }, [stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!elements || !stripe) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement) as StripeCardElement,
      billing_details: {
        email: 'jenny.rosen@example.com',
        name: 'Jenny Rosen',
        phone: '5555555555',
      },
    });

    if (!error) {
      console.log('[paymentMethod]', paymentMethod);
    }
  };

  const handleCloseClick = () => {
    setShowCard(false);
    setPlanNameSelected('');
  };

  return (
    <StyledStripePaymentMethod id="payment-form" onSubmit={handleSubmit}>
      <button type="button" onClick={handleCloseClick}>
        <SVGIcon iconFile="/icons/close.svg" />
      </button>
      <Text>Completar suscripción</Text>
      <CardElement id="payment-element" />
      <ButtonMolecule
        type="submit"
        text={`Aceptar y suscribirme al plan ${planNameSelected}`}
        state={
          !stripe || !elements
            ? ButtonState.DISABLED
            : // : loading
              // ? ButtonState.LOADING
              ButtonState.NORMAL
        }
      />
    </StyledStripePaymentMethod>
  );
};
