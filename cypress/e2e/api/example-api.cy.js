import { Status } from "@core/enum/statusEnum";
import { requestRunNotToken } from "@helper/requestHelpers";

describe("Suite in demo project - API", () => {
  it("Should be 200 OK", () => {
    requestRunNotToken(Cypress.env("endPointDemo"), "GET", {}).then(
      (response) => {
        expect(response.status).to.be.eq(Status.OK);
      }
    );
  });
});
