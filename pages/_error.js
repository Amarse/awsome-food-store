
function Error({ statusCode }) {

  if(statusCode === '404') {
    router.push('/404')
  }
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}


export default Error;