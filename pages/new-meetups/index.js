import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const newMeetup = () => {
  const router = useRouter();
  const AddNewMeetup = async (dataPassed) => {
    console.log("testin");
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(dataPassed),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={AddNewMeetup} />;
};

export default newMeetup;
