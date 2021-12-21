/* eslint-disable import/no-cycle */
/* eslint-disable no-nested-ternary */
import { FC } from 'react';
import {
  TrialRegisterItems,
  TrialRegisterPersonalizedItems,
} from '../../../../../pages/trial-register/trial-register.shared';
import { ButtonMolecule } from '../../../atoms/Button/Button';
import { SVGIcon } from '../../../atoms/SVGIcon/SVGIcon';
import planes from './SubscriptionSection.shared';
import {
  StyledSubscriptionSectionWebchatBody,
  StyledSubscriptionSectionWebchatHeader,
  StyledSubscriptionSectionWebchat,
  StyledSubscriptionSectionEnterpriseCardBody,
  StyledSubscriptionSectionEnterpriseCardHeader,
  StyledSubscriptionSectionCardHeader,
  StyledSubscriptionSectionCard,
  StyledSubscriptionSectionHeaderInfo,
  StyledSubscriptionSection,
  StyledSubscriptionSectionHeader,
  StyledSubscriptionSectionBody,
  StyledSubscriptionSectionEnterpriseCard,
} from './SubscriptionSection.styled';

export interface SubscriptionSectionProps {
  userName?: string;
  plan?: string;
  trial?: boolean;
  trialEnd?: 'string';
  active?: boolean;
}

export const userData = {
  userName: 'Felipe',
  plan: 'Corporate',
  trial: true,
  trialEnd: '',
};

export const SubscriptionSection: FC = () => {
  return (
    <StyledSubscriptionSection>
      <StyledSubscriptionSectionHeader>
        <StyledSubscriptionSectionHeaderInfo>
          <div>
            <h2>Evaluación Plan </h2>
            <span
              style={{
                color:
                  userData.plan === 'Start'
                    ? '#FF6641'
                    : userData.plan === 'Business'
                    ? '#EC3B63'
                    : userData.plan === 'Corporate'
                    ? '#4BCA59'
                    : userData.plan === 'Webchat'
                    ? '#3AA4FF'
                    : '#8521D0',
              }}>
              {userData.plan}
            </span>
          </div>
          <div>
            <p> 20 </p>
            <h1>Días de prueba restantes</h1>
          </div>
        </StyledSubscriptionSectionHeaderInfo>
      </StyledSubscriptionSectionHeader>
      <StyledSubscriptionSectionBody>
        <div>
          {planes.map((plan, index) => (
            <StyledSubscriptionSectionCard
              key={index.toString()}
              active={userData.plan === plan.name}>
              <StyledSubscriptionSectionCardHeader
                active={userData.plan === plan.name}>
                <h1>
                  <span
                    style={{
                      color:
                        plan.name === 'Start'
                          ? '#FF6641'
                          : plan.name === 'Business'
                          ? '#EC3B63'
                          : plan.name === 'Corporate'
                          ? '#4BCA59'
                          : '#8521D0',
                    }}>
                    {' '}
                    {plan.name}
                  </span>
                </h1>
                {plan.price && <h3>${plan.price},00</h3>}
              </StyledSubscriptionSectionCardHeader>
              {plan.name !== 'Enterprise' &&
                TrialRegisterItems.map(({ id, item }) => (
                  <div key={id}>
                    <SVGIcon iconFile="/icons/success.svg" />
                    <span>
                      {id === 0 && plan.name === 'Start' && '3 '}
                      {id === 0 && plan.name === 'Business' && '5 '}
                      {id === 0 && plan.name === 'Corporate' && '10 '}
                      {item}
                    </span>
                  </div>
                ))}
              {plan.name !== 'Enterprise' && plan.name !== 'Start' && (
                <div key="7">
                  <SVGIcon iconFile="/icons/success.svg" />
                  <span
                    style={{
                      fontSize: '14px',
                      // color: 'black',
                    }}>
                    {' '}
                    WhatsApp Business API (costo de sesión a cargo del cliente)
                  </span>
                </div>
              )}
              <ButtonMolecule
                type="button"
                onClick={() => {
                  console.log(plan.name);
                }}
                text={`Contratar${'  '} ${plan.name}`}
              />
            </StyledSubscriptionSectionCard>
          ))}
        </div>
        <div>
          <StyledSubscriptionSectionEnterpriseCard
            active={userData.plan === 'Enterprise'}>
            <StyledSubscriptionSectionEnterpriseCardHeader
              active={userData.plan === 'Enterprise'}>
              <h1> Enterprise </h1>
            </StyledSubscriptionSectionEnterpriseCardHeader>
            <StyledSubscriptionSectionEnterpriseCardBody
              active={userData.plan === 'Enterprise'}>
              <div>
                {TrialRegisterPersonalizedItems.map(({ id, item }) => (
                  <div key={id}>
                    <SVGIcon iconFile="/icons/success.svg" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </StyledSubscriptionSectionEnterpriseCardBody>
            <ButtonMolecule
              type="button"
              onClick={() => {
                console.log('Enterprise');
              }}
              text="Contratar mi Plan Enterprise"
            />
          </StyledSubscriptionSectionEnterpriseCard>
          <StyledSubscriptionSectionWebchat
            active={userData.plan === 'Webchat'}>
            <StyledSubscriptionSectionWebchatHeader>
              <h1>Webchat</h1>
              <h3>FREE!</h3>
            </StyledSubscriptionSectionWebchatHeader>
            <StyledSubscriptionSectionWebchatBody
              active={userData.plan === 'Webchat'}>
              <div>
                <SVGIcon iconFile="/icons/success.svg" />
                <span>Webchat</span>
              </div>
              <div>
                <SVGIcon iconFile="/icons/success.svg" />
                <span>2 Agentes</span>
              </div>
              <div>
                <SVGIcon iconFile="/icons/success.svg" />
                <span>1 Supervisor</span>
              </div>
            </StyledSubscriptionSectionWebchatBody>
            <ButtonMolecule
              type="button"
              onClick={() => {
                console.log('Webchat');
              }}
              text="Webchat GRATIS !"
            />
          </StyledSubscriptionSectionWebchat>
        </div>
      </StyledSubscriptionSectionBody>
    </StyledSubscriptionSection>
  );
};
