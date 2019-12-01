import React, { Component } from "react";

export class LearnMore extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">

          <h1>Interested in Learning More?</h1>

          <center>
          <div class="row">
            <td class="col-md-6">
              {/*Beginning of Zoho Campaigns sign-up form iFrame code  */}
              {/*Note that height has been changed to 175% from default Zoho settings*/}
              {/*If you want to use a different form, create it in Zoho Campaigns and then change the src code of the 'iFrame Code' */}
              <script type="text/javascript" src="https://campaigns.zoho.com/js/zc.iframe.js"></script>
              <iframe frameborder="0" 
                      id="iframewin" 
                      width="100%" 
                      height="175%" 
                      src="https://publ.maillist-manage.com/ua/Optin?od=11287ecb1264da&zx=129cbe0a4&lD=18a3c19087803cfd&n=124298baf63456&sD=18a3c19087803d15">
              </iframe>
              {/*End of Zoho Campaigns sign-up form iFrame code */}
            </td>

            <td class="col-md-6">
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
                  <a href="kickstarter.com">Support us on kickstarter!</a>
                </h2>
              </button>
            </td>
            </div>
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
