function IsAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    const user = localStorage.getItem('user');
    const access_token = localStorage.getItem('access_token');

    if (!user || !access_token || Object.keys(user).length === 0 || access_token === '') {
      window.location.href = '/admin';
      return <></>;
    }

    return (
      <>
        <Component {...props!} />
      </>
    );
  };
}

export default IsAuth;