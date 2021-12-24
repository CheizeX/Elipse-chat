/* eslint-disable no-nested-ternary */
import { FC } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { delay } from 'rxjs';
import {
  StyledTrialFormContainer,
  StyledTrialFormLayout,
} from './TrialForm.styled';
import {
  ButtonMolecule,
  ButtonState,
  Size,
} from '../../../../atoms/Button/Button';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';

const initialValues = {
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  empresa: '',
};

const validationSchema = Yup.object({
  nombre: Yup.string()
    .required('El nombre es requerido')
    .matches(/^[a-zA-Z\s]*$/, 'El nombre solo puede contener letras')
    .min(2, 'El nombre es muy corto'),
  apellido: Yup.string()
    .required('El apellido es requerido')
    .matches(/^[a-zA-Z\s]*$/, 'El nombre solo puede contener letras')
    .min(2, 'El apellido es muy corto'),
  email: Yup.string()
    .email('El email es inválido')
    .required('El email es requerido'),
  telefono: Yup.string()
    .required('El teléfono es requerido')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'El teléfono es inválido',
    ),
  empresa: Yup.string().required('El nombre de la empresa es requerido'),
  contraseña: Yup.string()
    .required('La contraseña es requerida')
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(20),
  verificarContraseña: Yup.string().oneOf(
    [Yup.ref('contraseña'), null],
    'Las contraseñas no coinciden',
  ),
});

export const TrialForm: FC = () => {
  const onSubmit = async (
    values: {
      nombre: string;
      apellido: string;
      email: string;
      telefono: string;
      empresa: string;
    },
    { setSubmitting, setErrors }: { setSubmitting: any; setErrors: any },
  ) => {
    setSubmitting(true);
    try {
      await delay(1000);
      setSubmitting(false);
    } catch (error) {
      console.log(values);
      setSubmitting(false);
      setErrors({
        email: 'Error al enviar el formulario',
      });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({ isSubmitting }) => {
        return (
          <>
            <StyledTrialFormLayout>
              <SVGIcon iconFile="/images/MaskGroup.svg" />
              <img
                src="/images/elipse-chat-blanco.png"
                width="300px"
                alt="logo"
              />
              <StyledTrialFormContainer>
                <h1>Datos requeridos para acceder al período de evaluación</h1>
                {/* <StyledInfoCard>
                  <div>
                    <div>
                      <div>
                        <div>
                          <SVGIcon iconFile="/icons/success.svg" />2 Agentes
                        </div>
                      </div>
                      <div>
                        <SVGIcon iconFile="/icons/success.svg" />1 Supervisor
                      </div>
                      <div>
                        <SVGIcon iconFile="/icons/success.svg" />
                        Webchat
                      </div>
                    </div>
                    <div>
                      <div>
                        <SVGIcon iconFile="/icons/success.svg" />
                        Facebook Messenger
                      </div>
                      <div>
                        <SVGIcon iconFile="/icons/success.svg" />
                        Instagram
                      </div>
                      <div>
                        <SVGIcon iconFile="/icons/success.svg" />
                        Whatsapp
                      </div>
                    </div>
                  </div>
                </StyledInfoCard> */}
                <Form>
                  {/* <h1>Datos personales:</h1> */}
                  <Field type="text" name="nombre" placeholder="Nombre" />
                  <div>
                    <ErrorMessage name="nombre" component="div" />
                  </div>
                  <Field type="text" name="apellido" placeholder="Apellido" />
                  <div>
                    <ErrorMessage name="apellido" component="div" />
                  </div>
                  <Field type="email" name="email" placeholder="Email" />
                  <div>
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <Field
                    type="phone"
                    name="telefono"
                    placeholder="Número de teléfono"
                  />
                  <div>
                    <ErrorMessage name="telefono" component="div" />
                  </div>
                  <Field
                    type="text"
                    name="empresa"
                    placeholder="Nombre de la empresa"
                  />
                  <div>
                    <ErrorMessage name="empresa" component="div" />
                  </div>
                  <Field
                    type="password"
                    name="contraseña"
                    placeholder="Contraseña"
                  />
                  <div>
                    <ErrorMessage name="contraseña" component="div" />
                  </div>
                  <Field
                    type="password"
                    name="verificarContraseña"
                    placeholder="Verificar contraseña "
                  />
                  <div>
                    <ErrorMessage name="verificarContraseña" component="div" />
                  </div>
                  <ButtonMolecule
                    text="Comenzar con mi prueba gratuita"
                    type="submit"
                    size={Size.MEDIUM}
                    state={
                      isSubmitting ? ButtonState.DISABLED : ButtonState.NORMAL
                    }
                  />
                </Form>
              </StyledTrialFormContainer>
            </StyledTrialFormLayout>
          </>
        );
      }}
    </Formik>
  );
};
