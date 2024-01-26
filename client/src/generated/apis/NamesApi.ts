/* tslint:disable */
/* eslint-disable */
/**
 * Stacks Blockchain API
 * Welcome to the API reference overview for the <a href=\"https://docs.hiro.so/get-started/stacks-blockchain-api\">Stacks Blockchain API</a>.  <a href=\"https://hirosystems.github.io/stacks-blockchain-api/collection.json\" download=\"stacks-api-collection.json\">Download Postman collection</a> 
 *
 * The version of the OpenAPI document: STACKS_API_VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    BnsError,
    BnsErrorFromJSON,
    BnsErrorToJSON,
    BnsGetAllNamespacesResponse,
    BnsGetAllNamespacesResponseFromJSON,
    BnsGetAllNamespacesResponseToJSON,
    BnsGetNameInfoResponse,
    BnsGetNameInfoResponseFromJSON,
    BnsGetNameInfoResponseToJSON,
    BnsGetNamePriceResponse,
    BnsGetNamePriceResponseFromJSON,
    BnsGetNamePriceResponseToJSON,
    BnsGetNamespacePriceResponse,
    BnsGetNamespacePriceResponseFromJSON,
    BnsGetNamespacePriceResponseToJSON,
    BnsNamesOwnByAddressResponse,
    BnsNamesOwnByAddressResponseFromJSON,
    BnsNamesOwnByAddressResponseToJSON,
} from '../models';

export interface FetchSubdomainsListForNameRequest {
    name: string;
}

export interface FetchZoneFileRequest {
    name: string;
}

export interface GetAllNamesRequest {
    page?: number;
}

export interface GetHistoricalZoneFileRequest {
    name: string;
    zoneFileHash: string;
}

export interface GetNameInfoRequest {
    name: string;
}

export interface GetNamePriceRequest {
    name: string;
}

export interface GetNamesOwnedByAddressRequest {
    blockchain: string;
    address: string;
}

export interface GetNamespaceNamesRequest {
    tld: string;
    page?: number;
}

export interface GetNamespacePriceRequest {
    tld: string;
}

/**
 * NamesApi - interface
 * 
 * @export
 * @interface NamesApiInterface
 */
export interface NamesApiInterface {
    /**
     * Retrieves the list of subdomains for a specific name
     * @summary Get Name Subdomains
     * @param {string} name fully-qualified name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NamesApiInterface
     */
    fetchSubdomainsListForNameRaw(requestParameters: FetchSubdomainsListForNameRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<string>>>;

    /**
     * Retrieves the list of subdomains for a specific name
     * Get Name Subdomains
     */
    fetchSubdomainsListForName(requestParameters: FetchSubdomainsListForNameRequest, initOverrides?: RequestInit): Promise<Array<string>>;

    /**
     * Retrieves a user’s raw zone file. This only works for RFC-compliant zone files. This method returns an error for names that have non-standard zone files.
     * @summary Get Zone File
     * @param {string} name fully-qualified name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NamesApiInterface
     */
    fetchZoneFileRaw(requestParameters: FetchZoneFileRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>>;

    /**
     * Retrieves a user’s raw zone file. This only works for RFC-compliant zone files. This method returns an error for names that have non-standard zone files.
     * Get Zone File
     */
    fetchZoneFile(requestParameters: FetchZoneFileRequest, initOverrides?: RequestInit): Promise<object>;

    /**
     * Retrieves a list of all names known to the node.
     * @summary Get All Names
     * @param {number} [page] names are defaulted to page 1 with 100 results. You can query specific page results by using the \&#39;page\&#39; query parameter.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NamesApiInterface
     */
    getAllNamesRaw(requestParameters: GetAllNamesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<string>>>;

    /**
     * Retrieves a list of all names known to the node.
     * Get All Names
     */
    getAllNames(requestParameters: GetAllNamesRequest, initOverrides?: RequestInit): Promise<Array<string>>;

    /**
     * Retrieves a list of all namespaces known to the node.
     * @summary Get All Namespaces
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NamesApiInterface
     */
    getAllNamespacesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<BnsGetAllNamespacesResponse>>;

    /**
     * Retrieves a list of all namespaces known to the node.
     * Get All Namespaces
     */
    getAllNamespaces(initOverrides?: RequestInit): Promise<BnsGetAllNamespacesResponse>;

    /**
     * Retrieves the historical zonefile specified by the username and zone hash.
     * @summary Get Historical Zone File
     * @param {string} name fully-qualified name
     * @param {string} zoneFileHash zone file hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NamesApiInterface
     */
    getHistoricalZoneFileRaw(requestParameters: GetHistoricalZoneFileRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>>;

    /**
     * Retrieves the historical zonefile specified by the username and zone hash.
     * Get Historical Zone File
     */
    getHistoricalZoneFile(requestParameters: GetHistoricalZoneFileRequest, initOverrides?: RequestInit): Promise<object>;

    /**
     * Retrieves details of a given name including the `address`, `status` and last transaction id - `last_txid`.
     * @summary Get Name Details
     * @param {string} name fully-qualified name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NamesApiInterface
     */
    getNameInfoRaw(requestParameters: GetNameInfoRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BnsGetNameInfoResponse>>;

    /**
     * Retrieves details of a given name including the `address`, `status` and last transaction id - `last_txid`.
     * Get Name Details
     */
    getNameInfo(requestParameters: GetNameInfoRequest, initOverrides?: RequestInit): Promise<BnsGetNameInfoResponse>;

    /**
     * Retrieves the price of a name. The `amount` given will be in the smallest possible units of the currency.
     * @summary Get Name Price
     * @param {string} name the name to query price information for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NamesApiInterface
     */
    getNamePriceRaw(requestParameters: GetNamePriceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BnsGetNamePriceResponse>>;

    /**
     * Retrieves the price of a name. The `amount` given will be in the smallest possible units of the currency.
     * Get Name Price
     */
    getNamePrice(requestParameters: GetNamePriceRequest, initOverrides?: RequestInit): Promise<BnsGetNamePriceResponse>;

    /**
     * Retrieves a list of names owned by the address provided.
     * @summary Get Names Owned by Address
     * @param {string} blockchain the layer-1 blockchain for the address
     * @param {string} address the address to lookup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NamesApiInterface
     */
    getNamesOwnedByAddressRaw(requestParameters: GetNamesOwnedByAddressRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BnsNamesOwnByAddressResponse>>;

    /**
     * Retrieves a list of names owned by the address provided.
     * Get Names Owned by Address
     */
    getNamesOwnedByAddress(requestParameters: GetNamesOwnedByAddressRequest, initOverrides?: RequestInit): Promise<BnsNamesOwnByAddressResponse>;

    /**
     * Retrieves a list of names within a given namespace.
     * @summary Get Namespace Names
     * @param {string} tld the namespace to fetch names from.
     * @param {number} [page] namespace values are defaulted to page 1 with 100 results. You can query specific page results by using the \&#39;page\&#39; query parameter.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NamesApiInterface
     */
    getNamespaceNamesRaw(requestParameters: GetNamespaceNamesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<string>>>;

    /**
     * Retrieves a list of names within a given namespace.
     * Get Namespace Names
     */
    getNamespaceNames(requestParameters: GetNamespaceNamesRequest, initOverrides?: RequestInit): Promise<Array<string>>;

    /**
     * Retrieves the price of a namespace. The `amount` given will be in the smallest possible units of the currency.
     * @summary Get Namespace Price
     * @param {string} tld the namespace to fetch price for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NamesApiInterface
     */
    getNamespacePriceRaw(requestParameters: GetNamespacePriceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BnsGetNamespacePriceResponse>>;

    /**
     * Retrieves the price of a namespace. The `amount` given will be in the smallest possible units of the currency.
     * Get Namespace Price
     */
    getNamespacePrice(requestParameters: GetNamespacePriceRequest, initOverrides?: RequestInit): Promise<BnsGetNamespacePriceResponse>;

}

/**
 * 
 */
export class NamesApi extends runtime.BaseAPI implements NamesApiInterface {

    /**
     * Retrieves the list of subdomains for a specific name
     * Get Name Subdomains
     */
    async fetchSubdomainsListForNameRaw(requestParameters: FetchSubdomainsListForNameRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling fetchSubdomainsListForName.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/names/{name}/subdomains`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieves the list of subdomains for a specific name
     * Get Name Subdomains
     */
    async fetchSubdomainsListForName(requestParameters: FetchSubdomainsListForNameRequest, initOverrides?: RequestInit): Promise<Array<string>> {
        const response = await this.fetchSubdomainsListForNameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a user’s raw zone file. This only works for RFC-compliant zone files. This method returns an error for names that have non-standard zone files.
     * Get Zone File
     */
    async fetchZoneFileRaw(requestParameters: FetchZoneFileRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling fetchZoneFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/names/{name}/zonefile`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieves a user’s raw zone file. This only works for RFC-compliant zone files. This method returns an error for names that have non-standard zone files.
     * Get Zone File
     */
    async fetchZoneFile(requestParameters: FetchZoneFileRequest, initOverrides?: RequestInit): Promise<object> {
        const response = await this.fetchZoneFileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of all names known to the node.
     * Get All Names
     */
    async getAllNamesRaw(requestParameters: GetAllNamesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<string>>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/names`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieves a list of all names known to the node.
     * Get All Names
     */
    async getAllNames(requestParameters: GetAllNamesRequest, initOverrides?: RequestInit): Promise<Array<string>> {
        const response = await this.getAllNamesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of all namespaces known to the node.
     * Get All Namespaces
     */
    async getAllNamespacesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<BnsGetAllNamespacesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/namespaces`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BnsGetAllNamespacesResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of all namespaces known to the node.
     * Get All Namespaces
     */
    async getAllNamespaces(initOverrides?: RequestInit): Promise<BnsGetAllNamespacesResponse> {
        const response = await this.getAllNamespacesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the historical zonefile specified by the username and zone hash.
     * Get Historical Zone File
     */
    async getHistoricalZoneFileRaw(requestParameters: GetHistoricalZoneFileRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getHistoricalZoneFile.');
        }

        if (requestParameters.zoneFileHash === null || requestParameters.zoneFileHash === undefined) {
            throw new runtime.RequiredError('zoneFileHash','Required parameter requestParameters.zoneFileHash was null or undefined when calling getHistoricalZoneFile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/names/{name}/zonefile/{zoneFileHash}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"zoneFileHash"}}`, encodeURIComponent(String(requestParameters.zoneFileHash))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieves the historical zonefile specified by the username and zone hash.
     * Get Historical Zone File
     */
    async getHistoricalZoneFile(requestParameters: GetHistoricalZoneFileRequest, initOverrides?: RequestInit): Promise<object> {
        const response = await this.getHistoricalZoneFileRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves details of a given name including the `address`, `status` and last transaction id - `last_txid`.
     * Get Name Details
     */
    async getNameInfoRaw(requestParameters: GetNameInfoRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BnsGetNameInfoResponse>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getNameInfo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/names/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BnsGetNameInfoResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves details of a given name including the `address`, `status` and last transaction id - `last_txid`.
     * Get Name Details
     */
    async getNameInfo(requestParameters: GetNameInfoRequest, initOverrides?: RequestInit): Promise<BnsGetNameInfoResponse> {
        const response = await this.getNameInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the price of a name. The `amount` given will be in the smallest possible units of the currency.
     * Get Name Price
     */
    async getNamePriceRaw(requestParameters: GetNamePriceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BnsGetNamePriceResponse>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getNamePrice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/prices/names/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BnsGetNamePriceResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves the price of a name. The `amount` given will be in the smallest possible units of the currency.
     * Get Name Price
     */
    async getNamePrice(requestParameters: GetNamePriceRequest, initOverrides?: RequestInit): Promise<BnsGetNamePriceResponse> {
        const response = await this.getNamePriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of names owned by the address provided.
     * Get Names Owned by Address
     */
    async getNamesOwnedByAddressRaw(requestParameters: GetNamesOwnedByAddressRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BnsNamesOwnByAddressResponse>> {
        if (requestParameters.blockchain === null || requestParameters.blockchain === undefined) {
            throw new runtime.RequiredError('blockchain','Required parameter requestParameters.blockchain was null or undefined when calling getNamesOwnedByAddress.');
        }

        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling getNamesOwnedByAddress.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/addresses/{blockchain}/{address}`.replace(`{${"blockchain"}}`, encodeURIComponent(String(requestParameters.blockchain))).replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BnsNamesOwnByAddressResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of names owned by the address provided.
     * Get Names Owned by Address
     */
    async getNamesOwnedByAddress(requestParameters: GetNamesOwnedByAddressRequest, initOverrides?: RequestInit): Promise<BnsNamesOwnByAddressResponse> {
        const response = await this.getNamesOwnedByAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of names within a given namespace.
     * Get Namespace Names
     */
    async getNamespaceNamesRaw(requestParameters: GetNamespaceNamesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.tld === null || requestParameters.tld === undefined) {
            throw new runtime.RequiredError('tld','Required parameter requestParameters.tld was null or undefined when calling getNamespaceNames.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/namespaces/{tld}/names`.replace(`{${"tld"}}`, encodeURIComponent(String(requestParameters.tld))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieves a list of names within a given namespace.
     * Get Namespace Names
     */
    async getNamespaceNames(requestParameters: GetNamespaceNamesRequest, initOverrides?: RequestInit): Promise<Array<string>> {
        const response = await this.getNamespaceNamesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the price of a namespace. The `amount` given will be in the smallest possible units of the currency.
     * Get Namespace Price
     */
    async getNamespacePriceRaw(requestParameters: GetNamespacePriceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<BnsGetNamespacePriceResponse>> {
        if (requestParameters.tld === null || requestParameters.tld === undefined) {
            throw new runtime.RequiredError('tld','Required parameter requestParameters.tld was null or undefined when calling getNamespacePrice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/prices/namespaces/{tld}`.replace(`{${"tld"}}`, encodeURIComponent(String(requestParameters.tld))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BnsGetNamespacePriceResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves the price of a namespace. The `amount` given will be in the smallest possible units of the currency.
     * Get Namespace Price
     */
    async getNamespacePrice(requestParameters: GetNamespacePriceRequest, initOverrides?: RequestInit): Promise<BnsGetNamespacePriceResponse> {
        const response = await this.getNamespacePriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}