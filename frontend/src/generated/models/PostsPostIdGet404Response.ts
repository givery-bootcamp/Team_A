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
 * @interface PostsPostIdGet404Response
 */
export interface PostsPostIdGet404Response {
    /**
     * 
     * @type {string}
     * @memberof PostsPostIdGet404Response
     */
    message?: string;
}

/**
 * Check if a given object implements the PostsPostIdGet404Response interface.
 */
export function instanceOfPostsPostIdGet404Response(value: object): value is PostsPostIdGet404Response {
    return true;
}

export function PostsPostIdGet404ResponseFromJSON(json: any): PostsPostIdGet404Response {
    return PostsPostIdGet404ResponseFromJSONTyped(json, false);
}

export function PostsPostIdGet404ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostsPostIdGet404Response {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function PostsPostIdGet404ResponseToJSON(value?: PostsPostIdGet404Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
    };
}
