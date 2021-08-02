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
	const streamer = await Streamer.create(req.body);
	res.status(201).json(streamer);
}

async function show(req, res) {
	const streamer = await Streamer.findById(req.params.id);
	res.status(200).json(streamer);
}

async function update(req, res) {
	const updatedStreamer = await Streamer.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
		}
	);
	res.status(200).json(updatedStreamer);
}

async function deleteOne(req, res) {
	const deletedStreamer = await Streamer.findByIdAndRemove(req.params.id);
	res.status(200).json(deletedStreamer);
}