const requestRunInToken = (url, method, body, token) => {
  return cy.request({
    method: method,
    url: url,
    headers: {
      Authorizathion: token
    },
    body: body,
    failOnStatusCode: false
  });
};

const requestRunNotToken = (url, method, body) => {
  return cy.request({
    method: method,
    url: url,
    body: body,
    failOnStatusCode: false
  });
};

export { requestRunInToken , requestRunNotToken };