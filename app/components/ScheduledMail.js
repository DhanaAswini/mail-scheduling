"use client";

const ScheduledMail = ({ mailings, onEdit, onDelete }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Scheduled Mailings
      </h2>
      <ul className="space-y-4">
        {mailings.map((mailing) => (
          <li
            key={mailing.id}
            className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center"
          >
            <div className="text-gray-700">
              <span className="font-medium">{mailing.mailerName}</span> -{" "}
              <span className="font-medium">{mailing.listName}</span> -{" "}
              <span className="text-sm text-gray-500">{mailing.schedule}</span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => onEdit(mailing)}
                className="text-indigo-600 hover:text-indigo-900"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(mailing.id)}
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduledMail;
