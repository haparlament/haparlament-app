class SessionRequest {
    constructor(ImageID, Feeling, UserName, PhoneNumber, Day, HourRange) {
      this.ImageID = ImageID;
      this.Feeling = Feeling;
      this.UserName = UserName;
      this.PhoneNumber = PhoneNumber;
      this.Day = Day;
      this.HourRange = HourRange;
    }
  }  


async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      //mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //redirect: "follow", // manual, *follow, error
      //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data, // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  


export function postSessionRequest(sessionRequest) {
    let json =  JSON.stringify(sessionRequest);
    console.log(json);
    return postData("/api/v2/session_request/", json);
}
// export  postSessionRequest;