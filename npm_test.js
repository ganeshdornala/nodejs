const figlet=require('figlet');

figlet("Dornala Ganesh", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

/*
                 _
 |  _ \  ___  _ __ _ __   __ _| | __ _   / ___| __ _ _ __   ___  ___| |__
 | | | |/ _ \| '__| '_ \ / _` | |/ _` | | |  _ / _` | '_ \ / _ \/ __| '_ \
 | |_| | (_) | |  | | | | (_| | | (_| | | |_| | (_| | | | |  __/\__ \ | | |
 |____/ \___/|_|  |_| |_|\__,_|_|\__,_|  \____|\__,_|_| |_|\___||___/_| |_|

*/
