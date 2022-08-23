import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First MeetUp",
    image:
      "https://tr.wikipedia.org/wiki/M%C3%BCnih#/media/Dosya:Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 6",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second MeetUp",
    image:
      "https://tr.wikipedia.org/wiki/M%C3%BCnih#/media/Dosya:Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 5",
    description: "This is a second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
