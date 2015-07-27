export function createSession(body) {
  return new Promise((resolve, reject) => {
    resolve({ token: 'myFakeToken' });
  });
}
