import React from 'react';
import { MailState } from '../Contexts/MailContext';
import { SingleMail } from '../Components/SingleMail';

export const Spam = () => {
  const {
    state: { spamMails },
  } = MailState();

  return (
    <>
      <h1 className="heading">Arjun's Mail Box</h1>
      <ul className="mail-display">
        {spamMails?.map((mail) => (
          <SingleMail mail={mail} key={mail.mId} spam />
        ))}
      </ul>
    </>
  );
};
