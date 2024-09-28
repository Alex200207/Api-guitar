import { guitarQueries, guitarQuery } from "../../db/guitar/guitarQueries.js";

const guitarControllers = async (req, res) => {
  try {
    const guitar = await guitarQueries();
    res.json(guitar);
  } catch (err) {
    res.status(500).send(err);
  }
};

const guitarControllerId = async (req, res) => {
  try {
    const guitar = await guitarQuery(req.params.id);
    res.json(guitar);
  } catch (err) {
    res.status(500).send(err);
  }
};

export { guitarControllers, guitarControllerId };
