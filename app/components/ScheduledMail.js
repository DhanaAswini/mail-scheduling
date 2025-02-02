"use client";
const ScheduledMail = ({ mailings }) => {
  return (
    <div>
      <h2>Scheduled Mailings</h2>
      <ul>
        {mailings.map((mailing) => (
          <li key={mailing.id}>
            {mailing.mailingName}-{mailing.listName}-{mailing.schedule}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduledMail;
