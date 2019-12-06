import React, { Component } from "react";

export class LearnMore extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h1>Interested in Learning More?</h1>
          <br></br>
          <center>
            <div class="row">
              <td class="col-md-6">
                {/*Beginning of Zoho Campaigns sign-up form iFrame code  */}
                {/*Note that height has been changed to 175% from default Zoho settings*/}
                {/*Also note that a 'title' attribute has been added, which does not come with Zoho's code */}
                {/*If you want to use a different form, create it in Zoho Campaigns and then change the src code of the 'iFrame Code' */}
                <script
                  type="text/javascript"
                  src="https://campaigns.zoho.com/js/zc.iframe.js"
                ></script>
                <iframe
                  title="ZohoMailingListSignUpForm"
                  frameborder="0"
                  id="iframewin"
                  width="100%"
                  height="175%"
                  src="https://publ.maillist-manage.com/ua/Optin?od=11287ecb1264da&zx=129cbe0a4&lD=18a3c19087803cfd&n=124298baf63456&sD=18a3c19087803d15"
                ></iframe>
                {/*End of Zoho Campaigns sign-up form iFrame code */}
              </td>

              <td class="col-md-6">
                <a href="https://www.kickstarter.com">
                  <button
                    style={{
                      width: "60%",
                      textAlign: "center",
                      borderRadius: 10,
                      borderWidth: 1,
                      marginTop: 70
                    }}
                    type="button"
                    class="btn btn-success"
                  >
                    <h2 style={{ color: "white" }}>
                      Support us on kickstarter!
                    </h2>
                  </button>
                </a>
              </td>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </center>
        </div>
      </div>
    );
  }
}

export default LearnMore;
