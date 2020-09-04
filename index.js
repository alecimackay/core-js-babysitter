export default class CoreJSBabySitter {

    hasAlreadyAskedForAJob = false;

    constructor(displayAtLeastOnce) {
	// #GetTheCoreJSGuyAJob
        this.hasAlreadyAskedForAJob = !displayAtLeastOnce;
    }

    dateNight() {
	process.stdout.on('data', data => {
	    if (data.includes('Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!') && 
	 	hasAlreadyAskedForAJob) {
	            hasAlreadyAskedForAJob = true; 
	   	    process.stdout.clearLine();
	    }
	});
    }

}
