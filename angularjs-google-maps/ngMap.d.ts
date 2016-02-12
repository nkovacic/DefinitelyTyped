// Type definitions for angularjs-google-maps v1.16.7
// Project: https://github.com/allenhwkim/angularjs-google-maps
// Definitions by: Niko Kovačič <https://github.com/nkovacic>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../googlemaps/google.maps.d.ts" />

declare module "ngMap" {
    let _: string;
    export = _;
}

declare module ngMap {
	interface IGetMapOptions {
		id?: string;
		timeout?: number;
	}

	interface IObserveAndSetFunc {
		(val: any): void;
	}

    interface INgMap {
    	/**
    	 * Add map to pool
    	 * @param {Function | any[]} mapCtrl Map controller
    	 */
		addMap(mapCtrl: Function | any[]): void;
		/**
		 * Delete map from pool
		 * @param {Function | any[]} mapCtrl Map controller optional. Defaults to last 
		 * controller in pool
		 */
		deleteMap(mapCtrl?: Function | any[]): void;
		/**
		 * Get map coordinates from address.
		 * @param  {string}                               address Use 'current' to get users location
		 * @param  {PositionOptions}                      options optional
		 * @return {angular.IPromise<google.maps.LatLng>}         Latitude ang longitude of the address
		 */
		getGeoLocation(address: string, options?: PositionOptions): angular.IPromise<google.maps.LatLng>
    	/**
    	 * Get map from the pool of all shown maps.
    	 * @param  {IGetMapOptions}                    options optional
    	 * @return {angular.IPromise<google.maps.Map>}         promise
    	 */
        getMap(options?: IGetMapOptions): angular.IPromise<google.maps.Map>
        /**
         * Observe attribute
         * @param  {string}             attrName attribute name
         * @param  {Object}             object   a Google maps object to be changed
         * @return {IObserveAndSetFunc}          attribute obvserve function
         */
        observeAndSet(attrName: string, object: Object): IObserveAndSetFunc;
        /**
         * Initialize map from mapId or the current first shown map
         * @param  {string}          mapId id of the map. default 0
         * @return {google.maps.Map}       map
         */
        initMap(mapId?: string): google.maps.Map;
        /**
         * Set display, width, height of map container element
         * @param {HTMLElement} el map container element
         */
        setStyle(el: HTMLElement): void;
    }
}