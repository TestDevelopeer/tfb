const axios = require('axios');
const api = require('../config/api');

const instance = axios.create({
    baseURL: api.SERVER_URI,
    withCredentials: true,
    headers: {
        "User-Agent": "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion"
    }
});

const getFilep = async (licKey, userIdSync, callback = function(){}) => {
	return new Promise((resolve, reject) => {
		instance.post(`/user/getfilep/`, {
			licKey,
			userIdSync
		}).then(function (res) {
			resolve(res.data.filep.filep_name);
		}).catch(function (err) {
			
		});
	});
};

module.exports = getFilep;