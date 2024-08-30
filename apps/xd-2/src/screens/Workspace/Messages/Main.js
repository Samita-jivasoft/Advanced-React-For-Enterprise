import { useMessages } from "@jivasoft/jivasoft-lib/dist/app/data/context/MessageContext.js";
import { WorkflowMessageContainerStyled } from "./styles";
//import { Layout } from '@jivasoft/jivasoft-lib'
import { Layout } from "@jivasoft/jivasoft-lib/dist/components";
import { generateUUID } from "app/helpers";
import { useEffect } from "react";
export const WorkspaceMessages = () => {
  const [messageState, messageDispatch] = useMessages();
  let { messages } = messageState;

  function WordCount(strArr) {
    if (strArr && strArr.length >= 1) {
      //var wordLength = strArr.map((item) => item?.message.split(" ").length)
    }
    return 0;
  }

  useEffect(() => {
    const { messages } = messageState;
    var id;
    if (messages.length > 0) {
      for (var i = 0; i < messages.length; i++) {
        if (
          messages[i]?.duration === null ||
          messages[i]?.duration === undefined
        ) {
          let wordTimer;
          if (WordCount(messages[i]?.formelements) >= 50) {
            wordTimer = 15000;
          } else if (WordCount(messages[i]?.formelements) >= 30) {
            wordTimer = 12000;
          } else {
            wordTimer = 7000;
          }

          id = messages[i]?.id;
          setTimeout(() => {
            messageDispatch({ type: "REMOVE_MESSAGE", id: id });
          }, wordTimer);
        } else if (messages[i].duration > 0) {
          id = messages[i]?.id;
          setTimeout(() => {
            messageDispatch({ type: "REMOVE_MESSAGE", id: id });
          }, messages[i].duration);
        } else {
          return;
        }
      }
    }
  }, [messageState]);

  return (
    <WorkflowMessageContainerStyled
      type={messages?.[0]?.type}
      onClick={(e) => {
        e.preventDefault();
      }}
      className="workflow-message-container-styled"
    >
      {messages?.map((message) => {
        let { label, elements, status } = message;
        let uuid = generateUUID();
        return (
          message?.formelements?.length > 0 && (
            <div>
              <Layout
                id={uuid}
                onClose={() => {
                  messageDispatch({ type: "REMOVE_MESSAGE", id: message?.id });
                }}
                layout={"message"}
                label={message?.label}
                status={message?.status}
                formElements={message?.formelements?.map((element) => {
                  return { ...element, defaultvalue: element?.message };
                })}
              >
                {message?.children}
              </Layout>
            </div>
          )
        );
      })}
    </WorkflowMessageContainerStyled>
  );
};
