export async function getServerSideProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}

export default function Page(props) {
  return <div>Message: {props.id}</div>;
}
