const Data = require('../models/data-model')
const checkToken = require('../utils/checkToken')

const getSummaryData = async (request, response, next) => {

  try {

    const pro = ((request.path).indexOf('amateur') !== -1);

    // huom lookup "from": "users" eli user pitää olla monikossa koska mongoose tallentaa collectionin monikossa kantaan 
    const data = await Data.aggregate([
      { $lookup: { "from": "users", "localField": "user", foreignField: "email", "as": "utype" } },
      { $match: { "utype.pro": pro } },
      {
        $project: {
          "date": { $toDate: { $dateToString: { format: "%Y-%m-%d", date: { $toDate: { $toString: "$date" } } } } },
          "repeat": "$repeat", "user": "$user"
        }
      },
      { $group: { _id: "$date", repeat_sum: { "$sum": "$repeat" }, sum: { $addToSet: "$user" } } },
      { $project: { "date": "$_id", "repeats": "$repeat_sum", "users": { "$size": "$sum" }, _id: 0 } },
      { $sort: { _id: -1 } }
    ]);

    response.json(data);
  } catch (exception) {
    next(exception)
  }
};

const getMyData = async (request, response, next) => {

  try {
    const value = checkToken.checkToken(request)
    if (!value.status) {

      return value.data;
    }

    const user = value.data;

    const data = await Data.find({ user: user })
    response.json(data);

  } catch (exception) {

    next(exception);

  }
};

const deleteItem = async (request, response, next) => {

  try {

    const value = checkToken.checkToken(request)
    if (!value.status) {
      return value.data;
    }

    await Data.findByIdAndRemove(request.params.id)
    response.status(204).end()

  } catch (exception) {

    next(exception);
  }
};


const updateItem = async (request, response, next) => {

  try {

    const value = checkToken.checkToken(request)
    if (!value.status) {

      return value.data;
    }

    const body = request.body;
    await Data.findByIdAndUpdate(request.params.id, body, { new: true })
      .then(updatedData => {
        response.json(updatedData)
      })
      .catch(error => next(error))

  } catch (exception) {

    next(exception);

  }
};


const addItem = async (request, response, next) => {

  try {

    const value = checkToken.checkToken(request);
    if (!value.status) {
      return value.data;
    }

    const user = value.data;

    const { date, type, repeat, weight } = request.body;

    const data = new Data({
      user,
      date,
      type,
      repeat,
      weight
    });

    const savedData = await data.save();

    response.json(savedData);

  } catch (exception) {

    next(exception);
    //response.json("ERROR: " + exception.message);

  }
}

exports.getSummaryData = getSummaryData;
exports.getMyData = getMyData;
exports.addItem = addItem;
exports.deleteItem = deleteItem;
exports.updateItem = updateItem;