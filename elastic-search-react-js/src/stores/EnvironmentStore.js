var EnvironmentStore = {
    getApiHost: function (name) {
        switch (name) {

            // place your baseURL according it's environment
            case 'test':
                return 'http://localhost:8081'
                // return 'http://192.168.29.235:8080';
            case 'live':
                return 'https://buddy-boss-nodejs-api.herokuapp.com';
            default:
                throw ("Unknown Environment.getApiHost: " + name)
        }
    }
}

export default EnvironmentStore;