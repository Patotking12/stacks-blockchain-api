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

import { exists, mapValues } from '../runtime';
/**
 * Get name details
 * @export
 * @interface BnsGetNameInfoResponse
 */
export interface BnsGetNameInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof BnsGetNameInfoResponse
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof BnsGetNameInfoResponse
     */
    blockchain: string;
    /**
     * 
     * @type {number}
     * @memberof BnsGetNameInfoResponse
     */
    expire_block?: number;
    /**
     * 
     * @type {number}
     * @memberof BnsGetNameInfoResponse
     */
    grace_period?: number;
    /**
     * 
     * @type {string}
     * @memberof BnsGetNameInfoResponse
     */
    last_txid: string;
    /**
     * 
     * @type {string}
     * @memberof BnsGetNameInfoResponse
     */
    resolver?: string;
    /**
     * 
     * @type {string}
     * @memberof BnsGetNameInfoResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof BnsGetNameInfoResponse
     */
    zonefile: string;
    /**
     * 
     * @type {string}
     * @memberof BnsGetNameInfoResponse
     */
    zonefile_hash: string;
}

export function BnsGetNameInfoResponseFromJSON(json: any): BnsGetNameInfoResponse {
    return BnsGetNameInfoResponseFromJSONTyped(json, false);
}

export function BnsGetNameInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BnsGetNameInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'blockchain': json['blockchain'],
        'expire_block': !exists(json, 'expire_block') ? undefined : json['expire_block'],
        'grace_period': !exists(json, 'grace_period') ? undefined : json['grace_period'],
        'last_txid': json['last_txid'],
        'resolver': !exists(json, 'resolver') ? undefined : json['resolver'],
        'status': json['status'],
        'zonefile': json['zonefile'],
        'zonefile_hash': json['zonefile_hash'],
    };
}

export function BnsGetNameInfoResponseToJSON(value?: BnsGetNameInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'blockchain': value.blockchain,
        'expire_block': value.expire_block,
        'grace_period': value.grace_period,
        'last_txid': value.last_txid,
        'resolver': value.resolver,
        'status': value.status,
        'zonefile': value.zonefile,
        'zonefile_hash': value.zonefile_hash,
    };
}
