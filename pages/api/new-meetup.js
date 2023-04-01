import { MongoClient } from "mongodb";

async function handler(req, res) {
  console.log("running");

  if (req.method === "POST") {
    console.log("testst");

    const data = req.body;
    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      // we used await because it is an async functionality and it returns a promise with data
      // mongodb+srv://elmont0901:<password>@cluster0.kwa8rr4.mongodb.net/?retryWrites=true&w=majority
      "mongodb+srv://elmont0901:ow8AtEfX9LvyMVZ6@cluster0.kwa8rr4.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    // this above code should never run on the client side because it will show the credentials and will be
    // a great security concern

    const db = client.db(); // got access to DataBase
    const meetupsCollection = db.collection("meetups"); // got connected with collection of meetups data

    const results = await meetupsCollection.insertOne(data); // now inserting the data we got inside meetupsCollection

    console.log(results);

    client.close();
    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
