import axios from 'axios';

class DataService {
    getExperimenters = async() => {
        let data =  await axios.get("https://socialcog.xyz/results/experimenters/getExperimenters");

        return data.data;
    }

    getExperiments = async(experimenterName) => {
        let data =  await axios.get("https://socialcog.xyz/results/experimenters/name/" + experimenterName);

        return data.data;
    }

    getExperimentData = async(experimentName) => {
        let data =  await axios.post("https://socialcog.xyz/results/" + experimentName, {social_cog_security_token : "some_token"});

        return data.data;
    }
}

export default DataService;