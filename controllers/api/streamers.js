const Streamer = require('../../models/streamer');

module.exports = {
    index,
    create,
	show,
	update,
	delete: deleteOne
}

async function index(req, res) {
	const streamers = await Streamer.find({});
	res.status(200).json(streamers);
}

async function create(req, res) {
	req.body.user = req.user._id;
	const streamer = await Streamer.create(req.body);
	res.status(201).json(streamer);
}

async function show(req, res) {
	const streamer = await Streamer.findById(req.params.id);
	res.status(200).json(streamer);
}

async function update(req, res) {
	const updatedStreamer = await Streamer.findOneAndUpdate(
		{_id: req.params.id, user: req.user._id},
		req.body,
		{
			new: true,
		}
	);
	res.status(200).json(updatedStreamer);
}

async function deleteOne(req, res) {
	const deletedStreamer = await Streamer.findOneAndRemove({_id: req.params.id, user: req.user._id});
	res.status(200).json(deletedStreamer);
}
