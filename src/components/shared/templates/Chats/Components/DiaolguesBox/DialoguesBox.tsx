/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-identical-functions */
import React, { FC, useRef, useCallback, useState } from 'react';
import { SVGIcon } from '../../../../atoms/SVGIcon/SVGIcon';
import { Text } from '../../../../atoms/Text/Text';
import { SelectedUserProps } from '../../ChatsSection/ChatsSection.interface';
import { ChatStatus, Message } from '../../../../../../models/chat/chat';
import {
  StyledDialoguesContainer,
  StyledUserDialogue,
  StyledAgentOrSUpervisorDialogue,
  StyledAgentAvatar,
  StyledUserPendingDialogue,
  StyledBoxAvatar,
} from './DialoguesBox.styles';
import { useAppSelector } from '../../../../../../redux/hook/hooks';
import { ModalBackgroundProps } from '../../../../molecules/Modal/Modal';
import useLocalStorage from '../../../../../../hooks/use-local-storage';

export const DialoguesBox: FC<SelectedUserProps & ModalBackgroundProps> = ({
  userSelected,
}) => {
  const [idModal, setIdModal] = useState('');

  const { chatsOnConversation } = useAppSelector(
    (state) => state.liveChat.chatsOnConversation,
  );
  const { chatsPendings } = useAppSelector(
    (state) => state.liveChat.chatsPendings,
  );
  const { userDataInState } = useAppSelector(
    (state) => state.userAuthCredentials,
  );

  const [accessToken] = useLocalStorage('AccessToken', '');
  const profilePicture = `${userDataInState?.urlAvatar}?token=${accessToken}`;

  const dialogueBoxRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    dialogueBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [dialogueBoxRef]);

  const handleOpenAttachments = (message: Message) => {
    window.open(
      `https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
        10,
        message.content.length,
      )}`,
    );
  };

  React.useEffect(scrollToBottom, [
    userSelected,
    scrollToBottom,
    chatsOnConversation,
    chatsPendings,
  ]);

  return (
    <StyledDialoguesContainer>
      {chatsOnConversation &&
        chatsOnConversation
          ?.filter(
            (chat) =>
              chat.client.clientId === userSelected &&
              chat.status === ChatStatus.ON_CONVERSATION,
          )
          .map((chat) =>
            chat.messages?.map((message, index) =>
              message.from === chat.client.clientId ? (
                <StyledUserDialogue key={index.toString()}>
                  <div>
                    <Text>
                      {message.contentType === 'ATTACHMENT' &&
                        message.content.substr(
                          message.content.length - 3,
                          message.content.length,
                        ) === ('png' || 'jpg') && (
                          <>
                            <div>
                              <button
                                type="button"
                                onClick={() => setIdModal(message._id || '')}>
                                <SVGIcon iconFile="/icons/maximize.svg" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleOpenAttachments(message)}>
                                <SVGIcon iconFile="/icons/download.svg" />
                              </button>
                            </div>
                            <img
                              src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                10,
                                message.content.length,
                              )}`}
                              width="100px"
                              height="100px"
                              alt="message.content"
                            />
                            {message._id === idModal ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => setIdModal('')}>
                                  <SVGIcon
                                    iconFile="/icons/minimize.svg"
                                    color="white"
                                  />
                                </button>
                                <article>
                                  <img
                                    src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                      10,
                                      message.content.length,
                                    )}`}
                                    width="100px"
                                    height="100px"
                                    alt="message.content"
                                  />
                                </article>
                              </>
                            ) : null}
                          </>
                        )}

                      {message.contentType === 'ATTACHMENT' &&
                        message.content.substr(
                          message.content.length - 3,
                          message.content.length,
                        ) === 'jpg' && (
                          <>
                            <div>
                              <button
                                type="button"
                                onClick={() => setIdModal(message._id || '')}>
                                <SVGIcon iconFile="/icons/maximize.svg" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleOpenAttachments(message)}>
                                <SVGIcon iconFile="/icons/download.svg" />
                              </button>
                            </div>
                            <img
                              src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                10,
                                message.content.length,
                              )}`}
                              width="100px"
                              height="100px"
                              alt="message.content"
                            />
                            {message._id === idModal ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => setIdModal('')}>
                                  <SVGIcon
                                    iconFile="/icons/minimize.svg"
                                    color="white"
                                  />
                                </button>
                                <article>
                                  <img
                                    src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                      10,
                                      message.content.length,
                                    )}`}
                                    width="100px"
                                    height="100px"
                                    alt="message.content"
                                  />
                                </article>
                              </>
                            ) : null}
                          </>
                        )}

                      {message.contentType === 'ATTACHMENT' &&
                        message.content.substr(
                          message.content.length - 4,
                          message.content.length,
                        ) === 'jpeg' && (
                          <>
                            <div>
                              <button
                                type="button"
                                onClick={() => setIdModal(message._id || '')}>
                                <SVGIcon iconFile="/icons/maximize.svg" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleOpenAttachments(message)}>
                                <SVGIcon iconFile="/icons/download.svg" />
                              </button>
                            </div>
                            <img
                              src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                10,
                                message.content.length,
                              )}`}
                              width="100px"
                              height="100px"
                              alt="message.content"
                            />
                            {message._id === idModal ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => setIdModal('')}>
                                  <SVGIcon
                                    iconFile="/icons/minimize.svg"
                                    color="white"
                                  />
                                </button>
                                <article>
                                  <img
                                    src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                      10,
                                      message.content.length,
                                    )}`}
                                    width="100px"
                                    height="100px"
                                    alt="message.content"
                                  />
                                </article>
                              </>
                            ) : null}
                          </>
                        )}

                      {message.contentType === 'ATTACHMENT' &&
                        message.content.substr(
                          message.content.length - 3,
                          message.content.length,
                        ) === 'pdf' && (
                          <>
                            <div>
                              <button
                                type="button"
                                onClick={() => setIdModal(message._id || '')}>
                                <SVGIcon iconFile="/icons/maximize.svg" />
                              </button>
                            </div>
                            <iframe
                              src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                10,
                                message.content.length,
                              )}`}
                              width="100px"
                              height="100px"
                              style={{
                                overflow: 'hidden',
                              }}
                              title={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                10,
                                message.content.length,
                              )}`}
                            />
                            {message._id === idModal ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => setIdModal('')}>
                                  <SVGIcon
                                    iconFile="/icons/minimize.svg"
                                    color="white"
                                  />
                                </button>
                                <article>
                                  <iframe
                                    // use frame-ancestors to allow iframe access to parent window
                                    src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                      10,
                                      message.content.length,
                                    )}`}
                                    width="100%"
                                    height="100%"
                                    title={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                      10,
                                      message.content.length,
                                    )}`}
                                  />
                                </article>
                              </>
                            ) : null}
                          </>
                        )}

                      {message.contentType !== 'ATTACHMENT' && message.content}
                    </Text>
                    <Text>
                      {new Date(message.createdAt).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false,
                      })}
                    </Text>
                  </div>
                </StyledUserDialogue>
              ) : (
                <StyledAgentOrSUpervisorDialogue key={index.toString()}>
                  <div>
                    <Text>
                      {message.contentType === 'ATTACHMENT' &&
                        message.content.substr(
                          message.content.length - 3,
                          message.content.length,
                        ) === 'pdf' && (
                          <>
                            <div>
                              <button
                                type="button"
                                onClick={() => setIdModal(message._id || '')}>
                                <SVGIcon iconFile="/icons/maximize.svg" />
                              </button>
                            </div>
                            <iframe
                              src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                8,
                                message.content.length,
                              )}`}
                              width="100px"
                              height="100px"
                              style={{
                                overflow: 'hidden',
                              }}
                              title={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                8,
                                message.content.length,
                              )}`}
                            />
                            {message._id === idModal ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => setIdModal('')}>
                                  <SVGIcon
                                    iconFile="/icons/minimize.svg"
                                    color="white"
                                  />
                                </button>
                                <article>
                                  <iframe
                                    src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                      8,
                                      message.content.length,
                                    )}`}
                                    width="100%"
                                    height="100%"
                                    title={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                      8,
                                      message.content.length,
                                    )}`}
                                  />
                                </article>
                              </>
                            ) : null}
                          </>
                        )}

                      {message.contentType === 'ATTACHMENT' &&
                        message.content.substr(
                          message.content.length - 3,
                          message.content.length,
                        ) === 'png' && (
                          <>
                            <div>
                              <button
                                type="button"
                                onClick={() => setIdModal(message._id || '')}>
                                <SVGIcon iconFile="/icons/maximize.svg" />
                              </button>
                            </div>
                            <img
                              src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                8,
                                message.content.length,
                              )}`}
                              width="100px"
                              height="100px"
                              alt="message.content"
                            />
                            {message._id === idModal ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => setIdModal('')}>
                                  <SVGIcon
                                    iconFile="/icons/minimize.svg"
                                    color="white"
                                  />
                                </button>
                                <article>
                                  <img
                                    src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                      8,
                                      message.content.length,
                                    )}`}
                                    width="900px"
                                    height="500px"
                                    alt="message.content"
                                  />
                                </article>
                              </>
                            ) : null}
                          </>
                        )}

                      {message.contentType === 'ATTACHMENT' &&
                        message.content.substr(
                          message.content.length - 3,
                          message.content.length,
                        ) === 'jpg' && (
                          <>
                            <div>
                              <button
                                type="button"
                                onClick={() => setIdModal(message._id || '')}>
                                <SVGIcon iconFile="/icons/maximize.svg" />
                              </button>
                            </div>
                            <img
                              src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                8,
                                message.content.length,
                              )}`}
                              width="100px"
                              height="100px"
                              alt="message.content"
                            />
                            {message._id === idModal ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => setIdModal('')}>
                                  <SVGIcon
                                    iconFile="/icons/minimize.svg"
                                    color="white"
                                  />
                                </button>
                                <article>
                                  <img
                                    src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                      8,
                                      message.content.length,
                                    )}`}
                                    width="900px"
                                    height="500px"
                                    alt="message.content"
                                  />
                                </article>
                              </>
                            ) : null}
                          </>
                        )}

                      {message.contentType === 'ATTACHMENT' &&
                        message.content.substr(
                          message.content.length - 4,
                          message.content.length,
                        ) === 'jpeg' && (
                          <>
                            <div>
                              <button
                                type="button"
                                onClick={() => setIdModal(message._id || '')}>
                                <SVGIcon iconFile="/icons/maximize.svg" />
                              </button>
                            </div>
                            <img
                              src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                8,
                                message.content.length,
                              )}`}
                              width="100px"
                              height="100px"
                              alt="message.content"
                            />
                            {message._id === idModal ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => setIdModal('')}>
                                  <SVGIcon
                                    iconFile="/icons/minimize.svg"
                                    color="white"
                                  />
                                </button>
                                <article>
                                  <img
                                    src={`https://rest-ailalia.ngrok.io/v1/api/whatsapp360/file/${message.content.substr(
                                      8,
                                      message.content.length,
                                    )}`}
                                    width="900px"
                                    height="500px"
                                    alt="message.content"
                                  />
                                </article>
                              </>
                            ) : null}
                          </>
                        )}

                      {message.contentType !== 'ATTACHMENT' && message.content}
                    </Text>
                    <div>
                      <Text>
                        {message.size &&
                          parseInt(message.size, 10) > 0 &&
                          `${(parseInt(message.size, 10) / 1e6).toFixed(1)} MB`}
                      </Text>
                      <Text>
                        {new Date(message.createdAt).toLocaleTimeString(
                          'en-US',
                          {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                          },
                        )}
                      </Text>
                    </div>
                  </div>
                  <StyledAgentAvatar>
                    {userDataInState && userDataInState.urlAvatar !== '' ? (
                      <StyledBoxAvatar
                        src={profilePicture}
                        alt={userDataInState.name}
                      />
                    ) : (
                      <SVGIcon iconFile="/icons/user.svg" />
                    )}
                  </StyledAgentAvatar>
                </StyledAgentOrSUpervisorDialogue>
              ),
            ),
          )}

      {chatsPendings &&
        chatsPendings
          ?.filter(
            (chat) =>
              chat.client.clientId === userSelected &&
              chat.status === ChatStatus.ASSIGNMENT_PENDING,
          )
          .map((chat) =>
            chat.messages.map(
              (message) =>
                message.from === chat.client.clientId && (
                  <StyledUserPendingDialogue key={message._id}>
                    <div>
                      <Text>
                        {message.contentType === 'ATTACHMENT' &&
                          message.content.substr(
                            message.content.length - 3,
                            message.content.length,
                          ) === 'png' && (
                            <button type="button">
                              <SVGIcon iconFile="/icons/image-icon.svg" />
                            </button>
                          )}
                        {message.contentType === 'ATTACHMENT' &&
                          message.content.substr(
                            message.content.length - 3,
                            message.content.length,
                          ) === 'pdf' && (
                            <button type="button">
                              <SVGIcon iconFile="/icons/pdf-icon.svg" />
                            </button>
                          )}
                        {message.contentType === 'ATTACHMENT' &&
                          message.content.substr(
                            message.content.length - 3,
                            message.content.length,
                          ) === 'jpg' && (
                            <button type="button">
                              <SVGIcon iconFile="/icons/image-icon.svg" />
                            </button>
                          )}
                        {message.contentType === 'ATTACHMENT' &&
                          message.content.substr(
                            message.content.length - 4,
                            message.content.length,
                          ) === 'jpeg' && (
                            <button type="button">
                              <SVGIcon iconFile="/icons/image-icon.svg" />
                            </button>
                          )}
                        {message.contentType !== 'ATTACHMENT' &&
                          message.content}
                      </Text>
                      <Text>
                        {new Date(message.createdAt).toLocaleTimeString(
                          'en-US',
                          {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                          },
                        )}
                      </Text>
                    </div>
                  </StyledUserPendingDialogue>
                ),
            ),
          )}
      <div ref={dialogueBoxRef} />
    </StyledDialoguesContainer>
  );
};
