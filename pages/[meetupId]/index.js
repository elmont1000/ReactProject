import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage() {
  return (
    <MeetupDetails
      image="https://cdn.britannica.com/45/196945-050-CCF8BD72/Temple-of-Saturn-Arch-Septimius-Severus-Forum.jpg"
      title="A First Meetup"
      address="Some Street 5 , some city"
      description="The meetup description"
    />
    // <MeetupDetails props={props.meetupData} />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "M1",
        },
      },
      {
        params: {
          meetupId: "M2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://cdn.britannica.com/45/196945-050-CCF8BD72/Temple-of-Saturn-Arch-Septimius-Severus-Forum.jpg",
        title: "A First Meetup",
        address: "Some Street 5 , some city",
        description: "The meetup description",
      },
    },
  };
}
export default MeetupDetailsPage;
