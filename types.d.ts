/**
 * Returns a Promise that resolves with a new MagentoCoreAPI object.
 *
 * @param {string} tenantId the tenant id
 * @param {string} apiKey the API key for your integration
 * @param {string} accessToken the access token for your integration
 * @returns {Promise<MagentoCoreAPI>} a Promise with a MagentoCoreAPI object
 */
declare function init(tenantId: string, apiKey: string, accessToken: string): Promise<MagentoCoreAPI>;

/**
 * This class provides methods to call your MagentoCoreAPI APIs.
 * Before calling any method initialize the instance by calling the `init` method on it
 * with valid values for tenantId, apiKey and accessToken
 */
declare class MagentoCoreAPI {
    /**
     * Initializes a MagentoCoreAPI object and returns it.
     *
     * @param {string} tenantId the tenant id
     * @param {string} apiKey the API key for your integration
     * @param {string} accessToken the access token for your integration
     * @returns {Promise<MagentoCoreAPI>} a MagentoCoreAPI object
     */
    init(tenantId: string, apiKey: string, accessToken: string): Promise<MagentoCoreAPI>;
    /**
     * The tenant id
     *
     * @type {string}
     */
    tenantId: string;
    /**
     * The api key from your integration
     *
     * @type {string}
     */
    apiKey: string;
    /**
     * The access token from your integration
     *
     * @type {string}
     */
    accessToken: string;
    /**
     * Get something.
     *
     * @param {MyParameters} [parameters={}] parameters to pass
     * @returns {Promise<Response>} the response
     */
    getSomething(parameters?: MyParameters): Promise<Response>;
}

/**
 * An example of a typed object.
 *
 * @typedef {object} MyParameters
 * @property {string} optionA - some option
 * @property {string} optionB - another option
 */
declare type MyParameters = {
    optionA: string;
    optionB: string;
};

/**
 * Another typed object.
 *
 * @typedef {object} AnotherThing
 * @property {boolean} mayBeSomething - an option
 */
declare type AnotherThing = {
    mayBeSomething: boolean;
};

