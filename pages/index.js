import MeetupList from "../components/meetups/MeetupList";

const DUMMY_LIST = [
  {
    id: "M1",
    title: "First Meetup",
    image:
      "https://cdn.britannica.com/45/196945-050-CCF8BD72/Temple-of-Saturn-Arch-Septimius-Severus-Forum.jpg",
    address: "some address 10, 12345 some city",
    description: "This is the first meetup",
  },
  {
    id: "M2",
    title: "The Second Meetup",
    image:
      "https://cdn.britannica.com/45/196945-050-CCF8BD72/Temple-of-Saturn-Arch-Septimius-Severus-Forum.jpg",
    address: "some address 10, 12345 some city",
    description: "This a second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_LIST,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_LIST,
    },
    revalidate: 1,
  };
}
export default HomePage;
