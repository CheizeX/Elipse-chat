import { FC, useState } from 'react';
import {
  StyledChatHistory,
  StyledChatHistoryHeader,
  StyledChatHistoryBody,
  SectionAgentsContainer,
  StyledCardAgents,
  SectionContainerChats,
  StyledAgentOrSUpervisorDialogue,
  StyledAvatarChats,
  StyledUserChats,
} from './ChatHistory.styled';
import { IChatHistoryProps } from './ChatHistory.interface';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { BadgeMolecule } from '../../../../molecules/Badge/Badge';

const chatHistory = [
  {
    id: 1,
    name: 'Bianca Olguin',
    date: 'Hoy',
    pending: '11:45',
    attended: '11:59',
    historyChat: [
      {
        emisor: 'Hola Buenos Días me gustaria hablar con un agente',
        time: '12:46',
        receptor: 'Hola! Soy Bianca Olguin en que puedo ayudarte',
        timeR: '12:51',
      },
      {
        emisor: '¿Puedo reprogramar mi cita médica ?',
        time: '11:46',
        receptor:
          'Su proxima cita médica esta programada para el 12/08/2021 a las 9:00 hrs',
        timeR: '11:58',
      },
      {
        emisor: '¿Puedo reprogramar mi cita médica ?',
        time: '11:46',
        receptor:
          'Su proxima cita médica esta programada para el 12/08/2021 a las 9:00 hrs',
        timeR: '11:58',
      },
    ],
  },
  {
    id: 2,
    name: 'Pedro Sanchez',
    date: 'Ayer',
    pending: '11:45',
    attended: '11:59',
    historyChat: [
      {
        emisor: 'Hola! Buenos Días me gustaria hablar con un agente',
        time: '10:46',
        receptor: 'Hola! Soy Pedro Sanchez en que puedo ayudarte',
        timeR: '10:51',
      },
      {
        emisor: '¿Quisiera saber fecha de mi próxima cita médica?',
        time: '12:46',
        receptor:
          'Su proxima cita médica esta programada para el 12/05/2021 a las 15:00 hrs',
        timeR: '12:52',
      },
    ],
  },
  {
    id: 3,
    name: 'Marta Willians',
    date: '12/11/2020',
    pending: '11:45',
    attended: '11:59',
    historyChat: [
      {
        emisor: 'Hola! Buenos Días me gustaria hablar con un agente',
        time: '10:46',
        receptor: 'Hola! Soy Marta Willians en que puedo ayudarte',
        timeR: '10:51',
      },
      {
        emisor: '¿Quisiera saber fecha de mi próxima cita médica?',
        time: '12:46',
        receptor:
          'Su proxima cita médica esta programada para el 12/05/2021 a las 15:00 hrs',
        timeR: '12:52',
      },
    ],
  },
];

export const ChatsHistory: FC<IChatHistoryProps> = ({ setLiveChatModal }) => {
  const [chat, setChatHistory] = useState('');
  return (
    <StyledChatHistory>
      <StyledChatHistoryHeader>
        <div>
          <SVGIcon iconFile="/icons/whatsapp.svg" />
          <Text>Historial de Chats</Text>
        </div>
        <button type="button" onClick={() => setLiveChatModal(false)}>
          <SVGIcon iconFile="/icons/times.svg" />
        </button>
      </StyledChatHistoryHeader>
      <StyledChatHistoryBody>
        <div>
          <span>
            <Text>Total</Text>
            <div>{chatHistory.length}</div>
          </span>
          <SectionAgentsContainer>
            {chatHistory?.map(({ name, pending, attended, id, date }) => (
              <StyledCardAgents
                key={id}
                onClick={() => setChatHistory(name)}
                focusedChats={chat === name}>
                <span>
                  <SVGIcon iconFile="/icons/candelar_alt.svg" />
                  <span>{date}</span>
                </span>
                <span>
                  <BadgeMolecule>
                    <SVGIcon iconFile="/icons/watch.svg" />
                    <span>{pending}</span>
                  </BadgeMolecule>
                  <div>- - - -</div>
                  <BadgeMolecule>
                    <SVGIcon iconFile="/icons/thumbs-up.svg" />
                    <span>{attended}</span>
                  </BadgeMolecule>
                </span>
                <span>
                  <SVGIcon iconFile="/icons/unknown_user.svg" />
                  <span>{name}</span>
                </span>
              </StyledCardAgents>
            ))}
          </SectionAgentsContainer>
        </div>
        <div>
          <Text color="black">Mensajes</Text>
          {chatHistory &&
            chatHistory
              ?.filter((agents) => agents.name === chat)
              .map(
                (agent) =>
                  agent.historyChat && (
                    <SectionContainerChats>
                      {agent.historyChat.map((element) => (
                        <>
                          <StyledUserChats>
                            <div>
                              <Text>{element.emisor}</Text>
                              <Text>{element.time}</Text>
                            </div>
                          </StyledUserChats>
                          <StyledAgentOrSUpervisorDialogue>
                            <div>
                              <Text>{element.receptor}</Text>
                              <Text>{element.timeR}</Text>
                            </div>
                            <StyledAvatarChats>
                              <SVGIcon iconFile="/icons/user.svg" />
                            </StyledAvatarChats>
                          </StyledAgentOrSUpervisorDialogue>
                        </>
                      ))}
                    </SectionContainerChats>
                  ),
              )}
        </div>
      </StyledChatHistoryBody>
    </StyledChatHistory>
  );
};
