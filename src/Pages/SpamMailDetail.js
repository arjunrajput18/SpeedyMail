import React from 'react';
import { useParams } from 'react-router-dom';
import { MailState } from '../Contexts/MailContext';
export const SpamMailDetail = () => {
  const {
    state: { spamMails },
  } = MailState();

  const { id } = useParams();
  const mail = spamMails.find(({ mId }) => mId === id);

  return (
    <>
      <h1 className="heading">Arjun's Mail Box</h1>
      <div className="card">
        <h3 className="subject">Subject: {mail?.subject}</h3>
        <p>Description: {mail?.content}</p>
      </div>
    </>
  );
};
