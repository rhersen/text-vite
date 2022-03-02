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

function getBody({ direction, locations, since, until }) {
  return `
<REQUEST>
    <LOGIN authenticationkey='${process.env.TRAFIKVERKET_API_KEY}'/>
    <QUERY sseurl='true' objecttype='TrainAnnouncement' orderby='TimeAtLocationWithSeconds' schemaversion='1.6'>
        <FILTER>
            <AND>
                <NE name='Canceled' value='true' />
                <LIKE name='AdvertisedTrainIdent' value='/[${ direction === "n" ? "02468" : "13579" }]$/' />
                <IN name='LocationSignature' value='${locations}' />
                <OR>
                    <AND>
                        <GT name='AdvertisedTimeAtLocation' value='${since}' />
                        <LT name='AdvertisedTimeAtLocation' value='${until}' />
                    </AND>
                    <AND>
                        <GT name='EstimatedTimeAtLocation' value='${since}' />
                        <LT name='EstimatedTimeAtLocation' value='${until}' />
                    </AND>
                </OR>
            </AND>
        </FILTER>
        <INCLUDE>AdvertisedTrainIdent</INCLUDE>
        <INCLUDE>AdvertisedTimeAtLocation</INCLUDE>
        <INCLUDE>Canceled</INCLUDE>
        <INCLUDE>LocationSignature</INCLUDE>
        <INCLUDE>ProductInformation</INCLUDE>
        <INCLUDE>TimeAtLocation</INCLUDE>
        <INCLUDE>ToLocation</INCLUDE>
    </QUERY>
</REQUEST>
`;
}
