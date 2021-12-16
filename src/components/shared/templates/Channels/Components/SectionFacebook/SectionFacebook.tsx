import { FC } from 'react';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import axios from 'axios';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import {
  StyledSectionFacebook,
  StyledSectionFacebookHeader,
  StyledSectionFacebookBody,
  StyledMessengerFooter,
  StyledButtonFacebook,
} from './SectionFacebook.styled';
import { ISectionFacebook } from './SectionFacebook.interface';
import {
  ButtonMolecule,
  ButtonVariant,
  Size,
} from '../../../../atoms/Button/Button';

const dataMessenger = [
  {
    num: 1,
    message: 'Selecciona un canal',
  },
  {
    num: 2,
    message: 'Vincula tu cuenta de Messenger',
  },
];

export const SectionFacebookComponent: FC<ISectionFacebook> = ({
  setIsSectionWebChat,
}) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCo-2GSdU6J7KnCRiVCWBhRw3VMtgvFGWg',
    authDomain: 'social-auth-385e3.firebaseapp.com',
    projectId: 'social-auth-385e3',
    storageBucket: 'social-auth-385e3.appspot.com',
    messagingSenderId: '1087919440019',
    appId: '1:1087919440019:web:1f76928b630385b2fd0d66',
  };

  initializeApp(firebaseConfig);
  const handleAuth = async () => {
    const provider = new FacebookAuthProvider();
    provider.addScope('pages_messaging');
    provider.addScope('pages_show_list');
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, provider);
      const data = FacebookAuthProvider.credentialFromResult(result);
      const userToken = data?.accessToken;
      const a = await axios.get(
        `${process.env.NEXT_PUBLIC_REST_API_URL}/messenger/getFbPages?userAccessToken=${userToken}`,
      );
      console.log(a);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <StyledSectionFacebook>
      <StyledSectionFacebookHeader>
        <Text>Añadir nuevo canal con Messenger</Text>
        <button type="button" onClick={() => setIsSectionWebChat(false)}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledSectionFacebookHeader>
      <StyledSectionFacebookBody>
        <div>
          <div>
            {dataMessenger.map((item) => (
              <div key={item.num}>
                <div>
                  <div>{item.num}</div>
                  <Text>{item.message}</Text>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <div>
              <Text>Iniciar sesión con Messenger</Text>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
                laboriosam laborum neque impedit nihil non!
              </span>
            </div>
            <SVGIcon iconFile="/icons/Messenger.svg" />
          </div>
          <StyledButtonFacebook type="button" onClick={handleAuth}>
            <SVGIcon iconFile="/icons/icons8-facebook.svg" />
            <Text>Continuar con Facebook</Text>
          </StyledButtonFacebook>
        </div>
      </StyledSectionFacebookBody>
      <StyledMessengerFooter>
        <ButtonMolecule
          text="Anterior"
          variant={ButtonVariant.OUTLINED}
          size={Size.MEDIUM}
        />
        <ButtonMolecule text="Finalizar" size={Size.MEDIUM} />
      </StyledMessengerFooter>
    </StyledSectionFacebook>
  );
};
