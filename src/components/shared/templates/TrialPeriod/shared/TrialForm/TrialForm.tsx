/* eslint-disable no-nested-ternary */
import { FC, useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
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

const validationSchema = Yup.object({
  companyName: Yup.string().required('El nombre de la empresa es requerido'),
  name: Yup.string()
    .required('El nombre es requerido')
    .matches(/^[a-zA-Z\s]*$/, 'El nombre solo puede contener letras')
    .min(2, 'El nombre es muy corto'),
  lastName: Yup.string()
    .required('El apellido es requerido')
    .matches(/^[a-zA-Z\s]*$/, 'El nombre solo puede contener letras')
    .min(2, 'El apellido es muy corto'),
  email: Yup.string()
    .email('El email es inválido')
    .required('El email es requerido'),
  password: Yup.string()
    .required('La contraseña es requerida')
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(20),
  verifyPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Las contraseñas no coinciden',
  ),
  // phone: Yup.string()
  //   .required('El teléfono es requerido')
  //   .matches(
  //     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  //     'El teléfono es inválido',
  //   ),
});

export const TrialForm: FC = () => {
  const router = useRouter();
  const [phone, setPhone] = useState('');

  const initialValues = {
    companyName: '',
    name: '',
    lastName: '',
    phone,
    email: '',
    password: '',
    verifyPassword: '',
  };

  const onSubmit = async (values: {
    companyName: string;
    name: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
  }) => {
    try {
      const axiosConfig: AxiosRequestConfig = {
        baseURL: process.env.NEXT_PUBLIC_REST_API_URL,
        url: '/general',
        method: 'post',
        data: {
          companyName: values.companyName,
          name: values.name,
          lastName: values.lastName,
          phone,
          email: values.email,
          password: values.password,
        },
      };
      const { data } = await axios(axiosConfig);
      if (data.success) {
        router.push(`/`);
      }
    } catch (error) {
      console.log(error);
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
                <h1>
                  Completa los siguientes campos para poder acceder al período
                  de evaluación
                </h1>
                <Form>
                  <Field type="text" name="name" placeholder="Nombre" />
                  <div>
                    <ErrorMessage name="name" component="div" />
                  </div>
                  <Field type="text" name="lastName" placeholder="Apellido" />
                  <div>
                    <ErrorMessage name="lastName" component="div" />
                  </div>
                  <Field type="email" name="email" placeholder="Email" />
                  <div>
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <PhoneInput
                    inputProps={{
                      required: true,
                      autoFocus: true,
                      name: 'phone',
                    }}
                    onChange={(e) => {
                      setPhone(e);
                    }}
                    value={phone}
                    country="cl"
                    enableSearch
                    searchPlaceholder="Buscar país..."
                  />
                  <div>
                    <ErrorMessage name="phone" component="div" />
                  </div>
                  <Field
                    type="text"
                    name="companyName"
                    placeholder="Nombre de la empresa"
                  />
                  <div>
                    <ErrorMessage name="companyName" component="div" />
                  </div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                  />
                  <div>
                    <ErrorMessage name="contraseña" component="div" />
                  </div>
                  <Field
                    type="password"
                    name="verifyPassword"
                    placeholder="Verificar contraseña "
                  />
                  <div>
                    <ErrorMessage name="verifyPassword" component="div" />
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
