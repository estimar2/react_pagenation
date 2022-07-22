const postgress = require("../postgres");

const getSampleList = async (req, res) => {
  try {
    let sql = `select * from sample`;

    let list = await postgress(sql);

    console.log(list, "list");

    return res.json(list);
  } catch (error) {
    return res.status(400).send({ error });
  }
};

const sampleList_Controller = {
  getSampleList,
};

module.exports = sampleList_Controller;
