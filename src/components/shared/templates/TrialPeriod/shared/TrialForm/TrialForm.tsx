/* eslint-disable no-nested-ternary */
import { FC } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { delay } from 'rxjs';
import { StyledTrialFormLayout } from './TrialForm.styled';
import {
  TrialRegisterInterface,
  TrialRegisterItems,
} from '../../../../../../pages/trial-register/trial-register.shared';
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
});

export const TrialForm: FC<TrialRegisterInterface> = ({ pagepath, color }) => {
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
      onSubmit={onSubmit}
      pagepath={pagepath}>
      {({ isSubmitting }) => {
        return (
          <>
            <StyledTrialFormLayout pagepath={pagepath} color={color}>
              <SVGIcon iconFile="/images/MaskGroup.svg" />
              <img
                src="/images/elipse-chat-blanco.png"
                width="300px"
                alt="logo"
              />
              <main className="cards-container">
                <article className="info-card">
                  <h1>
                    Plan
                    <span style={{ color: `${color}` }}>
                      {pagepath &&
                        pagepath.charAt(0).toUpperCase() + pagepath.slice(1)}
                    </span>
                  </h1>
                  <div>
                    {TrialRegisterItems.map(({ id, item }) => (
                      <div key={id}>
                        <SVGIcon iconFile="/icons/success.svg" />
                        <span>
                          {id === 0 && pagepath === 'start' && '3 '}
                          {id === 0 && pagepath === 'business' && '5 '}
                          {id === 0 && pagepath === 'corporate' && '10 '}
                          {item}
                        </span>
                      </div>
                    ))}
                    {(pagepath === 'business' || pagepath === 'corporate') && (
                      <div>
                        <SVGIcon iconFile="/icons/success.svg" />
                        <span>
                          <span>
                            WhatsApp Business API (costo de sesión a cargo del
                            cliente)
                          </span>
                        </span>
                      </div>
                    )}
                  </div>
                </article>
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
                  <ButtonMolecule
                    text="Solicitar prueba gratuita"
                    type="submit"
                    size={Size.MEDIUM}
                    state={
                      isSubmitting ? ButtonState.DISABLED : ButtonState.NORMAL
                    }
                  />
                </Form>
              </main>
            </StyledTrialFormLayout>
          </>
        );
      }}
    </Formik>
  );
};
