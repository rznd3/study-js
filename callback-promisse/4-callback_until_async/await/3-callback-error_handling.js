const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = true;

    if (error) {
      return onError(new Error("error in login"));
    }

    console.log("user logged");
    onSuccess({ email });
  }, 1500);

  console.log("after function setTimeout");
};

const user = loginUser(
  "gabriel@email.com",
  "123456",
  (user) => {
    console.log({ user });
  },
  (error) => {
    console.log({ error });
  }
);
