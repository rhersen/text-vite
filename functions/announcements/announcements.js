const fetch = require("node-fetch");
exports.handler = async function ({ queryStringParameters }) {
  try {
    const response = await fetch(
      "https://api.trafikinfo.trafikverket.se/v2/data.json",
      {
        method: "POST",
        body: getBody(queryStringParameters),
        headers: {
          "Content-Type": "application/xml",
          Accept: "application/json",
        },
      }
    );
    if (!response.ok)
      // NOT res.status >= 200 && res.status < 300
      return {
        statusCode: response.status,
        body: JSON.stringify({ msg: response.statusText }),
      };

    const data = await response.json();
    const [body] = data.RESPONSE.RESULT;

    return {
      statusCode: 200,
      body: JSON.stringify(body),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};

const locationSignature = [
  "Söd,Öte,Rön,Tu,Tul,Flb,Hu,Sta",
  "Äs,Åbe,Sst,Sci,Sod",
  "So,Udl,Hel,Sol,Hgv,Nvk,R,Upv,Rs,Mr",
  "Nyc,Gdv,Ngd,Öso,Ss,Hfa,Ts,Kda,Vhe,Jbo,Hnd,Vga,Skg,Tåd,Fas",
  "Sub,Spå,Bkb,Jkb,Khä",
];

function getBody({ direction, since }) {
  return `
<REQUEST>
  <LOGIN authenticationkey='${process.env.TRAFIKVERKET_API_KEY}' />
    <QUERY sseurl='true' objecttype='TrainAnnouncement' orderby='TimeAtLocationWithSeconds' schemaversion='1.6'>
      <FILTER>
        <OR>
          <AND>
            <IN name='LocationSignature' value='${locationSignature.join(
              ","
            )}' />
            <EQ name='ProductInformation.Code' value='PNA054' />
          </AND>
          <IN name='LocationSignature' value='Tmö,Kmy,Skby,Bra,Gau,Södy,Uts,Kng,Hön,Huv,Duo' />
        </OR>
        <LIKE name='AdvertisedTrainIdent' value='/[${
          direction === "n" ? "02468" : "13579"
        }]$/' />
        <GT name='TimeAtLocation' value='${since}' />
      </FILTER>
      <INCLUDE>ActivityType</INCLUDE>
      <INCLUDE>AdvertisedTrainIdent</INCLUDE>
      <INCLUDE>AdvertisedTimeAtLocation</INCLUDE>
      <INCLUDE>LocationSignature</INCLUDE>
      <INCLUDE>ProductInformation</INCLUDE>
      <INCLUDE>TimeAtLocation</INCLUDE>
      <INCLUDE>TimeAtLocationWithSeconds</INCLUDE>
      <INCLUDE>ToLocation</INCLUDE>
     </QUERY>
</REQUEST>`;
}
