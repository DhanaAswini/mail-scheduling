"use client";
import { useState, useEffect } from "react";
import ScheduledMailForm from "./components/ScheduledMailForm";
import ScheduledMail from "./components/ScheduledMail";
import {
  fetchMailers,
  fetchLists,
  createMailing,
  fetchMailings,
  updateMailing,
  deleteMailing,
} from "../utils/mockApi";

export default function Home() {
  const [mailings, setMailings] = useState([]);
  const [mailers, setMailers] = useState([]);
  const [lists, setLists] = useState([]);
  const [editingMailing, setEditingMailing] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const mailersData = await fetchMailers();
      const listsData = await fetchLists();
      const mailingsData = await fetchMailings();
      setMailers(mailersData);
      setLists(listsData);
      setMailings(mailingsData);
    };
    loadData();
  }, []);

  const handleCreateOrUpdate = async (data) => {
    if (editingMailing) {
      const updatedMailing = await updateMailing(editingMailing.id, data);
      setMailings((prev) =>
        prev.map((m) => (m.id === updatedMailing.id ? updatedMailing : m))
      );
      setEditingMailing(null);
    } else {
      const newMailing = await createMailing(data);
      setMailings((prev) => [...prev, newMailing]);
    }
  };

  const handleDelete = async (id) => {
    await deleteMailing(id);
    setMailings((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Mailing Scheduler
        </h1>
        <ScheduledMailForm
          onSubmit={handleCreateOrUpdate}
          mailers={mailers}
          lists={lists}
          initialData={editingMailing}
        />
        <ScheduledMail
          mailings={mailings}
          onEdit={setEditingMailing}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
