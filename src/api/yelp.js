import axios from 'axios';

export default axios.create({

	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer GrMGvv82RmQ2hkx84JPFSD9n16iLX2i0cmU2DeXdZ_AZXmKEKXF_dn2RpMD7JzkaSRdSeobdewt69fb4oLENc57wdXQAsg3IeJWFlEKwhsfU38WnU59CPK6AvlTkYXYx'
	}
});