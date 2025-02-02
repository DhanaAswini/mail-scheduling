"use client";
import { useState } from "react";
import ScheduledMailForm from "./components/ScheduledMailForm";
import ScheduledMail from "./components/ScheduledMail";
import { fetchMailers, fetchLists } from "../utils/mockApi";

export default function Home() {
  const [mailings, setMailings] = useState([]);

  const handleSchedule = (date) => {
    const newMailing = {
      id: mailings.length + 1,
      mailerName: fetchMailers().find((m) => m.id === data.mailerId).name,
      listName: fetchLists().find((l) => l.id === data.listId).name,
      schedule: data.schedule,
    };
    setMailings([...mailings, newMailing]);
  };

  return (
    <div>
      <h1>Mailing Scheduler</h1>
      <ScheduledMailForm onSubmit={handleSubmit} />
      <ScheduledMail mailings={mailings} />
    </div>
  );
}
