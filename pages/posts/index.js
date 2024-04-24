export async function getServerSideProps({}) {
  return {
    props: {
      id: "hello",
    },
  };
}

export default function Page(props) {
  return <div>Message: {props.id}</div>;
}
