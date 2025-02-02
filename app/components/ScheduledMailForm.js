import { useForm } from "react-hook-form";
import { fetchMailers, fetchLists } from "../utils/mockApi";

const ScheduledMailForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log("Scheduled Mailing:", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Mailer:
        <select {...register("mailerId")}>
          {fetchMailers.map((mailer) => (
            <option key={mailer.id} value={mailer.id}>
              {mailer.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        List:
        <select {...register("listId")}>
          {fetchLists.map((list) => (
            <option key={list.id} value={list.id}>
              {list.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Scheduled Date and Time:
        <input type="datetime-local" {...register("schedule")} />
      </label>

      <button type="submit">Schedule Mailing</button>
    </form>
  );
};

export default ScheduledMailForm;
