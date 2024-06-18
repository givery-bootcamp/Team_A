/* tslint:disable */
/* eslint-disable */
/**
 * Simple User API
 * A simple API to retrieve user information.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface HelloGet200Response
 */
export interface HelloGet200Response {
    /**
     * 
     * @type {string}
     * @memberof HelloGet200Response
     */
    lang?: string;
    /**
     * 
     * @type {string}
     * @memberof HelloGet200Response
     */
    message?: string;
}

/**
 * Check if a given object implements the HelloGet200Response interface.
 */
export function instanceOfHelloGet200Response(value: object): value is HelloGet200Response {
    return true;
}

export function HelloGet200ResponseFromJSON(json: any): HelloGet200Response {
    return HelloGet200ResponseFromJSONTyped(json, false);
}

export function HelloGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HelloGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'lang': json['lang'] == null ? undefined : json['lang'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function HelloGet200ResponseToJSON(value?: HelloGet200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'lang': value['lang'],
        'message': value['message'],
    };
}

